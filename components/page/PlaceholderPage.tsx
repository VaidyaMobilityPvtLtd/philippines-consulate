import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "./ComingSoon";
import type { LinkItem } from "@/lib/types";

/** Simple placeholder page (hero + coming-soon) for standalone utility routes. */
export function PlaceholderPage({
  title,
  eyebrow,
  intro,
  breadcrumb,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
  breadcrumb?: LinkItem[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        breadcrumb={breadcrumb ?? [{ label: "Home", href: "/" }, { label: title, href: "#" }]}
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <ComingSoon />
        </div>
      </Section>
    </>
  );
}
