import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import type { PageContent, LinkItem } from "@/lib/types";

/** Standalone content page: hero + rendered content blocks. */
export function ContentPage({
  page,
  eyebrow,
  breadcrumb,
}: {
  page: PageContent;
  eyebrow?: string;
  breadcrumb: LinkItem[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow ?? page.section}
        title={page.title}
        intro={page.intro}
        breadcrumb={breadcrumb}
      />
      <Section>
        <article className="max-w-3xl">
          <ContentRenderer blocks={page.sections} />
        </article>
      </Section>
    </>
  );
}
