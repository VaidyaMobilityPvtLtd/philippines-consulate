import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Site emblem + wordmark, linking home. `variant` switches text colour for
 * light (white top bar) vs dark (navy bar) backgrounds. `showWordmark={false}`
 * renders the emblem alone (used on narrower widths).
 */
export function Logo({
  variant = "onLight",
  showWordmark = true,
  size = 46,
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
      className={cn("flex items-center gap-3", className)}
    >
      <Image src="/seal.svg" alt="" width={size} height={size} className="shrink-0" priority />
      {showWordmark && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-heading text-[15px] font-semibold",
              onDark ? "text-white" : "text-primary",
            )}
          >
            Consulate General of the Philippines
          </span>
          <span
            className={cn(
              "text-[11px] uppercase tracking-[0.14em]",
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
