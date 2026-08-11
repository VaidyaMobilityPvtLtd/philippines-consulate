import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/icons";
import { fetchPublishedNews } from "@/lib/api";
import { heroImages } from "@/lib/hero-images";

export const metadata: Metadata = {
  title: "News & Announcements",
  description: "Advisories, notices, and announcements from the Philippine Consulate General in Kathmandu.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NewsPage() {
  const { items } = await fetchPublishedNews();

  return (
    <>
      <PageHero
        eyebrow="Updates"
        title="News & Announcements"
        intro="Advisories and notices from the Consulate General — similar to the NewsRoom on DFA foreign posts."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
        ]}
        imageSrc={heroImages.news.src}
        imageAlt={heroImages.news.alt}
      />
      <Section>

        {items.length === 0 ? (
          <p className="mx-auto max-w-3xl text-center text-sm text-ink-muted">
            No announcements are published at this time.
          </p>
        ) : (
          <ul className="mx-auto max-w-3xl space-y-4">
            {items.map((item) => (
              <li key={item.id || item.slug} id={item.slug}>
                <article className="rounded-2xl border border-line bg-surface p-5 shadow-card md:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-primary-50 px-2.5 py-0.5 font-semibold uppercase tracking-wide text-primary">
                      {item.category}
                    </span>
                    <time dateTime={item.date} className="text-ink-muted">
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <h2 className="mt-3 font-heading text-xl font-semibold text-ink">
                    <Link href={`/news/${item.slug}`} className="hover:text-primary">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.summary}</p>

                  <Link
                    href={`/news/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Open notice <Icon name="arrowRight" size={14} />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-surface-muted p-5 text-center md:p-6">
          <p className="text-sm text-ink-soft">
            Need help with a specific service? Browse requirements or contact the Consulate.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link href="/visa-migration" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Visa & Migration <Icon name="arrowRight" size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Contact us <Icon name="arrowRight" size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
