import Link from "next/link";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type SidebarLink = {
  href: string;
  label: string;
};

/**
 * Sticky “In this section” sidebar for topic sub-pages.
 */
export function TopicSidebar({
  title,
  links,
  activeHref,
  parentHref,
  parentLabel,
}: {
  title: string;
  links: SidebarLink[];
  activeHref: string;
  parentHref: string;
  parentLabel: string;
}) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-card-hover">
        <div className="relative bg-[linear-gradient(145deg,#3a3eab,#2e3192)] px-4 py-4">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red"
          />
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-flag-yellow">
            In this section
          </p>
          <p className="mt-1 font-heading text-base font-semibold text-white">{title}</p>
          <p className="mt-1 text-xs text-white/65">{links.length} topics</p>
        </div>
        <nav aria-label={`${title} pages`} className="p-2.5">
          <ul className="space-y-1">
            {links.map((link, i) => {
              const active = link.href === activeHref;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group flex items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-sm transition-all",
                      active
                        ? "bg-primary font-semibold text-white shadow-sm"
                        : "text-ink-soft hover:bg-primary-50 hover:text-primary",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold",
                        active ? "bg-white/20 text-white" : "bg-primary-50 text-primary",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 leading-snug">{link.label}</span>
                    <Icon
                      name="chevronRight"
                      size={14}
                      className={cn(
                        "shrink-0 transition-transform",
                        active
                          ? "opacity-80"
                          : "opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-line bg-primary-50 p-3">
          <Link
            href={parentHref}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
          >
            <Icon name="chevronRight" size={14} className="rotate-180" />
            All {parentLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
