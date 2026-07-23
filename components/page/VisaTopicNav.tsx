"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type VisaTopicLink = {
  slug: string;
  title: string;
};

/**
 * Clear topic progress + jump control for Visa & Migration sub-pages.
 */
export function VisaTopicNav({
  topics,
  currentSlug,
}: {
  topics: VisaTopicLink[];
  currentSlug: string;
}) {
  const router = useRouter();
  const index = topics.findIndex((t) => t.slug === currentSlug);
  const current = index >= 0 ? index + 1 : 1;
  const prev = index > 0 ? topics[index - 1] : null;
  const next = index >= 0 && index < topics.length - 1 ? topics[index + 1] : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card">
      <div className="flex flex-col gap-4 border-b border-line bg-primary-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            Visa & Migration guide
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            Topic {current} of {topics.length}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {prev ? (
            <Link
              href={`/visa-migration/${prev.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white px-3.5 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Icon name="chevronRight" size={12} className="rotate-180" />
              Previous
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/visa-migration/${next.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Next: {next.title.length > 28 ? `${next.title.slice(0, 28)}…` : next.title}
              <Icon name="chevronRight" size={12} />
            </Link>
          ) : (
            <Link
              href="/visa-migration"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Back to overview
              <Icon name="arrowRight" size={12} />
            </Link>
          )}
        </div>
      </div>

      <div className="px-4 py-3.5 sm:px-5">
        <label htmlFor="visa-topic-jump" className="mb-1.5 block text-xs font-semibold text-ink-muted">
          Jump to another topic
        </label>
        <div className="relative">
          <select
            id="visa-topic-jump"
            value={currentSlug}
            onChange={(e) => router.push(`/visa-migration/${e.target.value}`)}
            className="w-full appearance-none rounded-xl border border-primary/20 bg-white py-2.5 pl-3.5 pr-10 text-sm font-medium text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
          >
            {topics.map((t, i) => (
              <option key={t.slug} value={t.slug}>
                {String(i + 1).padStart(2, "0")}. {t.title}
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

/** Suggested next actions under short topic pages. */
export function VisaNextSteps({
  next,
  showDefaults = true,
}: {
  next?: VisaTopicLink | null;
  showDefaults?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-primary-50 p-5 md:p-6">
      <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
        What should I do next?
      </p>
      <ul className="mt-4 space-y-2">
        {next && (
          <li>
            <Link
              href={`/visa-migration/${next.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <span>Continue to {next.title}</span>
              <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        )}
        {showDefaults && (
          <>
            <li>
              <Link
                href="/visa-migration#visa-free"
                className={cn(
                  "group flex items-center justify-between gap-3 rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white",
                )}
              >
                <span>Check if you are visa-free</span>
                <Icon name="arrowRight" size={15} />
              </Link>
            </li>
            <li>
              <Link
                href="/visa-migration/pleasure-business"
                className="group flex items-center justify-between gap-3 rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <span>Business / tourism visa requirements</span>
                <Icon name="arrowRight" size={15} />
              </Link>
            </li>
            <li>
              <Link
                href="/visa-migration/visa-fees"
                className="group flex items-center justify-between gap-3 rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <span>See visa fees</span>
                <Icon name="arrowRight" size={15} />
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
