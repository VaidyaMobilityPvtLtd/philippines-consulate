import type {
  AdminUser,
  ApiErrorBody,
  ContactSubmission,
  CreateNewsInput,
  FeedbackSubmission,
  NewsItem,
  SubmissionStatus,
  UpdateNewsInput,
} from "@/lib/api-types";
import { ApiError, formatApiError } from "@/lib/api";

export { formatApiError };

async function parseJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new ApiError(res.status, "Invalid JSON response");
  }
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

function apiUrl(path: string) {
  return `${baseUrl}${path}`;
}

// Browser-only fallback: reads the admin_token cookie set at login.
// Returns undefined during SSR — server callers must pass a token explicitly.
function getAdminToken(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(/(?:^|;\s*)admin_token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

async function adminFetch<T>(
  path: string,
  init?: RequestInit,
  token?: string,
): Promise<T> {
  const authToken = token ?? getAdminToken();

  let res: Response;
  try {
    res = await fetch(path, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        ...(init?.headers ?? {}),
      },
    });
  } catch {
    throw new ApiError(0, "Unable to reach the admin API. Is the server running?");
  }

  if (res.status === 204) return undefined as T;

  const data = await parseJson<T & ApiErrorBody>(res);
  if (!res.ok) {
    throw new ApiError(
      res.status,
      data.error ?? `Request failed (${res.status})`,
      data.details,
    );
  }
  return data;
}

export async function loginAdmin(email: string, password: string) {
  return adminFetch<{ user: AdminUser; token: string }>(apiUrl("/api/auth/login"), {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function logoutAdmin(token?: string) {
  return adminFetch<{ ok: boolean }>(apiUrl("/api/auth/logout"), { method: "POST" }, token);
}

export async function fetchAdminMe(token?: string) {
  return adminFetch<{ user: AdminUser }>(apiUrl("/api/auth/me"), undefined, token);
}

export async function listAdminNews(token?: string) {
  return adminFetch<{ items: NewsItem[] }>(apiUrl("/api/admin/news"), undefined, token);
}

export async function createAdminNews(input: CreateNewsInput, token?: string) {
  return adminFetch<{ item: NewsItem }>(
    apiUrl("/api/admin/news"),
    { method: "POST", body: JSON.stringify(input) },
    token,
  );
}

export async function updateAdminNews(id: string, input: UpdateNewsInput, token?: string) {
  return adminFetch<{ item: NewsItem }>(
    apiUrl(`/api/admin/news/${encodeURIComponent(id)}`),
    { method: "PATCH", body: JSON.stringify(input) },
    token,
  );
}

export async function deleteAdminNews(id: string, token?: string) {
  return adminFetch<void>(
    apiUrl(`/api/admin/news/${encodeURIComponent(id)}`),
    { method: "DELETE" },
    token,
  );
}

export async function listAdminContacts(token?: string) {
  return adminFetch<{ items: ContactSubmission[] }>(apiUrl("/api/admin/contact"), undefined, token);
}

export async function updateContactStatus(id: string, status: SubmissionStatus, token?: string) {
  return adminFetch<{ item: ContactSubmission }>(
    apiUrl(`/api/admin/contact/${encodeURIComponent(id)}`),
    { method: "PATCH", body: JSON.stringify({ status }) },
    token,
  );
}

export async function listAdminFeedback(token?: string) {
  return adminFetch<{ items: FeedbackSubmission[] }>(apiUrl("/api/admin/feedback"), undefined, token);
}

export async function updateFeedbackStatus(id: string, status: SubmissionStatus, token?: string) {
  return adminFetch<{ item: FeedbackSubmission }>(
    apiUrl(`/api/admin/feedback/${encodeURIComponent(id)}`),
    { method: "PATCH", body: JSON.stringify({ status }) },
    token,
  );
}