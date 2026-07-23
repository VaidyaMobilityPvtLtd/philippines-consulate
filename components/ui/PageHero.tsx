import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import type { LinkItem } from "@/lib/types";

/**
 * Shared inner-page hero — fixed height so every sub-nav page matches.
 */
export function PageHero({
  title,
  intro,
  eyebrow,
  breadcrumb,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
  breadcrumb?: LinkItem[];
}) {
  return (
    <section className="relative overflow-hidden text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(145deg,#3a3eab_0%,#2e3192_45%,#1f2150_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_25%,rgba(252,209,22,0.18),transparent_36%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.1),transparent_40%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 hidden h-44 w-44 -translate-y-1/2 bg-[url(/logo.svg)] bg-contain bg-no-repeat opacity-[0.12] md:block"
      />
      <Container className="relative flex min-h-[13.5rem] flex-col items-start justify-center py-8 md:min-h-[15rem] md:py-10">
        {breadcrumb && breadcrumb.length > 0 ? (
          <div className="mb-3 min-h-[1.25rem]">
            <Breadcrumb items={breadcrumb} onDark />
          </div>
        ) : (
          <div className="mb-3 min-h-[1.25rem]" aria-hidden />
        )}
        {eyebrow ? (
          <p className="w-fit rounded-full border border-flag-yellow/35 bg-flag-yellow/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-flag-yellow">
            {eyebrow}
          </p>
        ) : (
          <div className="h-[1.625rem]" aria-hidden />
        )}
        <h1 className="mt-3 line-clamp-2 max-w-3xl font-heading text-[1.85rem] font-semibold leading-tight tracking-[-0.01em] md:text-[2.25rem]">
          {title}
        </h1>
        <p className="mt-3 line-clamp-2 min-h-[3.4em] max-w-2xl text-[15px] leading-[1.7] text-white/82">
          {intro ?? ""}
        </p>
      </Container>
      <div
        aria-hidden
        className="h-1.5 w-full bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red"
      />
    </section>
  );
}
