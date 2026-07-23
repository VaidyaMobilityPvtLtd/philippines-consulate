import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-10",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <h2 className="font-heading text-[1.5rem] font-semibold text-primary md:text-[1.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{subtitle}</p>
      )}
    </div>
  );
}

/** Standard page section: vertical rhythm + optional centered heading. */
export function Section({
  id,
  title,
  subtitle,
  headingAlign = "center",
  muted = false,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  headingAlign?: "center" | "left";
  muted?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-12 md:py-16", muted && "bg-surface-muted", className)}>
      <Container className={containerClassName}>
        {title && <SectionHeading title={title} subtitle={subtitle} align={headingAlign} />}
        {children}
      </Container>
    </section>
  );
}
