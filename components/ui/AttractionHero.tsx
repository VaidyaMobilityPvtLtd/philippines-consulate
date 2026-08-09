import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import type { LinkItem } from "@/lib/types";

type Cta = { label: string; href: string; variant?: "onDark" | "ghostDark" };

/**
 * Full-bleed attraction hero — sharp HD photo, light overlay, no blur motion.
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
    <section className="relative isolate min-h-[22rem] overflow-hidden text-white sm:min-h-[28rem] md:min-h-[32rem]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(14,18,48,0.7)_0%,rgba(46,49,146,0.42)_50%,rgba(14,18,48,0.28)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#141837]/70 to-transparent"
      />

      <Container className="relative flex min-h-[22rem] flex-col justify-end pb-8 pt-7 sm:min-h-[28rem] sm:pb-10 sm:pt-8 md:min-h-[32rem] md:pb-14 md:pt-10">
        <div className="attraction-fade-up mb-4 sm:mb-5">
          <Breadcrumb items={breadcrumb} onDark />
        </div>

        <p className="attraction-fade-up attraction-fade-up-delay-1 inline-flex w-fit max-w-full rounded-full border border-flag-yellow/40 bg-black/25 px-3.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-flag-yellow backdrop-blur-[2px]">
          {eyebrow}
        </p>

        <h1 className="attraction-fade-up attraction-fade-up-delay-2 mt-3 max-w-3xl font-heading text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:mt-4 sm:text-[2.35rem] md:text-[3.25rem]">
          {title}
        </h1>

        <p className="attraction-fade-up attraction-fade-up-delay-3 mt-3 max-w-xl text-[15px] leading-relaxed text-white/92 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:mt-4 sm:text-base md:text-[1.05rem]">
          {intro}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="attraction-fade-up attraction-fade-up-delay-3 mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
            {primaryCta ? (
              <ButtonLink
                href={primaryCta.href}
                variant={primaryCta.variant ?? "onDark"}
                className="w-full sm:w-auto"
              >
                {primaryCta.label}
                <Icon name="arrowRight" size={15} />
              </ButtonLink>
            ) : null}
            {secondaryCta ? (
              <ButtonLink
                href={secondaryCta.href}
                variant={secondaryCta.variant ?? "ghostDark"}
                className="w-full sm:w-auto"
              >
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
