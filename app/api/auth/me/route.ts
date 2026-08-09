import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { isMockAdminToken, MOCK_ADMIN_USER } from "@/lib/admin-mock";
import { getApiBaseUrl } from "@/lib/api";
import { ADMIN_TOKEN_COOKIE } from "@/lib/auth";
import { isApiEnabled } from "@/lib/config";

export async function GET() {
  const jar = await cookies();
  const token = jar.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  if (!isApiEnabled()) {
    if (!isMockAdminToken(token)) {
      const res = NextResponse.json({ error: "Authentication required" }, { status: 401 });
      res.cookies.set(ADMIN_TOKEN_COOKIE, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0,
      });
      return res;
    }
    return NextResponse.json({ user: MOCK_ADMIN_USER });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${getApiBaseUrl()}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach the Consulate API" },
      { status: 503 },
    );
  }

  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    const res = NextResponse.json(data, { status: upstream.status });
    if (upstream.status === 401) {
      res.cookies.set(ADMIN_TOKEN_COOKIE, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0,
      });
    }
    return res;
  }

  return NextResponse.json(data);
}
