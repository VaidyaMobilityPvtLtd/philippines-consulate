import type { ReactNode } from "react";
import { SmartLink } from "./SmartLink";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "onDark" | "ghostDark";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "border border-line bg-surface text-ink hover:border-primary hover:text-primary",
  onDark: "bg-white text-primary hover:bg-white/90",
  ghostDark: "border border-white/40 text-white hover:bg-white/10",
};

/** Pill button rendered as a link (internal or external). */
export function ButtonLink({
  href,
  variant = "primary",
  external,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <SmartLink
      href={href}
      external={external}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </SmartLink>
  );
}
