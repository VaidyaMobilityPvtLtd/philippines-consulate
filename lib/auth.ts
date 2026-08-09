/**
 * Admin auth helpers.
 *
 * Approach: JWT is stored in an httpOnly cookie (`admin_token`) set by Next.js
 * route handlers after a successful Express login. Browser JS never sees the
 * token. Admin API calls go through `/api/admin/*` BFF proxies that attach
 * `Authorization: Bearer <token>` when forwarding to Express.
 */

export const ADMIN_TOKEN_COOKIE = "admin_token";

export const ADMIN_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 days — matches typical JWT_EXPIRES_IN
};
