import Image from "next/image";
import { Notice } from "@/components/ui/Notice";
import { SmartLink } from "@/components/ui/SmartLink";
import { Icon } from "@/components/icons";
import type { ContentBlock } from "@/lib/types";
import { cn } from "@/lib/utils";

const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Only optimize images from hosts declared in next.config remotePatterns. */
function allowedImage(url: string): boolean {
  try {
    return new URL(url).hostname.endsWith("voith.com.np");
  } catch {
    return false;
  }
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="flex items-start gap-3 border-l-4 border-l-primary pl-3.5 font-heading text-xl font-semibold text-primary">
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p className="whitespace-pre-line text-[15px] leading-relaxed text-ink-soft">{block.text}</p>
      );

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className="space-y-2.5 rounded-xl bg-primary-50/50 p-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              {block.ordered ? (
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {i + 1}
                </span>
              ) : (
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              )}
              <span className="text-[15px] leading-relaxed text-ink-soft">{item}</span>
            </li>
          ))}
        </List>
      );
    }

    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-primary/15 shadow-sm">
          <table className="w-full min-w-130 border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-left">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-heading font-semibold text-white">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={cn(ri % 2 === 1 ? "bg-primary-50/70" : "bg-white")}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-t border-line px-4 py-3 align-top text-ink-soft">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "note":
      return <Notice>{block.text}</Notice>;

    case "image": {
      if (!allowedImage(block.url)) return null;
      return (
        <figure className="my-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface-muted">
            <Image
              src={block.url}
              alt={block.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-ink-muted">{block.caption}</figcaption>
          )}
        </figure>
      );
    }

    case "links":
      return (
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {block.links.map((link) => (
            <li key={link.href}>
                  <SmartLink
                href={link.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-primary/15 bg-primary-50/40 px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <span>{link.label}</span>
                <Icon
                  name={isExternal(link.href) ? "external" : "arrowRight"}
                  size={16}
                  className="shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                />
              </SmartLink>
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

/** Renders a list of generic content blocks (drives every data-based page). */
export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
