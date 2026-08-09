import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { aboutUsPage } from "@/content/sections/about-us";
import { consulateServices, pillGroups } from "@/content/services";
import { site } from "@/lib/site";
import { heroImages } from "@/lib/hero-images";

export const metadata: Metadata = {
  title: aboutUsPage.title,
  description: aboutUsPage.intro,
};

const missionItems = [
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

const serviceGroups = [...consulateServices, ...pillGroups].map((group) => ({
  ...group,
  title:
    group.title === "Visa Services"
      ? "Visa & Migration"
      : group.title === "Traveling in Philippines"
        ? "Travel Information"
        : group.title,
}));

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
        imageSrc={heroImages.aboutUs.src}
        imageAlt={heroImages.aboutUs.alt}
      />

      {/* Leadership + mission */}
      <Section className="bg-primary-50/55 !py-8 md:!py-16">
        <div className="grid items-start gap-6 sm:gap-9 lg:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] xl:gap-14">
          <figure className="mx-auto w-full max-w-[12.5rem] sm:max-w-[16.5rem] lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-sunken shadow-card ring-1 ring-primary/20">
              <Image
                src="/about/suraj-vaidya.png"
                alt="Mr. Suraj Vaidya, Vice Consul General"
                fill
                sizes="(max-width: 639px) 12.5rem, (max-width: 1023px) 16.5rem, 18rem"
                className="object-cover object-[center_16%]"
                priority
              />
            </div>
            <div
              aria-hidden
              className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary/70 lg:mx-0"
            />
          </figure>

          <div className="min-w-0 rounded-xl border border-primary/15 bg-surface px-4 py-5 shadow-[0_1px_2px_rgba(46,49,146,0.04)] sm:px-7 sm:py-7">
            <div className="border-l-[3px] border-primary pl-3.5 sm:pl-5">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Leadership
              </p>
              <h2 className="mt-2.5 font-heading text-[1.55rem] font-semibold leading-tight text-ink sm:mt-3 sm:text-[2rem]">
                Mr. Suraj Vaidya
              </h2>
              <p className="mt-1.5 text-[15px] font-semibold text-primary sm:mt-2 sm:text-base">
                Vice Consul General
              </p>
            </div>

            <div className="mt-5 space-y-3.5 text-[15px] leading-[1.75] text-ink sm:space-y-4 md:text-base">
              <p>
                As the Vice Consul General, Mr. Suraj Vaidya leads the Philippine Consulate General
                in Kathmandu, overseeing consular operations and fostering the bilateral
                relationship between the Philippines and Nepal.
              </p>
              <p>
                The Consulate provides consular assistance to Filipino nationals in Nepal and
                facilitates travel, trade, education, and cultural exchange between the two
                countries.
              </p>
            </div>

            <div className="mt-7 border-t border-line-strong pt-6 sm:mt-9 sm:pt-8">
              <div className="border-l-[3px] border-primary pl-3.5 sm:pl-5">
                <h3 className="font-heading text-[1.25rem] font-semibold text-ink sm:text-[1.35rem] md:text-[1.5rem]">
                  Our Mission
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.75] text-ink sm:mt-3 md:text-base">
                  The Philippine Consulate General in Kathmandu is dedicated to promoting and
                  protecting the interests of the Philippines and providing quality consular
                  services to Filipino nationals and foreign visitors.
                </p>
              </div>

              <ul className="mt-5 space-y-0 divide-y divide-line-strong border-y border-line-strong sm:mt-7">
                {missionItems.map((item) => (
                  <li
                    key={item.title}
                    className="grid gap-1.5 py-4 first:pt-4 last:pb-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6 sm:py-5 sm:first:pt-5 sm:last:pb-5"
                  >
                    <p className="font-heading text-[15px] font-semibold text-primary sm:pt-0.5">
                      {item.title}
                    </p>
                    <p className="text-[15px] leading-relaxed text-ink">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section
        title="Contact Information"
        subtitle="Get in touch with the Philippine Consulate General in Kathmandu."
        headingAlign="left"
        className="border-y border-line-strong bg-surface"
      >
        <div className="grid gap-7 border-t-2 border-primary/25 pt-8 sm:gap-8 sm:pt-10 md:grid-cols-3 md:gap-10">
          <div>
            <div className="flex items-center gap-2.5 text-primary">
              <Icon name="mapPin" size={18} />
              <h3 className="font-heading text-base font-semibold text-ink">Office Address</h3>
            </div>
            <div className="mt-3.5 space-y-1 border-l-2 border-primary/25 pl-3.5 text-[15px] leading-relaxed text-ink sm:mt-4">
              <p className="font-medium text-ink">Consulate of the Republic of The Philippines</p>
              <p>Ananda Nagar, Dhumbarahi</p>
              <p>Kathmandu, Nepal</p>
              <p>P.O. Box: 2640</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 text-primary">
              <Icon name="phone" size={18} />
              <h3 className="font-heading text-base font-semibold text-ink">Contact Details</h3>
            </div>
            <dl className="mt-3.5 space-y-4 border-l-2 border-primary/25 pl-3.5 text-[15px] sm:mt-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  Telephone
                </dt>
                <dd className="mt-1 font-medium text-ink">4008801-05, 4008799</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Fax</dt>
                <dd className="mt-1 font-medium text-ink">4008813, 4008770</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  Email
                </dt>
                <dd className="mt-1 break-words">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-primary underline underline-offset-2"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="flex items-center gap-2.5 text-primary">
              <Icon name="clock" size={18} />
              <h3 className="font-heading text-base font-semibold text-ink">Opening Hours</h3>
            </div>
            <div className="mt-3.5 space-y-2 border-l-2 border-primary/25 pl-3.5 text-[15px] leading-relaxed text-ink sm:mt-4">
              <p>
                <span className="font-medium text-ink">Monday – Friday</span>
                <br />
                09:00 AM – 03:00 PM
              </p>
              <p>Lunch break: 1:00 PM – 2:00 PM</p>
              <p className="text-ink-soft">Closed on Philippine and Nepali public holidays</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary-50 px-4 py-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Contact person
            </p>
            <p className="mt-1 font-heading text-xl font-semibold text-ink">Mr. Subin Shrestha</p>
            <p className="mt-0.5 text-sm text-ink-soft">Administrative Officer</p>
          </div>
          <ButtonLink
            href={`mailto:${site.contact.email}`}
            variant="primary"
            className="w-full shrink-0 sm:w-auto"
          >
            Send email
          </ButtonLink>
        </div>
      </Section>

      {/* Services */}
      <Section
        title="Consulate Services"
        subtitle="Explore services offered by the Philippine Consulate General."
        headingAlign="left"
        className="bg-surface-sunken"
      >
        <div className="grid gap-8 border-t-2 border-primary/25 pt-8 sm:grid-cols-2 sm:gap-10 sm:pt-10 lg:grid-cols-3 lg:gap-12">
          {serviceGroups.map((group) => (
            <div key={group.title} className="min-w-0">
              <h3 className="border-l-[3px] border-primary pl-3 font-heading text-base font-semibold text-ink">
                {group.title}
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-[15px] text-ink sm:mt-4">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="underline-offset-2 transition-colors hover:text-primary hover:underline"
                    >
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
