import { Badge } from "./Badge";
import type { StayCategory } from "@/lib/types";

/** Right panel of the Visa-Free section: special passport categories + day badges. */
export function StayLongerPanel({
  categories,
  title = "These passport holders can stay longer without a visa",
}: {
  categories: StayCategory[];
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
      {categories.map((cat) => (
        <div key={cat.days} className="rounded-card border border-line bg-surface p-5 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Stay up to {cat.label}</span>
            <Badge tone="primary">{cat.label}</Badge>
          </div>
          <ul className="mt-3 space-y-2 border-t border-line pt-3">
            {cat.countries.map((country) => (
              <li key={country} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-ink-soft">{country}</span>
                <Badge tone="neutral">{cat.label}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
