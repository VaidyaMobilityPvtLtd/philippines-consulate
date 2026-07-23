import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";
import Link from "next/link";

/**
 * Slim hours + holiday notice strip (DFA post-style), shown under the header.
 */
export function HoursBar() {
  return (
    <div className="border-b border-line bg-surface-muted">
      <Container className="flex flex-col gap-2 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-ink-soft sm:items-center">
          <Icon name="clock" size={15} className="mt-0.5 shrink-0 text-primary sm:mt-0" />
          <span>
            <span className="font-semibold text-ink">Office hours:</span> {site.contact.hours}
          </span>
        </p>
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          News & announcements
          <Icon name="arrowRight" size={14} />
        </Link>
      </Container>
    </div>
  );
}
