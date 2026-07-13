"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icons";

/** Searchable grid of visa-free countries (left panel of the Visa-Free section). */
export function CountryExplorer({
  countries,
  stayDays,
}: {
  countries: string[];
  stayDays: number;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c.toLowerCase().includes(q));
  }, [query, countries]);

  return (
    <div className="rounded-card border border-line bg-surface-muted p-5 md:p-6">
      <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 transition-colors focus-within:border-primary">
        <Icon name="search" size={18} className="shrink-0 text-ink-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for your country"
          aria-label="Search for your country"
          className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:uppercase placeholder:tracking-wide placeholder:text-ink-muted focus:outline-none"
        />
      </div>

      <p className="mt-3 text-xs text-ink-muted">
        {filtered.length} {filtered.length === 1 ? "country" : "countries"} · visa-free up to{" "}
        {stayDays} days
      </p>

      <div className="mt-4 max-h-[360px] overflow-y-auto pr-1">
        {filtered.length > 0 ? (
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {filtered.map((country) => (
              <li
                key={country}
                className="rounded-lg border border-line bg-surface px-3 py-2 text-xs leading-tight text-ink-soft"
              >
                {country}
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-10 text-center text-sm text-ink-muted">
            No countries match &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </div>
  );
}
