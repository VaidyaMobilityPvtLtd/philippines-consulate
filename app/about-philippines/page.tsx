import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AttractionHero } from "@/components/ui/AttractionHero";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Philippines",
  description:
    "Discover the Philippines — an archipelago of more than seven thousand islands, rich culture, and warm hospitality.",
};

const facts = [
  { label: "Islands", value: "7,107" },
  { label: "Capital", value: "Manila" },
  { label: "Languages", value: "Filipino & English" },
  { label: "Time", value: "GMT +8" },
];

const moments = [
  {
    title: "An archipelago of islands",
    text: "From turquoise lagoons to volcanic peaks — over seven thousand islands stretch from south of China to the tip of Borneo.",
    image: "/philippines/beach.jpg",
    alt: "Crystal-clear tropical beach in the Philippines",
  },
  {
    title: "A meeting of cultures",
    text: "Malay roots, Spanish colonial heritage, and American influence shaped a unique Filipino identity — warm, expressive, and welcoming.",
    image: "/philippines/heritage.jpg",
    alt: "Colonial heritage streetscape in the Philippines",
  },
  {
    title: "Living landscapes",
    text: "Ancient rice terraces, tropical coasts, and highland towns show how geography and community have shaped Filipino life for centuries.",
    image: "/philippines/mayon.jpg",
    alt: "Mayon Volcano in the Philippines",
  },
];

const topics = [
  {
    title: "Philippines at a Glance",
    description: "People, geography, climate, government, and culture.",
    href: "/about-philippines/overview",
    featured: true,
  },
  {
    title: "Economy",
    description: "Economic overview and development priorities.",
    href: "/about-philippines/economy",
  },
  {
    title: "Foreign Policy",
    description: "How the Philippines engages the region and the world.",
    href: "/about-philippines/foreign-policy",
  },
  {
    title: "Trade Policy",
    description: "Trade orientation, partnerships, and commerce.",
    href: "/about-philippines/trade-policy",
  },
  {
    title: "Information Directory",
    description: "Useful references for learning more about the country.",
    href: "/about-philippines/directory",
  },
];

export default function AboutPhilippinesPage() {
  const featured = topics.find((t) => t.featured)!;
  const rest = topics.filter((t) => !t.featured);

  return (
    <>
      <AttractionHero
        eyebrow="Discover the Philippines"
        title="Seven thousand islands. One vibrant nation."
        intro="A tropical archipelago where Malay, Spanish, and American heritage meet — with one of Asia’s largest English-speaking populations."
        imageSrc="/philippines/beach.jpg"
        imageAlt="Tropical beach in the Philippines"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Philippines", href: "/about-philippines" },
        ]}
        primaryCta={{ label: "At a Glance", href: "/about-philippines/overview" }}
        secondaryCta={{ label: "Plan a visit", href: "/traveling-in-philippines" }}
      />

      {/* Quick facts strip */}
      <section className="bg-[#141837] text-white">
        <Container>
          <ul className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {facts.map((fact) => (
              <li key={fact.label} className="px-4 py-6 text-center md:py-8">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-flag-yellow">
                  {fact.label}
                </p>
                <p className="mt-2 font-heading text-xl font-semibold md:text-2xl">{fact.value}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Invitation */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Republic of the Philippines
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Islands, cultures, and warm hospitality
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              National life blends indigenous Malay culture with Spanish and American influences —
              visible in language, faith, food, and everyday life. Explore the country overview,
              economy, and policy topics below.
            </p>
          </div>
        </Container>
      </section>

      {/* Visual story panels */}
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
            <div
              className={`flex flex-col justify-center px-8 py-12 md:px-14 md:py-16 ${
                i % 2 === 0 ? "bg-primary-50" : "bg-[#141837] text-white"
              }`}
            >
              <p
                className={`font-heading text-[11px] font-semibold uppercase tracking-[0.16em] ${
                  i % 2 === 0 ? "text-primary" : "text-flag-yellow"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold md:text-3xl">{moment.title}</h3>
              <p
                className={`mt-4 max-w-md text-[15px] leading-relaxed ${
                  i % 2 === 0 ? "text-ink-soft" : "text-white/78"
                }`}
              >
                {moment.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Topics */}
      <section className="bg-surface-muted py-16 md:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Explore topics
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-[2.15rem]">
              Learn more about the Philippines
            </h2>
          </div>

          <Link
            href={featured.href}
            className="group relative mb-4 block overflow-hidden"
          >
            <div className="relative min-h-[14rem] md:min-h-[16rem]">
              <Image
                src="/philippines/mayon.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(115deg,rgba(46,49,146,0.88),rgba(20,24,55,0.65))]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:flex-row md:items-end md:justify-between md:p-10">
                <div className="max-w-xl text-white">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-flag-yellow">
                    Best place to begin
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold md:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">
                    {featured.description}
                  </p>
                </div>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-flag-yellow md:mt-0">
                  Read overview
                  <Icon name="arrowRight" size={15} />
                </span>
              </div>
            </div>
          </Link>

          <ul className="grid gap-px overflow-hidden bg-line sm:grid-cols-2">
            {rest.map((topic) => (
              <li key={topic.href} className="bg-white">
                <Link
                  href={topic.href}
                  className="group flex h-full flex-col justify-between px-6 py-7 transition-colors hover:bg-primary hover:text-white md:px-8 md:py-8"
                >
                  <div>
                    <h3 className="font-heading text-xl font-semibold">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted group-hover:text-white/75">
                      {topic.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-flag-yellow">
                    Open topic
                    <Icon
                      name="arrowRight"
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden py-20 text-white md:py-24">
        <Image
          src="/philippines/lagoon.jpg"
          alt="Philippine lagoon landscape"
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
            Ready to visit or study?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            Continue to travel highlights, universities, or visa guidance — or contact the Consulate
            in Kathmandu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/traveling-in-philippines" variant="onDark">
              Traveling in Philippines
              <Icon name="arrowRight" size={15} />
            </ButtonLink>
            <ButtonLink href="/study-in-philippines" variant="ghostDark">
              Study options
            </ButtonLink>
            <ButtonLink href="/visa-migration" variant="ghostDark">
              Visa & Migration
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <p className="text-sm text-ink-muted">
              Questions about the Philippines?{" "}
              <Link href="/contact" className="font-semibold text-primary hover:underline">
                Contact the Consulate
              </Link>
            </p>
            <Link
              href="/about-nepal"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              About Nepal
              <Icon name="arrowRight" size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
