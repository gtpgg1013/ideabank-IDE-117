# IDE-117

Next.js 앱 초기화, 서비스 메타데이터 구성, 비밀번호 게이트를 포함한 기본 프로젝트 세팅입니다.

## Requirements

- Node.js 24+
- npm 11+

## Environment

`.env.example` 기준으로 다음 값을 사용합니다.

```env
PORT=3201
ACCESS_PASSWORD=ideabank2026
```

- `PORT`: 개발/실행 포트
- `ACCESS_PASSWORD`: 루트 비밀번호 게이트와 전역 보호 라우팅에 사용하는 접근 비밀번호

## Local Run

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3201` 로 접속합니다.

## Docker Run

```bash
docker compose up --build
```

기본 포트는 `3201` 이며 환경변수로 변경할 수 있습니다.

## Structure

- `app/`: App Router 페이지와 인증 API
- `components/`: 루트 비밀번호 게이트 UI
- `lib/`: 인증 유틸
- `tests/`: 핵심 인증 로직 테스트
- `.service-info.json`: 서비스 레지스트리용 메타데이터

## Authentication Flow

1. 루트 경로(`/`)는 비밀번호 입력 화면 또는 인증 후 홈 화면을 렌더링합니다.
2. `/api/auth/login` 이 `ACCESS_PASSWORD` 를 검증하고 HTTP-only 쿠키를 발급합니다.
3. `middleware.ts` 가 인증되지 않은 사용자의 다른 경로 접근을 `/` 로 리다이렉트합니다.
4. `/api/auth/logout` 이 쿠키를 제거하고 다시 루트로 보냅니다.

## Test

```bash
npm test
```
