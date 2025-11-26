#!/bin/bash
# 실제 운영 데이터를 seed.sql로 dump하는 스크립트
# 사용법: bash scripts/dump-seed-data.sh [stage|prod|local]

set -e

ENV=${1:-local}

echo "🚀 Seed 데이터 Dump 시작 (환경: $ENV)..."
echo ""

# 환경별 DB 연결 정보 설정
case $ENV in
  local)
    DB_URL="postgresql://postgres:postgres@localhost:54322/postgres"
    echo "📍 로컬 Supabase DB에서 데이터 추출"
    ;;
  stage)
    if [ ! -f .env.stage ]; then
      echo "❌ .env.stage 파일이 없습니다"
      exit 1
    fi
    source .env.stage
    DB_URL=$(supabase db url --project-ref $SUPABASE_PROJECT_ID)
    echo "📍 Stage 환경에서 데이터 추출"
    ;;
  prod)
    if [ ! -f .env.prod ]; then
      echo "❌ .env.prod 파일이 없습니다"
      exit 1
    fi
    source .env.prod
    DB_URL=$(supabase db url --project-ref $SUPABASE_PROJECT_ID)
    echo "📍 Production 환경에서 데이터 추출"
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
echo "📦 기존 seed.sql 백업: $BACKUP_FILE"
cp supabase/seed.sql "$BACKUP_FILE"
echo ""

# 새로운 seed.sql 생성
OUTPUT_FILE="supabase/seed.sql"

echo "📝 seed.sql 생성 중..."

cat > "$OUTPUT_FILE" << 'HEADER'
SET session_replication_role = replica;

--
-- Data for Name: auth.users (Admin accounts)
--
HEADER

