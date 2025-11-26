#!/usr/bin/env tsx
/**
 * 백업된 Storage 파일을 Supabase API를 통해 업로드하는 스크립트
 * DB reset 후 실행하여 파일과 메타데이터를 모두 복원합니다.
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const BACKUP_DIR = 'supabase/storage-backup'

// 로컬 Supabase 연결
const supabase = createClient(
  'http://127.0.0.1:54321',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU' // local service_role key
)

interface UploadedFile {
  path: string
  success: boolean
  error?: string
}

interface StorageMetadata {
  id: string
  metadata: {
    bucketName: string
    objectName: string
    cacheControl: string
    contentType: string
  }
  size: number
  offset: number
  creation_date: string
}

/**
 * stub/stub/images 디렉토리 내 모든 파일을 재귀적으로 탐색
 * .json 파일만 반환 (메타데이터)
 */
function* walkStorageMetadata(dir: string): Generator<string> {
  const files = readdirSync(dir)
  
  for (const file of files) {
    const fullPath = join(dir, file)
    const stat = statSync(fullPath)
    
    if (stat.isDirectory()) {
      yield* walkStorageMetadata(fullPath)
    } else if (file.endsWith('.json')) {
      yield fullPath
    }
  }
}

/**
 * 파일을 Supabase Storage에 업로드
 */
async function uploadFile(
  bucketName: string,
  storagePath: string,
  fileBuffer: Buffer,
  contentType: string
): Promise<UploadedFile> {
  try {
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(storagePath, fileBuffer, {
        contentType,
        upsert: true, // 기존 파일이 있으면 덮어쓰기
      })
    
    if (error) {
      return { path: storagePath, success: false, error: error.message }
    }
    
    return { path: storagePath, success: true }
  } catch (err) {
    return { 
      path: storagePath, 
      success: false, 
      error: err instanceof Error ? err.message : String(err) 
    }
  }
}

/**
 * 백업된 Storage 파일들을 업로드
 */
async function restoreStorage(): Promise<void> {
  console.log('📦 Storage 복원 시작 (Supabase API 사용)...')
  console.log('')
  
  // 백업 디렉토리 확인
  const storageDir = join(BACKUP_DIR, 'stub', 'stub', 'images')
  try {
    statSync(storageDir)
  } catch {
    console.error(`❌ Storage 백업 디렉토리가 없습니다: ${storageDir}`)
    console.error('먼저 backup-storage.sh를 실행하세요')
    process.exit(1)
  }
  
  const results: UploadedFile[] = []
  let uploadCount = 0
  
  // 모든 메타데이터 파일(.json) 탐색
  for (const metadataPath of walkStorageMetadata(storageDir)) {
    try {
      // 메타데이터 읽기
      const metadataContent = readFileSync(metadataPath, 'utf-8')
      const metadata: StorageMetadata = JSON.parse(metadataContent)
      
      // 실제 파일 경로 (UUID 파일, .json 제거)
      const dataFilePath = metadataPath.replace('.json', '')
      
      // 파일 존재 확인
      try {
        statSync(dataFilePath)
      } catch {
        console.error(`⚠️  파일 없음: ${dataFilePath}`)
        continue
      }
      
      // 파일 데이터 읽기
      const fileBuffer = readFileSync(dataFilePath)
      
      const { bucketName, objectName, contentType } = metadata.metadata
      
      console.log(`🔄 업로드 중: ${bucketName}/${objectName}`)
      const result = await uploadFile(bucketName, objectName, fileBuffer, contentType)
      results.push(result)
      
      if (result.success) {
        uploadCount++
      } else {
        console.error(`  ❌ 실패: ${result.error}`)
      }
    } catch (err) {
      console.error(`⚠️  메타데이터 파싱 실패: ${metadataPath}`, err)
      continue
    }
  }
  
  console.log('')
  console.log('✅ Storage 복원 완료!')
  console.log(`📊 업로드 성공: ${uploadCount}/${results.length}`)
  
  const failed = results.filter(r => !r.success)
  if (failed.length > 0) {
    console.log('')
    console.log('❌ 실패한 파일:')
    failed.forEach(f => console.log(`  - ${f.path}: ${f.error}`))
  }
}

// 실행
restoreStorage().catch(err => {
  console.error('❌ Storage 복원 중 오류 발생:', err)
  process.exit(1)
})
