"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { formatApiError } from "@/lib/admin-api";
import type { SubmissionStatus } from "@/lib/api-types";
import {
  EmptyState,
  FlashMessage,
  StatusBadge,
  adminFieldClass,
  submissionStatusTone,
} from "@/components/admin/ui";

export type InboxRow = {
  id: string;
  status: SubmissionStatus;
  createdAt: string;
  title: string;
  subtitle: string;
  meta: string;
  body?: string | null;
};

const statuses: SubmissionStatus[] = ["new", "read", "archived"];

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function statusLabel(status: SubmissionStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function InboxTable({
  rows,
  onStatusChange,
  emptyLabel,
  emptyDescription,
}: {
  rows: InboxRow[];
  onStatusChange: (id: string, status: SubmissionStatus) => Promise<void>;
  emptyLabel: string;
  emptyDescription?: string;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const clearFlash = useCallback(() => setFlash(null), []);

  async function changeStatus(id: string, status: SubmissionStatus) {
    setError(null);
    setBusyId(id);
    try {
      await onStatusChange(id, status);
      setFlash(`Marked as ${status}.`);
      router.refresh();
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setBusyId(null);
    }
  }

  const newCount = rows.filter((r) => r.status === "new").length;

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

      {rows.length === 0 ? (
        <EmptyState title={emptyLabel} description={emptyDescription} />
      ) : (
        <>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted">
            <p>
              {rows.length} message{rows.length === 1 ? "" : "s"}
              {newCount > 0 ? (
                <span className="text-primary">
                  {" "}
                  · {newCount} new
                </span>
              ) : null}
            </p>
            <p className="hidden sm:block">Select a status to update, or expand to read.</p>
          </div>
          <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
            {rows.map((row) => {
              const open = expanded === row.id;
              const busy = busyId === row.id;
              return (
                <li
                  key={row.id}
                  className={
                    row.status === "new"
                      ? "bg-primary-50/35"
                      : "bg-surface"
                  }
                >
                  <div className="flex flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge tone={submissionStatusTone(row.status)}>
                          {row.status}
                        </StatusBadge>
                        <time className="text-xs text-ink-muted" dateTime={row.createdAt}>
                          {formatWhen(row.createdAt)}
                        </time>
                      </div>
                      <h2 className="mt-2 font-heading text-[15px] font-semibold leading-snug text-ink">
                        {row.title}
                      </h2>
                      <p className="mt-0.5 text-sm text-ink-soft">{row.subtitle}</p>
                      {row.meta ? (
                        <p className="mt-1 text-xs text-ink-muted">{row.meta}</p>
                      ) : null}
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                      <label className="sr-only" htmlFor={`status-${row.id}`}>
                        Status
                      </label>
                      <select
                        id={`status-${row.id}`}
                        value={row.status}
                        disabled={busy}
                        onChange={(e) =>
                          changeStatus(row.id, e.target.value as SubmissionStatus)
                        }
                        className={`${adminFieldClass} w-auto min-w-[7.5rem] py-1.5 disabled:opacity-60`}
                      >
                        {statuses.map((s) => (
                          <option key={s} value={s}>
                            {statusLabel(s)}
                          </option>
                        ))}
                      </select>
                      {row.body ? (
                        <button
                          type="button"
                          onClick={() => setExpanded(open ? null : row.id)}
                          className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-50"
                        >
                          {open ? "Hide" : "View"}
                        </button>
                      ) : null}
                    </div>
                  </div>
                  {open && row.body ? (
                    <div className="border-t border-line bg-surface-muted/40 px-4 py-4">
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-ink-soft">
                        {row.body}
                      </p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
