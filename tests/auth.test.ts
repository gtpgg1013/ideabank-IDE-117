import test from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_ACCESS_PASSWORD,
  AUTHENTICATED_COOKIE_VALUE,
  getAccessPassword,
  isAuthenticatedCookieValue,
  verifyAccessPassword,
} from "../lib/auth.ts";

test("getAccessPassword falls back to default password", () => {
  assert.equal(getAccessPassword(undefined), DEFAULT_ACCESS_PASSWORD);
  assert.equal(getAccessPassword(""), DEFAULT_ACCESS_PASSWORD);
});

test("verifyAccessPassword matches against env password or default", () => {
  assert.equal(verifyAccessPassword("custom-pass", "custom-pass"), true);
  assert.equal(verifyAccessPassword("wrong", "custom-pass"), false);
  assert.equal(verifyAccessPassword(DEFAULT_ACCESS_PASSWORD, undefined), true);
});

test("isAuthenticatedCookieValue only accepts the granted cookie value", () => {
  assert.equal(isAuthenticatedCookieValue(AUTHENTICATED_COOKIE_VALUE), true);
  assert.equal(isAuthenticatedCookieValue("denied"), false);
  assert.equal(isAuthenticatedCookieValue(undefined), false);
});
