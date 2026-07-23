import Link from "next/link";
import { Icon } from "@/components/icons";
import type { ServiceGroup } from "@/lib/types";

/** Service link list card. */
export function ServiceListCard({ group }: { group: ServiceGroup }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-card md:p-6">
      <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary" />
      <div className="mb-3 flex items-center gap-3">
        {group.icon && (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Icon name={group.icon} size={18} />
          </span>
        )}
        <h3 className="font-heading text-base font-semibold text-ink">{group.title}</h3>
      </div>
      <ul className="divide-y divide-line border-t border-line">
        {group.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-2 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              <span>{item.label}</span>
              <Icon
                name="chevronRight"
                size={15}
                className="shrink-0 text-primary/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
