import type { ExpertProfile } from "./types";

export const EXPERT_IDS = [
  "lead-forensic-accounting",
  "lead-forensic-engineering-quantum",
  "lead-digital-forensics",
] as const;

export type ExpertId = (typeof EXPERT_IDS)[number];

const experts: ExpertProfile[] = [
  {
    id: "lead-forensic-accounting",
    name: "Lead Forensic Accounting Expert",
    jobTitle: "Senior Forensic Accountant & Expert Witness",
    description:
      "Our lead forensic accounting expert represents the DisputeForensic network's accounting discipline. With extensive experience in commercial fraud, loss quantification, asset tracing, and business valuation, this expert provides CPR Part 35 compliant reports for the High Court, Technology and Construction Court, Family Court, and international arbitration tribunals. They have testified in complex financial disputes involving multi-jurisdictional fund flows, shareholder oppression claims, and matrimonial financial proceedings.",
    credentials: [
      "ACA/FCA (ICAEW Chartered Accountancy)",
      "CFE (Certified Fraud Examiner)",
      "CFA (Chartered Financial Analyst)",
      "ICAEW Forensic Accreditation",
      "Fellow of the Expert Witness Institute (FEWI)",
    ],
    disciplines: ["Forensic Accounting"],
  },
  {
    id: "lead-forensic-engineering-quantum",
    name: "Lead Forensic Engineering & Quantum Expert",
    jobTitle: "Senior Quantity Surveyor & Construction Expert Witness",
    description:
      "Our lead forensic engineering and quantum expert represents the DisputeForensic network's construction discipline. With deep experience in quantum analysis, delay assessment, and technical failure investigation under JCT, NEC, and FIDIC contracts, this expert provides independent expert evidence for TCC proceedings, adjudication, and international construction arbitration. They specialise in loss and expense, prolongation, disruption, variations, and final account disputes on major infrastructure projects.",
    credentials: [
      "FRICS (Fellow, Royal Institution of Chartered Surveyors)",
      "CEng (Chartered Engineer)",
      "FCIOB (Fellow, Chartered Institute of Building)",
      "FCIArb (Fellow, Chartered Institute of Arbitrators)",
      "Academy of Experts accredited",
    ],
    disciplines: ["Forensic Engineering & Quantum"],
  },
  {
    id: "lead-digital-forensics",
    name: "Lead Digital Forensics Expert",
    jobTitle: "Senior Digital Forensics Specialist & Expert Witness",
    description:
      "Our lead digital forensics expert represents the DisputeForensic network's digital discipline. With specialist expertise in computer forensics, mobile device analysis, cloud forensics, e-discovery, and metadata examination, this expert provides court-admissible digital evidence in civil disputes, regulatory investigations, and IP theft cases. They are experienced in CPR Part 31 electronic disclosure, chain of custody protocols, and concurrent evidence (hot-tubbing) in technically complex cases.",
    credentials: [
      "FBCS (Fellow, British Computer Society)",
      "CEng (Chartered Engineer)",
      "EnCE (EnCase Certified Examiner)",
      "GCFE (GIAC Certified Forensic Examiner)",
      "GCFA (GIAC Certified Forensic Analyst)",
    ],
    disciplines: ["Digital Forensics"],
  },
];

export function getExpert(id: string): ExpertProfile | undefined {
  return experts.find((e) => e.id === id);
}

export function getAllExperts(): ExpertProfile[] {
  return experts;
}
