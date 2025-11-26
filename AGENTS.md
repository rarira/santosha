# Agent Guidelines for Santosha

- 모든 대화는 한국어로 진행해줘

## Build & Commands

- **Build**: `pnpm build` (root에서 실행)
- **Dev**: `pnpm dev` (root에서 실행, 개발 서버)
- **Lint**: `pnpm lint` (root에서 실행, 참고: ESLint 8 + Next.js 16 호환성 이슈로 타입 체크는 빌드 시 수행)
- **Tests**: No test suite configured yet
- **Type Generation**: `pnpm update-types` (generates Supabase types)
- **Env Switch**: `pnpm env:stage` or `pnpm env:prod` (환경 전환)
- **Supabase Local**: 
  - `pnpm supabase:start` / `pnpm supabase:stop` (로컬 Supabase 시작/중지)
  - `pnpm supabase:reset` (DB 완전 초기화 - storage 백업/복원 포함)
  - `pnpm supabase:dump [local|stage|prod]` (실제 데이터를 seed.sql로 dump)

## Database Management

### 데이터 관리 워크플로우

**중요**: 로컬 환경의 Storage 파일은 `pnpm supabase:reset`으로 자동 백업/복원됩니다.

1. **로컬 환경에서 데이터 작업**
   - 관리자 페이지에서 posts, centers 등 업데이트
   - 이미지 파일 업로드 (Storage에 자동 저장)

2. **로컬 데이터를 seed.sql로 저장**
   ```bash
   # 로컬 환경 데이터를 seed.sql로 dump
   pnpm supabase:dump local
   ```

3. **seed.sql 검토 및 커밋**
   - 생성된 seed.sql 확인
   - 민감한 정보 확인 (비밀번호는 해시되어 있음)
   - Git에 커밋

4. **다른 개발자/환경에서 적용**
   ```bash
   # DB reset (storage는 자동 백업/복원)
   pnpm supabase:reset
   ```

**운영 환경 데이터 가져오기** (선택):
```bash
# Stage 환경 데이터를 seed.sql로 dump
pnpm supabase:dump stage

# Prod 환경 데이터를 seed.sql로 dump
pnpm supabase:dump prod
```

### DB 초기화 (Reset)

**중요**: DB를 초기화할 때는 반드시 `pnpm supabase:reset` 명령어를 사용하세요.

```bash
pnpm supabase:reset
```

이 명령어는 다음 작업을 자동으로 수행합니다:

1. **현재 DB 데이터를 seed.sql로 저장**: 작업 중인 데이터를 보존
2. **Storage 백업**: Docker volume의 storage 파일들을 `supabase/storage-backup/`에 백업
3. **DB Reset**: `supabase db reset` 실행 (마이그레이션 + seed.sql 적용)
4. **Storage 복원**: Supabase API를 사용하여 백업된 파일들을 업로드
   - `storage.objects` 메타데이터 자동 생성
   - Supabase 대시보드에서도 파일이 정상적으로 보임

**장점**:
- ✅ **데이터 손실 방지**: reset 전에 자동으로 현재 데이터를 seed.sql로 저장
- ✅ **완전한 데이터 복원**: DB 테이블 + Storage 파일 + 메타데이터
- ✅ **대시보드 호환**: Supabase 대시보드에서 파일 확인 가능
- ✅ **자동화**: 백업/복원 과정 완전 자동화

**주의사항**:
- reset 실행 시 자동으로 seed.sql이 업데이트됩니다
- 변경된 seed.sql을 Git에 커밋하는 것을 잊지 마세요

### 수동 Storage 관리 (필요시)

일반적으로 `pnpm supabase:reset`을 사용하면 되지만, 수동으로 관리가 필요한 경우:

```bash
# Storage 백업만 실행 (Docker volume → 파일 시스템)
bash scripts/backup-storage.sh

# Storage 복원만 실행 (파일 시스템 → Supabase API 업로드)
npx tsx scripts/upload-storage.ts
```

## Code Style

- **Formatting**: Prettier with 100 chars width, 2 spaces, single quotes, trailing commas, arrow parens: avoid
- **TypeScript**: Strict mode enabled, use `noUncheckedIndexedAccess`, prefer explicit types for function returns
- **Imports**: Use path aliases: `@/libs/*`, `@/types/*`, `@/i18n/*`, `@ui/*` (내부 components/ui/\*), `@/lib/*`, `@/styles/*`, `@/components/*`
- **Import Order**: Group imports (external → internal with aliases → relative), blank line before code
- **React**: Use `'use client'` directive for client components, `'use server'` for server actions
- **Components**: Functional components with TypeScript, prefer explicit return types like `Promise<React.JSX.Element>` for async components
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files in route groups
- **Error Handling**: Use Zod for validation, return error objects `{ message: string }` in server actions
- **Async**: Prefer async/await, use React Query for data fetching
- **Exports**: Default export for pages/components, named exports for utilities/actions
- **JSX**: Use `React.JSX.Element` type instead of `JSX.Element`

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- **Tailwind CSS v4** (CSS 기반 설정, `@import "tailwindcss"` + `@theme` 블록 사용)
- React Admin, Supabase, React Query, React Hook Form, Zod
- **Standalone 프로젝트** (모노레포 구조 완전 제거 완료, 평탄화된 구조)

## Project Structure

```
santosha/
├── app/              # Next.js App Router (외부/관리자 페이지)
│   ├── (admin)/     # 관리자 페이지 (React Admin)
│   └── (external)/  # 외부 공개 페이지
├── components/       # UI 컴포넌트 (shadcn/ui)
├── lib/             # 유틸리티
├── libs/            # 비즈니스 로직 (Supabase, 상수)
├── styles/          # 글로벌 스타일 (Tailwind v4)
├── types/           # TypeScript 타입 정의
├── public/          # 정적 파일
├── supabase/        # Supabase 설정 및 마이그레이션
└── package.json     # 단일 package.json
```

## Environment Variables

프로젝트는 `.env.local`, `.env.stage`, `.env.prod` 환경 변수 파일을 사용합니다:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase 프로젝트 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key (또는 PUBLISHABLE_KEY)
- `SUPABASE_PROJECT_ID`: Supabase 프로젝트 ID (타입 생성용)

환경 전환은 `pnpm env:stage` 또는 `pnpm env:prod` 사용.
