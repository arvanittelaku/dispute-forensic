import type { ContentPage } from "./types";

export const DISCIPLINE_SLUGS = [
  "forensic-accounting",
  "forensic-engineering-quantum",
  "digital-forensics",
  "forensic-economics",
] as const;

export type DisciplineSlug = (typeof DISCIPLINE_SLUGS)[number];

const STANDARD_RELATED_LINKS = [
  { href: "/services", label: "Forensic Expert Witness Services" },
  { href: "/case-types", label: "Case Types Requiring Forensic Experts" },
  { href: "/guides", label: "Solicitor Guides" },
  { href: "/contact", label: "Instruct an Expert" },
];

const disciplines: ContentPage[] = [
  {
    slug: "forensic-accounting",
    title: "Forensic Accounting Expert Witness UK",
    h1: "Forensic Accounting Expert Witness Services UK",
    metaTitle:
      "Forensic Accounting Expert Witness UK | Financial Disputes & Fraud",
    metaDescription:
      "Instruct a forensic accounting expert witness in the UK for financial disputes, fraud investigation, loss quantification, asset tracing, and business valuation. CPR Part 35 compliant.",
    paragraphs: [
      "Forensic accounting is the application of accounting, auditing, and financial investigation skills to legal disputes. A forensic accounting expert witness combines the rigour of financial investigation with the court admissibility requirements of expert witness procedure, producing independent evidence on financial losses, fraud, asset tracing, and business valuation for courts, tribunals, and arbitration.",
      "In litigation, forensic accountants perform a wide range of services: quantifying financial losses using but-for counterfactual analysis; investigating fraud and financial irregularities; tracing assets through complex corporate structures; valuing businesses in shareholder disputes and matrimonial proceedings; and analysing financial records in insolvency and regulatory matters. Their reports must comply with CPR Part 35 and the expert's primary duty is to the court.",
      "The core UK credentials for forensic accounting expert witnesses are ACA/FCA (ICAEW chartered accountancy), often combined with CFE (Certified Fraud Examiner) for fraud-focused work, or CVA/CFA for valuation-heavy cases. ICAEW forensic accreditation and Fellow of the Expert Witness Institute (FEWI) are additional markers of specialist expertise recognised by UK courts. Forensic accountants appear before the High Court, Commercial Court, Technology and Construction Court, Family Court, and international arbitration tribunals.",
      "Forensic accountants should be instructed early in disputes where financial analysis will be required, at the pre-action stage where possible. Early instruction allows the expert to advise on document preservation, shape the scope of financial disclosure, and provide quantum analysis that informs settlement strategy and interim relief applications such as freezing injunctions.",
    ],
    faqs: [
      {
        question:
          "What does a forensic accounting expert witness do in litigation?",
        answer:
          "A forensic accounting expert witness applies accounting expertise to legal disputes, quantifying financial losses, investigating fraud and financial irregularities, valuing businesses in contentious contexts, and producing CPR Part 35 compliant expert reports for courts, tribunals, and arbitration. They combine the rigour of forensic investigation with the court admissibility requirements of expert witness procedure.",
      },
      {
        question:
          "What credentials should a forensic accounting expert witness hold?",
        answer:
          "The core UK credentials are ACA/FCA (ICAEW chartered accountancy) combined with CFE (Certified Fraud Examiner) for fraud-focused work, or CVA/CFA for valuation-heavy cases. ICAEW forensic accreditation and Fellow of the Expert Witness Institute (FEWI) are additional markers of specialist expertise recognised by UK courts.",
      },
    ],
    relatedLinks: STANDARD_RELATED_LINKS,
  },
  {
    slug: "forensic-engineering-quantum",
    title: "Forensic Engineering & Quantum Expert Witness UK",
    h1: "Forensic Engineering & Quantum Expert Witness Services UK",
    metaTitle:
      "Forensic Engineering & Quantum Expert Witness UK | Construction & Technical Disputes",
    metaDescription:
      "Instruct a forensic engineering and quantum expert witness in the UK for construction disputes, delay analysis, quantum claims, and technical failure investigations under JCT, NEC, and FIDIC.",
    paragraphs: [
      "Forensic engineering and quantum expertise applies engineering, construction, and quantity surveying skills to dispute resolution. A forensic engineering expert witness analyses technical failures, quantifies construction claims, and provides independent opinions on causation, liability, and quantum in construction disputes. Forensic engineering experts appear before the Technology and Construction Court (TCC), adjudication panels, and international arbitration tribunals including ICC, LCIA, and FIDIC-DAB.",
      "In construction disputes, three distinct but related expert disciplines are commonly engaged. Quantum experts (typically chartered quantity surveyors holding MRICS or FRICS) value the financial impact of claims, loss and expense, variations, prolongation costs, and final account disputes. Delay experts (construction programmers) analyse the programme to determine causation and entitlement to extensions of time. Forensic engineers (CEng) address technical failure, defects, and design issues. Complex construction disputes often require all three disciplines working together.",
      "Forensic quantum and engineering experts work across all standard form contracts, JCT, NEC, and FIDIC, and bespoke agreements. Key claim types include loss and expense, prolongation, disruption, variations, repricing, remeasurement, and interim and final account disputes. Scott Schedules are the standard format for presenting quantum expert evidence in TCC proceedings. Experts exchange reports, meet to narrow issues, produce joint statements, and may give concurrent evidence (hot-tubbing) at trial.",
      "Key credentials for forensic engineering and quantum expert witnesses include MRICS/FRICS (quantity surveying), CEng (chartered engineer), MCIOB/FCIOB (construction management), and FCIArb/MCIArb (arbitration). Formal expert witness training through the Expert Witness Institute or Academy of Experts is strongly recommended. Prior TCC and adjudication testimony experience is essential for major construction disputes.",
    ],
    faqs: [
      {
        question: "What is a forensic engineering expert witness?",
        answer:
          "A forensic engineering expert witness applies engineering and construction expertise to dispute resolution, analysing technical failures, quantifying construction claims, and providing independent opinions on causation, liability, and quantum in construction disputes. Forensic engineering experts appear before the Technology and Construction Court (TCC), adjudication panels, and international arbitration tribunals including ICC, LCIA, and FIDIC-DAB.",
      },
      {
        question:
          "What is the difference between a quantum expert and a delay expert in construction disputes?",
        answer:
          "A quantum expert (typically a chartered quantity surveyor) values the financial impact of claims, loss and expense, variations, prolongation costs, and final account disputes. A delay expert (typically a construction programmer) analyses the programme to determine causation and entitlement to extensions of time. Complex construction disputes often require both disciplines, working together to present a complete picture of entitlement and quantum.",
      },
    ],
    relatedLinks: STANDARD_RELATED_LINKS,
  },
  {
    slug: "digital-forensics",
    title: "Digital Forensics Expert Witness UK",
    h1: "Digital Forensics Expert Witness Services UK",
    metaTitle:
      "Digital Forensics Expert Witness UK | Cybercrime, Data & E-Discovery Disputes",
    metaDescription:
      "Instruct a digital forensics expert witness in the UK for cybercrime, e-discovery, data theft, IP misappropriation, and electronic evidence disputes. CPR Part 35 and Part 31 compliant.",
    paragraphs: [
      "Digital forensics is the application of scientific investigation techniques to electronic data, computers, mobile devices, cloud storage, email servers, and network infrastructure, to establish facts relevant to legal proceedings. A digital forensics expert witness in civil proceedings analyses electronic evidence to prove or disprove allegations of data theft, IP misappropriation, or document authenticity, and assesses the reliability of digital evidence under CPR Part 35.",
      "Digital forensic experts handle a wide range of civil and criminal matters: data recovery and analysis from damaged or deleted storage; cybercrime investigations including ransomware and business interruption; e-discovery and electronic disclosure under CPR Part 31; metadata analysis to establish document provenance; mobile device forensics; cloud forensics across SaaS platforms; and IP theft and company data disputes. Chain of custody integrity is maintained throughout to ensure court admissibility.",
      "E-discovery (electronic disclosure) is the process of identifying, collecting, and reviewing electronically stored information (ESI) for litigation. Digital forensics experts assist with identifying relevant data sources, ensuring forensically sound collection that preserves metadata and chain of custody, processing large volumes of data, and advising on proportionality under CPR Part 31. In complex disputes, they provide expert evidence on whether the disclosure process was conducted correctly.",
      "Key credentials for digital forensics expert witnesses include FBCS (Fellow of the British Computer Society), CEng (Chartered Engineer), EnCE (EnCase Certified Examiner), and GCFE (GIAC Certified Forensic Examiner). GCFA (GIAC Certified Forensic Analyst) is also recognised. Beyond technical credentials, experts should have prior court testimony experience and professional indemnity insurance. Digital forensics experts are increasingly instructed alongside forensic accountants in cases where financial loss follows data breach or cybercrime.",
    ],
    faqs: [
      {
        question:
          "What does a digital forensics expert witness do in civil disputes?",
        answer:
          "A digital forensics expert witness in civil proceedings analyses electronic evidence, computers, mobile devices, cloud storage, email servers, and metadata, to establish facts relevant to the dispute. This includes: proving or disproving allegations of data theft or IP misappropriation; recovering deleted communications; authenticating electronic documents; and assessing the reliability of digital evidence under CPR Part 35.",
      },
      {
        question: "What is e-discovery and why does it need a forensic expert?",
        answer:
          "E-discovery (electronic disclosure) is the process of identifying, collecting, and reviewing electronically stored information (ESI) for litigation. Digital forensics experts assist with: identifying relevant data sources; ensuring forensically sound collection (preserving metadata and chain of custody); processing large volumes of data; and advising on proportionality under CPR Part 31. In complex disputes, they provide expert evidence on whether the disclosure process was conducted correctly.",
      },
    ],
    relatedLinks: STANDARD_RELATED_LINKS,
  },
  {
    slug: "forensic-economics",
    title: "Forensic Economics Expert Witness UK",
    h1: "Forensic Economics Expert Witness Services UK",
    metaTitle:
      "Forensic Economics Expert Witness UK | Competition Law, Regulatory & Economic Damages",
    metaDescription:
      "Instruct a forensic economics expert witness in the UK for competition law damages, cartel overcharge, regulatory proceedings, and investment treaty arbitration. Counterfactual and econometric analysis.",
    paragraphs: [
      "Forensic economics is the application of economic theory and econometric methodology to legal disputes. A forensic economist expert witness quantifies economic losses, assesses market impacts, and provides expert evidence in competition law proceedings, regulatory investigations, and international arbitration. Forensic economists advise on cartel damages (overcharge calculations), abuse of dominance losses, and investment treaty damages using counterfactual and econometric analysis.",
      "In competition law, forensic economists construct counterfactual models showing what prices would have been absent the anticompetitive conduct and quantify the resulting overcharge or competitive harm. They address pass-on defences through pricing analysis and econometric modelling, a defence significantly shaped by the EU Damages Directive and UK Competition Appeal Tribunal (CAT) jurisprudence. Forensic economists also provide market definition analysis and competitive effects assessment in CMA regulatory proceedings.",
      "In international arbitration, forensic economists apply the Chorzów Factory standard for full reparation of injury, constructing DCF models and market-based valuations for investment treaty damages under ICSID and UNCITRAL rules. Investment treaty economics requires rigorous counterfactual analysis, what would the investor's position have been but for the state's breach, supported by econometric evidence and financial data verification.",
      "Forensic economists are needed when loss quantification requires economic methodology beyond standard accounting analysis, typically in competition law damages claims, international investment treaty arbitration, and regulatory proceedings where market definition and competitive effects are in dispute. Key credentials include PhD Economics, CFA, Who's Who Legal Economist ranking, and CMA/FCA regulatory experience. Forensic economists frequently work alongside forensic accountants who verify economic assumptions against financial records.",
    ],
    faqs: [
      {
        question: "What is a forensic economist expert witness?",
        answer:
          "A forensic economist expert witness applies economic methodology to legal disputes, quantifying economic losses, assessing market impacts, and providing expert evidence in competition law proceedings, regulatory investigations, and international arbitration. Forensic economists advise on cartel damages (overcharge calculations), abuse of dominance losses, and investment treaty damages using counterfactual and econometric analysis.",
      },
      {
        question:
          "When is a forensic economist needed instead of a forensic accountant?",
        answer:
          "Forensic economists are needed when the loss quantification requires economic methodology beyond standard accounting analysis, typically in competition law damages claims (where overcharge models and pass-on arguments apply), international investment treaty arbitration (where DCF and market-based approaches require economic grounding), and regulatory proceedings where market definition and competitive effects are in dispute.",
      },
    ],
    relatedLinks: STANDARD_RELATED_LINKS,
  },
];

export function getDiscipline(slug: string): ContentPage | undefined {
  return disciplines.find((d) => d.slug === slug);
}

export function getAllDisciplines(): ContentPage[] {
  return disciplines;
}

export function getDisciplineSlugs(): string[] {
  return [...DISCIPLINE_SLUGS];
}
