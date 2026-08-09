import { newsItems as staticNews } from "@/content/news";
import type {
  AdminUser,
  ContactSubmission,
  CreateNewsInput,
  FeedbackSubmission,
  NewsItem,
  SubmissionStatus,
  UpdateNewsInput,
} from "@/lib/api-types";

/** Demo credentials for offline admin UI. */
export const MOCK_ADMIN_CREDENTIALS = {
  email: "admin@consulate.local",
  password: "password",
} as const;

export const MOCK_ADMIN_USER: AdminUser = {
  id: "mock-admin-1",
  email: MOCK_ADMIN_CREDENTIALS.email,
  name: "Consulate Admin",
};

/** Cookie value used when logged in via mock auth (not a real JWT). */
export const MOCK_ADMIN_TOKEN = "mock-admin-session";

function nowIso() {
  return new Date().toISOString();
}

function seedNews(): NewsItem[] {
  return staticNews.map((item, index) => ({
    id: `news-${index + 1}`,
    slug: item.slug,
    title: item.title,
    date: item.date,
    category: item.category,
    summary: item.summary,
    body: item.body,
    published: true,
    createdAt: `${item.date}T09:00:00.000Z`,
    updatedAt: `${item.date}T09:00:00.000Z`,
  }));
}

function seedContacts(): ContactSubmission[] {
  return [
    {
      id: "contact-1",
      name: "Anita Sharma",
      email: "anita.sharma@example.com",
      phone: "+977-9801234567",
      topic: "visa",
      subject: "Tourist visa appointment request",
      message:
        "I would like to schedule an appointment for a pleasure/business visa. I have a complete set of documents ready. Please advise available dates next week.",
      status: "new",
      createdAt: "2026-08-06T08:15:00.000Z",
    },
    {
      id: "contact-2",
      name: "Miguel Reyes",
      email: "miguel.reyes@example.com",
      phone: "+977-9811122233",
      topic: "passport",
      subject: "Passport renewal requirements",
      message:
        "My ePassport expires in four months. Can I renew it at the Kathmandu Consulate while residing in Nepal? What is the current processing time?",
      status: "read",
      createdAt: "2026-08-04T11:40:00.000Z",
    },
    {
      id: "contact-3",
      name: "Sita Gurung",
      email: "sita.gurung@example.com",
      topic: "registration",
      subject: "Report of birth guidance",
      message:
        "Our child was born in Kathmandu last month. We need the checklist for Report of Birth and whether both parents must appear.",
      status: "new",
      createdAt: "2026-08-07T14:05:00.000Z",
    },
  ];
}

function seedFeedback(): FeedbackSubmission[] {
  return [
    {
      id: "feedback-1",
      firstName: "Priya",
      lastName: "Thapa",
      email: "priya.thapa@example.com",
      phone: null,
      city: "Kathmandu",
      country: "Nepal",
      subject: "Clearer office-hour notice",
      type: "Suggestions",
      message:
        "It would help visitors if holiday closures were posted a week in advance on the news page.",
      status: "new",
      createdAt: "2026-08-05T09:20:00.000Z",
    },
    {
      id: "feedback-2",
      firstName: "James",
      lastName: "Cruz",
      email: "james.cruz@example.com",
      phone: "+977-9844455566",
      city: "Lalitpur",
      country: "Nepal",
      subject: "Helpful staff",
      type: "Comments",
      message:
        "The consular officer who assisted with my passport renewal was courteous and thorough. Thank you.",
      status: "read",
      createdAt: "2026-08-02T16:10:00.000Z",
    },
  ];
}

type MockStore = {
  news: NewsItem[];
  contacts: ContactSubmission[];
  feedback: FeedbackSubmission[];
};

declare global {
  // Persist mock store across Next.js hot reloads in development.
  var __consulateMockStore: MockStore | undefined;
}

function getStore(): MockStore {
  if (!globalThis.__consulateMockStore) {
    globalThis.__consulateMockStore = {
      news: seedNews(),
      contacts: seedContacts(),
      feedback: seedFeedback(),
    };
  }
  return globalThis.__consulateMockStore;
}

export function isMockAdminToken(token: string | undefined | null): boolean {
  return token === MOCK_ADMIN_TOKEN;
}

export function authenticateMockAdmin(email: string, password: string): AdminUser | null {
  if (
    email.trim().toLowerCase() === MOCK_ADMIN_CREDENTIALS.email &&
    password === MOCK_ADMIN_CREDENTIALS.password
  ) {
    return MOCK_ADMIN_USER;
  }
  return null;
}

export function listMockNews(): NewsItem[] {
  return [...getStore().news].sort((a, b) => b.date.localeCompare(a.date));
}

export function getMockNewsById(id: string): NewsItem | null {
  return getStore().news.find((item) => item.id === id) ?? null;
}

export function createMockNews(input: CreateNewsInput): NewsItem {
  const store = getStore();
  if (store.news.some((n) => n.slug === input.slug)) {
    throw Object.assign(new Error("A news item with this slug already exists"), {
      status: 409,
    });
  }
  const stamp = nowIso();
  const item: NewsItem = {
    id: `news-${Date.now()}`,
    slug: input.slug,
    title: input.title,
    date: input.date,
    category: input.category,
    summary: input.summary,
    body: input.body,
    published: input.published ?? true,
    createdAt: stamp,
    updatedAt: stamp,
  };
  store.news.unshift(item);
  return item;
}

export function updateMockNews(id: string, input: UpdateNewsInput): NewsItem {
  const store = getStore();
  const index = store.news.findIndex((item) => item.id === id);
  if (index < 0) {
    throw Object.assign(new Error("News item not found"), { status: 404 });
  }
  if (input.slug && store.news.some((n) => n.slug === input.slug && n.id !== id)) {
    throw Object.assign(new Error("A news item with this slug already exists"), {
      status: 409,
    });
  }
  const current = store.news[index];
  const updated: NewsItem = {
    ...current,
    ...input,
    updatedAt: nowIso(),
  };
  store.news[index] = updated;
  return updated;
}

export function deleteMockNews(id: string): void {
  const store = getStore();
  const next = store.news.filter((item) => item.id !== id);
  if (next.length === store.news.length) {
    throw Object.assign(new Error("News item not found"), { status: 404 });
  }
  store.news = next;
}

export function listMockContacts(): ContactSubmission[] {
  return [...getStore().contacts].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function updateMockContactStatus(
  id: string,
  status: SubmissionStatus,
): ContactSubmission {
  const store = getStore();
  const item = store.contacts.find((c) => c.id === id);
  if (!item) {
    throw Object.assign(new Error("Contact submission not found"), { status: 404 });
  }
  item.status = status;
  return item;
}

export function listMockFeedback(): FeedbackSubmission[] {
  return [...getStore().feedback].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function updateMockFeedbackStatus(
  id: string,
  status: SubmissionStatus,
): FeedbackSubmission {
  const store = getStore();
  const item = store.feedback.find((f) => f.id === id);
  if (!item) {
    throw Object.assign(new Error("Feedback submission not found"), { status: 404 });
  }
  item.status = status;
  return item;
}
