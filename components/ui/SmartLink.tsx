import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  external?: boolean;
  children: ReactNode;
}

/** Renders next/link for internal routes, a plain anchor for external / mailto. */
export function SmartLink({ href, external, children, ...rest }: SmartLinkProps) {
  const isExternal =
    external || /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
