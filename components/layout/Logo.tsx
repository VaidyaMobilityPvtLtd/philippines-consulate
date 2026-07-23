import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Site emblem + optional wordmark. Uses the official SVG coat of arms
 * so it stays sharp at any size.
 */
export function Logo({
  variant = "onLight",
  showWordmark = true,
  size = 48,
  className,
}: {
  variant?: "onLight" | "onDark";
  showWordmark?: boolean;
  size?: number;
  className?: string;
}) {
  const onDark = variant === "onDark";
  return (
    <Link
      href="/"
      aria-label="Home — Consulate General of the Philippines"
      className={cn("flex items-center gap-3.5", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo must stay crisp */}
      <img
        src="/logo.svg"
        alt=""
        width={size}
        height={Math.round(size * 1.11)}
        className="shrink-0 object-contain"
        decoding="async"
      />
      {showWordmark && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-heading text-[15px] font-semibold tracking-[-0.01em]",
              onDark ? "text-white" : "text-primary",
            )}
          >
            Consulate General of the Philippines
          </span>
          <span
            className={cn(
              "mt-0.5 text-[11px] uppercase tracking-[0.16em]",
              onDark ? "text-white/60" : "text-ink-muted",
            )}
          >
            Kathmandu, Nepal
          </span>
        </span>
      )}
    </Link>
  );
}
