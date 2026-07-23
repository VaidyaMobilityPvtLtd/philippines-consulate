import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { aboutUsPage } from "@/content/sections/about-us";
import { consulateServices, pillGroups } from "@/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: aboutUsPage.title,
  description: aboutUsPage.intro,
};

const missionCards = [
  {
    title: "Citizen Services",
    body: "Providing comprehensive consular assistance to Filipino nationals residing in or visiting Nepal.",
  },
  {
    title: "Diplomatic Relations",
    body: "Strengthening bilateral ties and promoting cultural exchange between the Philippines and Nepal.",
  },
  {
    title: "Visa Services",
    body: "Processing visa applications for Nepali nationals wishing to visit, study, or work in the Philippines.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Consulate"
        title="About Us"
        intro="Learn about the Philippine Consulate General in Kathmandu, our mission, leadership, and consular services."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              Consul General for Nepal
            </p>
            <div className="mt-5 aspect-[4/5] max-w-[280px] rounded-2xl bg-linear-to-br from-primary-100 to-primary-200" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink">Mr. Suraj Vaidya</h2>
            <p className="mt-1 text-base text-primary">Vice Consul General</p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              As the Vice Consul General, Mr. Suraj Vaidya leads the Philippine Consulate General in
              Kathmandu, overseeing consular operations and fostering the bilateral relationship
              between the Philippines and Nepal.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface-muted p-6 md:p-8">
            <h2 className="font-heading text-2xl font-semibold text-primary">Our Mission</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              The Philippine Consulate General in Kathmandu is dedicated to promoting and protecting
              the interests of the Philippines and providing quality consular services to Filipino
              nationals and foreign visitors.
            </p>
            <div className="mt-6 space-y-3">
              {missionCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-line bg-surface p-4 md:p-5"
                >
                  <h3 className="font-heading text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        muted
        title="Contact Information"
        subtitle="Get in touch with the Philippine Consulate General in Kathmandu."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-ink">Office Address</h3>
            <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-ink-soft">
              <p>Consulate of the Republic of The Philippines</p>
              <p>Ananda Nagar, Dhumbarahi</p>
              <p>Kathmandu, Nepal</p>
              <p>P.O. Box: 2640</p>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-ink">Contact Details</h3>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              <div>
                <p className="font-semibold text-ink">Telephone</p>
                <p>4008801-05, 4008799</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Fax</p>
                <p>4008813, 4008770</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Email</p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-primary underline underline-offset-2"
                >
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-ink">Opening Hours</h3>
            <div className="mt-4 rounded-xl bg-primary-50 px-4 py-3.5">
              <p className="text-sm text-ink">Monday – Friday</p>
              <p className="mt-1 font-heading text-xl font-semibold text-primary">
                09:00 AM – 03:00 PM
              </p>
            </div>
            <p className="mt-4 text-sm text-ink-soft">Lunch break: 1:00 PM – 2:00 PM</p>
            <p className="mt-2 text-sm text-ink-muted">
              Closed on Philippine and Nepali public holidays
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-surface px-5 py-5 shadow-card md:flex-row md:items-center md:justify-between md:px-7">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary">
              <Icon name="info" size={20} />
            </span>
            <div>
              <p className="text-sm text-ink-muted">Contact person</p>
              <p className="font-heading text-xl font-semibold text-ink">Mr. Subin Shrestha</p>
              <p className="text-sm text-ink-soft">Administrative Officer</p>
            </div>
          </div>
          <ButtonLink href={`mailto:${site.contact.email}`} variant="primary">
            Send email
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="Consulate Services"
        subtitle="Explore services offered by the Philippine Consulate General."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[...consulateServices, ...pillGroups].map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-line bg-surface-muted p-5 shadow-card"
            >
              <h3 className="font-heading text-base font-semibold text-ink">
                {group.title === "Visa Services"
                  ? "Visa & Migration"
                  : group.title === "Traveling in Philippines"
                    ? "Travel Information"
                    : group.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
