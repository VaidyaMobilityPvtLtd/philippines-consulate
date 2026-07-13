import Link from "next/link";
import type { PillGroup as PillGroupType } from "@/lib/types";

/** A titled group of pill links (used under Consulate Services). */
export function PillGroup({ group }: { group: PillGroupType }) {
  return (
    <div className="rounded-card border border-line bg-surface p-5 shadow-card">
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
        {group.title}
      </h3>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex rounded-full border border-line bg-surface-muted px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-primary hover:bg-primary-50 hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
