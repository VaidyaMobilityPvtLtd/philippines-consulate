import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AttractionHero } from "@/components/ui/AttractionHero";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Traveling in Nepal",
  description:
    "Explore Nepal — Kathmandu Valley heritage, Himalayan treks, wildlife, Lumbini, and practical visitor tips.",
};

const destinations = [
  {
    title: "Kathmandu Valley",
    kicker: "Culture & heritage",
    body: "Walk Durbar Squares in Kathmandu, Patan, and Bhaktapur. Visit stupas, courtyards, and living neighbourhoods where festivals still shape the year.",
    highlights: ["Durbar Squares", "Boudhanath & Swayambhunath", "Patan craft & courtyards"],
    image: "/nepal/valley.jpg",
    alt: "Temple roofs in the Kathmandu Valley",
  },
  {
    title: "Himalayan trails",
    kicker: "Adventure",
    body: "World-famous trekking regions, mountain viewpoints, and scenic flights — from Annapurna’s amphitheatre to the Khumbu approaches of Everest.",
    highlights: ["Annapurna region", "Everest / Khumbu", "Mountain viewpoints"],
    image: "/nepal/trek.jpg",
    alt: "Himalayan peaks and trekking landscape",
  },
  {
    title: "Chitwan & the Terai",
    kicker: "Wildlife",
    body: "Leave the mountains for jungle rivers, national parks, and wildlife experiences in Nepal’s lowland plains.",
    highlights: ["Chitwan National Park", "River safaris", "Birdlife & forests"],
    image: "/nepal/chitwan.jpg",
    alt: "Misty jungle river in Chitwan",
  },
  {
    title: "Lumbini",
    kicker: "Pilgrimage",
    body: "A place of quiet gardens and global significance — the birthplace of the Buddha, welcoming pilgrims and travellers alike.",
    highlights: ["Maya Devi Temple", "Monastic zone", "Peaceful gardens"],
    image: "/nepal/lumbini.jpg",
    alt: "Lumbini pilgrimage gardens",
  },
];

const seasons = [
  {
    label: "Autumn",
    months: "Sep – Nov",
    note: "Clear skies and peak trekking season.",
  },
  {
    label: "Spring",
    months: "Mar – May",
    note: "Rhododendrons, mild days, popular trails.",
  },
  {
    label: "Winter",
    months: "Dec – Feb",
    note: "Crisp views in the valley; cold at altitude.",
  },
  {
    label: "Monsoon",
    months: "Jun – Aug",
    note: "Lush landscapes; expect rain in the hills.",
  },
];

export default function TravelingInNepalPage() {
  return (
    <>
      <AttractionHero
        eyebrow="Travel Nepal"
        title="Come for the mountains. Stay for the culture."
        intro="From Himalayan trails to Kathmandu’s living heritage — destinations and tips to help you plan an unforgettable visit."
        imageSrc="/nepal/hero-himalaya.jpg"
        imageAlt="The Himalayas rising above the clouds"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Traveling in Nepal", href: "/traveling-in-nepal" },
        ]}
        primaryCta={{ label: "See destinations", href: "#destinations" }}
        secondaryCta={{ label: "About Nepal", href: "/about-nepal" }}
      />

      {/* Atmospheric intro */}
      <section className="relative overflow-hidden bg-white py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Visitor invitation
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-ink md:text-[2.35rem]">
                Four ways to fall in love with Nepal
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-ink-soft md:text-base">
                Whether you seek temples and courtyards, high trails, jungle rivers, or quiet
                pilgrimage — Nepal offers landscapes and culture that stay with you long after you
                leave.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/about-nepal" variant="primary">
                  Read Nepal’s story
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Consulate in Kathmandu
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-card-hover">
              <Image
                src="/nepal/hero-kathmandu.jpg"
                alt="Stupa and prayer flags in Kathmandu"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent px-5 py-4"
              >
                <p className="font-heading text-sm font-semibold text-white">Kathmandu · living heritage</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Destinations — full-bleed attraction bands */}
      <section id="destinations" className="scroll-mt-28">
        {destinations.map((place, i) => (
          <article
            key={place.title}
            className={`relative grid min-h-[22rem] lg:min-h-[26rem] lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[16rem] lg:min-h-full">
              <Image
                src={place.image}
                alt={place.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className={`flex flex-col justify-center px-8 py-12 md:px-14 md:py-16 ${
                i % 2 === 0 ? "bg-[#141837] text-white" : "bg-primary-50 text-ink"
              }`}
            >
              <p
                className={`font-heading text-[11px] font-semibold uppercase tracking-[0.16em] ${
                  i % 2 === 0 ? "text-flag-yellow" : "text-primary"
                }`}
              >
                {place.kicker}
              </p>
              <h3 className="mt-3 font-heading text-3xl font-semibold md:text-[2.15rem]">
                {place.title}
              </h3>
              <p
                className={`mt-4 max-w-md text-[15px] leading-relaxed ${
                  i % 2 === 0 ? "text-white/78" : "text-ink-soft"
                }`}
              >
                {place.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {place.highlights.map((h) => (
                  <li
                    key={h}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                      i % 2 === 0
                        ? "bg-white/12 text-white"
                        : "bg-white text-primary shadow-sm"
                    }`}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Seasons */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              When to go
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-[2.15rem]">
              Seasons at a glance
            </h2>
            <p className="mt-3 text-[15px] text-ink-muted">
              Timing shapes the experience — clear peaks, blossoms, or monsoon greens.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s) => (
              <li key={s.label} className="bg-white px-5 py-7 md:px-6">
                <p className="font-heading text-2xl font-semibold text-primary">{s.label}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {s.months}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{s.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-muted">
            Arrange trekking permits through licensed agencies when required, and allow buffer time
            for mountain weather.
          </p>
        </Container>
      </section>

      {/* Closing attraction CTA */}
      <section className="relative overflow-hidden py-20 text-white md:py-24">
        <Image
          src="/nepal/mountains.jpg"
          alt="Himalayan panorama"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,49,146,0.9),rgba(20,24,55,0.82))]"
        />
        <Container className="relative text-center">
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">
            Visiting from the Consulate’s city?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            We’re based in Kathmandu — reach out for consular help, or explore Philippine travel
            next.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact" variant="onDark">
              Contact us
              <Icon name="arrowRight" size={15} />
            </ButtonLink>
            <ButtonLink href="/traveling-in-philippines" variant="ghostDark">
              Traveling in Philippines
            </ButtonLink>
            <ButtonLink href="/visa-migration" variant="ghostDark">
              Visa & Migration
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-primary-50 py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink-muted">
              Want the history behind the destinations?{" "}
              <Link href="/about-nepal" className="font-semibold text-primary hover:underline">
                Read About Nepal
              </Link>
            </p>
            <Link
              href="/about-philippines"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              About the Philippines
              <Icon name="arrowRight" size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
