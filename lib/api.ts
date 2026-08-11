import type {
  ApiErrorBody,
  CreateContactInput,
  CreateFeedbackInput,
  NewsItem,
} from "@/lib/api-types";
import { isApiEnabled } from "@/lib/config";

const DEFAULT_API_URL = "http://localhost:4000";

export function getApiBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_API_URL ?? DEFAULT_API_URL).replace(/\/$/, "");
}

export class ApiError extends Error {
  status: number;
  details?: unknown;

  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

async function parseJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new ApiError(res.status, "Invalid JSON response from API");
  }
}

type RequestOptions = RequestInit & {
  next?: { revalidate?: number | false; tags?: string[] };
};

async function request<T>(path: string, init?: RequestOptions): Promise<T> {
  const url = `${getApiBaseUrl()}${path}`;
  let res: Response;
  try {
    res = await fetch(url, {
      ...init,
      headers: {
        Accept: "application/json",
        ...(init?.body ? { "Content-Type": "application/json" } : {}),
        ...(init?.headers ?? {}),
      },
    });
  } catch {
    throw new ApiError(0, "Unable to reach the Consulate API. Please try again later.");
  }

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

export async function fetchPublishedNews(): Promise<{
  items: NewsItem[];
}> {
  const data = await request<{ items: NewsItem[] }>("/api/news", {
    next: { revalidate: 60 },
  });
  return { items: data.items ?? [] };
}

export async function fetchNewsBySlug(slug: string): Promise<{
  item: NewsItem | null;
}> {
  try {
    const data = await request<{ item: NewsItem }>(`/api/news/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    return { item: data.item };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { item: null };
    }
    throw err;
  }
}

export async function submitContact(input: CreateContactInput): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const res = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new ApiError(res.status, errorData.error || "Failed to submit contact", errorData.details);
  }
}

export async function submitFeedback(input: CreateFeedbackInput): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const res = await fetch(`${baseUrl}/api/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new ApiError(res.status, errorData.error || "Failed to submit feedback", errorData.details);
  }
}

/** Format Zod flatten details from the API into a readable string. */
export function formatApiError(err: unknown): string {
  if (!(err instanceof ApiError)) {
    return "Something went wrong. Please try again.";
  }
  if (err.details && typeof err.details === "object") {
    const details = err.details as {
      fieldErrors?: Record<string, string[] | undefined>;
      formErrors?: string[];
    };
    const fieldMsgs = Object.entries(details.fieldErrors ?? {})
      .flatMap(([field, msgs]) => (msgs ?? []).map((m) => `${field}: ${m}`));
    const formMsgs = details.formErrors ?? [];
    const all = [...formMsgs, ...fieldMsgs];
    if (all.length) return all.join(" · ");
  }
  return err.message;
}
