/** Shared types aligned with the Express + Prisma API. */

export type NewsCategory = "Announcement" | "Advisory" | "Notice";

export type ContactTopic =
  | "visa"
  | "passport"
  | "registration"
  | "appointment"
  | "general";

export type FeedbackType = "Suggestions" | "Comments";

export type SubmissionStatus = "new" | "read" | "archived";

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  body: string | string[];
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateNewsInput = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  body: string | string[];
  published?: boolean;
};

export type UpdateNewsInput = Partial<CreateNewsInput>;

export type CreateContactInput = {
  name: string;
  email: string;
  phone?: string;
  topic: ContactTopic;
  subject: string;
  message: string;
};

export type ContactSubmission = CreateContactInput & {
  id: string;
  status: SubmissionStatus;
  createdAt: string;
};

export type CreateFeedbackInput = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  city?: string;
  country?: string;
  subject?: string;
  type?: FeedbackType;
  message?: string;
};

export type FeedbackSubmission = {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  city: string | null;
  country: string | null;
  subject: string | null;
  type: FeedbackType;
  message: string | null;
  status: SubmissionStatus;
  createdAt: string;
};

export type AdminUser = {
  id: string;
  email: string;
  name: string;
};

export type ApiErrorBody = {
  error?: string;
  details?: unknown;
};
