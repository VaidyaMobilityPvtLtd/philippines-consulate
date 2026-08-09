import { cookies } from "next/headers";
import {
  getMockNewsById,
  listMockContacts,
  listMockFeedback,
  listMockNews,
} from "@/lib/admin-mock";
import { getApiBaseUrl } from "@/lib/api";
import type { ContactSubmission, FeedbackSubmission, NewsItem } from "@/lib/api-types";
import { ADMIN_TOKEN_COOKIE } from "@/lib/auth";
import { isApiEnabled } from "@/lib/config";

async function adminUpstreamGet<T>(path: string): Promise<T | null> {
  const jar = await cookies();
  const token = jar.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!token) return null;
  try {
    const res = await fetch(`${getApiBaseUrl()}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function loadAdminNews(): Promise<NewsItem[]> {
  if (!isApiEnabled()) return listMockNews();
  const data = await adminUpstreamGet<{ items: NewsItem[] }>("/api/admin/news");
  return data?.items ?? [];
}

export async function loadAdminNewsById(id: string): Promise<NewsItem | null> {
  if (!isApiEnabled()) return getMockNewsById(id);
  const items = await loadAdminNews();
  return items.find((item) => item.id === id) ?? null;
}

export async function loadAdminContacts(): Promise<ContactSubmission[]> {
  if (!isApiEnabled()) return listMockContacts();
  const data = await adminUpstreamGet<{ items: ContactSubmission[] }>("/api/admin/contact");
  return data?.items ?? [];
}

export async function loadAdminFeedback(): Promise<FeedbackSubmission[]> {
  if (!isApiEnabled()) return listMockFeedback();
  const data = await adminUpstreamGet<{ items: FeedbackSubmission[] }>("/api/admin/feedback");
  return data?.items ?? [];
}
