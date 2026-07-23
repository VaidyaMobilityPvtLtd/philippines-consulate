"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icons";

/** Searchable list of visa-free countries. */
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
    <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card">
      <div className="border-b border-primary/10 bg-primary-50 px-4 py-4 sm:px-5">
        <label className="flex items-center gap-2.5 rounded-xl border border-primary/15 bg-white px-3.5 py-2.5 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
          <Icon name="search" size={18} className="shrink-0 text-primary" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a country name…"
            aria-label="Search for your country"
            className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
        </label>
        <p className="mt-2.5 text-xs font-medium text-primary">
          Showing {filtered.length} of {countries.length} · up to {stayDays} days
        </p>
      </div>

      <div className="max-h-[360px] overflow-y-auto p-3 sm:p-4">
        {filtered.length > 0 ? (
          <ul className="columns-1 gap-x-4 sm:columns-2 lg:columns-3">
            {filtered.map((country) => (
              <li
                key={country}
                className="mb-1 break-inside-avoid rounded-lg px-2.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-primary hover:text-white"
              >
                {country}
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-10 text-center text-sm text-ink-muted">
            No match for &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </div>
  );
}
