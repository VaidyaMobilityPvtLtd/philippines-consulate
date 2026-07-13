import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { footerNav } from "@/lib/navigation";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="mt-auto bg-primary-dark text-white/80">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Identity + contact */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/seal.svg" alt="" width={48} height={48} />
              <div className="leading-tight">
                <p className="font-heading text-base font-semibold text-white">{site.name}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">{site.location}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{site.tagline}</p>

            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="mapPin" size={16} className="mt-0.5 shrink-0 text-white/50" />
                <span>{site.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="phone" size={16} className="shrink-0 text-white/50" />
                <span>{site.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="mail" size={16} className="shrink-0 text-white/50" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="clock" size={16} className="shrink-0 text-white/50" />
                <span>{site.contact.hours}</span>
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
          <div className="flex items-center gap-4">
            <a
              href={site.external.immigration}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              Bureau of Immigration <Icon name="external" size={12} />
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
