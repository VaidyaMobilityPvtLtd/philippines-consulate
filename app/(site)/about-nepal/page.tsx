import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AttractionHero } from "@/components/ui/AttractionHero";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Nepal",
  description:
    "Discover Nepal — Himalayan landscapes, Kathmandu Valley heritage, and a history shaped by traders, pilgrims, and kingdoms.",
};

const moments = [
  {
    title: "Kathmandu Valley",
    text: "Temples, courtyards, and living cities at the heart of Nepal’s story.",
    image: "/nepal/valley.jpg",
    alt: "Historic temple architecture in the Kathmandu Valley",
  },
  {
    title: "Sacred landmarks",
    text: "From Boudhanath’s great stupa to hilltop shrines watching over the valley.",
    image: "/nepal/hero-kathmandu.jpg",
    alt: "Boudhanath Stupa in Kathmandu",
  },
  {
    title: "Birthplace of the Buddha",
    text: "Lumbini remains one of the world’s most important pilgrimage destinations.",
    image: "/nepal/lumbini.jpg",
    alt: "Quiet gardens at Lumbini",
  },
];

const eras = [
  {
    era: "Ancient roots",
    title: "Kiratis & the Buddha",
    body: "Nepal’s recorded history begins with the Kiratis in the Kathmandu Valley. In the 6th century BC, Siddhartha Gautama was born near Lumbini and later became the Buddha — a turning point for the region and the world.",
  },
  {
    era: "Golden centuries",
    title: "Licchavis to the Mallas",
    body: "Licchavi rule brought cultural brilliance still visible in valley temples. Later, the Malla kingdoms of Kathmandu, Patan, and Bhaktapur competed in art and architecture — leaving Durbar Squares that define Nepal’s heritage today.",
  },
  {
    era: "A unified nation",
    title: "Shahs, Ranas & republic",
    body: "Prithvi Narayan Shah unified Nepal in the late 18th century. After the Rana era and decades of political change, Nepal became a federal democratic republic in 2008 — ending 240 years of monarchy.",
  },
];

export default function AboutNepalPage() {
  return (
    <>
      <AttractionHero
        eyebrow="Discover Nepal"
        title="A nation between mountains and myth"
        intro="Squeezed between the Tibetan plateau and the plains of India, Nepal has long been a resting place for traders, travellers, and pilgrims — with the Kathmandu Valley at its heart."
        imageSrc="/nepal/durbar.jpg"
        imageAlt="Kathmandu Durbar Square temples in Nepal"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Nepal", href: "/about-nepal" },
        ]}
        primaryCta={{ label: "Plan a visit", href: "/traveling-in-nepal" }}
        secondaryCta={{ label: "Contact Consulate", href: "/contact" }}
      />

      {/* Pull quote / invitation */}
      <section className="relative overflow-hidden bg-[#141837] py-16 text-white md:py-20">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(252,209,22,0.12),transparent_40%),radial-gradient(circle_at_85%_60%,rgba(46,49,146,0.45),transparent_45%)]"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-flag-yellow">
              Why Nepal captivates
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight md:text-4xl">
              Ancient cities. Living faith. The roof of the world.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              Over centuries Nepal’s borders expanded and contracted, yet the valley remained the
              cultural centre — a crossroads where Himalayan, Tibetan, and South Asian worlds meet.
            </p>
          </div>
        </Container>
      </section>

      {/* Visual moments — attraction panels, not card grids */}
      <section className="bg-white">
        {moments.map((moment, i) => (
          <div
            key={moment.title}
            className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative min-h-[18rem] md:min-h-[24rem]">
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center bg-primary-50 px-8 py-12 md:px-14 md:py-16">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
                {moment.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">{moment.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Story eras */}
      <section className="bg-surface-muted py-16 md:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Through the centuries
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-[2.15rem]">
              A brief journey through Nepal’s history
            </h2>
          </div>

          <ol className="mx-auto max-w-3xl space-y-0">
            {eras.map((item, i) => (
              <li key={item.title} className="relative flex gap-5 pb-10 last:pb-0 md:gap-8">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  {i < eras.length - 1 ? (
                    <span aria-hidden className="mt-2 w-px flex-1 bg-primary/25" />
                  ) : null}
                </div>
                <div className="pb-2">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-flag-red">
                    {item.era}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA strip with image */}
      <section className="relative overflow-hidden py-20 text-white md:py-24">
        <Image
          src="/nepal/trek.jpg"
          alt="Mountain trails in Nepal"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-primary/85" />
        <Container className="relative text-center">
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">Ready to explore Nepal?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            See destinations, trekking regions, wildlife, and practical tips for visitors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/traveling-in-nepal" variant="onDark">
              Traveling in Nepal
              <Icon name="arrowRight" size={15} />
            </ButtonLink>
            <ButtonLink href="/visa-migration" variant="ghostDark">
              Travel to the Philippines
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary">Continue exploring</h2>
              <p className="mt-2 text-sm text-ink-muted">More paths from the Consulate site.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: "/traveling-in-nepal", label: "Traveling in Nepal" },
                { href: "/about-philippines", label: "About the Philippines" },
                { href: "/contact", label: "Contact us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary hover:underline"
                >
                  {link.label}
                  <Icon
                    name="arrowRight"
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
