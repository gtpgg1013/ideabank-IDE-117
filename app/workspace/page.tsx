export default function WorkspacePage() {
  return (
    <main className="home">
      <section className="homeCard">
        <p className="kicker">Protected Route</p>
        <h1>인증된 사용자만 접근할 수 있습니다.</h1>
        <p className="lead">
          이 페이지는 미들웨어가 인증 쿠키를 확인한 뒤에만 열립니다.
        </p>
      </section>
    </main>
  );
}
