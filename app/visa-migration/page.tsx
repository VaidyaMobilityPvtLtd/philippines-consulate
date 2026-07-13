import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { HeroMedia } from "@/components/ui/HeroMedia";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CountryExplorer } from "@/components/ui/CountryExplorer";
import { StayLongerPanel } from "@/components/ui/StayLongerPanel";
import { ServiceListCard } from "@/components/ui/ServiceListCard";
import { PillGroup } from "@/components/ui/PillGroup";
import { Notice } from "@/components/ui/Notice";
import { Icon } from "@/components/icons";
import { visaCategories } from "@/content/visa/categories";
import { visaFreeCountries, standardStayDays, stayCategories } from "@/content/visa/countries";
import { entryRequirementCards, entryNotice } from "@/content/visa/requirements";
import { consulateServices, pillGroups } from "@/content/services";

export const metadata: Metadata = {
  title: "Visa & Migration",
  description:
    "Philippine visa categories, visa-free countries, entry requirements, fees and application procedures for travelers from Nepal.",
};

export default function VisaMigrationPage() {
  return (
    <>
      {/* Hero: full-width banner + intro (drop the real photo into HeroMedia's src) */}
      <section className="pt-8 md:pt-10">
        <Container>
          <h1 className="sr-only">Visa &amp; Migration</h1>
          {/* Add the consulate photo later: <HeroMedia src="/images/visa-hero.jpg" alt="..." /> */}
          <HeroMedia alt="Consulate General of the Philippines, Kathmandu" />
          <div className="mt-8 max-w-5xl space-y-4 leading-relaxed text-ink-soft md:mt-10">
            <p>
              Nationals from the countries listed below who are traveling to the Philippines for
              business or tourism may enter without a visa for a stay not exceeding twenty-one (21)
              days, provided they hold a valid return or onward ticket and a passport valid for at
              least six (6) months beyond the intended period of stay.
            </p>
            <p>
              Travelers who intend to stay longer, or who are entering for a specific purpose such as
              study, employment at sea or flight training, must apply for the appropriate visa at the
              Consulate General before departure.
            </p>
          </div>
        </Container>
      </section>

      {/* Visa Categories */}
      <Section
        title="Visa Categories"
        subtitle="Select the visa type that matches your purpose of travel to the Philippines."
        muted
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visaCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>

      {/* Visa-Free Countries */}
      <Section
        title="Visa-Free Countries"
        subtitle="Search for your country to check visa-free entry, and see which passports may stay longer."
      >
        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <CountryExplorer countries={visaFreeCountries} stayDays={standardStayDays} />
          <StayLongerPanel categories={stayCategories} />
        </div>
      </Section>

      {/* Entry Requirements */}
      <Section title="Entry Requirements" muted>
        <div className="grid gap-5 md:grid-cols-2">
          {entryRequirementCards.map((card) => (
            <div key={card.title} className="rounded-card border border-line bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-primary">
                  <Icon name={card.icon} size={20} />
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink">{card.title}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {card.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Notice title="Important">{entryNotice}</Notice>
        </div>
      </Section>

      {/* Consulate Services */}
      <Section title="Consulate Services">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {consulateServices.map((group) => (
            <ServiceListCard key={group.title} group={group} />
          ))}
        </div>
        <div className="mt-10">
          <SectionHeading title="Explore More" align="left" className="mb-6" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillGroups.map((group) => (
              <PillGroup key={group.title} group={group} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
