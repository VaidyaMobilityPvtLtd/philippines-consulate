import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { homeHero, homeIntro, quickLinks } from "@/content/home";
import { audiencePaths } from "@/content/news";
import { fetchPublishedNews } from "@/lib/api";
import { site } from "@/lib/site";
import { heroImages } from "@/lib/hero-images";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Home",
  description: homeHero.subtitle,
};

const featured = quickLinks.slice(0, 3);
const moreLinks = quickLinks.slice(3);

const formatNewsDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const heroShortcuts: { label: string; hint: string; href: string; icon: IconName }[] = [
  {
    label: "Visa & Migration",
    hint: "Apply or check visa-free entry",
    href: "/visa-migration",
    icon: "visa",
  },
  {
    label: "Passport Services",
    hint: "New, renew, or replace",
    href: "/passport-service",
    icon: "passport",
  },
  {
    label: "Registration",
    hint: "Birth, marriage, death",
    href: "/registration-service",
    icon: "registration",
  },
  {
    label: "Contact",
    hint: "Hours, map, and inquiry form",
    href: "/contact",
    icon: "mail",
  },
];

/** Photo header for each of the three headline services. */
const serviceImages: Record<string, { src: string; alt: string }> = {
  "/visa-migration": heroImages.visa,
  "/passport-service": heroImages.passport,
  "/registration-service": heroImages.registration,
};

/** Photo tile for each section in the "explore more" grid. */
const exploreImages: Record<string, { src: string; alt: string }> = {
  "/about-philippines": heroImages.aboutPh,
  "/study-in-philippines": heroImages.study,
  "/traveling-in-philippines": heroImages.travelPh,
  "/about-nepal": heroImages.nepalValley,
  "/traveling-in-nepal": heroImages.travelNepal,
};

const eServices = [
  { label: "Passport appointment (DFA)", href: site.external.passport },
  { label: "Bureau of Immigration", href: site.external.immigration },
  { label: "Department of Foreign Affairs", href: site.external.dfa },
  { label: "gov.ph", href: site.external.government },
] as const;

