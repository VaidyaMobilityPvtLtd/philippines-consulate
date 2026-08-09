import { newsItems as staticNews } from "@/content/news";
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

/** Map static content items into the API shape for offline use. */
function staticAsApiNews(): NewsItem[] {
  return staticNews.map((item, index) => ({
    id: `static-${index}`,
    slug: item.slug,
    title: item.title,
    date: item.date,
    category: item.category,
    summary: item.summary,
    body: item.body,
    published: true,
  }));
}

/**
 * Fetch published news.
 * Mock mode uses static content from content/news.ts (no Express).
 * API mode falls back to static content if Express is unreachable.
 */
export async function fetchPublishedNews(): Promise<{
  items: NewsItem[];
  source: "api" | "static" | "fallback";
}> {
  if (!isApiEnabled()) {
    return { items: staticAsApiNews(), source: "static" };
  }

  try {
    const data = await request<{ items: NewsItem[] }>("/api/news", {
      next: { revalidate: 60 },
    });
    return { items: data.items ?? [], source: "api" };
  } catch {
    return { items: staticAsApiNews(), source: "fallback" };
  }
}

export async function fetchNewsBySlug(slug: string): Promise<{
  item: NewsItem | null;
  source: "api" | "static" | "fallback";
}> {
  if (!isApiEnabled()) {
    const item = staticAsApiNews().find((n) => n.slug === slug) ?? null;
    return { item, source: "static" };
  }

  try {
    const data = await request<{ item: NewsItem }>(`/api/news/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    return { item: data.item, source: "api" };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { item: null, source: "api" };
    }
    const fallback = staticAsApiNews().find((n) => n.slug === slug) ?? null;
    return { item: fallback, source: "fallback" };
  }
}

export async function submitContact(input: CreateContactInput): Promise<void> {
  if (!isApiEnabled()) {
    // Local demo: accept the submission without contacting Express.
    await new Promise((r) => setTimeout(r, 350));
    void input;
    return;
  }
  await request("/api/contact", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function submitFeedback(input: CreateFeedbackInput): Promise<void> {
  if (!isApiEnabled()) {
    await new Promise((r) => setTimeout(r, 350));
    void input;
    return;
  }
  await request("/api/feedback", {
    method: "POST",
    body: JSON.stringify(input),
  });
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
