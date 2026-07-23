import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { VisaTopicNav, VisaNextSteps } from "@/components/page/VisaTopicNav";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { visaSubpages, visaSubpageSlugs } from "@/content/visa/subpages";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return visaSubpageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = visaSubpages[slug];
  if (!page) return {};
  return { title: page.title, description: page.intro };
}

export default async function VisaSubPage({ params }: Params) {
  const { slug } = await params;
  const page = visaSubpages[slug];
  if (!page) notFound();

  const topics = visaSubpageSlugs.map((s) => ({
    slug: s,
    title: visaSubpages[s].title,
  }));
  const index = topics.findIndex((t) => t.slug === slug);
  const next = index >= 0 && index < topics.length - 1 ? topics[index + 1] : null;
  const isOverviewTopic = slug === "what-is-philippine-visa";

  return (
    <>
      <PageHero
        eyebrow="Visa & Migration"
        title={page.title}
        intro={page.intro}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Visa & Migration", href: "/visa-migration" },
          { label: page.title, href: `/visa-migration/${page.slug}` },
        ]}
      />

      <section className="bg-linear-to-b from-primary-50/80 to-white py-8 md:py-10">
        <Container>
          {/* Clear navigation first — reduces confusion */}
          <VisaTopicNav topics={topics} currentSlug={slug} />

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            {/* Main reading column */}
            <div>
              <article className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-card">
                <div className="flex items-center justify-between gap-3 border-b border-line bg-white px-5 py-3.5 md:px-6">
                  <p className="text-sm font-medium text-ink-soft">
                    <span className="font-semibold text-primary">Reading:</span> {page.title}
                  </p>
                  <Link
                    href="/visa-migration"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <Icon name="chevronRight" size={12} className="rotate-180" />
                    Overview
                  </Link>
                </div>
                <div className="p-5 md:p-7">
                  <ContentRenderer blocks={page.sections} />
                </div>
              </article>

              <div className="mt-5 flex flex-wrap gap-3">
                {next ? (
                  <ButtonLink href={`/visa-migration/${next.slug}`} variant="primary">
                    Next: {next.title}
                    <Icon name="arrowRight" size={15} />
                  </ButtonLink>
                ) : (
                  <ButtonLink href="/visa-migration" variant="primary">
                    Back to Visa & Migration
                  </ButtonLink>
                )}
                <ButtonLink href="/contact" variant="secondary">
                  Ask the Consulate
                </ButtonLink>
              </div>
            </div>

            {/* Helpful next steps — not a long duplicate nav */}
            <aside className="space-y-4 lg:sticky lg:top-28">
              <VisaNextSteps next={next} showDefaults={isOverviewTopic || !next} />

              <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="font-heading text-sm font-semibold text-ink">Need help now?</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  Contact the Consulate for category advice, fees, and documents.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Contact us
                  <Icon name="arrowRight" size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
