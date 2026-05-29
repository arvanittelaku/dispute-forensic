import type { ContentPage } from "./types";

export const SECTOR_SLUGS = [
  "construction-infrastructure",
  "financial-services-banking",
  "technology-software-digital",
  "energy-utilities",
  "professional-services",
  "life-sciences-healthcare",
] as const;

export type SectorSlug = (typeof SECTOR_SLUGS)[number];

const sectors: ContentPage[] = [
  {
    slug: "construction-infrastructure",
    title: "Construction & Infrastructure",
    h1: "Construction & Infrastructure Forensic Expert Witness UK",
    metaTitle:
      "Construction & Infrastructure Forensic Expert Witness UK",
    metaDescription:
      "Forensic quantum, delay, and engineering expert witnesses for UK construction and infrastructure disputes, major projects, TCC proceedings, adjudication, and international arbitration.",
    paragraphs: [
      "Construction and infrastructure disputes are the largest single category of forensic expert witness instructions in the UK. Major projects, roads, rail, energy, utilities, commercial buildings, and residential developments, generate complex claims requiring quantum experts, delay analysts, forensic engineers, and sometimes forensic accountants for contractor fraud and financial quantum support.",
      "Quantum experts (MRICS/FRICS) handle loss and expense, final account disputes, variations, prolongation, and disruption claims under JCT, NEC, and FIDIC contracts. Delay experts analyse extensions of time and programme causation. Forensic engineers (CEng) address technical failure, defects, and design issues on major infrastructure projects where structural or mechanical failure is alleged.",
      "Infrastructure arbitration covering roads, rail, energy, and utilities projects frequently involves multi-disciplinary forensic teams, quantum, delay, technical, and financial experts working together under IBA Rules on Evidence. The evidence is typically extensive and the hearing complex, making experienced testifying experts essential for successful outcomes.",
    ],
    faqs: [
      {
        question: "What forensic disciplines cover construction disputes?",
        answer:
          "Construction disputes require quantum experts (MRICS/FRICS for loss and expense and final account disputes), delay experts (construction programmers for EOT analysis), forensic engineers (CEng for technical failure, defects, design issues), and sometimes forensic accountants (for contractor fraud, overhead recovery analysis, and financial quantum support).",
      },
      {
        question:
          "How does forensic evidence work in infrastructure arbitration?",
        answer:
          "Infrastructure arbitration (covering roads, rail, energy, and utilities projects) frequently involves multi-disciplinary forensic teams, quantum, delay, technical, and financial experts working together under IBA Rules on Evidence. The evidence is typically extensive and the hearing complex, making experienced testifying experts essential.",
      },
    ],
    relatedLinks: [
      { href: "/case-types/construction-engineering-disputes", label: "Construction & Engineering Disputes" },
      { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
      { href: "/guides/construction-quantum-forensic-guide", label: "Construction Quantum Guide" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "financial-services-banking",
    title: "Financial Services & Banking",
    h1: "Financial Services & Banking Forensic Expert Witness UK",
    metaTitle:
      "Financial Services & Banking Forensic Expert Witness UK",
    metaDescription:
      "Forensic accounting and economics expert witnesses for UK financial services disputes, FCA investigations, ISDA disputes, investment management, and banking litigation.",
    paragraphs: [
      "Financial services and banking disputes require forensic experts who understand the regulatory framework, product structures, and market dynamics of the sector. Forensic accountants analyse trading records, fund performance, and financial statements in FCA enforcement proceedings, ISDA master agreement disputes, investment management litigation, and banking fraud claims.",
      "Forensic economists provide market impact analysis in regulatory proceedings, assess competitive effects in financial services mergers, and quantify damages in complex derivatives and structured product disputes. The combination of forensic accounting and forensic economics expertise is particularly valuable in cases involving market manipulation, insider trading, and mis-selling allegations.",
      "FCA regulatory proceedings, LIBOR and benchmark manipulation cases, pension scheme disputes, and fund manager negligence claims all require forensic experts with sector-specific experience. Experts must understand the applicable regulatory standards (FCA Handbook, COBS, CASS) and be able to opine on whether conduct fell below the required standard.",
    ],
    faqs: [
      {
        question:
          "What forensic disciplines are needed in financial services disputes?",
        answer:
          "Financial services disputes typically require forensic accountants (to analyse trading records, fund performance, and financial statements) and forensic economists (for market impact analysis and competitive effects assessment). In FCA enforcement and fraud cases, digital forensics experts may also be engaged to analyse electronic trading data and communications.",
      },
      {
        question:
          "How do forensic experts support ISDA and derivatives disputes?",
        answer:
          "In ISDA master agreement and derivatives disputes, forensic accountants reconstruct transaction histories, analyse mark-to-market valuations, and quantify close-out amounts. Forensic economists may assess market conditions and the reasonableness of valuation methodologies. Both produce expert reports addressing the financial quantum of the dispute under the ISDA close-out framework.",
      },
    ],
    relatedLinks: [
      { href: "/case-types/regulatory-investigations", label: "Regulatory Investigations" },
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "technology-software-digital",
    title: "Technology & Software",
    h1: "Technology & Software Forensic Expert Witness UK",
    metaTitle: "Technology & Software Forensic Expert Witness UK",
    metaDescription:
      "Digital forensics and forensic accounting expert witnesses for UK technology disputes, IP theft, software contract breach, SaaS disputes, data theft, and cybercrime.",
    paragraphs: [
      "Technology and software disputes are inherently multi-disciplinary, requiring digital forensics experts to establish facts about data, code, and electronic evidence, and forensic accountants to quantify financial losses from IP misappropriation, software failure, or contract breach. In competition or M&A disputes involving technology companies, forensic economists may also be engaged.",
      "Digital forensics experts analyse source code to establish whether code was copied or derived from another codebase (IP infringement claims), the date and authorship of code modifications (relevant to warranty claims), and whether software performed as warranted (contract breach claims). They produce CPR Part 35 compliant reports on their technical findings with full chain of custody documentation.",
      "SaaS contract disputes, software licensing disagreements, data breach litigation, and employee IP misappropriation in the technology sector all require forensic experts who understand both the technical and financial dimensions of the dispute. Early instruction of digital forensics experts is critical to preserve electronic evidence before it is overwritten or deleted.",
    ],
    faqs: [
      {
        question:
          "What forensic disciplines are needed in technology disputes?",
        answer:
          "Technology disputes typically require digital forensics experts (to establish facts about data, code, and electronic evidence) and forensic accountants (to quantify financial losses from IP misappropriation, software failure, or contract breach). In competition or M&A disputes involving technology companies, forensic economists may also be engaged.",
      },
      {
        question: "How is source code analysed in a software dispute?",
        answer:
          "Digital forensics experts analyse source code to establish: whether code was copied or derived from another codebase (IP infringement claims); the date and authorship of code modifications (relevant to warranty claims); and whether software performed as warranted (relevant to contract breach claims). They produce CPR Part 35 compliant reports on their technical findings.",
      },
    ],
    relatedLinks: [
      { href: "/case-types/ip-theft-misappropriation", label: "IP Theft & Misappropriation" },
      { href: "/case-types/cybercrime-data-disputes", label: "Cybercrime & Data Disputes" },
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    h1: "Energy & Utilities Forensic Expert Witness UK",
    metaTitle: "Energy & Utilities Forensic Expert Witness UK",
    metaDescription:
      "Forensic expert witnesses for UK energy and utilities disputes, oil and gas, power purchase agreements, renewable energy claims, and ICSID investment treaty arbitration.",
    paragraphs: [
      "Energy and utilities disputes are inherently multi-disciplinary, requiring forensic engineers to assess technical failure and performance shortfalls, forensic accountants to quantify financial losses from contract breach or expropriation, and forensic economists to provide investment treaty damages analysis using DCF and fair market value methodologies for ICSID and UNCITRAL proceedings.",
      "Oil and gas disputes, power purchase agreement (PPA) disagreements, renewable energy project claims, and infrastructure expropriation cases all require forensic experts with sector-specific experience. Major energy arbitration firms deploy multi-discipline teams combining engineering, financial, and economic expertise under IBA Rules on Evidence.",
      "DCF (discounted cash flow) analysis values energy assets by projecting future cash flows, typically from power purchase agreements or oil revenues, and discounting them to present value at a risk-adjusted WACC. Forensic economics experts construct and defend DCF models in ICSID arbitration, where methodology is heavily scrutinised and expert quality is critical to the outcome.",
    ],
    faqs: [
      {
        question:
          "What forensic experts are needed in energy sector disputes?",
        answer:
          "Energy disputes are inherently multi-disciplinary: forensic engineers assess technical failure, performance shortfalls, and construction defects; forensic accountants quantify financial losses from contract breach or expropriation; and forensic economists provide investment treaty damages analysis (DCF, fair market value) for ICSID and UNCITRAL proceedings.",
      },
      {
        question:
          "How is a DCF analysis used in energy investment treaty disputes?",
        answer:
          "DCF (discounted cash flow) analysis values energy assets by projecting future cash flows (typically from power purchase agreements or oil revenues) and discounting them to present value at a risk-adjusted WACC. Forensic economics experts construct and defend DCF models in ICSID arbitration, the methodology is heavily scrutinised and expert quality is critical to the outcome.",
      },
    ],
    relatedLinks: [
      { href: "/case-types/international-arbitration", label: "International Arbitration" },
      { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
      { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    h1: "Professional Services Forensic Expert Witness UK",
    metaTitle: "Professional Services Forensic Expert Witness UK",
    metaDescription:
      "Forensic expert witnesses for UK professional services disputes, accountant negligence, auditor negligence, IT consultant negligence, and standard of care evidence.",
    paragraphs: [
      "Professional services firms, accounting practices, audit firms, law firms, IT consultancies, and engineering practices, are frequent targets of professional negligence claims requiring forensic expert evidence. The forensic discipline engaged mirrors the profession alleged to have been negligent: forensic accountants for accounting and audit negligence, digital forensics experts for IT consultant negligence, and forensic engineers for engineering negligence.",
      "In accountant and auditor negligence claims, forensic accountants opine on whether the audit or accounting work fell below the applicable standard of care (ISA standards for audits, FRS for accounting) and quantify the resulting loss using but-for analysis. The SAAMCo principle limits recoverable damages to losses within the scope of the auditor's duty, requiring careful forensic analysis.",
      "IT consultant and software developer negligence claims require digital forensics experts to assess whether the technology was designed, implemented, or maintained to the standard expected of a reasonably competent professional. Engineering negligence in the professional services context covers structural, mechanical, and civil engineering failures where design or supervision fell below the required standard.",
    ],
    faqs: [
      {
        question:
          "What forensic evidence is needed in accountant negligence claims?",
        answer:
          "Accountant and auditor negligence claims require forensic accounting experts who can opine on whether the work fell below the applicable professional standard (ISA for audits, FRS for accounting) and quantify the resulting loss. The expert must address the SAAMCo principle, distinguishing losses caused by the negligence from losses that would have occurred regardless.",
      },
      {
        question:
          "How do forensic experts address IT consultant negligence?",
        answer:
          "Digital forensics experts assess IT consultant and software developer negligence by analysing whether the technology was designed, implemented, or maintained to the standard expected of a reasonably competent professional. They examine system architecture, code quality, security implementations, and project documentation to opine on standard of care and causation of loss.",
      },
    ],
    relatedLinks: [
      { href: "/case-types/professional-negligence", label: "Professional Negligence" },
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "life-sciences-healthcare",
    title: "Life Sciences & Healthcare",
    h1: "Life Sciences & Healthcare Forensic Expert Witness UK",
    metaTitle: "Life Sciences & Healthcare Forensic Expert Witness UK",
    metaDescription:
      "Forensic expert witnesses for UK life sciences and healthcare disputes, pharmaceutical licensing, NHS contract disputes, clinical data integrity, and royalty accounting.",
    paragraphs: [
      "Life sciences and healthcare disputes require forensic experts who understand the regulatory, commercial, and technical dimensions of the sector. Pharmaceutical licensing disputes, NHS contract disagreements, PFI/PF2 claims, and clinical data integrity cases all require different forensic disciplines depending on the specific issues in dispute.",
      "Pharmaceutical licensing disputes typically require forensic economists to value the licensed IP and model lost revenue from breach, and forensic accountants to analyse royalty accounting and quantify financial losses. Digital forensics experts may also be engaged where data integrity or clinical trial records are in dispute, ensuring electronic records have not been altered or manipulated.",
      "NHS contract disputes, covering procurement, IT systems failure, and PFI/PF2 claims, require forensic accountants for financial loss quantification, forensic engineers for technical system failures, and digital forensics for IT implementation disputes and data-related claims. The combination of disciplines ensures both the technical and financial dimensions of healthcare disputes are properly addressed.",
    ],
    faqs: [
      {
        question:
          "What forensic evidence is needed in pharmaceutical licensing disputes?",
        answer:
          "Pharmaceutical licensing disputes typically require forensic economists (to value the licensed IP and model lost revenue from breach) and forensic accountants (to analyse royalty accounting and quantify financial losses). Digital forensics experts may also be engaged where data integrity or clinical trial records are in dispute.",
      },
      {
        question:
          "What forensic expertise is needed in NHS contract disputes?",
        answer:
          "NHS contract disputes (procurement, IT systems failure, PFI/PF2 claims) require different forensic disciplines depending on the issue: forensic accountants for financial loss quantification; forensic engineers for technical system failures; and digital forensics for IT implementation disputes and data-related claims.",
      },
    ],
    relatedLinks: [
      { href: "/case-types/professional-negligence", label: "Professional Negligence" },
      { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
];

export function getSector(slug: string): ContentPage | undefined {
  return sectors.find((s) => s.slug === slug);
}

export function getAllSectors(): ContentPage[] {
  return sectors;
}

export function getSectorSlugs(): string[] {
  return [...SECTOR_SLUGS];
}
