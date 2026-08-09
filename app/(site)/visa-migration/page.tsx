import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CountryExplorer } from "@/components/ui/CountryExplorer";
import { StayLongerPanel } from "@/components/ui/StayLongerPanel";
import { Notice } from "@/components/ui/Notice";
import { Icon } from "@/components/icons";
import { visaCategories } from "@/content/visa/categories";
import { visaFreeCountries, standardStayDays, stayCategories } from "@/content/visa/countries";
import { entryRequirementCards, entryNotice } from "@/content/visa/requirements";
import { heroImages } from "@/lib/hero-images";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Visa & Migration",
  description:
    "Philippine visa categories, visa-free countries, entry requirements, fees and application procedures for travelers from Nepal.",
};

const [primaryCategory, ...otherCategories] = visaCategories;

const pageJumps: { label: string; href: string; icon: IconName }[] = [
  { label: "Visa categories", href: "#visa-categories", icon: "visa" },
  { label: "Visa-free check", href: "#visa-free", icon: "globe" },
  { label: "Entry requirements", href: "#entry-requirements", icon: "document" },
  { label: "Visa fees", href: "/visa-migration/visa-fees", icon: "calendar" },
];

const keyFacts = [
  {
    icon: "calendar" as const,
    label: "Visa-free stay",
    value: `Up to ${standardStayDays} days for eligible nationalities`,
    accent: "bg-flag-blue",
  },
  {
    icon: "passport" as const,
    label: "Passport validity",
    value: "At least 6 months beyond your stay",
    accent: "bg-flag-yellow text-ink",
  },
  {
    icon: "document" as const,
    label: "Longer visits",
    value: "Apply for a visa at the Consulate first",
    accent: "bg-flag-red",
  },
];

