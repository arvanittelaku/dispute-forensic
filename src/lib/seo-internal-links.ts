import { getAllServices } from "@/data/services";

export type RelatedLink = { href: string; label: string };

const CONTACT: RelatedLink = { href: "/contact", label: "Instruct an Expert" };
const INSTRUCT: RelatedLink = {
  href: "/how-to-instruct",
  label: "How to Instruct",
};
const DISCIPLINES: RelatedLink = {
  href: "/forensic-disciplines",
  label: "Forensic Disciplines Guide",
};

export const HOMEPAGE_SEO_LINKS: RelatedLink[] = [
  DISCIPLINES,
  { href: "/guides", label: "Solicitor Guides" },
  { href: "/glossary", label: "Glossary" },
  CONTACT,
];

export function mergeCaseTypeLinks(
  slug: string,
  pageLinks?: RelatedLink[]
): RelatedLink[] {
  const base: RelatedLink[] = [
    { href: "/case-types", label: "All Case Types" },
    DISCIPLINES,
    INSTRUCT,
    CONTACT,
  ];
  return [...(pageLinks ?? []), ...base.filter((b) => !pageLinks?.some((p) => p.href === b.href))];
}

export function mergeSectorLinks(
  slug: string,
  pageLinks?: RelatedLink[]
): RelatedLink[] {
  const base: RelatedLink[] = [
    { href: "/sectors", label: "All Sectors" },
    DISCIPLINES,
    { href: "/qualifications", label: "Qualifications" },
    CONTACT,
  ];
  return [...(pageLinks ?? []), ...base];
}

export function mergeDisciplineLinks(
  slug: string,
  pageLinks?: RelatedLink[]
): RelatedLink[] {
  const base: RelatedLink[] = [
    { href: "/disciplines", label: "All Disciplines" },
    DISCIPLINES,
    ...getAllServices().slice(0, 3).map((s) => ({
      href: `/services#${s.id}`,
      label: s.name,
    })),
    CONTACT,
  ];
  return [...(pageLinks ?? []), ...base];
}

export function mergeGuideLinks(
  slug: string,
  pageLinks?: RelatedLink[]
): RelatedLink[] {
  const base: RelatedLink[] = [
    { href: "/guides", label: "All Guides" },
    DISCIPLINES,
    INSTRUCT,
    CONTACT,
  ];
  return [...(pageLinks ?? []), ...base];
}
