export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentPage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: FAQ[];
  relatedLinks?: { href: string; label: string }[];
}

export interface GuidePage extends ContentPage {
  aboutServiceId?: string;
  sections: { heading: string; content: string }[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  methodology: { phase: string; whatWeDo: string; deliverable: string }[];
  faqs: FAQ[];
  relatedDiscipline: string;
  relatedCaseType: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  href?: string;
}

export interface ExpertProfile {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  credentials: string[];
  disciplines: string[];
}

export interface SharedContentBlock {
  heading: string;
  content: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface PillarSection {
  heading: string;
  content: string;
}
