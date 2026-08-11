/**
 * In-memory mock data store for offline / demo mode.
 *
 * When NEXT_PUBLIC_USE_API !== "true" the Next.js BFF route handlers use these
 * helpers instead of proxying to the Express backend. Data lives only for the
 * lifetime of the Node process and resets on restart.
 */

import { newsItems as staticNews } from "@/content/news";
import type {
  AdminUser,
  ContactSubmission,
  CreateNewsInput,
  FeedbackSubmission,
  NewsCategory,
  NewsItem,
  SubmissionStatus,
  UpdateNewsInput,
} from "@/lib/api-types";

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

export const MOCK_ADMIN_TOKEN = "mock-admin-token";

export const MOCK_ADMIN_USER: AdminUser = {
  id: "mock-admin-1",
  email: "admin@consulate.test",
  name: "Admin (Demo)",
};

export function authenticateMockAdmin(
  email: string,
  password: string,
): AdminUser | null {
  // In demo mode accept any non-empty credentials.
  if (email && password) return MOCK_ADMIN_USER;
  return null;
}

export function isMockAdminToken(token: string | undefined): boolean {
  return token === MOCK_ADMIN_TOKEN;
}

// ---------------------------------------------------------------------------
// News
// ---------------------------------------------------------------------------

let nextNewsId = 100;

function seedNewsItems(): NewsItem[] {
  return staticNews.map((item, index) => ({
    id: `mock-${index + 1}`,
    slug: item.slug,
    title: item.title,
    date: item.date,
    category: item.category as NewsCategory,
    summary: item.summary,
    body: item.body,
    published: true,
    createdAt: new Date(item.date).toISOString(),
    updatedAt: new Date(item.date).toISOString(),
  }));
}

let mockNews: NewsItem[] = seedNewsItems();

export function listMockNews(): NewsItem[] {
  return [...mockNews];
}

export function createMockNews(input: CreateNewsInput): NewsItem {
  const id = `mock-${++nextNewsId}`;
  const now = new Date().toISOString();
  const item: NewsItem = {
    id,
    slug: input.slug,
    title: input.title,
    date: input.date,
    category: input.category,
    summary: input.summary,
    body: input.body,
    published: input.published ?? true,
    createdAt: now,
    updatedAt: now,
  };
  mockNews.unshift(item);
  return item;
}

export function updateMockNews(id: string, input: UpdateNewsInput): NewsItem {
  const index = mockNews.findIndex((n) => n.id === id);
  if (index === -1) {
    const err = new Error("News item not found") as Error & { status: number };
    err.status = 404;
    throw err;
  }
  const updated: NewsItem = {
    ...mockNews[index],
    ...input,
    updatedAt: new Date().toISOString(),
  };
  mockNews[index] = updated;
  return updated;
}

export function deleteMockNews(id: string): void {
  const index = mockNews.findIndex((n) => n.id === id);
  if (index === -1) {
    const err = new Error("News item not found") as Error & { status: number };
    err.status = 404;
    throw err;
  }
  mockNews.splice(index, 1);
}

// ---------------------------------------------------------------------------
// Contact submissions
// ---------------------------------------------------------------------------

const mockContacts: ContactSubmission[] = [];

export function listMockContacts(): ContactSubmission[] {
  return [...mockContacts];
}

export function updateMockContactStatus(
  id: string,
  status: SubmissionStatus,
): ContactSubmission {
  const item = mockContacts.find((c) => c.id === id);
  if (!item) {
    const err = new Error("Contact not found") as Error & { status: number };
    err.status = 404;
    throw err;
  }
  item.status = status;
  return item;
}

// ---------------------------------------------------------------------------
// Feedback submissions
// ---------------------------------------------------------------------------

const mockFeedback: FeedbackSubmission[] = [];

export function listMockFeedback(): FeedbackSubmission[] {
  return [...mockFeedback];
}

export function updateMockFeedbackStatus(
  id: string,
  status: SubmissionStatus,
): FeedbackSubmission {
  const item = mockFeedback.find((f) => f.id === id);
  if (!item) {
    const err = new Error("Feedback not found") as Error & { status: number };
    err.status = 404;
    throw err;
  }
  item.status = status;
  return item;
}
