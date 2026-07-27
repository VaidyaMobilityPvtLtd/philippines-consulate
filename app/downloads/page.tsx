import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Notice } from "@/components/ui/Notice";
import { Icon } from "@/components/icons";
import { downloadItems } from "@/content/news";
import { heroImages } from "@/lib/hero-images";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Forms and requirement guides for passport, visa, and registration services at the Philippine Consulate General in Kathmandu.",
};

const groups = ["Passport", "Visa", "Registration", "General"] as const;

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Forms & documents"
        title="Downloads"
        intro="Requirement guides and forms linked from the Consulate’s services — carried over from the legacy philcongen site."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Downloads", href: "/downloads" },
        ]}
        imageSrc={heroImages.downloads.src}
        imageAlt={heroImages.downloads.alt}
      />
      <Section>
        <div className="mb-8">
          <Notice title="Affidavit forms">
            Affidavit of Loss and Affidavit of Cancellation are available at the Consulate office.
            Visit or contact us to request a form during office hours.
          </Notice>
        </div>

        <div className="space-y-10">
          {groups.map((group) => {
            const items = downloadItems.filter((d) => d.group === group);
            if (!items.length) return null;
            return (
              <div key={group}>
                <h2 className="font-heading text-lg font-semibold text-primary">{group}</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex h-full items-start gap-3.5 rounded-2xl border border-line bg-surface p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon name={item.icon} size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-heading text-[15px] font-semibold text-ink group-hover:text-primary">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
