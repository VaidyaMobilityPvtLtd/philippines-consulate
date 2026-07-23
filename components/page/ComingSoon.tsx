import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";

/** Honest "content is being prepared" placeholder for not-yet-built pages. */
export function ComingSoon({ label }: { label?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white text-center shadow-card">
      <div className="h-1.5 bg-linear-to-r from-flag-blue via-flag-yellow to-flag-red" />
      <div className="p-8 md:p-10">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
          <Icon name="document" size={24} />
        </span>
        <h2 className="mt-4 font-heading text-xl font-semibold text-ink">Content coming soon</h2>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">
          {label ? `Details for “${label}” are being prepared.` : "This page is being prepared."} In
          the meantime, our team is happy to help with any questions.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact" variant="primary">
            Contact the Consulate
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
