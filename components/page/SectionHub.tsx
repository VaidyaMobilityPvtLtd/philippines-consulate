import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import type { IconName, LinkItem } from "@/lib/types";

export type HubHighlight = {
  label: string;
  value: string;
  icon: IconName;
};

export type HubTopic = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  accent?: string;
  featured?: boolean;
  cta?: string;
};

export type HubRelated = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

export type HubAction = {
  label: string;
  href: string;
  variant?: "onDark" | "ghostDark" | "primary" | "secondary";
};

const defaultAccents = [
  "bg-flag-blue",
  "bg-flag-yellow text-ink",
  "bg-flag-red",
  "bg-primary",
  "bg-primary-dark",
] as const;

/**
 * Rich section hub: highlights, intro + start-here, featured topic,
 * described topic cards, related links, and a help band.
 */
export function SectionHub({
  eyebrow,
  title,
  intro,
  breadcrumb,
  highlights,
  introEyebrow,
  introTitle,
  introBody,
  startHere,
  topicsEyebrow = "Explore topics",
  topicsHeading,
  topicsIntro,
  topics,
  relatedHeading = "Related next steps",
  relatedIntro,
  related,
  helpTitle = "Need help with this section?",
  helpBody = "Contact the Consulate or browse downloadable guides and forms.",
  helpActions = [
    { label: "Contact us", href: "/contact", variant: "onDark" },
    { label: "Downloads", href: "/downloads", variant: "ghostDark" },
  ],
}: {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: LinkItem[];
  highlights?: HubHighlight[];
  introEyebrow?: string;
  introTitle?: string;
  introBody?: string[];
  startHere?: HubAction[];
  topicsEyebrow?: string;
  topicsHeading: string;
  topicsIntro?: string;
  topics: HubTopic[];
  relatedHeading?: string;
  relatedIntro?: string;
  related?: HubRelated[];
  helpTitle?: string;
  helpBody?: string;
  helpActions?: HubAction[];
}) {
  const featured = topics.find((t) => t.featured) ?? topics[0];
  const rest = topics.filter((t) => t.href !== featured?.href);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} breadcrumb={breadcrumb} />

      {highlights && highlights.length > 0 ? (
        <section className="relative z-10 -mt-6">
          <Container>
            <ul
              className={`grid overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card-hover ${
                highlights.length >= 4
                  ? "grid-cols-2 lg:grid-cols-4"
                  : highlights.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {highlights.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex items-center gap-3 px-5 py-5 ${
                    i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                  }`}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                      {item.label}
                    </p>
                    <p className="font-heading text-base font-semibold text-ink">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {(introTitle || startHere?.length) && (
        <section className="py-10 md:py-12">
          <Container>
            <div className="grid gap-6 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-card lg:grid-cols-[1.25fr_0.75fr]">
              <div className="p-6 md:p-8">
                {introEyebrow ? (
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {introEyebrow}
                  </p>
                ) : null}
                {introTitle ? (
                  <h2 className="mt-2 font-heading text-xl font-semibold text-ink md:text-2xl">
                    {introTitle}
                  </h2>
                ) : null}
                {introBody?.length ? (
                  <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-ink-soft">
                    {introBody.map((p) => (
                      <p key={p.slice(0, 48)}>{p}</p>
                    ))}
                  </div>
                ) : null}
              </div>
              {startHere && startHere.length > 0 ? (
                <div className="flex flex-col justify-center gap-3 bg-primary px-6 py-7 text-white md:px-8">
                  <p className="font-heading text-sm font-semibold text-flag-yellow">Start here</p>
                  {startHere.map((action, i) => (
                    <ButtonLink
                      key={action.href}
                      href={action.href}
                      variant={i === 0 ? "onDark" : "ghostDark"}
                      className="justify-between"
                    >
                      {action.label}
                      <Icon name="arrowRight" size={15} />
                    </ButtonLink>
                  ))}
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-primary-50 py-14 md:py-16">
        <Container>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              {topicsEyebrow}
            </p>
            <h2 className="mt-1 font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
              {topicsHeading}
            </h2>
            {topicsIntro ? (
              <p className="mt-2 text-[15px] text-ink-muted">{topicsIntro}</p>
            ) : null}
          </div>

          {featured ? (
            <Link
              href={featured.href}
              className="group mb-5 flex flex-col gap-6 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#3a3eab_0%,#2e3192_55%,#1f2150_100%)] p-6 text-white shadow-card-hover transition-transform duration-300 hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="flex items-start gap-4 md:items-center">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-flag-yellow text-ink">
                  <Icon name={featured.icon} size={28} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-flag-yellow">
                    Best place to begin
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-semibold md:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                    {featured.description}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-flag-yellow md:self-center">
                {featured.cta ?? "Open topic"}
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          ) : null}

          {rest.length > 0 ? (
            <div
              className={`grid gap-4 ${
                rest.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"
              } ${rest.length >= 3 ? "lg:grid-cols-2" : ""}`}
            >
              {rest.map((topic, i) => {
                const accent = topic.accent ?? defaultAccents[i % defaultAccents.length];
                return (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover md:p-6"
                  >
                    <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${accent}`} />
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white ${accent}`}
                    >
                      <Icon name={topic.icon} size={20} />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-ink group-hover:text-primary">
                      {topic.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                      {topic.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {topic.cta ?? "Open topic"}
                      <Icon
                        name="arrowRight"
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </Container>
      </section>

      {related && related.length > 0 ? (
        <section className="bg-white py-14 md:py-16">
          <Container>
            <div className="mb-8 max-w-2xl">
              <h2 className="font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
                {relatedHeading}
              </h2>
              {relatedIntro ? (
                <p className="mt-2 text-[15px] text-ink-muted">{relatedIntro}</p>
              ) : null}
            </div>
            <ul
              className={`grid gap-4 ${
                related.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-primary-50 p-5 transition-colors hover:bg-primary hover:text-white md:p-6"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-white group-hover:text-primary">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted group-hover:text-white/80">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-flag-yellow">
                      Explore
                      <Icon name="arrowRight" size={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="bg-primary-50 pb-14 pt-2 md:pb-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#2e3192,#1f2150)] px-6 py-8 text-white md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-heading text-xl font-semibold">{helpTitle}</h2>
              <p className="mt-1.5 max-w-lg text-sm text-white/75">{helpBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {helpActions.map((action) => (
                <ButtonLink
                  key={action.href + action.label}
                  href={action.href}
                  variant={action.variant ?? "onDark"}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
