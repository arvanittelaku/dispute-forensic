import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllSectors } from "@/data/sectors";

export const metadata = createMetadata({
  title: "Forensic Expert Witnesses by Sector | UK Industry Specialists",
  description:
    "Sector-specialist forensic expert witnesses for UK litigation: construction, financial services, technology, energy, professional services, and more.",
  path: "/sectors",
});

export default function SectorsPage() {
  const sectors = getAllSectors();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sectors", path: "/sectors" },
        ])}
      />
      <PageHero
        title="Forensic Expert Witnesses by Sector"
        subtitle="Industry-specific disputes require forensic experts who understand sector economics, regulatory frameworks, and typical transaction structures, across construction, financial services, technology, energy, professional services, and life sciences."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Card
              key={s.slug}
              title={s.title}
              description={s.paragraphs[0].slice(0, 140) + "…"}
              href={`/sectors/${s.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
