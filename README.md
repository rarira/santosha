# Santosha Yoga

요가 스튜디오를 위한 현대적인 웹사이트. Next.js 16과 React 19로 구축된 반응형 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🎨 **현대적인 UI/UX**: Tailwind CSS v4와 shadcn/ui 컴포넌트
- 📱 **완전한 반응형 디자인**: 모바일부터 데스크톱까지 최적화
- 🔐 **관리자 패널**: React Admin 기반의 콘텐츠 관리 시스템
- 📝 **문의 폼**: Zod v4 기반의 강력한 폼 validation
- 🖼️ **이미지 최적화**: Supabase Storage와 Next.js Image 통합
- 🎯 **SEO 최적화**: 메타데이터 및 성능 최적화
- ⚡ **빠른 빌드**: Turbopack 지원

## 🛠️ 기술 스택

### Frontend
- **Next.js 16** - App Router, Server Components
- **React 19** - 최신 React 기능 활용
- **TypeScript 5.7** - 타입 안정성
- **Tailwind CSS v4** - CSS 기반 설정 (CSS-first configuration)

### Backend & Database
- **Supabase** - PostgreSQL, Authentication, Storage
- **React Query** - 서버 상태 관리
- **React Hook Form** - 폼 상태 관리
- **Zod v4** - 스키마 검증

### Admin & UI
- **React Admin 5.13** - 관리자 패널
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **Radix UI** - 접근성이 뛰어난 primitives
- **Embla Carousel** - 이미지 캐러셀

### Tools
- **pnpm** - 빠른 패키지 매니저
- **ESLint** - 코드 품질 관리

## 📁 프로젝트 구조

```
santosha/
├── app/                          # Next.js App Router
│   ├── (admin)/                 # 관리자 페이지 (React Admin)
│   │   ├── admin/
│   │   │   ├── categories/     # 카테고리 관리
│   │   │   ├── contacts/       # 문의 관리
│   │   │   └── posts/          # 게시글 관리
│   │   └── layout.tsx
│   └── (external)/              # 외부 공개 페이지
│       ├── _components/
│       │   ├── header/         # 헤더 (로고, 네비게이션)
│       │   ├── hero/           # 히어로 섹션 (캐러셀)
│       │   └── sections/       # 콘텐츠 섹션
│       │       ├── class/      # 클래스 소개
│       │       ├── contact/    # 문의 폼
│       │       ├── intro/      # 인트로
│       │       └── process/    # 프로세스 안내
│       └── page.tsx
├── components/                   # 재사용 가능한 UI 컴포넌트
│   └── ui/                      # shadcn/ui 컴포넌트
├── libs/                        # 비즈니스 로직
│   ├── admin/                   # 관리자 관련 유틸리티
│   ├── data/                    # 정적 데이터
│   ├── supabase/                # Supabase 클라이언트 및 헬퍼
│   ├── constant.ts              # 상수 (정규식 등)
│   └── util.ts                  # 유틸리티 함수
├── types/                       # TypeScript 타입 정의
│   ├── supabase.ts             # Supabase 자동 생성 타입
│   └── admin.ts                # 관리자 타입
├── i18n/                        # 다국어 지원
│   ├── ko.ts                   # 한국어
│   └── admin/                  # 관리자 패널 다국어
├── styles/                      # 글로벌 스타일
│   └── globals.css             # Tailwind CSS v4 설정
├── supabase/                    # Supabase 설정
│   ├── migrations/             # 데이터베이스 마이그레이션
│   ├── schema.sql              # 스키마 정의
│   └── seed.sql                # 시드 데이터
├── scripts/                     # 유틸리티 스크립트
│   └── switch-env.sh           # 환경 전환 스크립트
└── public/                      # 정적 파일
    └── image/                   # 이미지 파일
```

## 🚀 시작하기

### 1. 사전 요구사항

- **Node.js 20+** (`.node-version` 파일 참고)
- **pnpm 10+**
- **Supabase 계정** (프로젝트 생성 필요)

### 2. 설치

```bash
# 저장소 클론
git clone https://github.com/rarira/santosha.git
cd santosha

# 의존성 설치
pnpm install
```

### 3. 환경 변수 설정

프로젝트는 세 가지 환경 파일을 사용합니다:

- `.env.local` - 로컬 개발 환경
- `.env.stage` - 스테이징 환경
- `.env.prod` - 프로덕션 환경

`.env.local` 파일 생성:

```bash
# Supabase 프로젝트 설정
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Supabase CLI 설정 (타입 생성용)
SUPABASE_PROJECT_ID=your_supabase_project_id
```

> **참고**: Supabase Dashboard → Settings → API에서 값을 확인할 수 있습니다.

### 4. 데이터베이스 설정

