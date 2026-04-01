export const ACCESS_COOKIE_NAME = "ideabank-access";
export const AUTHENTICATED_COOKIE_VALUE = "granted";
export const DEFAULT_ACCESS_PASSWORD = "ideabank2026";

export function getAccessPassword(envPassword = process.env.ACCESS_PASSWORD): string {
  return envPassword && envPassword.length > 0
    ? envPassword
    : DEFAULT_ACCESS_PASSWORD;
}

export function verifyAccessPassword(input: string, envPassword?: string): boolean {
  return input === getAccessPassword(envPassword);
}

export function isAuthenticatedCookieValue(value?: string): boolean {
  return value === AUTHENTICATED_COOKIE_VALUE;
}
