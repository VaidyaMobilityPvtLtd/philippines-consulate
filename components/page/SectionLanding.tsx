import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { ComingSoon } from "./ComingSoon";
import type { NavItem } from "@/lib/types";

const accents = [
  "border-t-flag-blue",
  "border-t-flag-yellow",
  "border-t-flag-red",
  "border-t-primary",
] as const;

const iconBgs = [
  "bg-[#e8eefc] text-flag-blue group-hover:bg-flag-blue",
  "bg-[#fff6d6] text-[#9a7a00] group-hover:bg-flag-yellow group-hover:text-ink",
  "bg-[#fde8eb] text-flag-red group-hover:bg-flag-red",
  "bg-primary-50 text-primary group-hover:bg-primary",
] as const;

/**
 * Generic section landing page: richer hero + topic cards + help strip.
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

      <Section className="bg-linear-to-b from-primary-50/80 to-white">
        {children.length > 0 ? (
          <>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  Topics in this section
                </p>
                <h2 className="mt-1 font-heading text-xl font-semibold text-ink md:text-2xl">
                  Choose a topic
                </h2>
              </div>
              <p className="text-sm text-ink-muted">{children.length} pages available</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {children.map((child, i) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line border-t-4 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover ${accents[i % accents.length]}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors group-hover:text-white ${iconBgs[i % iconBgs.length]}`}
                    >
                      <Icon name="document" size={18} />
                    </span>
                    <span className="font-heading text-xs font-semibold text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-[15px] font-semibold leading-snug text-ink group-hover:text-primary">
                    {child.label}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                    Open
                    <Icon
                      name="arrowRight"
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-primary px-6 py-6 text-white md:flex-row md:items-center md:px-8">
              <div>
                <p className="font-heading text-lg font-semibold">Need help with this section?</p>
                <p className="mt-1 text-sm text-white/75">
                  Contact the Consulate or browse downloadable guides and forms.
                </p>
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
          </>
        ) : (
          <div className="mx-auto max-w-2xl">
            <ComingSoon />
          </div>
        )}
      </Section>
    </>
  );
}
