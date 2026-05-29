import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllCaseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title:
    "Case Types Requiring Forensic Expert Witnesses | UK Litigation Guide",
  description:
    "Which UK disputes need forensic expert witnesses? Construction claims, financial fraud, cyber disputes, competition law, and commercial litigation explained.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const caseTypes = getAllCaseTypes();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Types", path: "/case-types" },
        ])}
      />
      <PageHero
        title="Case Types Requiring Forensic Expert Witnesses"
        subtitle="UK litigation and disputes spanning commercial fraud, construction claims, cybercrime, competition law, IP theft, shareholder conflicts, professional negligence, international arbitration, matrimonial proceedings, and regulatory investigations each require specialist forensic expert evidence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseTypes.map((ct) => (
            <Card
              key={ct.slug}
              title={ct.title}
              description={ct.paragraphs[0].slice(0, 160) + "…"}
              href={`/case-types/${ct.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
