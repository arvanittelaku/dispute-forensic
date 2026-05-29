import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  organizationSchema,
  professionalServiceSchema,
  serviceNode,
  websiteSchema,
} from "@/lib/schema";
import { getAllDisciplines } from "@/data/disciplines";
import { getAllServices, getServiceNames } from "@/data/services";
import { HOMEPAGE_SEO_LINKS } from "@/lib/seo-internal-links";

const stats = [
  ["Core forensic disciplines", "4", "Accounting, engineering, digital, economics"],
  ["Court framework (civil)", "CPR Part 35", "Civil Procedure Rules"],
  ["Court framework (family)", "FPR Part 25", "Family Procedure Rules"],
  ["Arbitration evidence rules", "IBA Rules Art 5/6", "International arbitration"],
  ["Typical hourly rate range", "£150–£600+/hr", "Discipline-dependent"],
  ["Expert witness services", "8", "Full dispute lifecycle"],
  ["Multi-discipline matching", "Yes", "Coordinated expert teams"],
];

export default function HomePage() {
  const services = getAllServices();
  const disciplines = getAllDisciplines();

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      professionalServiceSchema(getServiceNames()),
      websiteSchema,
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };

  return (
    <>
      <JsonLd data={homepageSchema} />
      <PageHero
        title="Forensic Expert Witness Services for UK Solicitors & Counsel"
        subtitle="DisputeForensic.com is the UK's multi-discipline forensic expert witness portal — connecting solicitors, barristers, and international arbitration counsel with qualified experts across forensic accounting, forensic engineering and quantum, digital forensics, and forensic economics. CPR Part 35 and IBA Rules compliant."
      />
      <Section>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-[#1d4ed8] sm:w-auto"
          >
            Instruct an Expert
          </Link>
          <Link
            href="/forensic-disciplines"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-section-alt sm:w-auto"
          >
            Explore All Disciplines
          </Link>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          Four Forensic Expert Witness Disciplines
        </h2>
        <p className="mt-3 max-w-3xl text-body leading-relaxed">
          Complex disputes require the right forensic discipline — or a
          coordinated multi-discipline team. DisputeForensic.com covers all four
          core forensic expert witness disciplines under one roof.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => (
            <Card
              key={d.slug}
              title={d.title.replace(" Expert Witness UK", "")}
              description={d.paragraphs[0].slice(0, 140) + "…"}
              href={`/disciplines/${d.slug}`}
            />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          Forensic Expert Witness Services
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card
              key={s.id}
              title={s.name}
              description={s.description.slice(0, 120) + "…"}
              href={`/services#${s.id}`}
            />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          Forensic Expert Witness UK: Key Facts
        </h2>
        <ResponsiveTable className="mt-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-alt">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Metric
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Figure
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map(([metric, figure, source]) => (
                <tr key={metric}>
                  <td className="border border-border px-4 py-3 text-body">
                    {metric}
                  </td>
                  <td className="border border-border px-4 py-3 font-medium text-heading">
                    {figure}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTable>
        <p className="mt-4 text-sm text-body/80">
          Rates are indicative and vary by discipline, seniority, and case
          complexity. All forensic expert witnesses owe their primary duty to the
          court under CPR Part 35.
        </p>
      </Section>

      <Section>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          The UK&apos;s Multi-Discipline Forensic Portal
        </h2>
        <p className="mt-4 max-w-3xl text-body leading-relaxed">
          Whether your dispute requires a forensic accountant to quantify losses,
          a quantum expert for a construction claim, a digital forensics
          specialist for data theft evidence, or a forensic economist for
          competition damages — DisputeForensic.com matches you with the right
          expert.{" "}
          <Link href="/what-is-forensic-expert-witness" className="text-accent underline">
            What is a forensic expert witness?
          </Link>{" "}
          |{" "}
          <Link href="/case-types" className="text-accent underline">
            Case types
          </Link>{" "}
          |{" "}
          <Link href="/services" className="text-accent underline">
            All services
          </Link>
        </p>
        <RelatedLinks links={HOMEPAGE_SEO_LINKS} title="Explore Further" />
      </Section>

      <CTASection />
    </>
  );
}
