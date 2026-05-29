import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllDisciplines } from "@/data/disciplines";

export const metadata = createMetadata({
  title: "Forensic Expert Witness Disciplines | UK Specialist Hub",
  description:
    "Forensic expert witnesses by discipline: forensic accounting, forensic engineering and quantum, digital forensics, and forensic economics for UK disputes.",
  path: "/disciplines",
});

export default function DisciplinesPage() {
  const disciplines = getAllDisciplines();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Disciplines", path: "/disciplines" },
        ])}
      />
      <PageHero
        title="Forensic Expert Witness Disciplines"
        subtitle="Four core forensic expert witness disciplines for UK litigation and international arbitration — each with distinct credentials, dispute contexts, and procedural requirements under CPR Part 35."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Disciplines" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {disciplines.map((d) => (
            <Card
              key={d.slug}
              title={d.h1.replace(" Services UK", "")}
              description={d.paragraphs[0].slice(0, 160) + "…"}
              href={`/disciplines/${d.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
