"use client";

import { FormEvent, useState } from "react";

export function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      window.location.reload();
      return;
    }

    setIsSubmitting(false);
    setError("비밀번호가 올바르지 않습니다.");
  }

  return (
    <main className="shell">
      <section className="panel">
        <p className="eyebrow">IdeaBank Service Access</p>
        <h1>비밀번호를 입력해 서비스를 확인하세요.</h1>
        <p className="description">
          이 프로젝트는 내부 검토용으로 보호됩니다. 환경변수
          <code> ACCESS_PASSWORD </code>
          로 접근 비밀번호를 변경할 수 있습니다.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="password">접근 비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="비밀번호 입력"
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "확인 중..." : "입장하기"}
          </button>
          {error ? <p className="error">{error}</p> : null}
        </form>
      </section>
    </main>
  );
}
