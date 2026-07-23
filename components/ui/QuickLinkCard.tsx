import Link from "next/link";
import { Icon } from "@/components/icons";
import type { QuickLink } from "@/lib/types";

/** Home-page quick-link card: section icon, title, description + optional sub-links. */
export function QuickLinkCard({ link }: { link: QuickLink }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red transition-transform duration-300 group-hover:scale-x-100"
      />

      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
          <Icon name={link.icon} size={24} />
        </span>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold text-ink transition-colors group-hover:text-primary">
            <Link href={link.href} className="after:absolute after:inset-0">
              <span className="relative">{link.title}</span>
            </Link>
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{link.description}</p>
        </div>
      </div>

      {link.links && link.links.length > 0 && (
        <ul className="relative z-10 mt-4 flex flex-wrap gap-2">
          {link.links.map((sub) => (
            <li key={sub.href}>
              <Link
                href={sub.href}
                className="inline-flex rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-ink-soft transition-colors hover:bg-primary-50 hover:text-primary"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
        Explore
        <Icon
          name="arrowRight"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </div>
  );
}
