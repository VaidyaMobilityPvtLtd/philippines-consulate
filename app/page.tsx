import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { QuickLinkCard } from "@/components/ui/QuickLinkCard";
import { Icon } from "@/components/icons";
import { homeHero, homeIntro, quickLinks } from "@/content/home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: homeHero.subtitle,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary-light via-primary to-primary-dark text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 hidden h-130 w-130 -translate-y-1/2 bg-[url(/seal.svg)] bg-contain bg-no-repeat opacity-10 lg:block"
        />
        <Container className="relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70">
              {homeHero.eyelet}
            </p>
            <h1 className="mt-4 max-w-2xl font-heading text-4xl font-semibold leading-[1.1] md:text-[52px]">
              {homeHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              {homeHero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={homeHero.primaryCta.href} variant="onDark">
                {homeHero.primaryCta.label}
                <Icon name="arrowRight" size={16} />
              </ButtonLink>
              <ButtonLink href={homeHero.secondaryCta.href} variant="ghostDark">
                {homeHero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          {/* At-a-glance card */}
          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-white/70">At a glance</p>
            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Icon name="calendar" size={22} />
                </span>
                <div>
                  <p className="font-heading font-semibold text-white">Visa-free entry</p>
                  <p className="text-sm text-white/70">Up to 21 days for eligible nationals.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Icon name="clock" size={22} />
                </span>
                <div>
                  <p className="font-heading font-semibold text-white">Office hours</p>
                  <p className="text-sm text-white/70">{site.contact.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Icon name="mapPin" size={22} />
                </span>
                <div>
                  <p className="font-heading font-semibold text-white">Where we are</p>
                  <p className="text-sm text-white/70">{site.location}</p>
                </div>
              </li>
            </ul>
          </div>
        </Container>
        <div
          aria-hidden
          className="h-1.5 w-full bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red"
        />
      </section>

      {/* Intro + quick links */}
      <Section title={homeIntro.heading} subtitle={homeIntro.body}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <QuickLinkCard key={link.href} link={link} />
          ))}
        </div>
      </Section>

      {/* Contact CTA band */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-white md:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 bg-[url(/seal.svg)] bg-contain bg-no-repeat opacity-10"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-2xl font-semibold md:text-3xl">
                Need consular assistance?
              </h2>
              <p className="mt-3 text-white/80">
                Get in touch with the Consulate General for help with visas, passports,
                civil registration and other consular services.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/contact" variant="onDark">
                  Contact the Consulate
                </ButtonLink>
                <ButtonLink href="/visa-migration" variant="ghostDark">
                  Visa & Migration
                  <Icon name="arrowRight" size={16} />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
