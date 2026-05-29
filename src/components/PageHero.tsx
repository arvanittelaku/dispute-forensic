import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-primary py-10 sm:py-14 md:py-20">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 min-w-0">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-xs text-white/60 sm:text-sm">
              {breadcrumbs.map((item, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden>/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-balance text-2xl font-bold tracking-tight text-white min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