export default function VisaMigrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulate General · Kathmandu"
        title="Visa & Migration"
        intro="Find your visa type, check visa-free entry, and review what you need before traveling to the Philippines."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Visa & Migration", href: "/visa-migration" },
        ]}
        imageSrc={heroImages.visa.src}
        imageAlt={heroImages.visa.alt}
      />

      {/* Quick jumps */}
      <section className="relative z-10 -mt-6">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card-hover">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
              {pageJumps.map((item, i) => (
                <li
                  key={item.href}
                  className={i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""}
                >
                  <Link
                    href={item.href}
                    className="group flex min-h-14 items-center gap-3 px-4 py-3.5 transition-colors hover:bg-primary-50 sm:px-5 sm:py-4"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-transform group-hover:scale-105">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <span className="font-heading text-sm font-semibold text-ink group-hover:text-primary">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Key facts */}
      <section className="pt-10 md:pt-12">
        <Container>
          <ul className="grid gap-4 md:grid-cols-3">
            {keyFacts.map((item) => (
              <li
                key={item.label}
                className="flex gap-3.5 rounded-2xl border border-primary/10 bg-primary-50 p-5"
              >
                <span
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${item.accent}`}
                >
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-ink">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Intro + CTAs */}
      <section className="py-10 md:py-12">
        <Container>
          <div className="grid gap-6 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-card lg:grid-cols-[1.3fr_0.7fr]">
            <div className="p-6 md:p-8">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Before you travel
              </p>
              <h2 className="mt-2 font-heading text-xl font-semibold text-ink md:text-2xl">
                Who needs a Philippine visa?
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-ink-soft">
                <p>
                  Nationals from visa-free countries traveling for business or tourism may enter
                  without a visa for up to twenty-one (21) days, with a valid return or onward ticket
                  and a passport valid for at least six (6) months beyond the stay.
                </p>
                <p>
                  Longer stays — or travel for study, seafaring, or flight training — require the
                  appropriate visa from the Consulate General before departure.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 bg-primary px-6 py-7 text-white md:px-8">
              <p className="font-heading text-sm font-semibold text-flag-yellow">Quick actions</p>
              <ButtonLink href="#visa-categories" variant="onDark" className="justify-between">
                Choose a visa type
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
              <ButtonLink href="#visa-free" variant="ghostDark" className="justify-between">
                Check visa-free entry
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
              <ButtonLink
                href="/visa-migration/visa-fees"
                variant="ghostDark"
                className="justify-between"
              >
                View visa fees
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section id="visa-categories" className="scroll-mt-28 bg-primary-50 py-14 md:py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Step 1
              </p>
              <h2 className="mt-1 font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
                Choose your visa category
              </h2>
              <p className="mt-2 text-[15px] text-ink-muted">
                Start with your purpose of travel, then open the matching requirements page.
              </p>
            </div>
            <ButtonLink href="/visa-migration/what-is-philippine-visa" variant="secondary">
              What is a Philippine visa?
            </ButtonLink>
          </div>

          {primaryCategory && (
            <Link
              href={primaryCategory.href}
              className="group mb-5 flex flex-col gap-6 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#3a3eab_0%,#2e3192_55%,#1f2150_100%)] p-6 text-white shadow-card-hover transition-transform duration-300 hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="flex items-start gap-4 md:items-center">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-flag-yellow text-ink">
                  <Icon name={primaryCategory.icon} size={28} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-flag-yellow">
                    Most common from Nepal
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-semibold md:text-2xl">
                    {primaryCategory.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                    {primaryCategory.description}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-flag-yellow md:self-center">
                View requirements
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Visa-free */}
      <section id="visa-free" className="scroll-mt-28 border-y border-line bg-white py-14 md:py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Step 2
              </p>
              <h2 className="mt-1 font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
                Check visa-free countries
              </h2>
              <p className="mt-2 text-[15px] text-ink-muted">
                Search your nationality. Eligible travelers may enter for up to {standardStayDays}{" "}
                days for business or tourism.
              </p>
            </div>
            <div className="rounded-2xl bg-primary px-5 py-3 text-white">
              <p className="text-xs uppercase tracking-wide text-white/70">Listed nationalities</p>
              <p className="font-heading text-2xl font-semibold">{visaFreeCountries.length}+</p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <CountryExplorer countries={visaFreeCountries} stayDays={standardStayDays} />
            <StayLongerPanel categories={stayCategories} />
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section
        id="entry-requirements"
        className="scroll-mt-28 bg-linear-to-b from-primary-50 to-white py-14 md:py-16"
      >
        <Container>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Step 3
            </p>
            <h2 className="mt-1 font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
              Entry requirements
            </h2>
            <p className="mt-2 text-[15px] text-ink-muted">
              Documents and stay limits that apply to temporary visitors.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {entryRequirementCards.map((card, i) => (
              <div
                key={card.title}
                className={`relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-card md:p-7 ${
                  i === 0 ? "border-t-4 border-t-flag-blue" : "border-t-4 border-t-flag-red"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white ${
                      i === 0 ? "bg-flag-blue" : "bg-flag-red"
                    }`}
                  >
                    <Icon name={card.icon} size={20} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ink">{card.title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          i === 0 ? "bg-flag-blue" : "bg-flag-red"
                        }`}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <Notice title="Important">{entryNotice}</Notice>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "Other visa requirements",
                href: "/visa-migration/other-requirements",
                icon: "document" as const,
              },
              {
                label: "Visa fees",
                href: "/visa-migration/visa-fees",
                icon: "calendar" as const,
              },
              {
                label: "What is a Philippine visa?",
                href: "/visa-migration/what-is-philippine-visa",
                icon: "info" as const,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-primary/15 bg-white px-4 py-3.5 shadow-card transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <Icon name={item.icon} size={16} />
                </span>
                <span className="flex-1 text-sm font-semibold">{item.label}</span>
                <Icon
                  name="arrowRight"
                  size={14}
                  className="opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Help */}
      <section className="bg-white py-12 md:py-14">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#3a3eab_0%,#2e3192_50%,#1f2150_100%)] px-6 py-10 text-white md:px-10 md:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 bottom-[-30%] h-56 w-56 bg-[url(/logo.svg)] bg-contain bg-no-repeat opacity-10"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-flag-yellow">
                  Need guidance?
                </p>
                <h2 className="mt-2 font-heading text-2xl font-semibold md:text-3xl">
                  Unsure which visa you need?
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  Reach the Consulate for help with categories, fees, and supporting documents
                  before you apply.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="onDark" className="px-6 py-3">
                  Contact us
                </ButtonLink>
                <ButtonLink href="/visa-migration/visa-fees" variant="ghostDark" className="px-6 py-3">
                  Visa fees
                </ButtonLink>
                <ButtonLink href="/downloads" variant="ghostDark" className="px-6 py-3">
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