```bash
# Supabase 로컬 환경 시작 (선택사항)
pnpm supabase:start

# 원격 Supabase에서 TypeScript 타입 생성
pnpm update-types
```

### 5. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📜 주요 명령어

```bash
# 개발
pnpm dev              # 개발 서버 시작 (http://localhost:3000)
pnpm build            # 프로덕션 빌드
pnpm start            # 프로덕션 서버 시작

# 코드 품질
pnpm lint             # ESLint 실행 (타입 체크는 빌드 시 수행)

# Supabase
pnpm supabase:start   # 로컬 Supabase 시작
pnpm supabase:stop    # 로컬 Supabase 중지
pnpm update-types     # Supabase 타입 생성

# 환경 전환
pnpm env:switch       # 현재 환경 확인
pnpm env:stage        # 스테이징 환경으로 전환
pnpm env:prod         # 프로덕션 환경으로 전환
```

## 🎨 주요 컴포넌트

### 외부 페이지

#### Header
- 스크롤 시 축소되는 반응형 헤더
- 로고 이미지 (`/image/santosha_logo.webp`)
- 데스크톱/모바일 네비게이션

#### Hero Carousel
- Embla Carousel 기반
- 자동 재생 및 무한 루프
- 반응형 비율 (모바일 1:1, 데스크톱 16:9)

#### Class Section
- Supabase Storage에서 이미지 로드
- 4:3 비율로 최적화된 썸네일
- 클래스 정보 카드 (점수 표시)

#### Contact Form
- Zod v4 기반 validation
- 한국 핸드폰 번호 검증 (`010-XXXX-XXXX`)
- 이메일 검증
- 문의 내용 글자 수 제한 (30-100자)
- 실시간 글자 수 카운터 (포커스 시 표시)

### 관리자 패널

- React Admin 5.13 기반
- 카테고리, 게시글, 문의 관리
- Rich Text Editor 지원
- 이미지 업로드 (Supabase Storage)

## 🔧 환경 전환

Supabase CLI를 다른 환경으로 전환:

```bash
# 스테이징 환경으로 전환
pnpm env:stage

# 프로덕션 환경으로 전환
pnpm env:prod

# 현재 링크된 환경 확인
pnpm env:switch
```

환경 전환 후 다음 명령어가 선택된 환경에서 실행됩니다:
- `supabase db pull` - 원격 DB 스키마를 로컬로 가져오기
- `supabase db push` - 로컬 마이그레이션을 원격 DB에 적용
- `supabase gen types typescript` - TypeScript 타입 생성

## 📝 코딩 컨벤션

### 파일 명명
- **컴포넌트**: PascalCase (`Header.tsx`, `ContactForm.tsx`)
- **유틸리티**: camelCase (`util.ts`, `constant.ts`)
- **라우트 그룹 파일**: kebab-case (`category-list.tsx`)

### Import 순서
1. External dependencies (React, Next.js 등)
2. Internal with aliases (`@/libs/*`, `@ui/*`)
3. Relative imports (`./`, `../`)
4. Blank line before code

### TypeScript
- Strict mode 활성화
- Explicit return types 권장 (`Promise<React.JSX.Element>`)
- Path aliases 사용: `@/libs/*`, `@/types/*`, `@ui/*`

### React
- Functional components only
- `'use client'` for client components
- `'use server'` for server actions
- Server Components 우선, 필요시 Client Components

### Styling
- Tailwind CSS v4 (CSS-first configuration)
- `@theme` 블록으로 디자인 토큰 정의
- Utility classes 우선
- 100 characters line width

## 🐛 문제 해결

### 빌드 에러

**문제**: `Return statement is not allowed here`
- **해결**: 함수 구조 확인, 중복된 return 문 제거

**문제**: ESLint circular dependency warning
- **해결**: ESLint 8 + Next.js 16 호환성 이슈. 타입 체크는 빌드 시 수행됨

### Supabase 관련

**문제**: 이미지가 로드되지 않음
- **해결**: Supabase Storage 권한 확인 (`signed_url` 함수 실행 권한)

**문제**: 타입 생성 실패
- **해결**: `.env.local`에 `SUPABASE_PROJECT_ID` 확인

### 개발 서버

**문제**: Port 3000이 이미 사용 중
- **해결**: `pkill -f "next dev"` 또는 다른 포트 사용

## 📚 참고 자료

- [Next.js 16 문서](https://nextjs.org/docs)
- [React 19 문서](https://react.dev)
- [Tailwind CSS v4 문서](https://tailwindcss.com/docs)
- [Supabase 문서](https://supabase.com/docs)
- [React Admin 문서](https://marmelab.com/react-admin/)
- [Zod v4 문서](https://zod.dev)
- [shadcn/ui 문서](https://ui.shadcn.com)

## 📄 라이선스

MIT

## 👤 제작자

rarira

---

**Built with ❤️ using Next.js 16 and React 19**
