"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  createAdminNews,
  formatApiError,
  updateAdminNews,
} from "@/lib/admin-api";
import type { CreateNewsInput, NewsCategory, NewsItem } from "@/lib/api-types";
import {
  PrimaryButton,
  SecondaryButton,
  adminFieldClass,
  adminLabelClass,
} from "@/components/admin/ui";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function NewsEditor({ item }: { item?: NewsItem }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [title, setTitle] = useState(item?.title ?? "");
  const [slug, setSlug] = useState(item?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(item));
  const [bodyText, setBodyText] = useState((item?.body ?? [""]).join("\n\n"));
  const [published, setPublished] = useState(item?.published ?? true);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const data = new FormData(e.currentTarget);
    const body = bodyText
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    const payload: CreateNewsInput = {
      slug: String(data.get("slug") ?? "").trim(),
      title: String(data.get("title") ?? "").trim(),
      date: String(data.get("date") ?? "").trim(),
      category: String(data.get("category") ?? "Notice") as NewsCategory,
      summary: String(data.get("summary") ?? "").trim(),
      body: body.length ? body : [""],
      published,
    };

    try {
      if (item) {
        await updateAdminNews(item.id, payload);
      } else {
        await createAdminNews(payload);
      }
      router.push("/admin/news");
      router.refresh();
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error ? (
        <div
          role="alert"
          className="rounded-lg border border-notice-border bg-notice-bg px-3.5 py-2.5 text-sm text-notice-ink"
        >
          {error}
        </div>
      ) : null}

      <section className="rounded-xl border border-line bg-surface p-5 sm:p-6">
        <h2 className="font-heading text-base font-semibold text-ink">Basics</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Title, URL slug, and how this appears in listings.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="title" className={adminLabelClass}>
              Title
            </label>
            <input
              id="title"
              name="title"
              required
              className={adminFieldClass}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (!slugTouched) setSlug(slugify(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="slug" className={adminLabelClass}>
              Slug
            </label>
            <input
              id="slug"
              name="slug"
              required
              pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
              title="Lowercase kebab-case"
              className={`${adminFieldClass} font-mono text-[13px]`}
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="date" className={adminLabelClass}>
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              defaultValue={item?.date ?? today}
              className={adminFieldClass}
            />
          </div>
          <div>
            <label htmlFor="category" className={adminLabelClass}>
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={item?.category ?? "Notice"}
              className={adminFieldClass}
            >
              <option value="Announcement">Announcement</option>
              <option value="Advisory">Advisory</option>
              <option value="Notice">Notice</option>
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-line bg-surface-muted/50 px-3.5 py-2.5">
              <span className="text-sm font-medium text-ink">Published</span>
              <input
                type="checkbox"
                name="published"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4 rounded border-line text-primary focus:ring-primary"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-line bg-surface p-5 sm:p-6">
        <h2 className="font-heading text-base font-semibold text-ink">Content</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Summary for cards and teaser lists; body for the full article.
        </p>
        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="summary" className={adminLabelClass}>
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              required
              rows={3}
              defaultValue={item?.summary ?? ""}
              className={adminFieldClass}
            />
          </div>
          <div>
            <label htmlFor="body" className={adminLabelClass}>
              Body paragraphs
            </label>
            <p className="mb-1.5 text-xs text-ink-muted">
              Separate paragraphs with a blank line.
            </p>
            <textarea
              id="body"
              required
              rows={10}
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              className={`${adminFieldClass} min-h-[220px] leading-relaxed`}
            />
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 -mx-1 flex flex-wrap items-center gap-3 border-t border-line bg-surface-muted/95 px-1 py-4 backdrop-blur-sm">
        <PrimaryButton type="submit" disabled={pending}>
          {pending ? "Saving…" : item ? "Save changes" : "Create news"}
        </PrimaryButton>
        <SecondaryButton
          type="button"
          disabled={pending}
          onClick={() => router.push("/admin/news")}
        >
          Cancel
        </SecondaryButton>
        {pending ? (
          <span className="text-sm text-ink-muted">Saving your changes…</span>
        ) : null}
      </div>
    </form>
  );
}
