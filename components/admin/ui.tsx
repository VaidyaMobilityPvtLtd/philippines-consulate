"use client";

import {
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import type { SubmissionStatus } from "@/lib/api-types";

export const adminFieldClass =
  "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 transition-[border-color,box-shadow] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";

export const adminLabelClass = "mb-1.5 block text-sm font-medium text-ink";

export function AdminPageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
      <div className="min-w-0 max-w-2xl">
        <h1 className="font-heading text-[1.65rem] font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function StatusBadge({
  tone,
  children,
}: {
  tone: "published" | "draft" | "new" | "read" | "archived" | "neutral";
  children: ReactNode;
}) {
  const tones: Record<typeof tone, string> = {
    published: "bg-primary-50 text-primary ring-1 ring-inset ring-primary-100",
    draft: "bg-surface-sunken text-ink-muted ring-1 ring-inset ring-line",
    new: "bg-primary-50 text-primary ring-1 ring-inset ring-primary-100",
    read: "bg-surface-sunken text-ink-soft ring-1 ring-inset ring-line",
    archived: "bg-surface-muted text-ink-muted ring-1 ring-inset ring-line",
    neutral: "bg-surface-sunken text-ink-soft ring-1 ring-inset ring-line",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function submissionStatusTone(status: SubmissionStatus): "new" | "read" | "archived" {
  return status;
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start rounded-xl border border-dashed border-line-strong bg-surface px-6 py-10 sm:px-8">
      <p className="font-heading text-base font-semibold text-ink">{title}</p>
      {description ? (
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-muted">{description}</p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

export function FlashMessage({
  message,
  tone = "success",
  onDismiss,
}: {
  message: string | null;
  tone?: "success" | "error";
  onDismiss?: () => void;
}) {
  const [visible, setVisible] = useState(Boolean(message));

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const id = window.setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 2800);
    return () => window.clearTimeout(id);
  }, [message, onDismiss]);

  if (!message || !visible) return null;

  return (
    <div
      role="status"
      className={cn(
        "admin-flash mb-4 rounded-lg border px-3.5 py-2.5 text-sm",
        tone === "success"
          ? "border-primary-100 bg-primary-50 text-primary"
          : "border-notice-border bg-notice-bg text-notice-ink",
      )}
    >
      {message}
    </div>
  );
}

export function PrimaryButton({
  children,
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
