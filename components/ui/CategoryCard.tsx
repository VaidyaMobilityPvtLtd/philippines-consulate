import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Category } from "@/lib/types";

/** Visa category card. */
export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover md:p-6"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white transition-transform group-hover:scale-105">
        <Icon name={category.icon} size={22} />
      </span>
      <h3 className="mt-4 font-heading text-base font-semibold text-ink group-hover:text-primary">
        {category.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">{category.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <Icon
          name="arrowRight"
          size={15}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