# auth.users dump (관리자 계정만)
echo "  - auth.users (관리자 계정)"
psql "$DB_URL" -c "
COPY (
  SELECT 
    'INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, role, aud, confirmation_token, email_change_token_new, recovery_token, email_change_token_current) VALUES (' ||
    quote_literal(id::text) || ', ' ||
    quote_literal(email) || ', ' ||
    quote_literal(encrypted_password) || ', ' ||
    COALESCE('''' || email_confirmed_at::text || '''', 'now()') || ', ' ||
    COALESCE('''' || created_at::text || '''', 'now()') || ', ' ||
    COALESCE('''' || updated_at::text || '''', 'now()') || ', ' ||
    COALESCE(quote_literal(raw_app_meta_data::text), '''{}''') || '::jsonb, ' ||
    COALESCE(quote_literal(raw_user_meta_data::text), '''{}''') || '::jsonb, ' ||
    COALESCE(is_super_admin::text, 'false') || ', ' ||
    quote_literal(role) || ', ' ||
    COALESCE(quote_literal(aud), '''authenticated''') || ', ' ||
    'NULL, NULL, NULL, NULL' ||
    ') ON CONFLICT (id) DO NOTHING;'
  FROM auth.users
  WHERE email = 'rarira@gmail.com'
) TO STDOUT
" >> "$OUTPUT_FILE"

# auth.identities dump
echo "  - auth.identities"
cat >> "$OUTPUT_FILE" << 'EOF'

--
-- Data for Name: auth.identities
--
EOF

psql "$DB_URL" -c "
COPY (
  SELECT 
    'INSERT INTO auth.identities (provider_id, id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at) VALUES (' ||
    quote_literal(provider_id) || ', ' ||
    quote_literal(id) || ', ' ||
    quote_literal(user_id) || ', ' ||
    quote_literal(identity_data::text) || ', ' ||
    quote_literal(provider) || ', ' ||
    'now(), now(), now());'
  FROM auth.identities
  WHERE user_id IN (SELECT id FROM auth.users WHERE email = 'rarira@gmail.com')
) TO STDOUT
" >> "$OUTPUT_FILE"

# categories dump
echo "  - categories"
cat >> "$OUTPUT_FILE" << 'EOF'

--
-- Data for Name: categories
--
EOF

psql "$DB_URL" -c "
COPY (
  SELECT 
    'INSERT INTO public.categories (id, created_at, name, extra_info) VALUES (' ||
    id || ', ' ||
    quote_literal(created_at::text) || ', ' ||
    quote_literal(name) || ', ' ||
    COALESCE(quote_literal(extra_info), 'NULL') ||
    ') ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, extra_info = EXCLUDED.extra_info;'
  FROM public.categories
  ORDER BY id
) TO STDOUT
" >> "$OUTPUT_FILE"

# centers dump
echo "  - centers"
cat >> "$OUTPUT_FILE" << 'EOF'

--
-- Data for Name: centers
--
EOF

psql "$DB_URL" -c "
COPY (
  SELECT 
    'INSERT INTO public.centers (id, name, address, description, naver_place_id, social_link, additional_info, created_at, updated_at) VALUES (' ||
    id || ', ' ||
    quote_literal(name) || ', ' ||
    quote_literal(address) || ', ' ||
    COALESCE(quote_literal(description), 'NULL') || ', ' ||
    COALESCE(quote_literal(naver_place_id), 'NULL') || ', ' ||
    COALESCE(quote_literal(social_link), 'NULL') || ', ' ||
    COALESCE(quote_literal(additional_info), 'NULL') || ', ' ||
    'now(), now()' ||
    ') ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, address = EXCLUDED.address, description = EXCLUDED.description, naver_place_id = EXCLUDED.naver_place_id, social_link = EXCLUDED.social_link, additional_info = EXCLUDED.additional_info, updated_at = now();'
  FROM public.centers
  ORDER BY id
) TO STDOUT
" >> "$OUTPUT_FILE"

# posts dump
echo "  - posts"
cat >> "$OUTPUT_FILE" << 'EOF'

--
-- Data for Name: posts
--
EOF

psql "$DB_URL" -c "
COPY (
  SELECT 
    'INSERT INTO public.posts (id, created_at, title, body, published_at, teaser, category_id, views, image, extra_info) VALUES (' ||
    id || ', ' ||
    'now(), ' ||
    quote_literal(title) || ', ' ||
    quote_literal(body) || ', ' ||
    'now(), ' ||
    quote_literal(teaser) || ', ' ||
    category_id || ', ' ||
    views || ', ' ||
    COALESCE(quote_literal(image::text), 'NULL') || ', ' ||
    COALESCE(quote_literal(extra_info::text), 'NULL') ||
    ') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, body = EXCLUDED.body, published_at = EXCLUDED.published_at, teaser = EXCLUDED.teaser, category_id = EXCLUDED.category_id, image = EXCLUDED.image, extra_info = EXCLUDED.extra_info;'
  FROM public.posts
  ORDER BY id
) TO STDOUT
" >> "$OUTPUT_FILE"

# schedules dump
echo "  - schedules"
cat >> "$OUTPUT_FILE" << 'EOF'

--
-- Data for Name: schedules
--
EOF

psql "$DB_URL" -c "
COPY (
  SELECT 
    'INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES (' ||
    quote_literal(title) || ', ' ||
    quote_literal(class_type) || ', ' ||
    center_id || ', ' ||
    day_of_week || ', ' ||
    quote_literal(start_time::text) || ', ' ||
    quote_literal(end_time::text) || ', ' ||
    COALESCE(quote_literal(additional_info), 'NULL') ||
    ');'
  FROM public.schedules
  ORDER BY center_id, day_of_week, start_time
) TO STDOUT
" >> "$OUTPUT_FILE"

# Sequence reset 추가
cat >> "$OUTPUT_FILE" << 'FOOTER'

--
-- Reset sequences to correct values
--
SELECT setval('public.categories_id_seq', (SELECT MAX(id) FROM public.categories));
SELECT setval('public.centers_id_seq', (SELECT MAX(id) FROM public.centers));
SELECT setval('public.posts_id_seq', (SELECT MAX(id) FROM public.posts));
SELECT setval('public.schedules_id_seq', (SELECT MAX(id) FROM public.schedules));

SET session_replication_role = DEFAULT;

FOOTER

echo ""
echo "✅ seed.sql 생성 완료: $OUTPUT_FILE"
echo "📦 백업 파일: $BACKUP_FILE"
echo ""
echo "⚠️  주의사항:"
echo "  - seed.sql은 DB 테이블 데이터만 포함합니다"
echo "  - Storage 이미지는 별도로 업로드해야 합니다"
echo "  - 실제 파일 업로드 없이 seed.sql만 적용하면 이미지가 깨집니다"
echo ""
