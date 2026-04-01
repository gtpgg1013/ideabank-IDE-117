import Link from "next/link";
import { cookies } from "next/headers";
import { PasswordGate } from "@/components/password-gate";
import {
  ACCESS_COOKIE_NAME,
  AUTHENTICATED_COOKIE_VALUE,
  isAuthenticatedCookieValue,
} from "@/lib/auth";

export default async function HomePage() {
  const cookieStore = await cookies();
  const isAuthenticated = isAuthenticatedCookieValue(
    cookieStore.get(ACCESS_COOKIE_NAME)?.value,
  );

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  return (
    <main className="home">
      <section className="homeCard">
        <p className="kicker">IDE-117 / Next.js Bootstrap</p>
        <h1>서비스 기본 세팅이 준비되었습니다.</h1>
        <p className="lead">
          포트 환경변수, 접근 비밀번호, 서비스 메타데이터, Docker 실행 구성이
          함께 정리된 초기 상태입니다.
        </p>
        <div className="grid">
          <div>
            <h2>포함된 구성</h2>
            <ul className="routeList">
              <li>App Router 기반 Next.js 초기 구조</li>
              <li>비밀번호 입력 후 쿠키 세션 유지</li>
              <li>미들웨어 기반 전역 보호 라우팅</li>
              <li>Dockerfile, docker-compose, 서비스 정보 파일</li>
            </ul>
          </div>
          <div>
            <h2>핵심 값</h2>
            <ul className="metaList">
              <li>
                Access cookie: <code>{ACCESS_COOKIE_NAME}</code>
              </li>
              <li>
                Auth value: <code>{AUTHENTICATED_COOKIE_VALUE}</code>
              </li>
              <li>
                Default port: <code>3201</code>
              </li>
            </ul>
          </div>
        </div>
        <div className="actions">
          <Link href="/workspace">보호된 페이지 보기</Link>
          <form action="/api/auth/logout" method="post">
            <button className="ghostButton" type="submit">
              로그아웃
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
