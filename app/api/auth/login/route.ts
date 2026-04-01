import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  ACCESS_COOKIE_NAME,
  AUTHENTICATED_COOKIE_VALUE,
  verifyAccessPassword,
} from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };
  const password = body.password ?? "";

  if (!verifyAccessPassword(password)) {
    return NextResponse.json(
      { ok: false, message: "Invalid password" },
      { status: 401 },
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(ACCESS_COOKIE_NAME, AUTHENTICATED_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({ ok: true });
}
