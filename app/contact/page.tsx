import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Notice } from "@/components/ui/Notice";
import { ContactForm } from "@/components/page/ContactForm";
import { Icon } from "@/components/icons";
import type { IconName } from "@/lib/types";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact details, map, and inquiry form for the ${site.name} in ${site.location}.`,
};

const MAP_EMBED =
  "https://www.google.com/maps?q=Philippine+Consulate+General+Ananda+Nagar+Dhumbarahi+Kathmandu&z=16&output=embed";
const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Ananda+Nagar,+Dhumbarahi,+Kathmandu,+Nepal";
const PHONE_TEL = "tel:+97714008801";

const quickActions: {
  icon: IconName;
  label: string;
  hint: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: "phone",
    label: "Call us",
    hint: site.contact.phone,
    href: PHONE_TEL,
  },
  {
    icon: "mail",
    label: "Email us",
    hint: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: "mapPin",
    label: "Get directions",
    hint: "Open in Google Maps",
    href: MAP_DIRECTIONS,
    external: true,
  },
];

const details: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "mapPin", label: "Address", value: site.contact.address, href: MAP_DIRECTIONS },
  { icon: "phone", label: "Phone", value: site.contact.phone, href: PHONE_TEL },
  { icon: "document", label: "Fax", value: site.contact.fax },
  { icon: "mail", label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        intro={`Reach the ${site.name} in ${site.location} for visas, passports, and consular assistance.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <Section>
        {/* Quick actions — one tap on mobile */}
        <div className="grid gap-3 sm:grid-cols-3">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-3.5 rounded-2xl border border-line bg-surface p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-primary-dark">
                <Icon name={action.icon} size={20} />
              </span>
              <span className="min-w-0">
                <span className="block font-heading text-[15px] font-semibold text-ink group-hover:text-primary">
                  {action.label}
                </span>
                <span className="mt-0.5 block truncate text-xs text-ink-muted">{action.hint}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Form + details */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ContactForm />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-surface p-5 shadow-card md:p-6">
              <h2 className="font-heading text-lg font-semibold text-ink">Office details</h2>
              <ul className="mt-4 space-y-4">
                {details.map((item) => (
                  <li key={item.label} className="flex gap-3.5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="mt-0.5 block text-sm font-medium leading-relaxed text-ink hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium leading-relaxed text-ink">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-primary-50 p-5 md:p-6">
              <div className="flex items-center gap-2.5 text-primary">
                <Icon name="clock" size={18} />
                <h2 className="font-heading text-lg font-semibold">Office hours</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{site.contact.hours}</p>
              <p className="mt-2 text-xs text-ink-muted">
                Closed on Philippine and Nepali public holidays.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-5 shadow-card">
              <p className="text-sm font-semibold text-ink">Prefer feedback instead?</p>
              <p className="mt-1 text-sm text-ink-muted">
                Share suggestions or comments on our dedicated feedback page.
              </p>
              <Link
                href="/feedback"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Leave feedback
                <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {/* Map */}
      <Section
        muted
        title="Find us on the map"
        subtitle="Ananda Nagar, Dhumbarahi — Kathmandu, Nepal"
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
          <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
            <iframe
              title="Map to Philippine Consulate General, Kathmandu"
              src={MAP_EMBED}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-3 border-t border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-soft">{site.contact.address}</p>
            <a
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <Icon name="mapPin" size={16} />
              Open directions
            </a>
          </div>
        </div>

        <div className="mt-6">
          <Notice title="Payment of consular fees">
            Consular and visa fees are payable to the account of the Consulate of the Republic of the
            Philippines at {site.contact.bank}.
          </Notice>
        </div>
      </Section>
    </>
  );
}
