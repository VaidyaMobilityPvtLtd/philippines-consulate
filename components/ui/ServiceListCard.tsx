import Link from "next/link";
import { Icon } from "@/components/icons";
import type { ServiceGroup } from "@/lib/types";

/** A titled card listing service links (Consulate Services section). */
export function ServiceListCard({ group }: { group: ServiceGroup }) {
  return (
    <div className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card">
      <div className="flex items-center gap-3">
        {group.icon && (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-primary">
            <Icon name={group.icon} size={20} />
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold text-ink">{group.title}</h3>
      </div>
      <ul className="mt-4 divide-y divide-line">
        {group.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-3 py-2.5 text-sm text-ink-soft transition-colors hover:text-primary"
            >
              <span>{item.label}</span>
              <Icon
                name="chevronRight"
                size={16}
                className="shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
