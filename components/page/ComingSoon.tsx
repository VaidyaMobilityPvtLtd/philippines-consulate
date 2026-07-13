import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";

/** Honest "content is being prepared" placeholder for not-yet-built pages. */
export function ComingSoon({ label }: { label?: string }) {
  return (
    <div className="rounded-card border border-line bg-surface-muted p-8 text-center md:p-12">
      <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-primary">
        <Icon name="document" size={26} />
      </span>
      <h2 className="mt-4 font-heading text-xl font-semibold text-ink">Content coming soon</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
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
  );
}
