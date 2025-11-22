# Santosha

Next.js 16 기반의 요가 스튜디오 웹사이트

## 기술 스택

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Supabase** (Database, Auth, Storage)
- **React Admin** (Admin Panel)
- **pnpm** (Package Manager)

## 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_DB_PASSWORD=your_database_password
SUPABASE_ACCESS_TOKEN=your_supabase_access_token
```

> **참고**: Supabase는 이제 `anon` key 대신 `publishable` key를 권장합니다.
> 자세한 내용은 [Supabase API Keys 문서](https://supabase.com/docs/guides/api/api-keys)를 참조하세요.

## 로컬 개발

### 1. 의존성 설치

```bash
pnpm install
```

### 2. Supabase 로컬 환경 시작

```bash
pnpm supabase:start
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 4. 환경 전환

개발/스테이징/프로덕션 환경을 전환하려면:

```bash
# 스테이징 환경으로 전환
pnpm env:stage

# 프로덕션 환경으로 전환
pnpm env:prod
```

## 주요 명령어

```bash
pnpm dev          # 개발 서버 시작
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버 시작
pnpm lint         # ESLint 실행
pnpm update-types # Supabase 타입 생성
```

## 프로젝트 구조

```
santosha/
├── app/              # Next.js App Router
│   ├── (admin)/     # 관리자 페이지
│   └── (external)/  # 외부 공개 페이지
├── components/      # 재사용 가능한 UI 컴포넌트
├── libs/           # 비즈니스 로직 및 유틸리티
├── types/          # TypeScript 타입 정의
├── styles/         # 글로벌 스타일
└── supabase/       # Supabase 설정 및 마이그레이션
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_source=github.com&utm_medium=referral&utm_campaign=turborepo-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
