#!/bin/bash
# Supabase Storage 백업 스크립트
# DB reset 전에 실행하여 storage 파일들을 백업합니다

set -e

BACKUP_DIR="supabase/storage-backup"
STORAGE_VOLUME="supabase_storage_santosha"

echo "📦 Storage 백업 시작..."

# 백업 디렉토리 생성
mkdir -p "$BACKUP_DIR"

# Docker volume에서 파일 복사
echo "🔄 Docker volume에서 파일 복사 중..."
docker run --rm \
  -v "$STORAGE_VOLUME:/source" \
  -v "$(pwd)/$BACKUP_DIR:/backup" \
  alpine \
  sh -c "cp -r /source/* /backup/ 2>/dev/null || true"

if [ -d "$BACKUP_DIR/images" ]; then
  echo "✅ Storage 백업 완료: $BACKUP_DIR"
  echo "📁 백업된 파일:"
  find "$BACKUP_DIR" -type f | head -10
else
  echo "⚠️  백업할 파일이 없거나 이미 비어있습니다"
fi
