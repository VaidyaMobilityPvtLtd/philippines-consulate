"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { deleteAdminNews, formatApiError, updateAdminNews } from "@/lib/admin-api";
import type { NewsItem } from "@/lib/api-types";
import { EmptyState, FlashMessage, StatusBadge } from "@/components/admin/ui";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function NewsTable({ items }: { items: NewsItem[] }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const clearFlash = useCallback(() => setFlash(null), []);

  async function togglePublish(item: NewsItem) {
    setError(null);
    setBusyId(item.id);
    try {
      await updateAdminNews(item.id, { published: !item.published });
      setFlash(item.published ? "Unpublished." : "Published.");
      router.refresh();
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setBusyId(null);
    }
  }

  async function onDelete(item: NewsItem) {
    if (!confirm(`Delete “${item.title}”? This cannot be undone.`)) return;
    setError(null);
    setBusyId(item.id);
    try {
      await deleteAdminNews(item.id);
      setFlash("News item deleted.");
      router.refresh();
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <FlashMessage message={flash} onDismiss={clearFlash} />
      {error ? (
        <div
          role="alert"
          className="mb-4 rounded-lg border border-notice-border bg-notice-bg px-3.5 py-2.5 text-sm text-notice-ink"
        >
          {error}
        </div>
      ) : null}

      {items.length === 0 ? (
        <EmptyState
          title="No news items yet"
          description="Create an announcement, advisory, or notice to publish on the public site."
          action={
            <Link
              href="/admin/news/new"
              className="inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Create the first item
            </Link>
          }
        />
      ) : (
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-line bg-surface-muted/80 text-[11px] uppercase tracking-wider text-ink-muted">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">Title</th>
                  <th className="px-4 py-2.5 font-semibold">Date</th>
                  <th className="hidden px-4 py-2.5 font-semibold sm:table-cell">
                    Category
                  </th>
                  <th className="px-4 py-2.5 font-semibold">Status</th>
                  <th className="px-4 py-2.5 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {items.map((item) => {
                  const busy = busyId === item.id;
                  return (
                    <tr
                      key={item.id}
                      className="transition-colors hover:bg-surface-muted/60"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/news/${item.id}`}
                          className="font-medium text-ink hover:text-primary"
                        >
                          {item.title}
                        </Link>
                        <p className="mt-0.5 font-mono text-[11px] text-ink-muted">
                          {item.slug}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-ink-soft">
                        {formatDate(item.date)}
                      </td>
                      <td className="hidden px-4 py-3 text-ink-soft sm:table-cell">
                        {item.category}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge tone={item.published ? "published" : "draft"}>
                          {item.published ? "Published" : "Draft"}
                        </StatusBadge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1">
                          <Link
                            href={`/admin/news/${item.id}`}
                            className="text-sm font-semibold text-primary hover:underline"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => togglePublish(item)}
                            className="text-sm font-semibold text-ink-soft hover:text-ink hover:underline disabled:opacity-50"
                          >
                            {busy
                              ? "…"
                              : item.published
                                ? "Unpublish"
                                : "Publish"}
                          </button>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => onDelete(item)}
                            className="text-sm font-semibold text-notice-ink hover:underline disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="border-t border-line bg-surface-muted/50 px-4 py-2 text-xs text-ink-muted">
            {items.length} item{items.length === 1 ? "" : "s"}
          </div>
        </div>
      )}
    </div>
  );
}
