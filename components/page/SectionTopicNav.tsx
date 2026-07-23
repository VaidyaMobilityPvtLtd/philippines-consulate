"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icons";

export type SectionTopicLink = {
  href: string;
  label: string;
};

/**
 * Topic progress + jump control for section sub-pages (Passport, Registration, etc.).
 */
export function SectionTopicNav({
  sectionLabel,
  sectionHref,
  topics,
  currentHref,
}: {
  sectionLabel: string;
  sectionHref: string;
  topics: SectionTopicLink[];
  currentHref: string;
}) {
  const router = useRouter();
  const index = topics.findIndex((t) => t.href === currentHref);
  const current = index >= 0 ? index + 1 : 1;
  const prev = index > 0 ? topics[index - 1] : null;
  const next = index >= 0 && index < topics.length - 1 ? topics[index + 1] : null;
  const selectId = `topic-jump-${sectionHref.replace(/\//g, "-")}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card">
      <div className="flex flex-col gap-4 border-b border-line bg-primary-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            {sectionLabel}
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            Topic {current} of {topics.length}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {prev ? (
            <Link
              href={prev.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Icon name="chevronRight" size={12} className="rotate-180" />
              Previous
            </Link>
          ) : null}
          {next ? (
            <Link
              href={next.href}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Next: {next.label.length > 28 ? `${next.label.slice(0, 28)}…` : next.label}
              <Icon name="chevronRight" size={12} />
            </Link>
          ) : (
            <Link
              href={sectionHref}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Back to overview
              <Icon name="arrowRight" size={12} />
            </Link>
          )}
        </div>
      </div>

      <div className="px-4 py-3.5 sm:px-5">
        <label htmlFor={selectId} className="mb-1.5 block text-xs font-semibold text-ink-muted">
          Jump to another topic
        </label>
        <div className="relative">
          <select
            id={selectId}
            value={currentHref}
            onChange={(e) => router.push(e.target.value)}
            className="w-full appearance-none rounded-xl border border-primary/20 bg-white py-2.5 pl-3.5 pr-10 text-sm font-medium text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
          >
            {topics.map((t, i) => (
              <option key={t.href} value={t.href}>
                {String(i + 1).padStart(2, "0")}. {t.label}
              </option>
            ))}
          </select>
          <Icon
            name="chevronDown"
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted"
          />
        </div>
      </div>
    </div>
  );
}

/** Compact next-steps panel for section topic pages. */
export function SectionNextSteps({
  next,
  sectionHref,
  sectionLabel,
  extras = [],
}: {
  next?: SectionTopicLink | null;
  sectionHref: string;
  sectionLabel: string;
  extras?: { href: string; label: string }[];
}) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-primary-50 p-5 md:p-6">
      <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
        What should I do next?
      </p>
      <ul className="mt-4 space-y-2">
        {next ? (
          <li>
            <Link
              href={next.href}
              className="group flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <span>Continue to {next.label}</span>
              <Icon
                name="arrowRight"
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ) : (
          <li>
            <Link
              href={sectionHref}
              className="group flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <span>Back to {sectionLabel}</span>
              <Icon name="arrowRight" size={15} />
            </Link>
          </li>
        )}
        {extras.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <span>{item.label}</span>
              <Icon name="arrowRight" size={15} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
