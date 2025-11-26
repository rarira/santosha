#!/bin/bash
# Supabase DB 완전 초기화 스크립트
# 현재 데이터 dump → Storage 백업 → DB Reset → Storage 복원을 한 번에 실행합니다

set -e

echo "🚀 Supabase DB 초기화 시작..."
echo ""

# 1. 현재 DB 데이터를 seed.sql로 dump
echo "💾 1/4: 현재 DB 데이터를 seed.sql로 저장 중..."
bash scripts/dump-seed-data.sh local
echo ""

# 2. Storage 백업
echo "📦 2/4: Storage 백업 중..."
bash scripts/backup-storage.sh
echo ""

# 3. DB Reset
echo "🔄 3/4: DB Reset 실행 중..."
supabase db reset
echo ""

# 4. Storage 복원 (Supabase API로 업로드)
echo "📦 4/4: Storage 복원 중 (Supabase API 사용)..."
npx tsx scripts/upload-storage.ts
echo ""

echo "✅ DB 초기화 완료!"
echo ""
echo "📋 다음 작업이 완료되었습니다:"
echo "  - 현재 DB 데이터를 seed.sql로 저장 (작업 내용 보존)"
echo "  - Storage 파일 백업"
echo "  - DB 스키마 마이그레이션 적용"
echo "  - seed.sql 데이터 로드"
echo "  - Storage 파일 업로드 (API 방식)"
echo "  - storage.objects 메타데이터 생성"
echo ""
echo "🎉 이제 Supabase 대시보드에서도 파일이 보입니다!"
echo ""
