"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Header search field — pill shape matching Figma ("Search....").
 * Presentational for now; wire to a /search route when ready.
 */
export function SearchBar({ className }: { className?: string }) {
  const [query, setQuery] = useState("");

  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        "flex min-h-11 items-center gap-2 rounded-full border border-[#e8e8ee] bg-white px-3.5 py-2 text-sm shadow-[0_1px_3px_rgba(20,24,31,0.07)] xl:min-h-0 xl:py-1.5",
        className,
      )}
    >
      <Icon name="search" size={16} className="shrink-0 text-[#b0b4be]" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search...."
        aria-label="Search the site"
        className="w-full min-w-0 bg-transparent text-ink placeholder:text-[#b0b4be] focus:outline-none"
      />
    </form>
  );
}
