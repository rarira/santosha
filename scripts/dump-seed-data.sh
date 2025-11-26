#!/bin/bash
# 실제 운영 데이터를 seed.sql로 dump하는 스크립트 (Supabase CLI 사용)
# 사용법: bash scripts/dump-seed-data.sh [stage|prod|local]

set -e

ENV=${1:-local}

echo "🚀 Seed 데이터 Dump 시작 (환경: $ENV)..."
echo ""

# 환경별 설정
case $ENV in
  local)
    echo "📍 로컬 Supabase DB에서 데이터 추출"
    DB_FLAG="--local"
    ;;
  stage)
    if [ ! -f .env.stage ]; then
      echo "❌ .env.stage 파일이 없습니다"
      exit 1
    fi
    source .env.stage
    if [ -z "$SUPABASE_PROJECT_ID" ]; then
      echo "❌ .env.stage에 SUPABASE_PROJECT_ID가 없습니다"
      exit 1
    fi
    echo "📍 Stage 환경에서 데이터 추출 (프로젝트: $SUPABASE_PROJECT_ID)"
    DB_FLAG="--db-url $(supabase db url --project-ref $SUPABASE_PROJECT_ID)"
    ;;
  prod)
    if [ ! -f .env.prod ]; then
      echo "❌ .env.prod 파일이 없습니다"
      exit 1
    fi
    source .env.prod
    if [ -z "$SUPABASE_PROJECT_ID" ]; then
      echo "❌ .env.prod에 SUPABASE_PROJECT_ID가 없습니다"
      exit 1
    fi
    echo "📍 Production 환경에서 데이터 추출 (프로젝트: $SUPABASE_PROJECT_ID)"
    DB_FLAG="--db-url $(supabase db url --project-ref $SUPABASE_PROJECT_ID)"
    ;;
  *)
    echo "❌ 잘못된 환경: $ENV"
    echo "사용법: bash scripts/dump-seed-data.sh [local|stage|prod]"
    exit 1
    ;;
esac

echo ""

# Backup 기존 seed.sql
BACKUP_FILE="supabase/seed.sql.backup.$(date +%Y%m%d_%H%M%S)"
if [ -f supabase/seed.sql ]; then
  echo "📦 기존 seed.sql 백업: $BACKUP_FILE"
  cp supabase/seed.sql "$BACKUP_FILE"
  echo ""
fi

# 새로운 seed.sql 생성
OUTPUT_FILE="supabase/seed.sql"
TEMP_AUTH="supabase/temp_auth.sql"
TEMP_PUBLIC="supabase/temp_public.sql"

echo "📝 seed.sql 생성 중..."
echo ""

# 1. auth 스키마 dump (Supabase CLI 사용)
echo "🔐 auth 스키마 dump (관리자 계정 포함)..."
supabase db dump $DB_FLAG --data-only -s auth -f "$TEMP_AUTH"

# 2. public 스키마 dump (Supabase CLI 사용)
echo "📊 public 스키마 dump (categories, centers, posts, schedules)..."
supabase db dump $DB_FLAG --data-only -s public -f "$TEMP_PUBLIC"

# 3. 두 파일 합치기 (헤더 제거하고 데이터만 추출)
echo "🔧 seed.sql 생성 중..."

# auth 파일에서 session_replication_role 설정 유지
cat "$TEMP_AUTH" > "$OUTPUT_FILE"

# public 스키마 구분선 추가
cat >> "$OUTPUT_FILE" << 'SEPARATOR'

--
-- ============================================================
-- PUBLIC SCHEMA DATA
-- ============================================================
--

SEPARATOR

# public 스키마 내용 추가 (헤더 제거: 첫 23줄 스킵)
tail -n +24 "$TEMP_PUBLIC" >> "$OUTPUT_FILE"

# Sequence reset 추가 (COALESCE 추가로 빈 테이블 대응)
cat >> "$OUTPUT_FILE" << 'FOOTER'

--
-- Reset sequences to correct values
--
SELECT setval('public.categories_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.categories));
SELECT setval('public.centers_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.centers));
SELECT setval('public.posts_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.posts));
SELECT setval('public.schedules_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.schedules));

SET session_replication_role = DEFAULT;
FOOTER

# 임시 파일 정리
rm -f "$TEMP_AUTH" "$TEMP_PUBLIC"

echo ""
echo "✅ seed.sql 생성 완료!"
echo "   📄 파일: $OUTPUT_FILE"
if [ -f "$BACKUP_FILE" ]; then
  echo "   📦 백업: $BACKUP_FILE"
fi
echo ""
echo "📋 포함된 데이터:"
echo "   🔐 Auth: audit_log_entries, users, identities (관리자 계정)"
echo "   📊 Public: categories, centers, posts, schedules"
echo ""
echo "⚠️  주의사항:"
echo "   ✅ DB 데이터: seed.sql에 포함됨 (Supabase CLI dump)"
echo "   ✅ Storage 이미지: backup-storage.sh로 별도 관리 (CLI dump 불가)"
echo "   📌 복원 시: 'pnpm supabase:reset' 사용 (DB + Storage 자동 처리)"
echo ""
