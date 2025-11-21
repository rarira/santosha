# Agent Guidelines for Santosha
- 모든 대화는 한국어로 진행해줘

## Build & Commands

- **Build**: `pnpm build` (root) or `cd apps/web && pnpm build`
- **Dev**: `pnpm dev` (root) or `cd apps/web && pnpm dev`
- **Lint**: `pnpm lint` (root) or `cd apps/web && pnpm lint` (max-warnings 0)
- **Format**: `pnpm format` (root, writes to all .ts/.tsx/.md files)
- **Tests**: No test suite configured yet
- **Type Generation**: `cd apps/web && pnpm update-types` (generates Supabase types)

## Code Style

- **Formatting**: Prettier with 100 chars width, 2 spaces, single quotes, trailing commas, arrow parens: avoid
- **TypeScript**: Strict mode enabled, use `noUncheckedIndexedAccess`, prefer explicit types for function returns
- **Imports**: Use path aliases: `@/libs/*`, `@/types/*`, `@/i18n/*`, `@ui/*` (from packages/ui)
- **File Organization**: Group imports (external → internal with aliases → relative), blank line before code
- **React**: Use `'use client'` directive for client components, `'use server'` for server actions
- **Components**: Functional components with TypeScript, prefer `React.FC` or explicit return types like `Promise<React.JSX.Element>`
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files in route groups
- **Error Handling**: Use Zod for validation, return error objects `{ message: string }` in server actions
- **Async**: Prefer async/await, use React Query for data fetching with prefetchQuery for SSR
- **Exports**: Default export for pages/components, named exports for utilities/actions

## Tech Stack

- Next.js 15 RC (App Router), React 19 Beta, TypeScript, TailwindCSS
- React Admin, Supabase, React Query, React Hook Form, Zod
- Turborepo monorepo with workspace packages (@repo/ui, @repo/eslint-config, @repo/typescript-config)
