import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center md:py-32">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-primary">
        <Icon name="search" size={30} />
      </span>
      <p className="mt-6 font-heading text-6xl font-semibold text-primary">404</p>
      <h1 className="mt-3 font-heading text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-md text-ink-muted">
        The page you are looking for may have moved or no longer exists.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="primary">
          Back to home
        </ButtonLink>
        <ButtonLink href="/visa-migration" variant="secondary">
          Visa &amp; Migration
        </ButtonLink>
      </div>
    </Container>
  );
}
