#!/bin/bash

# Rarira Studio 환경 전환 스크립트

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# 환경 설정
declare -A PROJECT_REFS=(
  ["stage"]="ecidgakvipnuqamwvufs"
  ["prod"]="ifkzuniguelwaaybbcsz"
)

declare -A PROJECT_NAMES=(
  ["stage"]="Santosha.dev"
  ["prod"]="Santosha.prod"
)

# 사용법 출력
show_usage() {
  cat << EOF

사용법: pnpm env:switch <환경>

사용 가능한 환경:
  stage  - 스테이징 환경 (home_stage / ecidgakvipnuqamwvufs)
  prod   - 프로덕션 환경 (home_prod / ifkzuniguelwaaybbcsz)

예시:
  pnpm env:stage    # Stage로 전환
  pnpm env:prod     # Production으로 전환

이 명령은 Supabase CLI 링크를 전환합니다:
  1. supabase unlink (기존 링크 해제)
  2. supabase link --project-ref <환경별-ref> (새 환경 링크)

참고:
  - .env.stage와 .env.prod 파일에 다음 변수를 설정하세요:
    * SUPABASE_DB_PASSWORD: 데이터베이스 비밀번호
    * SUPABASE_ACCESS_TOKEN: Supabase Access Token (계정 전환용)
  - CLI 명령어(db pull/push, gen types 등)만 영향을 받습니다

EOF
}

# 현재 링크된 프로젝트 확인
get_current_link() {
  supabase projects list 2>&1 | grep "●" | awk '{print $5}' || echo ""
}

# 환경 전환
switch_environment() {
  local target_env="$1"
  local project_ref="${PROJECT_REFS[$target_env]}"
  local project_name="${PROJECT_NAMES[$target_env]}"
  local env_file="$ROOT_DIR/.env.$target_env"

  echo ""
  echo "🔄 Supabase CLI를 ${target_env^^} 환경으로 전환합니다..."
  echo "   프로젝트: $project_name ($project_ref)"
  
  # .env 파일에서 DB 비밀번호 및 Access Token 읽기
  if [ -f "$env_file" ]; then
    # shellcheck disable=SC1090
    source "$env_file"
    
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
  else
    echo "   ⚠️  $env_file 파일이 없습니다."
    echo "      .env.example을 참고하여 생성해주세요."
  fi

  # Supabase CLI 로그아웃 후 재로그인 (다른 계정에서 작업했을 가능성 대비)
  if [ -n "$SUPABASE_ACCESS_TOKEN" ]; then
    echo ""
    echo "🔓 Supabase CLI 로그아웃 중..."
    # access token 파일 직접 삭제로 로그아웃 처리
    rm -f ~/.supabase/access-token 2>/dev/null || true
    
    echo ""
    echo "🔐 Supabase CLI 로그인 중 (Access Token 사용)..."
    # Access Token으로 로그인
    supabase login --token "$SUPABASE_ACCESS_TOKEN"
  fi

  # 기존 링크 해제
  echo ""
  echo "📤 기존 링크 해제 중..."
  supabase unlink 2>/dev/null || true

  # 새 프로젝트 링크
  echo ""
  echo "📥 새 환경으로 링크 중..."
  
  if [ -n "$SUPABASE_DB_PASSWORD" ]; then
    supabase link --project-ref "$project_ref" --password "$SUPABASE_DB_PASSWORD"
  else
    supabase link --project-ref "$project_ref"
  fi

  echo ""
  echo "✅ Supabase CLI가 $project_name로 링크되었습니다."
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
      if [ "$current_ref" = "${PROJECT_REFS[stage]}" ]; then
        echo "  환경: STAGE"
        echo "  프로젝트: ${PROJECT_NAMES[stage]}"
      elif [ "$current_ref" = "${PROJECT_REFS[prod]}" ]; then
        echo "  환경: PROD"
        echo "  프로젝트: ${PROJECT_NAMES[prod]}"
      else
        echo "  환경: 알 수 없음"
      fi
      echo "  Ref: $current_ref"
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
  expected_ref="${PROJECT_REFS[$target_env]}"

  if [ "$current_ref" = "$expected_ref" ]; then
    echo ""
    echo "⚠️  이미 ${target_env^^} 환경으로 링크되어 있습니다."
    echo "   프로젝트: ${PROJECT_NAMES[$target_env]}"
    exit 0
  fi

  # 환경 전환 실행
  switch_environment "$target_env"
}

main "$@"
