import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/icons";
import { ComingSoon } from "./ComingSoon";
import type { NavItem } from "@/lib/types";

/**
 * Generic section landing page: hero + grid of child-page cards (or a
 * "coming soon" placeholder when the section has no sub-pages yet).
 */
export function SectionLanding({
  item,
  eyebrow = "Consulate Services",
  intro,
}: {
  item: NavItem;
  eyebrow?: string;
  intro?: string;
}) {
  const children = item.children ?? [];

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={item.label}
        intro={intro ?? "Explore the pages and services available in this section."}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: item.label, href: item.href },
        ]}
      />
      <Section>
        {children.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="group flex items-center justify-between gap-3 rounded-card border border-line bg-surface p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-100 hover:shadow-card-hover"
              >
                <span className="font-medium text-ink">{child.label}</span>
                <Icon
                  name="arrowRight"
                  size={18}
                  className="shrink-0 text-primary transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl">
            <ComingSoon />
          </div>
        )}
      </Section>
    </>
  );
}
