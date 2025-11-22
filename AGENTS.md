# Agent Guidelines for Santosha

- 모든 대화는 한국어로 진행해줘

## Build & Commands

- **Build**: `pnpm build` (root에서 실행)
- **Dev**: `pnpm dev` (root에서 실행, 개발 서버)
- **Lint**: `pnpm lint` (root에서 실행)
- **Tests**: No test suite configured yet
- **Type Generation**: `pnpm update-types` (generates Supabase types)
- **Env Switch**: `pnpm env:stage` or `pnpm env:prod` (환경 전환)

## Code Style

- **Formatting**: Prettier with 100 chars width, 2 spaces, single quotes, trailing commas, arrow parens: avoid
- **TypeScript**: Strict mode enabled, use `noUncheckedIndexedAccess`, prefer explicit types for function returns
- **Imports**: Use path aliases: `@/libs/*`, `@/types/*`, `@/i18n/*`, `@ui/*` (내부 components/ui/\*)
- **File Organization**: Group imports (external → internal with aliases → relative), blank line before code
- **React**: Use `'use client'` directive for client components, `'use server'` for server actions
- **Components**: Functional components with TypeScript, prefer `React.FC` or explicit return types like `Promise<React.JSX.Element>`
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files in route groups
- **Error Handling**: Use Zod for validation, return error objects `{ message: string }` in server actions
- **Async**: Prefer async/await, use React Query for data fetching with prefetchQuery for SSR
- **Exports**: Default export for pages/components, named exports for utilities/actions

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- **Tailwind CSS v4** (CSS 기반 설정, `@import "tailwindcss"` + `@theme` 블록 사용)
- React Admin, Supabase, React Query, React Hook Form, Zod
- **Standalone 프로젝트** (모노레포 구조 완전 제거 완료, 평탄화된 구조)

## Project Structure

```
santosha/
├── app/              # Next.js App Router (외부/관리자 페이지)
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
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key
- `SUPABASE_PROJECT_ID`: Supabase 프로젝트 ID (타입 생성용)

환경 전환은 `pnpm env:stage` 또는 `pnpm env:prod` 사용.
