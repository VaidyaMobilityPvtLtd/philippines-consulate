import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Centered, max-width content wrapper used across the whole site. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("container-site", className)}>{children}</div>;
}
