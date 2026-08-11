import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/icons";
import { fetchNewsBySlug, fetchPublishedNews } from "@/lib/api";
import { heroImages } from "@/lib/hero-images";
import { MDXRemote } from "next-mdx-remote/rsc";

const mdxComponents = {
  h1: (props: any) => <h1 className="mt-10 mb-5 font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl" {...props} />,
  h2: (props: any) => <h2 className="mt-10 mb-4 font-heading text-2xl font-semibold tracking-tight text-ink md:text-3xl" {...props} />,
  h3: (props: any) => <h3 className="mt-8 mb-4 font-heading text-xl font-medium tracking-tight text-ink md:text-2xl" {...props} />,
  h4: (props: any) => <h4 className="mt-6 mb-3 font-heading text-lg font-medium text-ink" {...props} />,
  p: (props: any) => <p className="mb-6 text-[15.5px] leading-relaxed text-ink-soft sm:text-base sm:leading-8" {...props} />,
  ul: (props: any) => <ul className="mb-6 ml-6 list-outside list-disc space-y-2.5 marker:text-primary" {...props} />,
  ol: (props: any) => <ol className="mb-6 ml-6 list-outside list-decimal space-y-2.5 marker:text-primary" {...props} />,
  li: (props: any) => <li className="pl-1 text-[15.5px] leading-relaxed text-ink-soft sm:text-base sm:leading-8" {...props} />,
  a: (props: any) => <a className="font-medium text-primary underline underline-offset-4 hover:text-primary-700 hover:decoration-2" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-ink" {...props} />,
  blockquote: (props: any) => <blockquote className="my-6 border-l-4 border-primary bg-surface-muted/50 py-3 pr-4 pl-5 italic text-ink-muted rounded-r-lg" {...props} />,
};

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
          <div className="mt-6 text-[15px] text-ink-soft">
            <MDXRemote source={Array.isArray(item.body) ? item.body.join("\n\n") : (item.body ?? "")} components={mdxComponents} />
          </div>
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
