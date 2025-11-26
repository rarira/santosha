#!/bin/bash
# Supabase DB 완전 초기화 스크립트
# Storage 백업 → DB Reset → Storage 복원을 한 번에 실행합니다
# 주의: seed.sql을 덮어쓰지 않습니다 (명시적으로 dump 스크립트를 실행하세요)

set -e

echo "🚀 Supabase DB 초기화 시작..."
echo ""

# 1. Storage 백업
echo "📦 1/3: Storage 백업 중..."
bash scripts/backup-storage.sh
echo ""

# 2. DB Reset
echo "🔄 2/3: DB Reset 실행 중..."
supabase db reset
echo ""

# 3. Storage 복원 (Supabase API로 업로드)
echo "📦 3/3: Storage 복원 중 (Supabase API 사용)..."
npx tsx scripts/upload-storage.ts
echo ""

echo "✅ DB 초기화 완료!"
echo ""
echo "📋 다음 작업이 완료되었습니다:"
echo "  - Storage 파일 백업"
echo "  - DB 스키마 마이그레이션 적용"
echo "  - seed.sql 데이터 로드 (Auth 계정 포함)"
echo "  - Storage 파일 업로드 (API 방식)"
echo "  - storage.objects 메타데이터 생성"
echo ""
echo "💡 현재 DB 데이터를 seed.sql로 저장하려면:"
echo "   bash scripts/dump-seed-data.sh local"
echo ""
echo "🎉 이제 Supabase 대시보드에서도 파일이 보입니다!"
echo ""
