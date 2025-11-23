#!/bin/bash

# Rarira Studio 환경 전환 스크립트

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# 사용법 출력
show_usage() {
  cat << EOF

사용법: pnpm env:switch <환경>

사용 가능한 환경:
  stage  - 스테이징 환경
  prod   - 프로덕션 환경

예시:
  pnpm env:stage    # Stage로 전환
  pnpm env:prod     # Production으로 전환

이 명령은 Supabase CLI 링크를 전환합니다:
  1. supabase unlink (기존 링크 해제)
  2. supabase link --project-ref <환경별-ref> (새 환경 링크)

참고:
  - .env.stage와 .env.prod 파일에 다음 변수를 설정하세요:
    * SUPABASE_PROJECT_REF: Supabase 프로젝트 참조 ID
    * SUPABASE_PROJECT_NAME: 프로젝트 이름 (표시용)
    * SUPABASE_DB_PASSWORD: 데이터베이스 비밀번호
    * SUPABASE_ACCESS_TOKEN: Supabase Access Token (Admin 이상 권한 필요)
  - Access Token이 Admin/Owner 권한이 아닌 경우 수동 링크 생성을 시도합니다
  - CLI 명령어는 --project-id 플래그를 사용하여 명시적으로 실행해야 할 수 있습니다

EOF
}

# 현재 링크된 프로젝트 확인
get_current_link() {
  # CLI가 실제로 사용하는 파일을 읽음
  if [ -f "$ROOT_DIR/supabase/.temp/project-ref" ]; then
    cat "$ROOT_DIR/supabase/.temp/project-ref"
  else
    echo ""
  fi
}

# 환경 전환
switch_environment() {
  local target_env="$1"
  local env_file="$ROOT_DIR/.env.$target_env"

  # .env 파일에서 환경 변수 읽기
  if [ ! -f "$env_file" ]; then
    echo ""
    echo "❌ $env_file 파일이 없습니다."
    echo "   .env.example을 참고하여 생성해주세요."
    exit 1
  fi

  # shellcheck disable=SC1090
  source "$env_file"

  # 필수 변수 확인
  if [ -z "$SUPABASE_PROJECT_REF" ]; then
    echo ""
    echo "❌ SUPABASE_PROJECT_REF가 .env.$target_env에 없습니다."
    exit 1
  fi

  if [ -z "$SUPABASE_PROJECT_NAME" ]; then
    echo ""
    echo "❌ SUPABASE_PROJECT_NAME이 .env.$target_env에 없습니다."
    exit 1
  fi

  echo ""
  echo "🔄 Supabase CLI를 ${target_env^^} 환경으로 전환합니다..."
  echo "   프로젝트: $SUPABASE_PROJECT_NAME ($SUPABASE_PROJECT_REF)"
  
  # 선택적 변수 확인
  if [ -n "$SUPABASE_DB_PASSWORD" ]; then
    echo "   ✓ 데이터베이스 비밀번호 설정됨"
  else
    echo "   ⚠️  SUPABASE_DB_PASSWORD가 .env.$target_env에 없습니다."
    echo "      DB 접속이 필요한 명령은 실패할 수 있습니다."
  fi
  
  if [ -n "$SUPABASE_ACCESS_TOKEN" ]; then
    echo "   ✓ Access Token 설정됨"
  else
    echo "   ⚠️  SUPABASE_ACCESS_TOKEN이 .env.$target_env에 없습니다."
    echo "      계정 전환이 필요한 경우 문제가 발생할 수 있습니다."
  fi

  # Supabase CLI 로그아웃 후 재로그인 (다른 계정에서 작업했을 가능성 대비)
  local login_token=""
  if [ -n "$SUPABASE_ACCESS_TOKEN" ]; then
    echo ""
    echo "🔓 Supabase CLI 로그아웃 중..."
    # access token 파일 직접 삭제로 로그아웃 처리
    rm -f ~/.supabase/access-token 2>/dev/null || true
    
    echo ""
    echo "🔐 Supabase CLI 로그인 중 (Access Token 사용)..."
    # Access Token을 별도 변수에 저장하고 환경 변수를 unset
    login_token="$SUPABASE_ACCESS_TOKEN"
    unset SUPABASE_ACCESS_TOKEN
    export -n SUPABASE_ACCESS_TOKEN 2>/dev/null || true
    
    # 저장한 토큰으로 로그인
    supabase login --token "$login_token"
  fi

  # 기존 링크 해제
  echo ""
  echo "📤 기존 링크 해제 중..."
  supabase unlink 2>/dev/null || true

  # 새 프로젝트 링크
  echo ""
  echo "📥 새 환경으로 링크 중..."
  
  if [ -n "$SUPABASE_DB_PASSWORD" ]; then
    supabase link --project-ref "$SUPABASE_PROJECT_REF" --password "$SUPABASE_DB_PASSWORD"
  else
    supabase link --project-ref "$SUPABASE_PROJECT_REF"
  fi

  echo ""
  echo "✅ Supabase CLI가 $SUPABASE_PROJECT_NAME로 링크되었습니다."
  echo ""
  echo "이제 다음 명령어가 ${target_env^^} 환경에서 실행됩니다:"
  echo "  - supabase db pull"
  echo "  - supabase db push"
  echo "  - supabase db diff"
  echo "  - supabase gen types typescript"
  echo ""
}

