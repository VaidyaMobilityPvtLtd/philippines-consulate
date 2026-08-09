import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/icons";
import { fetchNewsBySlug, fetchPublishedNews } from "@/lib/api";
import { heroImages } from "@/lib/hero-images";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { item } = await fetchNewsBySlug(slug);
  if (!item) return { title: "Notice not found" };
  return {
    title: item.title,
    description: item.summary,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const { item } = await fetchNewsBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        intro={item.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: item.title, href: `/news/${item.slug}` },
        ]}
        imageSrc={heroImages.news.src}
        imageAlt={heroImages.news.alt}
      />
      <Section>
        <article className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-card md:p-8">
          <time dateTime={item.date} className="text-sm text-ink-muted">
            {formatDate(item.date)}
          </time>
          <ul className="mt-6 space-y-3">
            {item.body.map((para) => (
              <li key={para} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>{para}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-line pt-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <Icon name="arrowRight" size={14} className="rotate-180" />
              Back to all announcements
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  const { items } = await fetchPublishedNews();
  return items.map((item) => ({ slug: item.slug }));
}
