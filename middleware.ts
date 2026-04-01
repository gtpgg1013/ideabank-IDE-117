import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ACCESS_COOKIE_NAME, isAuthenticatedCookieValue } from "@/lib/auth";

const PUBLIC_PATHS = new Set(["/", "/api/auth/login"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api/auth/logout") ||
    PUBLIC_PATHS.has(pathname)
  ) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(ACCESS_COOKIE_NAME)?.value;

  if (isAuthenticatedCookieValue(cookieValue)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
