import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "About Philippines",
  description:
    "Discover the Philippines — geography, people, economy, foreign policy, and trade relations.",
};

const highlights: { label: string; value: string; icon: IconName }[] = [
  { label: "Islands", value: "7,107", icon: "globe" },
  { label: "Capital", value: "Manila", icon: "mapPin" },
  { label: "Language", value: "Filipino & English", icon: "aboutPh" },
  { label: "Time zone", value: "GMT +8", icon: "clock" },
];

const topics: {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  accent: string;
  featured?: boolean;
}[] = [
  {
    title: "Philippines at a Glance",
    description:
      "People, geography, climate, government, and what makes Filipino culture unique.",
    href: "/about-philippines/overview",
    icon: "aboutPh",
    accent: "bg-flag-blue",
    featured: true,
  },
  {
    title: "Economy",
    description: "Economic overview, development priorities, and official resources.",
    href: "/about-philippines/economy",
    icon: "business",
    accent: "bg-flag-yellow text-ink",
  },
  {
    title: "Foreign Policy",
    description: "How the Philippines engages the region and the wider world.",
    href: "/about-philippines/foreign-policy",
    icon: "globe",
    accent: "bg-flag-red",
  },
  {
    title: "Trade Policy",
    description: "Trade orientation, partnerships, and commercial relations.",
    href: "/about-philippines/trade-policy",
    icon: "document",
    accent: "bg-primary",
  },
  {
    title: "Information Directory",
    description: "Useful references and contacts for learning more about the country.",
    href: "/about-philippines/directory",
    icon: "info",
    accent: "bg-primary-dark",
  },
];

const related: { title: string; description: string; href: string; icon: IconName }[] = [
  {
    title: "Study in Philippines",
    description: "Universities, colleges, and guidance for Nepalese students.",
    href: "/study-in-philippines",
    icon: "study",
  },
  {
    title: "Traveling in Philippines",
    description: "Tourism highlights, destinations, and visitor information.",
    href: "/traveling-in-philippines",
    icon: "travel",
  },
  {
    title: "Visa & Migration",
    description: "Visa categories, visa-free entry, and application guidance.",
    href: "/visa-migration",
    icon: "visa",
  },
];

export default function AboutPhilippinesPage() {
  const featured = topics.find((t) => t.featured)!;
  const rest = topics.filter((t) => !t.featured);

  return (
    <>
      <PageHero
        eyebrow="Discover"
        title="About the Philippines"
        intro="An archipelago of more than seven thousand islands — with a unique blend of Malay, Spanish, and American heritage, and one of Asia’s largest English-speaking populations."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Philippines", href: "/about-philippines" },
        ]}
      />

      {/* Highlights */}
      <section className="relative z-10 -mt-6">
        <Container>
          <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card-hover lg:grid-cols-4">
            {highlights.map((item, i) => (
              <li
                key={item.label}
                className={`flex items-center gap-3 px-5 py-5 ${
                  i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                } ${i === 2 ? "border-t lg:border-t-0" : ""}`}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    {item.label}
                  </p>
                  <p className="font-heading text-base font-semibold text-ink">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-12">
        <Container>
          <div className="grid gap-6 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-card lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-6 md:p-8">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Republic of the Philippines
              </p>
              <h2 className="mt-2 font-heading text-xl font-semibold text-ink md:text-2xl">
                A nation of islands, cultures, and connections
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-ink-soft">
                <p>
                  The Philippines stretches from south of China to the northern tip of Borneo. Its
                  national life blends indigenous Malay culture with Spanish and American influences —
                  visible in language, faith, food, and everyday life.
                </p>
                <p>
                  Explore the topics below for a country overview, economy, foreign and trade policy,
                  and a directory of useful information.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 bg-primary px-6 py-7 text-white md:px-8">
              <p className="font-heading text-sm font-semibold text-flag-yellow">Start here</p>
              <ButtonLink href={featured.href} variant="onDark" className="justify-between">
                Philippines at a Glance
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
              <ButtonLink href="/traveling-in-philippines" variant="ghostDark" className="justify-between">
                Plan a visit
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
              <ButtonLink href="/study-in-philippines" variant="ghostDark" className="justify-between">
                Study options
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Topics */}
      <section className="bg-primary-50 py-14 md:py-16">
        <Container>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Explore topics
            </p>
            <h2 className="mt-1 font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
              Learn about the Philippines
            </h2>
            <p className="mt-2 text-[15px] text-ink-muted">
              Choose a topic for country facts, economic context, and policy information.
            </p>
          </div>

          <Link
            href={featured.href}
            className="group mb-5 flex flex-col gap-6 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#3a3eab_0%,#2e3192_55%,#1f2150_100%)] p-6 text-white shadow-card-hover transition-transform duration-300 hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div className="flex items-start gap-4 md:items-center">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-flag-yellow text-ink">
                <Icon name={featured.icon} size={28} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-flag-yellow">
                  Best place to begin
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                  {featured.description}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-flag-yellow md:self-center">
              Read overview
              <Icon name="arrowRight" size={16} />
            </span>
          </Link>

          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover md:p-6"
              >
                <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${topic.accent}`} />
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white ${topic.accent}`}
                >
                  <Icon name={topic.icon} size={20} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink group-hover:text-primary">
                  {topic.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {topic.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Open topic
                  <Icon
                    name="arrowRight"
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="mb-8 max-w-2xl">
            <h2 className="font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
              Related next steps
            </h2>
            <p className="mt-2 text-[15px] text-ink-muted">
              Planning to visit, study, or apply for a visa? Continue here.
            </p>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-primary-50 p-5 transition-colors hover:bg-primary hover:text-white md:p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-white group-hover:text-primary">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted group-hover:text-white/80">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-flag-yellow">
                    Explore
                    <Icon name="arrowRight" size={14} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Help */}
      <section className="bg-primary-50 pb-14 pt-2 md:pb-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#2e3192,#1f2150)] px-6 py-8 text-white md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-heading text-xl font-semibold">Questions about the Philippines?</h2>
              <p className="mt-1.5 max-w-lg text-sm text-white/75">
                The Consulate General in Kathmandu can help with visas, travel guidance, and
                general information.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="onDark">
                Contact us
              </ButtonLink>
              <ButtonLink href="/visa-migration" variant="ghostDark">
                Visa & Migration
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
