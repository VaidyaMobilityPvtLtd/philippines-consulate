import { Fragment } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import type { LinkItem } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Breadcrumb trail. Pass ordered crumbs; the last is rendered as the current
 * page. `onDark` styles it for use inside the navy PageHero.
 */
export function Breadcrumb({ items, onDark = false }: { items: LinkItem[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={item.href}>
              <li>
                {last ? (
                  <span className={cn("font-medium", onDark ? "text-white" : "text-ink")} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors",
                      onDark ? "text-white/70 hover:text-white" : "text-ink-muted hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
              {!last && (
                <li aria-hidden className={onDark ? "text-white/40" : "text-ink-muted/60"}>
                  <Icon name="chevronRight" size={14} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
