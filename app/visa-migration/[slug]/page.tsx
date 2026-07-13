import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { Icon } from "@/components/icons";
import { visaSubpages, visaSubpageSlugs } from "@/content/visa/subpages";
import { cn } from "@/lib/utils";

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

  const related = visaSubpageSlugs.map((s) => ({ slug: s, title: visaSubpages[s].title }));

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

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          {/* Main content */}
          <article className="max-w-3xl">
            <ContentRenderer blocks={page.sections} />

            <div className="mt-10 border-t border-line pt-6">
              <Link
                href="/visa-migration"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Icon name="chevronRight" size={16} className="rotate-180" />
                Back to Visa &amp; Migration
              </Link>
            </div>
          </article>

          {/* Section sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-card border border-line bg-surface-muted p-5">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                In this section
              </h2>
              <nav aria-label="Visa & Migration pages" className="mt-3">
                <ul className="space-y-0.5">
                  {related.map((item) => {
                    const active = item.slug === page.slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/visa-migration/${item.slug}`}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm transition-colors",
                            active
                              ? "bg-primary text-white"
                              : "text-ink-soft hover:bg-primary-50 hover:text-primary",
                          )}
                        >
                          {item.title}
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
