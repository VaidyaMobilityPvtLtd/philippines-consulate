"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Header search field. Presentational for now (no search index yet) — submits
 * are intercepted. Wire `onSubmit` to a /search route when search is built.
 */
export function SearchBar({ className }: { className?: string }) {
  const [query, setQuery] = useState("");

  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        "flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm transition-colors focus-within:border-primary",
        className,
      )}
    >
      <Icon name="search" size={16} className="shrink-0 text-ink-muted" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        aria-label="Search the site"
        className="w-full min-w-0 bg-transparent text-ink placeholder:text-ink-muted focus:outline-none"
      />
    </form>
  );
}
