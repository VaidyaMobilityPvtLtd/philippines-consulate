import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import type { PageContent, LinkItem, IconName } from "@/lib/types";

type RelatedLink = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

/** Standalone content page: shared hero + polished article panel. */
export function ContentPage({
  page,
  eyebrow,
  breadcrumb,
  highlights,
  related,
  helpTitle = "Need more information?",
  helpBody = "Contact the Consulate General in Kathmandu for guidance.",
  imageSrc,
  imageAlt,
}: {
  page: PageContent;
  eyebrow?: string;
  breadcrumb: LinkItem[];
  highlights?: { label: string; value: string; icon: IconName }[];
  related?: RelatedLink[];
  helpTitle?: string;
  helpBody?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow ?? page.section}
        title={page.title}
        intro={page.intro}
        breadcrumb={breadcrumb}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />

      {highlights && highlights.length > 0 ? (
        <section className="relative z-10 -mt-6">
          <Container>
            <ul
              className={`grid overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card-hover ${
                highlights.length >= 4
                  ? "grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-3"
              }`}
            >
              {highlights.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex items-center gap-3 px-5 py-5 ${
                    i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                  }`}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                      {item.label}
                    </p>
                    <p className="font-heading text-base font-semibold text-ink">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="bg-linear-to-b from-primary-50/70 to-white py-10 md:py-12">
        <Container>
          <article className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-card">
            <div className="h-1.5 bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red" />
            <div className="p-6 md:p-8">
              <ContentRenderer blocks={page.sections} />
            </div>
          </article>

          {related && related.length > 0 ? (
            <div className="mx-auto mt-10 max-w-3xl">
              <h2 className="font-heading text-xl font-semibold text-primary">Related next steps</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-5 transition-colors hover:border-primary/25 hover:bg-primary-50"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                        <Icon name={item.icon} size={16} />
                      </span>
                      <h3 className="mt-3 font-heading text-sm font-semibold text-ink group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#2e3192,#1f2150)] px-6 py-7 text-white md:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-heading text-lg font-semibold">{helpTitle}</h2>
                <p className="mt-1.5 text-sm text-white/75">{helpBody}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="onDark">
                  Contact us
                </ButtonLink>
                <ButtonLink href="/downloads" variant="ghostDark">
                  Downloads
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
