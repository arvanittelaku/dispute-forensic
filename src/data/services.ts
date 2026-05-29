import type { Service } from "./types";

export const SERVICE_IDS = [
  "forensic-loss-quantification",
  "fraud-investigation-asset-tracing",
  "construction-quantum-delay",
  "digital-forensics-ediscovery",
  "economic-damages-analysis",
  "business-share-valuation",
  "regulatory-investigation-support",
  "expert-determination-adr",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

const services: Service[] = [
  {
    id: "forensic-loss-quantification",
    name: "Forensic Loss Quantification",
    description:
      "Independent forensic analysis to quantify financial losses arising from fraud, breach of contract, professional negligence, and commercial disputes. Our forensic accounting experts apply but-for counterfactual methodology, financial modelling, and rigorous document analysis to produce CPR Part 35 compliant loss quantification reports for courts, tribunals, and arbitration.",
    methodology: [
      {
        phase: "Initial Assessment",
        whatWeDo:
          "Review the letter of instruction, pleadings, and key documents to define the scope of loss quantification, identify data requirements, and agree the counterfactual methodology.",
        deliverable: "Scoping memo and document request list",
      },
      {
        phase: "Document Review & Analysis",
        whatWeDo:
          "Analyse financial records, management accounts, bank statements, contracts, and correspondence to establish the factual baseline and identify the impact of the wrongful conduct.",
        deliverable: "Document analysis working papers",
      },
      {
        phase: "Loss Calculation",
        whatWeDo:
          "Apply but-for analysis, discounted cash flow, or other appropriate methodology to quantify the claimant's loss, addressing causation, mitigation, and SAAMCo scope of duty where relevant.",
        deliverable: "Loss quantification model and schedules",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a CPR Part 35 compliant expert report setting out instructions, methodology, assumptions, calculations, and opinions on quantum.",
        deliverable: "Expert witness report",
      },
      {
        phase: "Joint Meeting & Trial Support",
        whatWeDo:
          "Attend joint expert meetings, produce joint statements, respond to questions, and provide oral evidence at trial or arbitration as required.",
        deliverable: "Joint statement and trial attendance",
      },
    ],
    faqs: [
      {
        question:
          "When should a solicitor instruct a forensic accountant for loss quantification?",
        answer:
          "Instruct as soon as the heads of loss are identified in pleadings or pre-action correspondence — typically when financial quantum is disputed, multiple loss scenarios exist, or the defendant challenges causation or mitigation. Early instruction allows the expert to advise on document preservation, agree data protocols with the opposing expert, and shape the quantum case before disclosure is complete. CPR Part 35 reports are usually required before trial listing in the Commercial Court and TCC.",
      },
      {
        question:
          "What is the difference between but-for loss and reliance loss in expert reports?",
        answer:
          "But-for (expectation) loss places the claimant in the position they would have been in had the contract been performed — usually measured as lost profit. Reliance loss recovers wasted expenditure where expectation loss cannot be proved or where Anglia Television applies. The forensic accountant must address which measure the law supports, apply SAAMCo where professional negligence is alleged, and structure the report so each head satisfies Hadley v Baxendale remoteness.",
      },
    ],
    relatedDiscipline: "forensic-accounting",
    relatedCaseType: "shareholder-commercial-disputes",
  },
  {
    id: "fraud-investigation-asset-tracing",
    name: "Fraud Investigation & Asset Tracing",
    description:
      "Forensic investigation of financial fraud, misappropriation, and asset concealment for civil fraud claims, freezing injunctions, POCA proceedings, and regulatory investigations. Our experts trace fund flows through complex corporate structures, identify dissipated assets, and produce evidence supporting interim relief applications and final quantum.",
    methodology: [
      {
        phase: "Case Assessment",
        whatWeDo:
          "Review available evidence, identify the alleged fraud mechanism, map known entities and accounts, and develop an investigation strategy.",
        deliverable: "Investigation plan and priority targets",
      },
      {
        phase: "Financial Investigation",
        whatWeDo:
          "Analyse bank statements, accounting records, corporate filings, and transaction data to trace the movement of funds and identify beneficial ownership of assets.",
        deliverable: "Asset tracing report and fund flow diagrams",
      },
      {
        phase: "Digital Evidence Integration",
        whatWeDo:
          "Coordinate with digital forensics experts to analyse electronic communications, device data, and cloud storage supporting the financial investigation.",
        deliverable: "Integrated financial and digital evidence analysis",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a CPR Part 35 compliant report documenting the investigation findings, tracing results, and opinions on the quantum of misappropriated funds.",
        deliverable: "Forensic investigation expert report",
      },
      {
        phase: "Interim Relief Support",
        whatWeDo:
          "Provide urgent evidence for freezing injunction applications, provide oral evidence at interim hearings, and update analysis as new information emerges.",
        deliverable: "Affidavit/expert report for interim applications",
      },
    ],
    faqs: [
      {
        question:
          "What forensic evidence supports a freezing injunction in a fraud claim?",
        answer:
          "Freezing injunction applications require forensic accounting evidence identifying assets to be frozen and establishing a good arguable case with real risk of dissipation. The expert traces fund flows, documents recent transfers to third parties or offshore structures, and quantifies the claim. Digital forensics evidence may supplement the application by demonstrating patterns of concealment in communications or device activity.",
      },
      {
        question:
          "Can the same forensic accountant act as investigator and expert witness?",
        answer:
          "Yes, but the roles differ. A privileged investigation report informs the solicitor's advice and is not disclosed. Once appointed as CPR Part 35 expert witness, the accountant owes an overriding duty to the court and must produce an independent report for all parties. Many engagements begin with investigation and progress to expert witness appointment once proceedings are issued.",
      },
    ],
    relatedDiscipline: "forensic-accounting",
    relatedCaseType: "commercial-fraud-financial-crime",
  },
  {
    id: "construction-quantum-delay",
    name: "Construction Quantum & Delay",
    description:
      "Independent quantum and delay expert evidence for construction disputes under JCT, NEC, FIDIC, and bespoke contracts. Our chartered quantity surveyors and construction programmers provide loss and expense quantification, prolongation analysis, disruption claims, variation valuation, and delay analysis for TCC proceedings, adjudication, and international construction arbitration.",
    methodology: [
      {
        phase: "Contract & Programme Review",
        whatWeDo:
          "Review the construction contract, programme records, extension of time notices, and contemporaneous project documentation to establish the contractual framework and factual chronology.",
        deliverable: "Contract analysis and chronology",
      },
      {
        phase: "Quantum Analysis",
        whatWeDo:
          "Quantify loss and expense, prolongation costs, disruption, variations, and final account items using established QS methodology and Scott Schedule format.",
        deliverable: "Quantum schedules and Scott Schedule",
      },
      {
        phase: "Delay Analysis",
        whatWeDo:
          "Analyse the as-planned and as-built programmes using appropriate delay analysis methodology (TIA, windows, as-planned vs as-built) to assess EOT entitlement and delay-related costs.",
        deliverable: "Delay analysis report and programme models",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare CPR Part 35 compliant quantum and/or delay expert reports setting out methodology, calculations, and opinions on entitlement and quantum.",
        deliverable: "Expert witness report(s)",
      },
      {
        phase: "Adjudication & Trial Support",
        whatWeDo:
          "Provide expert evidence in adjudication, attend joint meetings, produce joint statements, and give oral evidence including hot-tubbing at TCC trial or arbitration.",
        deliverable: "Adjudication decision support and trial attendance",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between a quantum expert and a delay expert?",
        answer:
          "A quantum expert (typically MRICS/FRICS) values the financial impact of claims — loss and expense, variations, prolongation, and final account disputes. A delay expert (construction programmer) analyses the programme to determine causation and entitlement to extensions of time. Complex TCC disputes often require both, working together with Scott Schedules and joint statements before trial or hot-tubbing.",
      },
      {
        question:
          "How quickly can construction forensic experts support adjudication?",
        answer:
          "Adjudication timelines are typically 28 days from referral. Quantum and delay experts can provide preliminary opinions, Scott Schedules, and written reports within compressed timetables where documents are available. Early instruction — ideally before the notice of adjudication — maximises the quality of forensic evidence submitted to the adjudicator.",
      },
    ],
    relatedDiscipline: "forensic-engineering-quantum",
    relatedCaseType: "construction-engineering-disputes",
  },
  {
    id: "digital-forensics-ediscovery",
    name: "Digital Forensics & E-Discovery",
    description:
      "Forensic acquisition, analysis, and expert reporting on electronic evidence for civil disputes, regulatory investigations, and IP theft cases. Our digital forensics experts handle computer forensics, mobile device analysis, cloud forensics, metadata examination, and e-discovery under CPR Part 31, ensuring chain of custody integrity and court-admissible findings.",
    methodology: [
      {
        phase: "Scoping & Preservation",
        whatWeDo:
          "Identify relevant data sources (devices, servers, cloud accounts, email systems), issue preservation protocols, and plan forensically sound collection to maintain metadata and chain of custody.",
        deliverable: "Preservation protocol and collection plan",
      },
      {
        phase: "Forensic Acquisition",
        whatWeDo:
          "Forensically image devices and collect ESI using validated tools (EnCase, FTK, Cellebrite), maintaining complete chain of custody documentation throughout.",
        deliverable: "Forensic images and chain of custody records",
      },
      {
        phase: "Analysis & Processing",
        whatWeDo:
          "Analyse collected data for evidence of data theft, unauthorised access, IP misappropriation, or document authenticity issues; process and filter large data volumes for e-discovery review.",
        deliverable: "Forensic analysis findings and processed data sets",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a CPR Part 35 compliant expert report documenting methodology, findings, and opinions on the electronic evidence relevant to the dispute.",
        deliverable: "Digital forensics expert report",
      },
      {
        phase: "Disclosure & Trial Support",
        whatWeDo:
          "Advise on CPR Part 31 disclosure obligations, support e-discovery review, attend joint meetings, and provide oral evidence including hot-tubbing on technical findings.",
        deliverable: "Disclosure advisory and trial attendance",
      },
    ],
    faqs: [
      {
        question:
          "What is e-discovery and when does a case need a digital forensics expert?",
        answer:
          "E-discovery is the identification, collection, and review of electronically stored information (ESI) under CPR Part 31. A digital forensics expert is needed when metadata integrity matters, when deleted data must be recovered, when the disclosure process itself is disputed, or when civil cybercrime and IP theft require proof of what was taken and by whom. Forensically sound collection preserves chain of custody for trial.",
      },
      {
        question:
          "How do digital forensics experts prove data theft in civil proceedings?",
        answer:
          "Experts analyse device images, email servers, cloud storage, and USB activity logs to establish what data was accessed, copied, or transmitted, when, and by which user account. Findings are presented in CPR Part 35 compliant reports with complete chain of custody documentation. Methods include metadata analysis, file carving, and correlation with HR and access control records.",
      },
    ],
    relatedDiscipline: "digital-forensics",
    relatedCaseType: "cybercrime-data-disputes",
  },
  {
    id: "economic-damages-analysis",
    name: "Economic Damages Analysis",
    description:
      "Independent economic analysis for competition law damages claims, regulatory proceedings, and investment treaty arbitration. Our forensic economists construct counterfactual models, perform econometric analysis, assess cartel overcharges and pass-on defences, and quantify economic damages using methodologies accepted by the Competition Appeal Tribunal and international tribunals.",
    methodology: [
      {
        phase: "Case Assessment & Methodology",
        whatWeDo:
          "Review the competition infringement decision or regulatory findings, assess available data, and agree the appropriate counterfactual methodology (difference-in-differences, yardstick, passing-on analysis).",
        deliverable: "Methodology paper and data requirements",
      },
      {
        phase: "Data Collection & Analysis",
        whatWeDo:
          "Collect and analyse pricing, volume, and market data; construct the but-for counterfactual; and apply econometric techniques to estimate overcharge or competitive harm.",
        deliverable: "Econometric models and data analysis",
      },
      {
        phase: "Damages Quantification",
        whatWeDo:
          "Quantify the overcharge or economic loss, address pass-on arguments, calculate interest, and assess the overall quantum of damages.",
        deliverable: "Damages calculation schedules",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a CPR Part 35 or IBA Rules compliant expert report setting out economic methodology, assumptions, analysis, and opinions on quantum.",
        deliverable: "Forensic economics expert report",
      },
      {
        phase: "CAT / Arbitration Support",
        whatWeDo:
          "Attend joint economist meetings, produce joint statements, respond to tribunal questions, and provide oral evidence in CAT proceedings or international arbitration.",
        deliverable: "Joint statement and hearing attendance",
      },
    ],
    faqs: [
      {
        question:
          "What is a cartel overcharge and how is it calculated?",
        answer:
          "A cartel overcharge is the price premium paid by purchasers due to anticompetitive coordination. Forensic economists construct a but-for counterfactual showing prices absent the cartel — using difference-in-differences, yardstick benchmarks, or econometric regression — and quantify the resulting overcharge. Pass-on defences are addressed through pricing analysis and market data, shaped by EU Damages Directive principles and CAT jurisprudence.",
      },
      {
        question:
          "When is a forensic economist needed instead of a forensic accountant?",
        answer:
          "Forensic economists are required when loss quantification depends on economic methodology beyond standard accounting — competition damages with overcharge models, investment treaty arbitration requiring market-based valuation, and regulatory proceedings involving market definition. Forensic accountants often verify economic assumptions against financial records; both may be instructed in the same claim.",
      },
    ],
    relatedDiscipline: "forensic-economics",
    relatedCaseType: "competition-law-cartel-damages",
  },
  {
    id: "business-share-valuation",
    name: "Business & Share Valuation in Disputes",
    description:
      "Independent business and share valuation for shareholder disputes, matrimonial proceedings, M&A disputes, and partnership dissolution. Our forensic accountants apply DCF, market multiples, and asset-based methodologies to value businesses in contentious contexts, producing FPR Part 25 and CPR Part 35 compliant valuation reports.",
    methodology: [
      {
        phase: "Instruction & Scope",
        whatWeDo:
          "Review the letter of instruction, valuation date, basis of valuation (fair value, market value, liquidation), and applicable legal framework (s994 Companies Act, FPR Part 25).",
        deliverable: "Valuation scope and methodology agreement",
      },
      {
        phase: "Financial Analysis",
        whatWeDo:
          "Analyse historical financial statements, management accounts, forecasts, and normalise earnings for valuation purposes; investigate related-party transactions and hidden assets.",
        deliverable: "Normalised earnings analysis and financial review",
      },
      {
        phase: "Valuation Modelling",
        whatWeDo:
          "Apply appropriate valuation methodology (DCF, earnings multiples, net assets) and cross-check results; assess minority discounts and marketability where relevant.",
        deliverable: "Valuation model and supporting schedules",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a CPR Part 35 or FPR Part 25 compliant expert report setting out the valuation methodology, assumptions, calculations, and opinion on value.",
        deliverable: "Valuation expert report",
      },
      {
        phase: "Joint Meeting & Hearing",
        whatWeDo:
          "Attend joint expert meetings with the opposing valuer, produce joint statements identifying agreed and disputed valuation inputs, and give oral evidence if required.",
        deliverable: "Joint statement and hearing attendance",
      },
    ],
    faqs: [
      {
        question:
          "What valuation methodology is used in s994 unfair prejudice claims?",
        answer:
          "Fair value under a buy-out order is typically based on a pro rata share of enterprise value, often without minority discount where the majority's conduct has depressed value. Forensic accountants apply DCF, earnings multiples, or net assets depending on the company profile, with normalisation adjustments for excessive director remuneration and related-party transactions.",
      },
      {
        question:
          "How does business valuation differ in matrimonial proceedings?",
        answer:
          "Matrimonial valuations under FPR Part 25 focus on the value of business interests owned by a spouse, hidden income analysis, and lifestyle benchmarking. The expert must comply with family court procedure, attend FDR where required, and produce reports suitable for Form E and final hearing — often coordinating with digital forensics where assets are concealed online.",
      },
    ],
    relatedDiscipline: "forensic-accounting",
    relatedCaseType: "matrimonial-financial-disputes",
  },
  {
    id: "regulatory-investigation-support",
    name: "Regulatory & Investigation Support",
    description:
      "Forensic expert support for FCA, CMA, SFO, and HMRC regulatory investigations and proceedings. Our forensic accountants and economists analyse financial records, reconstruct transactions, assess market impact, and provide expert evidence on facts relevant to alleged regulatory breaches.",
    methodology: [
      {
        phase: "Regulatory Context Review",
        whatWeDo:
          "Review the regulatory investigation scope, notices, and allegations; identify the forensic disciplines required and agree the expert's role (adviser to firm or expert witness).",
        deliverable: "Scope of work and engagement terms",
      },
      {
        phase: "Financial Reconstruction",
        whatWeDo:
          "Reconstruct financial records, analyse trading activity, assess market manipulation patterns, and trace proceeds of alleged misconduct.",
        deliverable: "Financial reconstruction and analysis",
      },
      {
        phase: "Economic Impact Assessment",
        whatWeDo:
          "Where required, assess market impact, competitive effects, and economic harm using forensic economics methodology.",
        deliverable: "Economic impact analysis",
      },
      {
        phase: "Expert Report / Regulatory Response",
        whatWeDo:
          "Prepare expert reports for regulatory proceedings or support the firm's response to regulatory notices with forensic analysis.",
        deliverable: "Expert report or regulatory submission support",
      },
      {
        phase: "Enforcement & Litigation Support",
        whatWeDo:
          "Provide expert evidence in enforcement proceedings, criminal trials, and civil recovery actions arising from regulatory investigations.",
        deliverable: "Enforcement hearing and trial attendance",
      },
    ],
    faqs: [
      {
        question:
          "How do forensic experts support FCA regulatory proceedings?",
        answer:
          "Forensic accountants analyse trading records, client money flows, and firm accounts to establish facts relevant to alleged breaches — market manipulation, mis-selling, or capital adequacy failures. Forensic economists may assess market impact. Experts may advise the regulated firm confidentially or give formal evidence in enforcement references and subsequent civil proceedings.",
      },
      {
        question:
          "What forensic evidence is needed in SFO investigations?",
        answer:
          "SFO cases typically require forensic accounting to trace proceeds of fraud and reconstruct financial records, combined with digital forensics for large-scale e-discovery across multi-party datasets. Expert witnesses may subsequently give evidence in Crown Court trials or civil recovery under POCA, with reports tailored to criminal and civil standards of proof.",
      },
    ],
    relatedDiscipline: "forensic-economics",
    relatedCaseType: "regulatory-investigations",
  },
  {
    id: "expert-determination-adr",
    name: "Expert Determination & ADR",
    description:
      "Independent expert determination and alternative dispute resolution for technical and valuation disputes where parties require a binding or non-binding determination without full litigation. Our multi-discipline experts act as determiners for final account disputes, valuation disagreements, and technical measurements under contractually agreed expert determination clauses.",
    methodology: [
      {
        phase: "Appointment & Procedure",
        whatWeDo:
          "Review the expert determination clause, agree procedure with the parties, and establish the scope of the determination and timetable.",
        deliverable: "Procedural directions and timetable",
      },
      {
        phase: "Document Review & Submissions",
        whatWeDo:
          "Review party submissions, supporting documents, and expert reports; identify the specific issues requiring determination.",
        deliverable: "Issues list and document index",
      },
      {
        phase: "Independent Analysis",
        whatWeDo:
          "Conduct independent analysis within the expert's discipline — quantum valuation, technical assessment, or financial calculation — applying professional standards.",
        deliverable: "Determination working papers",
      },
      {
        phase: "Determination",
        whatWeDo:
          "Issue the expert determination with full reasons, setting out the methodology applied, findings, and the determined outcome.",
        deliverable: "Expert determination award",
      },
      {
        phase: "Enforcement Support",
        whatWeDo:
          "If required, provide supplementary analysis or attend enforcement proceedings to defend the determination methodology.",
        deliverable: "Supplementary report or enforcement support",
      },
    ],
    faqs: [
      {
        question:
          "What is expert determination and when is it used in construction contracts?",
        answer:
          "Expert determination is a contractual dispute resolution mechanism where an independent expert decides defined technical or valuation issues — commonly final account disputes under JCT and NEC. The determination may be binding or non-binding depending on the clause. Multi-discipline experts (QS, engineer, accountant) are appointed as determiners rather than party-appointed witnesses.",
      },
      {
        question:
          "How does expert determination differ from arbitration?",
        answer:
          "Expert determination is typically narrower in scope, faster, and governed by the contract clause rather than the Arbitration Act 1996. There is limited right of challenge except on manifest error or procedural unfairness. Our experts act as determiners under agreed procedures and can provide supplementary analysis if enforcement proceedings follow.",
      },
    ],
    relatedDiscipline: "forensic-engineering-quantum",
    relatedCaseType: "international-arbitration",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getAllServices(): Service[] {
  return services;
}

export function getServiceNames(): string[] {
  return services.map((s) => s.name);
}
