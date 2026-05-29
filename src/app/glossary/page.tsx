import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { getAllGlossaryTerms, getGlossaryFaqs } from "@/data/glossary";
import { Suspense } from "react";
import { GlossarySearch } from "./GlossarySearch";

export const metadata = createMetadata({
  title: "Forensic Expert Witness Glossary | Key UK Dispute Terms",
  description:
    "Definitions of key forensic expert witness and dispute terms for UK litigation — from forensic accounting to e-discovery, hot-tubbing, and CPR Part 35.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const terms = getAllGlossaryTerms();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
          faqPageSchema(getGlossaryFaqs()),
        ]}
      />
      <PageHero
        title="Forensic Expert Witness Glossary"
        subtitle="Key UK legal and forensic terms used in forensic expert witness reports and dispute proceedings — from but-for analysis to CPR Part 35, hot-tubbing, and Scott Schedules."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
      />
      <Section>
        <Suspense fallback={<p className="text-body">Loading glossary…</p>}>
          <GlossarySearch terms={terms} />
        </Suspense>
      </Section>
      <CTASection />
    </>
  );
}
