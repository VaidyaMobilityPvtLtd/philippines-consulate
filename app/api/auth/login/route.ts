import { NextResponse } from "next/server";
import {
  authenticateMockAdmin,
  MOCK_ADMIN_TOKEN,
} from "@/lib/admin-mock";
import { getApiBaseUrl } from "@/lib/api";
import { ADMIN_COOKIE_OPTIONS, ADMIN_TOKEN_COOKIE } from "@/lib/auth";
import { isApiEnabled } from "@/lib/config";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email =
    typeof body === "object" && body && "email" in body
      ? String((body as { email: unknown }).email ?? "")
      : "";
  const password =
    typeof body === "object" && body && "password" in body
      ? String((body as { password: unknown }).password ?? "")
      : "";

  if (!isApiEnabled()) {
    const user = authenticateMockAdmin(email, password);
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }
    const res = NextResponse.json({ user });
    res.cookies.set(ADMIN_TOKEN_COOKIE, MOCK_ADMIN_TOKEN, ADMIN_COOKIE_OPTIONS);
    return res;
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${getApiBaseUrl()}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach the Consulate API" },
      { status: 503 },
    );
  }

  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    return NextResponse.json(data, { status: upstream.status });
  }

  const token = typeof data.token === "string" ? data.token : null;
  if (!token) {
    return NextResponse.json({ error: "Login response missing token" }, { status: 502 });
  }

  const res = NextResponse.json({ user: data.user });
  res.cookies.set(ADMIN_TOKEN_COOKIE, token, ADMIN_COOKIE_OPTIONS);
  return res;
}
