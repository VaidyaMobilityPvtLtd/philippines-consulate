import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "primary" | "neutral" | "accent";

const tones: Record<Tone, string> = {
  primary: "bg-primary text-white",
  accent: "bg-accent-soft text-primary",
  neutral: "bg-surface-sunken text-ink-soft",
};

export function Badge({
  children,
  tone = "accent",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
