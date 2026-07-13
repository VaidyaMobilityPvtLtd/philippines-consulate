import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Category } from "@/lib/types";

/** Icon + title + description + "Learn more" card (Visa Categories grid). */
export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-100 hover:shadow-card-hover"
    >
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon name={category.icon} size={24} />
      </span>
      <h3 className="font-heading text-lg font-semibold text-ink">{category.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{category.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Learn more
        <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
