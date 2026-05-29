import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import {
  cprPart35Block,
  sjeVsPaeBlock,
  hotTubbingIntroBlock,
} from "@/data/shared-content";

export const metadata = createMetadata({
  title:
    "Forensic Expert Witness Qualifications UK | CEng, ACA, CFE & Digital Credentials",
  description:
    "What credentials should a UK forensic expert witness hold? ACA for accounting, CEng/MRICS for engineering, FBCS for digital forensics, and CPR Part 35 compliance explained.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Qualifications", path: "/qualifications" },
        ])}
      />
      <PageHero
        title="Forensic Expert Witness Qualifications by Discipline"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Forensic Accounting Credentials</h2>
          <h3>ACA / FCA (ICAEW)</h3>
          <p>
            Primary UK chartered accountancy qualification, essential baseline
            for forensic accounting expert witnesses providing evidence on
            financial matters, loss quantification, and fraud investigation.
          </p>
          <h3>ACCA / FCCA</h3>
          <p>
            Association of Chartered Certified Accountants, widely recognised
            in UK litigation and international arbitration for forensic
            accounting work.
          </p>
          <h3>CFE (Certified Fraud Examiner)</h3>
          <p>
            Issued by ACFE, the primary additional credential for fraud
            investigation and forensic accounting in civil and criminal
            proceedings.
          </p>
          <h3>CFA / CVA</h3>
          <p>
            Relevant for valuation-heavy forensic accounting cases including
            shareholder disputes, M&A disputes, and matrimonial business
            valuation.
          </p>
          <h3>CIMA / FCMA</h3>
          <p>
            Chartered Institute of Management Accountants, relevant for
            management accounting disputes and financial modelling in loss
            quantification.
          </p>
          <h3>ICAEW Forensic Accreditation & FEWI</h3>
          <p>
            ICAEW forensic accreditation and Fellow of the Expert Witness
            Institute (FEWI) are additional markers of specialist forensic and
            expert witness expertise recognised by UK courts.
          </p>

          <h2>Forensic Engineering & Quantum Credentials</h2>
          <h3>MRICS / FRICS</h3>
          <p>
            Royal Institution of Chartered Surveyors, the core credential for
            quantum experts valuing construction claims, loss and expense,
            variations, and final account disputes.
          </p>
          <h3>CEng (Chartered Engineer)</h3>
          <p>
            Chartered Engineer status for forensic engineering expert witnesses
            addressing technical failure, defects, design issues, and causation
            in construction and engineering disputes.
          </p>
          <h3>MCIOB / FCIOB</h3>
          <p>
            Chartered Institute of Building membership for construction
            management and site-based forensic expertise.
          </p>
          <h3>FCIArb / MCIArb</h3>
          <p>
            Chartered Institute of Arbitrators fellowship, particularly relevant
            for experts appearing in adjudication and international construction
            arbitration.
          </p>
          <p>
            Formal expert witness training through the Expert Witness Institute
            or Academy of Experts is strongly recommended for all construction
            forensic experts.
          </p>

          <h2>Digital Forensics Credentials</h2>
          <h3>FBCS (Fellow, British Computer Society)</h3>
          <p>
            Fellowship of the British Computer Society, key credential for
            senior digital forensics expert witnesses in UK litigation and
            regulatory proceedings.
          </p>
          <h3>CEng (Chartered Engineer)</h3>
          <p>
            Also held by senior digital forensics specialists, demonstrating
            engineering-level competence in computing and IT systems.
          </p>
          <h3>EnCE (EnCase Certified Examiner)</h3>
          <p>
            Professional certification demonstrating competence in EnCase
            forensic software for computer and network forensic investigations.
          </p>
          <h3>GCFE / GCFA (GIAC)</h3>
          <p>
            GIAC Certified Forensic Examiner and Forensic Analyst certifications
            demonstrating competence in digital forensic investigation techniques.
          </p>
          <h3>CFE (for digital fraud cases)</h3>
          <p>
            Certified Fraud Examiner credential relevant where digital forensics
            intersects with financial fraud and cybercrime investigations.
          </p>

          <h2>Forensic Economics Credentials</h2>
          <h3>PhD Economics</h3>
          <p>
            Preferred credential for forensic economists providing competition
            law damages analysis, investment treaty quantum, and regulatory
            economic evidence.
          </p>
          <h3>CFA (Chartered Financial Analyst)</h3>
          <p>
            Relevant for forensic economists conducting DCF analysis and
            financial market-based valuations in arbitration.
          </p>
          <h3>Who&apos;s Who Legal: Economists / Arbitration</h3>
          <p>
            Industry ranking recognising leading forensic economists in
            international arbitration and competition proceedings.
          </p>
          <h3>CMA / FCA Regulatory Experience</h3>
          <p>
            Prior experience with competition and financial regulators is
            essential for forensic economists appearing in CMA and FCA
            regulatory proceedings.
          </p>

          <h2>{cprPart35Block.heading}</h2>
          {cprPart35Block.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}

          <h2>{sjeVsPaeBlock.heading}</h2>
          {sjeVsPaeBlock.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}

          <h2>{hotTubbingIntroBlock.heading}</h2>
          {hotTubbingIntroBlock.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}

          <h2>Experience Requirements</h2>
          <ul>
            <li>Active professional practice in the relevant discipline</li>
            <li>Prior court, tribunal, or arbitration testimony experience</li>
            <li>Professional indemnity insurance</li>
            <li>Discipline-specific accreditation and continuing professional development</li>
            <li>Sector experience relevant to the case type</li>
            <li>CPR Part 35 compliant report history</li>
          </ul>

          <h2>Red Flags</h2>
          <ul>
            <li>Full-time expert witness with no active professional practice</li>
            <li>No prior court or tribunal testimony experience</li>
            <li>Cannot explain methodology clearly to non-specialists</li>
            <li>Prior adverse judicial comments on methodology or independence</li>
            <li>No professional indemnity insurance</li>
            <li>Unwilling to confirm independence and duty to the court in writing</li>
          </ul>
          <p>
            <Link href="/how-to-instruct" className="text-accent">
              How to instruct →
            </Link>
          </p>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
