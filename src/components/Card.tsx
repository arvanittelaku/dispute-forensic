import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  children?: ReactNode;
}

export function Card({ title, description, href, children }: CardProps) {
  const inner = (
    <>
      <h3 className="text-lg font-semibold text-heading">{title}</h3>
      {description && (
        <p className="mt-2 text-body leading-relaxed">{description}</p>
      )}
      {children}
      {href && (
        <span className="mt-3 inline-block text-sm font-medium text-accent">
          Learn more →
        </span>
      )}
    </>
  );

  const className =
    "block min-w-0 h-full rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-lg sm:p-6";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