export default async function HomePage() {
  const { items: newsItems } = await fetchPublishedNews();
  const [leadStory, ...otherNews] = newsItems.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[min(100svh,52rem)] flex-col overflow-hidden bg-[#0b0f2a] text-white sm:min-h-[calc(100svh-4.5rem)] xl:min-h-[calc(100svh-8rem)]">
        <Image
          src={heroImages.home.src}
          alt={heroImages.home.alt}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(12,16,42,0.78)_0%,rgba(46,49,146,0.52)_48%,rgba(12,16,42,0.38)_100%)]"
        />

        <Container className="relative grid flex-1 items-center gap-8 pb-14 pt-12 sm:gap-10 sm:pb-20 sm:pt-16 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12">
          <div className="max-w-2xl min-w-0">
            <p className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-white/20 bg-black/30 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-flag-yellow backdrop-blur-[2px] sm:rounded-full sm:tracking-[0.14em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-flag-yellow" />
              {homeHero.eyelet}
            </p>

            <h1 className="home-fade-up home-fade-up-delay-1 mt-4 font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)] sm:mt-5 sm:text-[2.35rem] md:text-5xl lg:text-[3.2rem]">
              {homeHero.title}
            </h1>

            <p className="home-fade-up home-fade-up-delay-2 mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 sm:mt-5 sm:text-base md:text-lg">
              {homeHero.subtitle}
            </p>

            <div className="home-fade-up home-fade-up-delay-3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={homeHero.primaryCta.href}
                variant="onDark"
                className="w-full rounded-full px-6 py-3 sm:w-auto"
              >
                {homeHero.primaryCta.label}
                <Icon name="arrowRight" size={16} />
              </ButtonLink>
              <ButtonLink
                href={homeHero.secondaryCta.href}
                variant="ghostDark"
                className="w-full rounded-full px-6 py-3 sm:w-auto"
              >
                {homeHero.secondaryCta.label}
              </ButtonLink>
            </div>

            <dl className="home-fade-up home-fade-up-delay-3 mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/20 pt-5 sm:mt-10 sm:gap-4 sm:pt-6">
              <div className="min-w-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
                  Location
                </dt>
                <dd className="mt-1 font-heading text-[13px] font-semibold sm:text-sm">Kathmandu</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
                  Hours
                </dt>
                <dd className="mt-1 font-heading text-[13px] font-semibold sm:text-sm">Mon–Fri</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
                  Focus
                </dt>
                <dd className="mt-1 font-heading text-[13px] font-semibold sm:text-sm">PH · Nepal</dd>
              </div>
            </dl>
          </div>

          {/* Popular services panel */}
          <div className="min-w-0">
            <div className="rounded-2xl border border-white/25 bg-[rgba(16,20,52,0.5)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl backdrop-saturate-150 sm:rounded-3xl sm:p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt=""
                  width={44}
                  height={49}
                  className="object-contain drop-shadow-md"
                />
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
                      className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3.5 py-3 transition-all duration-200 hover:border-flag-yellow/40 hover:bg-white/20"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-flag-yellow/20 text-flag-yellow transition-colors group-hover:bg-white group-hover:text-primary">
                        <Icon name={item.icon} size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-white">{item.label}</span>
                        <span className="block text-xs text-white/60">{item.hint}</span>
                      </span>
                      <Icon
                        name="chevronRight"
                        size={16}
                        className="shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
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
      <section className="-mt-px bg-linear-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto mb-9 max-w-2xl text-center md:mb-11">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/70">
              Consular services
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-ink md:text-[2rem]">
              What can we do for you today?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              The three services most requested at the Consulate General in Kathmandu.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:gap-7">
            {featured.map((link, i) => {
              const accent =
                i === 0 ? "bg-flag-blue" : i === 1 ? "bg-flag-yellow" : "bg-flag-red";
              const iconSoft =
                i === 0
                  ? "bg-[#e8eefc] text-flag-blue"
                  : i === 1
                    ? "bg-[#fff6d6] text-[#9a7a00]"
                    : "bg-[#fde8eb] text-flag-red";
              const photo = serviceImages[link.href];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,18,48,0.55),rgba(14,18,48,0.05))]"
                    />
                    <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${accent}`} />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 sm:px-7 sm:pb-8">
                    <span
                      className={`relative -mt-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-card ring-4 ring-white transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-16 sm:w-16 ${iconSoft}`}
                    >
                      <Icon name={link.icon} size={26} />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-ink group-hover:text-primary sm:mt-5 sm:text-xl">
                      {link.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-muted sm:mt-3">
                      {link.description}
                    </p>
                    <span className="mt-5 flex items-center gap-1.5 border-t border-line pt-4 text-sm font-semibold text-primary sm:mt-6 sm:pt-5">
                      Learn more
                      <Icon
                        name="arrowRight"
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
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
        {leadStory ? (
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Lead story */}
            <Link
              href={`/news/${leadStory.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="relative h-52 overflow-hidden md:h-64">
                <Image
                  src={heroImages.aboutUs.src}
                  alt=""
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,18,48,0.7),rgba(14,18,48,0.05))]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-flag-yellow px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                  {leadStory.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <time dateTime={leadStory.date} className="text-xs font-medium text-white/75">
                    {formatNewsDate(leadStory.date)}
                  </time>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-white md:text-xl">
                    {leadStory.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="text-sm leading-relaxed text-ink-muted">{leadStory.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read the notice
                  <Icon
                    name="arrowRight"
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>

            {/* Recent notices */}
            <ul className="flex flex-col gap-4">
              {otherNews.map((item, i) => {
                const bar = i === 0 ? "bg-flag-yellow" : "bg-flag-red";
                const badge = i === 0 ? "bg-[#fff6d6] text-[#8a6d00]" : "bg-[#fde8eb] text-flag-red";
                return (
                  <li key={item.slug} className="flex-1">
                    <Link
                      href={`/news/${item.slug}`}
                      className="group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-6"
                    >
                      <div aria-hidden className={`absolute inset-y-0 left-0 w-1.5 ${bar}`} />
                      <div className="min-w-0 pl-2">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span
                            className={`rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wide ${badge}`}
                          >
                            {item.category}
                          </span>
                          <time dateTime={item.date} className="text-ink-muted">
                            {formatNewsDate(item.date)}
                          </time>
                        </div>
                        <h3 className="mt-2.5 font-heading text-base font-semibold text-ink group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.summary}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p className="text-center text-sm text-ink-muted">
            No announcements are published at this time.
          </p>
        )}
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {moreLinks.map((link, i) => {
            const photo = exploreImages[link.href];
            const wide = i === 0;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-card-hover ${
                  wide ? "min-h-[16rem] lg:col-span-2 lg:min-h-[18rem]" : "min-h-[13rem]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  quality={85}
                  sizes={
                    wide
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,16,42,0.88)_0%,rgba(12,16,42,0.35)_55%,rgba(12,16,42,0.12)_100%)]"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-flag-yellow ring-1 ring-white/25 backdrop-blur-[2px]">
                    <Icon name={link.icon} size={18} />
                  </span>
                  <h3
                    className={`mt-3.5 font-heading font-semibold text-white ${
                      wide ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    {link.title}
                  </h3>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed text-white/80 ${
                      wide ? "max-w-md" : ""
                    }`}
                  >
                    {link.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-flag-yellow">
                      Explore
                      <Icon
                        name="arrowRight"
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    {link.links?.slice(0, 2).map((sub) => (
                      <span key={sub.href} className="text-xs text-white/65">
                        {sub.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="bg-primary-50 pb-16 pt-4 md:pb-24">
        <Container>
          <div className="rounded-2xl bg-[linear-gradient(135deg,#32359e_0%,#2e3192_55%,#252873_100%)] px-5 py-10 text-center text-white sm:px-6 sm:py-12 md:px-12 md:py-14">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-flag-yellow">
              We are here to help
            </p>
            <h2 className="mt-3 font-heading text-[1.65rem] font-semibold sm:text-2xl md:text-[2rem]">
              Need consular assistance?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/80">
              Reach the Consulate General in Kathmandu for visas, passports, registration, and
              other consular support.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/contact"
                variant="onDark"
                className="w-full rounded-full px-6 py-3 sm:w-auto"
              >
                Contact the Consulate
              </ButtonLink>
              <ButtonLink
                href="/downloads"
                variant="ghostDark"
                className="w-full rounded-full px-6 py-3 sm:w-auto"
              >
                Forms & downloads
                <Icon name="arrowRight" size={16} />
              </ButtonLink>
            </div>

            <ul className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 border-t border-white/15 pt-6 text-sm text-white/80 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="min-w-0 max-w-full">
                <Link
                  href="tel:+97714008801"
                  className="flex items-center justify-center gap-2 break-words hover:text-white"
                >
                  <Icon name="phone" size={15} className="shrink-0 text-flag-yellow" />
                  {site.contact.phone}
                </Link>
              </li>
              <li className="min-w-0 max-w-full">
                <Link
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center justify-center gap-2 break-all hover:text-white"
                >
                  <Icon name="mail" size={15} className="shrink-0 text-flag-yellow" />
                  {site.contact.email}
                </Link>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Icon name="clock" size={15} className="shrink-0 text-flag-yellow" />
                Mon – Fri, 9:00 AM – 3:00 PM
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
