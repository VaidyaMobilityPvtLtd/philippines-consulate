import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getApiBaseUrl } from "@/lib/api";
import {
  isMockAdminToken,
  MOCK_ADMIN_USER,
} from "@/lib/admin-mock";
import type { AdminUser } from "@/lib/api-types";
import { ADMIN_TOKEN_COOKIE } from "@/lib/auth";
import { isApiEnabled } from "@/lib/config";

export async function getAdminUser(): Promise<AdminUser | null> {
  const jar = await cookies();
  const token = jar.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!token) return null;

  if (!isApiEnabled()) {
    return isMockAdminToken(token) ? MOCK_ADMIN_USER : null;
  }

  try {
    const res = await fetch(`${getApiBaseUrl()}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { user?: AdminUser };
    return data.user ?? null;
  } catch {
    return null;
  }
}

export async function requireAdminUser(): Promise<AdminUser> {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");
  return user;
}
