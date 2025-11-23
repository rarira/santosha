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

프로젝트는 세 가지 환경 변수 파일을 사용합니다:

- `.env.local` - 로컬 개발 환경 (Supabase Local)
- `.env.stage` - 스테이징 환경
- `.env.prod` - 프로덕션 환경

### 필수 환경 변수

각 환경 파일에 다음 변수들을 설정해야 합니다:

```bash
# Supabase 프로젝트 URL
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url

# Supabase Publishable Key (anon key 대신 권장)
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

# 데이터베이스 비밀번호 (CLI 링크용)
SUPABASE_DB_PASSWORD=your_database_password

# Supabase Access Token (Admin/Owner 권한 필요)
SUPABASE_ACCESS_TOKEN=your_supabase_access_token

# CLI 환경 전환용 설정
SUPABASE_PROJECT_REF=your_project_ref
SUPABASE_PROJECT_NAME=your_project_name
```

> **중요**: `.env.local`, `.env.stage`, `.env.prod` 모두 **동일한 `SUPABASE_ACCESS_TOKEN`**을 사용해야 합니다.
> 이 토큰은 Admin 또는 Owner 권한이 필요합니다.

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

### 4. 환경 전환 (Supabase CLI)

Supabase CLI를 스테이징/프로덕션 환경으로 전환하려면:

```bash
# 현재 링크된 환경 확인
pnpm env:switch

# 스테이징 환경으로 전환
pnpm env:stage

# 프로덕션 환경으로 전환
pnpm env:prod
```

환경 전환 후 다음 CLI 명령어가 선택된 환경에서 실행됩니다:
- `supabase db pull` - 원격 DB 스키마를 로컬로 가져오기
- `supabase db push` - 로컬 마이그레이션을 원격 DB에 적용
- `supabase db diff` - 로컬과 원격 DB 스키마 차이 확인
- `supabase gen types typescript` - DB 스키마에서 TypeScript 타입 생성

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
├── supabase/       # Supabase 설정 및 마이그레이션
└── scripts/        # 환경 전환 스크립트
```

## 문제 해결

### Supabase CLI 권한 에러

`supabase link` 실행 시 "Your account does not have the necessary privileges" 에러가 발생하는 경우:

1. **Access Token 권한 확인**: 모든 환경 변수 파일(`.env.local`, `.env.stage`, `.env.prod`)에 **동일한 Access Token**이 설정되어 있는지 확인하세요.

2. **토큰 권한 확인**: Access Token이 Admin 또는 Owner 권한을 가지고 있는지 확인하세요.
   - [Supabase Dashboard](https://supabase.com/dashboard) → Settings → API
   - 또는 새 토큰 생성: Dashboard → Account → Access Tokens

3. **환경 변수 우선순위**: Supabase CLI는 다음 순서로 Access Token을 확인합니다:
   - 현재 디렉토리의 `.env.*` 파일
   - `~/.supabase/access-token` 파일
   - `SUPABASE_ACCESS_TOKEN` 환경 변수

4. **문제가 지속되는 경우**:
   ```bash
   # 기존 토큰 제거
   rm ~/.supabase/access-token
   
   # .env.local 파일의 토큰 확인
   grep SUPABASE_ACCESS_TOKEN .env.local
   
   # 환경 전환 재시도
   pnpm env:stage
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_source=github.com&utm_medium=referral&utm_campaign=turborepo-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
