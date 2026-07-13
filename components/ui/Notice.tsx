import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

/** Red alert / important-notice callout (matches the Figma Entry-Requirements notice). */
export function Notice({
  children,
  title,
  className,
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      role="note"
      className={cn(
        "flex gap-3.5 rounded-2xl border border-notice-border bg-notice-bg p-5",
        className,
      )}
    >
      <Icon name="alert" size={22} className="mt-0.5 shrink-0 text-notice-ink" />
      <div className="text-sm leading-relaxed text-notice-ink">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        {children}
      </div>
    </div>
  );
}
