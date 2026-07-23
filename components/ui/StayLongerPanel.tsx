import type { StayCategory } from "@/lib/types";

/** Longer visa-free stays for selected passports. */
export function StayLongerPanel({
  categories,
  title = "Longer visa-free stays",
}: {
  categories: StayCategory[];
  title?: string;
}) {
  return (
    <aside className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card">
      <div className="bg-primary px-5 py-4 text-white">
        <h3 className="font-heading text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/75">
          Some nationalities may stay beyond the standard 21 days.
        </p>
      </div>

      <div className="space-y-3 p-4 md:p-5">
        {categories.map((cat) => (
          <div key={cat.days} className="rounded-xl border border-primary/10 bg-primary-50 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-ink">Up to {cat.label}</p>
              <span className="rounded-full bg-flag-yellow px-2.5 py-0.5 text-[11px] font-bold text-ink">
                {cat.label}
              </span>
            </div>
            <ul className="mt-2.5 space-y-1.5">
              {cat.countries.map((country) => (
                <li key={country} className="text-sm text-ink-soft">
                  {country}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
