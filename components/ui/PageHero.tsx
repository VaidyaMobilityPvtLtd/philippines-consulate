import Image from "next/image";
import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import type { LinkItem } from "@/lib/types";

/**
 * Shared inner-page hero — sharp HD photo backdrop, light brand overlay.
 */
export function PageHero({
  title,
  intro,
  eyebrow,
  breadcrumb,
  imageSrc,
  imageAlt = "",
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
  breadcrumb?: LinkItem[];
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden text-white">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Lighter gradient so the photo stays sharp and visible */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(14,18,48,0.72)_0%,rgba(46,49,146,0.48)_55%,rgba(14,18,48,0.35)_100%)]"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(145deg,#3a3eab_0%,#2e3192_45%,#1f2150_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_12%_25%,rgba(252,209,22,0.18),transparent_36%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.1),transparent_40%)]"
          />
        </>
      )}
      <Container className="relative flex min-h-[11.5rem] flex-col items-start justify-center py-7 md:min-h-[15rem] md:py-10">
        {breadcrumb && breadcrumb.length > 0 ? (
          <div className="mb-2.5 max-w-full md:mb-3">
            <Breadcrumb items={breadcrumb} onDark />
          </div>
        ) : null}
        {eyebrow ? (
          <p className="w-fit max-w-full rounded-full border border-flag-yellow/35 bg-black/25 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-flag-yellow backdrop-blur-[2px]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2.5 max-w-3xl font-heading text-[1.65rem] font-semibold leading-tight tracking-[-0.01em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-[1.85rem] md:mt-3 md:text-[2.25rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-2.5 max-w-2xl text-[15px] leading-[1.65] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] md:mt-3 md:leading-[1.7]">
            {intro}
          </p>
        ) : null}
      </Container>
      <div
        aria-hidden
        className="h-1.5 w-full bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red"
      />
    </section>
  );
}
