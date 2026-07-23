import Image from "next/image";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Full-width hero banner for the Visa & Migration landing (and reusable
 * elsewhere). Pass `src` to render the real photo; without it, a branded
 * placeholder is shown so the layout is complete before the image is added.
 *
 *   <HeroMedia src="/images/visa-hero.jpg" alt="Consulate staff" />
 */
export function HeroMedia({
  src,
  alt = "",
  className,
  ratioClassName = "aspect-[21/10]",
}: {
  src?: string;
  alt?: string;
  className?: string;
  ratioClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-line shadow-card",
        ratioClassName,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-primary via-primary-light to-primary-dark text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[url(/logo.svg)] bg-[length:220px] bg-center bg-no-repeat opacity-[0.12]"
          />
          <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Icon name="image" size={26} />
          </span>
          <p className="relative mt-3 text-sm font-medium uppercase tracking-[0.16em] text-white/80">
            Consulate General of the Philippines
          </p>
          <p className="relative mt-1 text-xs text-white/55">Hero image to be added</p>
          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-1.5 w-full bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red"
          />
        </div>
      )}
    </div>
  );
}
