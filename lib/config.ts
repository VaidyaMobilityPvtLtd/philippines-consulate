/**
 * Feature flags for API integration.
 *
 * Default is mock/offline so the public site and admin UI work without the
 * Express backend. Set NEXT_PUBLIC_USE_API=true to reconnect later.
 */
export function isApiEnabled(): boolean {
  return process.env.NEXT_PUBLIC_USE_API === "true";
}
