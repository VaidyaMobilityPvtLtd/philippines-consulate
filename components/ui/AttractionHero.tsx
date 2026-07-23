import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import type { LinkItem } from "@/lib/types";

type Cta = { label: string; href: string; variant?: "onDark" | "ghostDark" };

/**
 * Full-bleed attraction hero for destination / discover pages.
 * Keeps brand primary over photography with a deep overlay.
 */
export function AttractionHero({
  eyebrow,
  title,
  intro,
  imageSrc,
  imageAlt,
  breadcrumb,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumb: LinkItem[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden text-white md:min-h-[32rem]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="attraction-kenburns object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(20,24,55,0.88)_0%,rgba(46,49,146,0.72)_48%,rgba(20,24,55,0.55)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#141837] to-transparent"
      />

      <Container className="relative flex min-h-[28rem] flex-col justify-end pb-10 pt-8 md:min-h-[32rem] md:pb-14 md:pt-10">
        <div className="attraction-fade-up mb-5">
          <Breadcrumb items={breadcrumb} onDark />
        </div>

        <p className="attraction-fade-up attraction-fade-up-delay-1 inline-flex w-fit rounded-full border border-flag-yellow/40 bg-flag-yellow/15 px-3.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-flag-yellow">
          {eyebrow}
        </p>

        <h1 className="attraction-fade-up attraction-fade-up-delay-2 mt-4 max-w-3xl font-heading text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.25rem]">
          {title}
        </h1>

        <p className="attraction-fade-up attraction-fade-up-delay-3 mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-[1.05rem]">
          {intro}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="attraction-fade-up attraction-fade-up-delay-3 mt-7 flex flex-wrap gap-3">
            {primaryCta ? (
              <ButtonLink href={primaryCta.href} variant={primaryCta.variant ?? "onDark"}>
                {primaryCta.label}
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
            ) : null}
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant={secondaryCta.variant ?? "ghostDark"}>
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        )}
      </Container>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1.5 bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red"
      />
    </section>
  );
}
