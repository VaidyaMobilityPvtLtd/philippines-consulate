import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { QuickLinkCard } from "@/components/ui/QuickLinkCard";
import { Icon } from "@/components/icons";
import { homeHero, homeIntro, quickLinks } from "@/content/home";
import { audiencePaths, newsItems } from "@/content/news";
import { site } from "@/lib/site";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Home",
  description: homeHero.subtitle,
};

const featured = quickLinks.slice(0, 3);
const moreLinks = quickLinks.slice(3);
const latestNews = newsItems.slice(0, 3);

const heroShortcuts: { label: string; href: string; icon: IconName }[] = [
  { label: "Visa & Migration", href: "/visa-migration", icon: "visa" },
  { label: "Passport Services", href: "/passport-service", icon: "passport" },
  { label: "Registration", href: "/registration-service", icon: "registration" },
  { label: "Contact", href: "/contact", icon: "mail" },
];

const eServices = [
  { label: "Passport appointment (DFA)", href: site.external.passport },
  { label: "Bureau of Immigration", href: site.external.immigration },
  { label: "Department of Foreign Affairs", href: site.external.dfa },
  { label: "gov.ph", href: site.external.government },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(145deg,#4a4eb8_0%,#2e3192_42%,#1a1c5c_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(252,209,22,0.28),transparent_34%),radial-gradient(circle_at_88%_15%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_70%_90%,rgba(206,17,38,0.22),transparent_40%)]"
        />
        <div
          aria-hidden
          className="home-float pointer-events-none absolute -right-10 top-1/2 hidden h-[26rem] w-[26rem] bg-[url(/logo.svg)] bg-contain bg-no-repeat opacity-[0.16] lg:block xl:right-8"
        />

        <Container className="relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="max-w-2xl">
            <div className="home-fade-up inline-flex items-center gap-2 rounded-full border border-flag-yellow/40 bg-flag-yellow/15 px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-flag-yellow backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-flag-yellow" />
              {homeHero.eyelet}
            </div>
            <h1 className="home-fade-up home-fade-up-delay-1 mt-6 font-heading text-[2.25rem] font-semibold leading-[1.12] md:text-5xl lg:text-[3.15rem]">
              {homeHero.title}
            </h1>
            <p className="home-fade-up home-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {homeHero.subtitle}
            </p>
            <div className="home-fade-up home-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={homeHero.primaryCta.href} variant="onDark" className="rounded-full px-6 py-3">
                {homeHero.primaryCta.label}
                <Icon name="arrowRight" size={16} />
              </ButtonLink>
              <ButtonLink
                href={homeHero.secondaryCta.href}
                variant="ghostDark"
                className="rounded-full px-6 py-3"
              >
                {homeHero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          {/* Popular services panel */}
          <div className="home-fade-up home-fade-up-delay-4 relative">
            <div className="rounded-3xl border border-white/25 bg-white/15 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-6">
              <div className="mb-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="" width={44} height={49} className="object-contain drop-shadow-md" />
                <div>
                  <p className="font-heading text-sm font-semibold text-white">Popular services</p>
                  <p className="text-xs text-white/70">Start with what you need most</p>
                </div>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {heroShortcuts.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/12 px-3.5 py-3 transition-all duration-200 hover:border-flag-yellow/40 hover:bg-white/22"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-flag-yellow/20 text-flag-yellow transition-colors group-hover:bg-white group-hover:text-primary">
                        <Icon name={item.icon} size={18} />
                      </span>
                      <span className="flex-1 text-sm font-medium text-white">{item.label}</span>
                      <Icon
                        name="chevronRight"
                        size={16}
                        className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-flag-yellow/25 bg-flag-yellow/10 px-4 py-3 text-xs leading-relaxed text-white/85">
                <span className="font-semibold text-flag-yellow">Office hours:</span>{" "}
                {site.contact.hours}
              </div>
            </div>
          </div>
        </Container>

        <div
          aria-hidden
          className="h-1.5 w-full bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red"
        />
      </section>

      {/* Feature strip */}
      <section className="relative z-10 -mt-8 bg-linear-to-b from-primary-50 to-white pb-6 pt-2 md:-mt-10 md:pb-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((link, i) => {
              const accent =
                i === 0 ? "bg-flag-blue" : i === 1 ? "bg-flag-yellow" : "bg-flag-red";
              const iconSoft =
                i === 0
                  ? "bg-[#e8eefc] text-flag-blue"
                  : i === 1
                    ? "bg-[#fff6d6] text-[#9a7a00]"
                    : "bg-[#fde8eb] text-flag-red";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${accent}`} />
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:bg-primary group-hover:text-white ${iconSoft}`}
                  >
                    <Icon name={link.icon} size={24} />
                  </span>
                  <h2 className="mt-4 font-heading text-lg font-semibold text-ink group-hover:text-primary">
                    {link.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{link.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <Icon
                      name="arrowRight"
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Dual audience — embassy-style quick paths */}
      <Section
        title="How can we help you?"
        subtitle="Choose your path — the same approach used on DFA embassy sites."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {audiencePaths.map((path, i) => (
            <div
              key={path.title}
              className={`relative overflow-hidden rounded-2xl border p-6 shadow-card md:p-7 ${
                i === 0
                  ? "border-primary/20 bg-linear-to-br from-primary-50 to-white"
                  : "border-flag-red/20 bg-linear-to-br from-[#fff1f2] to-white"
              }`}
            >
              <div
                aria-hidden
                className={`absolute inset-y-0 left-0 w-1.5 ${i === 0 ? "bg-primary" : "bg-flag-red"}`}
              />
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white ${
                  i === 0 ? "bg-primary" : "bg-flag-red"
                }`}
              >
                <Icon name={path.icon} size={20} />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-ink">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{path.description}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {path.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold hover:underline ${
                        i === 0 ? "text-primary" : "text-flag-red"
                      }`}
                    >
                      {link.label}
                      <Icon name="arrowRight" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* News & announcements */}
      <Section
        muted
        title="News & announcements"
        subtitle="Latest notices from the Consulate General in Kathmandu."
        className="bg-primary-50"
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {latestNews.map((item, i) => {
            const accents = [
              "border-t-primary bg-white",
              "border-t-flag-yellow bg-white",
              "border-t-flag-red bg-white",
            ] as const;
            const badges = [
              "bg-primary text-white",
              "bg-flag-yellow text-ink",
              "bg-flag-red text-white",
            ] as const;
            return (
              <li key={item.slug}>
                <article
                  className={`flex h-full flex-col rounded-2xl border border-line border-t-4 p-5 shadow-card ${accents[i]}`}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wide ${badges[i]}`}
                    >
                      {item.category}
                    </span>
                    <time dateTime={item.date} className="text-ink-muted">
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{item.summary}</p>
                </article>
              </li>
            );
          })}
        </ul>
        <div className="mt-8 text-center">
          <ButtonLink href="/news" variant="primary">
            View all announcements
            <Icon name="arrowRight" size={15} />
          </ButtonLink>
        </div>
      </Section>

      {/* Official e-services */}
      <section className="border-y border-flag-yellow/30 bg-[#fff8e1] py-12 md:py-14">
        <Container>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="font-heading text-[1.5rem] font-semibold text-primary md:text-[1.75rem]">
              Official Philippine e-services
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
              Helpful links from DFA and partner agencies.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {eServices.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-2xl border border-primary/15 bg-white px-4 py-3.5 text-sm font-semibold text-primary shadow-card transition-colors hover:bg-primary hover:text-white"
                >
                  <span>{item.label}</span>
                  <Icon name="external" size={14} className="shrink-0 opacity-70" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* More information */}
      <Section
        title={homeIntro.heading}
        subtitle={homeIntro.body}
        className="bg-linear-to-b from-white to-primary-50"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {moreLinks.map((link) => (
            <QuickLinkCard key={link.href} link={link} />
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="bg-primary-50 pb-16 pt-4 md:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#3a3eab_0%,#2e3192_50%,#1f2150_100%)] px-6 py-12 text-white md:px-12 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,209,22,0.2),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(206,17,38,0.18),transparent_40%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 bottom-[-20%] h-64 w-64 bg-[url(/logo.svg)] bg-contain bg-no-repeat opacity-10"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-flag-yellow">
                  We are here to help
                </p>
                <h2 className="mt-3 font-heading text-2xl font-semibold md:text-3xl">
                  Need consular assistance?
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                  Reach the Consulate General in Kathmandu for visas, passports, registration,
                  and other consular support.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="onDark" className="rounded-full px-6 py-3">
                    Contact the Consulate
                  </ButtonLink>
                  <ButtonLink
                    href="/visa-migration"
                    variant="ghostDark"
                    className="rounded-full px-6 py-3"
                  >
                    Visa & Migration
                    <Icon name="arrowRight" size={16} />
                  </ButtonLink>
                </div>
              </div>

              <div className="w-full max-w-sm rounded-2xl border border-flag-yellow/30 bg-white/12 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-flag-yellow">Quick contact</p>
                <ul className="mt-4 space-y-3.5 text-sm text-white/85">
                  <li>
                    <Link href="tel:+97714008801" className="flex gap-3 hover:text-white">
                      <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-flag-yellow" />
                      <span>{site.contact.phone}</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`mailto:${site.contact.email}`}
                      className="flex gap-3 hover:text-white"
                    >
                      <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-flag-yellow" />
                      <span>{site.contact.email}</span>
                    </Link>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="mapPin" size={16} className="mt-0.5 shrink-0 text-flag-yellow" />
                    <span>{site.contact.address}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
