import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Notice } from "@/components/ui/Notice";
import { Icon } from "@/components/icons";
import type { IconName } from "@/lib/types";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact details and office hours for the ${site.name} in ${site.location}.`,
};

const details: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "mapPin", label: "Address", value: site.contact.address },
  { icon: "phone", label: "Phone", value: site.contact.phone },
  { icon: "document", label: "Fax", value: site.contact.fax },
  { icon: "mail", label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: "clock", label: "Office Hours", value: site.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        intro={`Reach the ${site.name} in ${site.location} for assistance with visa, passport and consular services.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {details.map((item) => (
            <div key={item.label} className="flex items-start gap-4 rounded-card border border-line bg-surface p-6 shadow-card">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-primary">
                <Icon name={item.icon} size={22} />
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-1 block font-medium text-ink hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-ink">{item.value}</p>
                )}
              </div>
            </div>
          ))}
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
