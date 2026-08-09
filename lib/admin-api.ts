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

async function adminFetch<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(path, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
      credentials: "same-origin",
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
  return adminFetch<{ user: AdminUser }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function logoutAdmin() {
  return adminFetch<{ ok: boolean }>("/api/auth/logout", { method: "POST" });
}

export async function fetchAdminMe() {
  return adminFetch<{ user: AdminUser }>("/api/auth/me");
}

export async function listAdminNews() {
  return adminFetch<{ items: NewsItem[] }>("/api/admin/news");
}

export async function createAdminNews(input: CreateNewsInput) {
  return adminFetch<{ item: NewsItem }>("/api/admin/news", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function updateAdminNews(id: string, input: UpdateNewsInput) {
  return adminFetch<{ item: NewsItem }>(`/api/admin/news/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export async function deleteAdminNews(id: string) {
  return adminFetch<void>(`/api/admin/news/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export async function listAdminContacts() {
  return adminFetch<{ items: ContactSubmission[] }>("/api/admin/contact");
}

export async function updateContactStatus(id: string, status: SubmissionStatus) {
  return adminFetch<{ item: ContactSubmission }>(
    `/api/admin/contact/${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      body: JSON.stringify({ status }),
    },
  );
}

export async function listAdminFeedback() {
  return adminFetch<{ items: FeedbackSubmission[] }>("/api/admin/feedback");
}

export async function updateFeedbackStatus(id: string, status: SubmissionStatus) {
  return adminFetch<{ item: FeedbackSubmission }>(
    `/api/admin/feedback/${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      body: JSON.stringify({ status }),
    },
  );
}
