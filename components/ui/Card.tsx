import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Base surface card. Set `interactive` for hover lift (use on linked cards). */
export function Card({
  as,
  interactive = false,
  className,
  children,
}: {
  as?: ElementType;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn(
        "rounded-card border border-line bg-surface p-6 shadow-card",
        interactive &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-100 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
