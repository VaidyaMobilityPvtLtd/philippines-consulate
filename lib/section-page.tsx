import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { ComingSoon } from "@/components/page/ComingSoon";
import { getSectionPage } from "@/content/registry";
import { findSection } from "./sections";
import { cn } from "./utils";

type Params = { params: Promise<{ slug: string }> };

/**
 * Factory that builds the `generateStaticParams`, `generateMetadata` and page
 * component for a section's `[slug]` route. Child pages share the same layout
 * as the Visa & Migration sub-pages (content + section sidebar), rendering a
 * "coming soon" placeholder until real content is added.
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
    const siblings = section.children ?? [];
    const content = getSectionPage(sectionHref, slug);

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
        />
        <Section>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
            <article className="max-w-3xl">
              {content ? (
                <ContentRenderer blocks={content.sections} />
              ) : (
                <ComingSoon label={child.label} />
              )}
            </article>
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-card border border-line bg-surface-muted p-5">
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                  In this section
                </h2>
                <nav aria-label={`${section.label} pages`} className="mt-3">
                  <ul className="space-y-0.5">
                    {siblings.map((c) => {
                      const active = c.href === child.href;
                      return (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm transition-colors",
                              active
                                ? "bg-primary text-white"
                                : "text-ink-soft hover:bg-primary-50 hover:text-primary",
                            )}
                          >
                            {c.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </Section>
      </>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}