# 메인 로직
main() {
  cd "$ROOT_DIR"

  local target_env="$1"

  # 인자가 없으면 현재 상태 표시
  if [ -z "$target_env" ]; then
    echo ""
    echo "현재 Supabase CLI 링크 상태:"
    current_ref=$(get_current_link)
    
    if [ -n "$current_ref" ]; then
      # 각 환경 파일에서 REF를 읽어 비교
      local found_env=""
      for env in stage prod; do
        local env_file="$ROOT_DIR/.env.$env"
        if [ -f "$env_file" ]; then
          # 서브쉘에서 환경 변수 읽기
          local ref=$(grep "^SUPABASE_PROJECT_REF=" "$env_file" | cut -d'=' -f2)
          local name=$(grep "^SUPABASE_PROJECT_NAME=" "$env_file" | cut -d'=' -f2)
          
          if [ "$current_ref" = "$ref" ]; then
            found_env="$env"
            echo "  환경: ${env^^}"
            echo "  프로젝트: $name"
            echo "  Ref: $current_ref"
            break
          fi
        fi
      done
      
      if [ -z "$found_env" ]; then
        echo "  환경: 알 수 없음"
        echo "  Ref: $current_ref"
      fi
    else
      echo "  상태: 링크 없음"
    fi
    
    show_usage
    exit 0
  fi

  # 환경 검증
  if [ "$target_env" != "stage" ] && [ "$target_env" != "prod" ]; then
    echo ""
    echo "❌ 잘못된 환경: $target_env"
    show_usage
    exit 1
  fi

  # 현재 링크 확인
  current_ref=$(get_current_link)
  
  # 대상 환경의 REF 읽기
  local env_file="$ROOT_DIR/.env.$target_env"
  if [ ! -f "$env_file" ]; then
    echo ""
    echo "❌ $env_file 파일이 없습니다."
    exit 1
  fi
  
  expected_ref=$(grep "^SUPABASE_PROJECT_REF=" "$env_file" | cut -d'=' -f2)
  expected_name=$(grep "^SUPABASE_PROJECT_NAME=" "$env_file" | cut -d'=' -f2)

  if [ "$current_ref" = "$expected_ref" ]; then
    echo ""
    echo "⚠️  이미 ${target_env^^} 환경으로 링크되어 있습니다."
    echo "   프로젝트: $expected_name"
    exit 0
  fi

  # 환경 전환 실행
  switch_environment "$target_env"
}

main "$@"
