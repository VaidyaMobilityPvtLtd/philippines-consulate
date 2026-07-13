import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import type { LinkItem } from "@/lib/types";

/**
 * Navy gradient hero band for inner pages: breadcrumb + eyebrow + title + intro,
 * with a subtle seal watermark. Reused by every section and sub-page.
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
    <section className="relative overflow-hidden bg-linear-to-br from-primary-light via-primary to-primary-dark text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 bg-[url(/seal.svg)] bg-contain bg-no-repeat opacity-[0.08] md:h-80 md:w-80"
      />
      <Container className="relative py-12 md:py-16">
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="mb-5">
            <Breadcrumb items={breadcrumb} onDark />
          </div>
        )}
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl font-heading text-3xl font-semibold leading-tight md:text-[40px]">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl leading-relaxed text-white/80">{intro}</p>}
      </Container>
    </section>
  );
}
