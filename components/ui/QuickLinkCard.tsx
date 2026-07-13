import Link from "next/link";
import { Icon } from "@/components/icons";
import type { QuickLink } from "@/lib/types";

/** Home-page quick-link card: section icon, title, description + optional sub-links. */
export function QuickLinkCard({ link }: { link: QuickLink }) {
  return (
    <div className="group relative flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-100 hover:shadow-card-hover">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon name={link.icon} size={24} />
        </span>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold text-ink">
            <Link href={link.href} className="after:absolute after:inset-0">
              <span className="relative">{link.title}</span>
            </Link>
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{link.description}</p>
        </div>
      </div>

      {link.links && link.links.length > 0 && (
        <ul className="relative z-10 mt-4 flex flex-wrap gap-2 pl-16">
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

      <span className="mt-5 inline-flex items-center gap-1.5 pl-16 text-sm font-medium text-primary">
        Explore
        <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  );
}
