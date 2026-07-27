import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { ComingSoon } from "@/components/page/ComingSoon";
import { SectionTopicNav, SectionNextSteps } from "@/components/page/SectionTopicNav";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { getSectionPage } from "@/content/registry";
import { findSection } from "./sections";
import { heroImageForPath } from "./hero-images";

type Params = { params: Promise<{ slug: string }> };

const sectionExtras: Record<string, { href: string; label: string }[]> = {
  "/passport-service": [
    { href: "/downloads", label: "Passport forms & downloads" },
    { href: "/contact", label: "Book or ask about an appointment" },
  ],
  "/registration-service": [
    { href: "/downloads", label: "Registration forms" },
    { href: "/contact", label: "Ask about civil registration" },
  ],
  "/about-philippines": [
    { href: "/traveling-in-philippines", label: "Traveling in the Philippines" },
    { href: "/study-in-philippines", label: "Study options" },
  ],
  "/study-in-philippines": [
    { href: "/visa-migration/student-visa-requirements", label: "Student visa requirements" },
    { href: "/contact", label: "Ask the Consulate" },
  ],
  "/traveling-in-philippines": [
    { href: "/visa-migration", label: "Visa & entry guidance" },
    { href: "/about-philippines/overview", label: "Philippines at a Glance" },
  ],
};

/**
 * Factory that builds the `generateStaticParams`, `generateMetadata` and page
 * component for a section's `[slug]` route.
 */
export function buildSectionSubPage(sectionHref: string) {
  const slugOf = (href: string) => href.slice(sectionHref.length + 1);

  function generateStaticParams() {
    const section = findSection(sectionHref);
    return (section?.children ?? []).map((c) => ({ slug: slugOf(c.href) }));
  }

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const section = findSection(sectionHref);
    const child = section?.children?.find((c) => slugOf(c.href) === slug);
    const content = getSectionPage(sectionHref, slug);
    return { title: child?.label ?? section?.label ?? "", description: content?.intro };
  }

  async function Page({ params }: Params) {
    const { slug } = await params;
    const section = findSection(sectionHref);
    const child = section?.children?.find((c) => slugOf(c.href) === slug);
    if (!section || !child) notFound();

    const siblings = (section.children ?? []).map((c) => ({
      href: c.href,
      label: c.label,
    }));
    const index = siblings.findIndex((c) => c.href === child.href);
    const next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;
    const content = getSectionPage(sectionHref, slug);
    const extras = sectionExtras[sectionHref] ?? [
      { href: "/contact", label: "Contact the Consulate" },
      { href: "/downloads", label: "Forms & downloads" },
    ];
    const heroImage = heroImageForPath(sectionHref);

    return (
      <>
        <PageHero
          eyebrow={section.label}
          title={child.label}
          intro={content?.intro}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: section.label, href: section.href },
            { label: child.label, href: child.href },
          ]}
          imageSrc={heroImage.src}
          imageAlt={heroImage.alt}
        />

        <section className="bg-linear-to-b from-primary-50/80 to-white py-8 md:py-10">
          <Container>
            <SectionTopicNav
              sectionLabel={section.label}
              sectionHref={section.href}
              topics={siblings}
              currentHref={child.href}
            />

            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
              <div>
                <article className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-card">
                  <div className="flex items-center justify-between gap-3 border-b border-line bg-white px-5 py-3.5 md:px-6">
                    <p className="text-sm font-medium text-ink-soft">
                      <span className="font-semibold text-primary">Reading:</span> {child.label}
                    </p>
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <Icon name="chevronRight" size={12} className="rotate-180" />
                      Overview
                    </Link>
                  </div>
                  <div className="p-5 md:p-7">
                    {content ? (
                      <ContentRenderer blocks={content.sections} />
                    ) : (
                      <ComingSoon label={child.label} />
                    )}
                  </div>
                </article>

                <div className="mt-5 flex flex-wrap gap-3">
                  {next ? (
                    <ButtonLink href={next.href} variant="primary">
                      Next: {next.label}
                      <Icon name="arrowRight" size={15} />
                    </ButtonLink>
                  ) : (
                    <ButtonLink href={section.href} variant="primary">
                      Back to {section.label}
                    </ButtonLink>
                  )}
                  <ButtonLink href="/contact" variant="secondary">
                    Ask the Consulate
                  </ButtonLink>
                </div>
              </div>

              <aside className="space-y-4 lg:sticky lg:top-28">
                <SectionNextSteps
                  next={next}
                  sectionHref={section.href}
                  sectionLabel={section.label}
                  extras={extras}
                />

                <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <p className="font-heading text-sm font-semibold text-ink">Need help now?</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    Contact the Consulate for requirements, appointments, and documents.
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

  return { generateStaticParams, generateMetadata, Page };
}
