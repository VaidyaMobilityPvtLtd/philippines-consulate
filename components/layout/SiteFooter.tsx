import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { footerNav } from "@/lib/navigation";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="mt-auto bg-primary-dark text-white/80">
      <Container className="py-10 md:py-14">
        <div className="grid gap-9 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Identity + contact */}
          <div className="min-w-0">
            <div className="flex items-start gap-3 sm:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt=""
                width={48}
                height={53}
                className="h-auto w-12 shrink-0 object-contain"
              />
              <div className="min-w-0 leading-tight">
                <p className="font-heading text-[15px] font-semibold text-white sm:text-base">
                  {site.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-white/60">{site.location}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{site.tagline}</p>

            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="mapPin" size={16} className="mt-0.5 shrink-0 text-white/50" />
                <span className="min-w-0 break-words">{site.contact.address}</span>
              </li>
              <li className="flex items-start gap-2.5 sm:items-center">
                <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-white/50 sm:mt-0" />
                <span className="min-w-0 break-words">{site.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 sm:items-center">
                <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-white/50 sm:mt-0" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="min-w-0 break-words hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 sm:items-center">
                <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-white/50 sm:mt-0" />
                <span className="min-w-0 break-words">{site.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            <a
              href={site.external.passport}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              Passport.gov.ph <Icon name="external" size={12} />
            </a>
            <a
              href={site.external.immigration}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              Bureau of Immigration <Icon name="external" size={12} />
            </a>
            <a
              href={site.external.dfa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              DFA <Icon name="external" size={12} />
            </a>
            <a
              href={site.external.government}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              gov.ph <Icon name="external" size={12} />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
