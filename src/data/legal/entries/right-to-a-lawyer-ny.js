export const RIGHT_TO_A_LAWYER_NY = {
  id: "right-to-a-lawyer-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CNT 722",
  status: "active",

  title: { en: "NY Right to a Free Lawyer — Public Defender, 18-B Assigned Counsel, and Family Court Representation" },

  summary: {
    en: "Under the Sixth Amendment and NY County Law Article 18-B (section 722 of the County Law), a person charged with a crime or facing certain Family Court proceedings who cannot afford private counsel has the right to a court-assigned attorney at no cost. In Monroe County, the Public Defender handles most cases, and the 18-B Assigned Counsel Program covers conflict cases and overflow. The right attaches at the first court appearance (arraignment) and continues through trial, sentencing, and the first appeal of right."
  },

  whoQualifies: {
    en: [
      "A NY criminal defendant facing a charge where any jail or prison time is a possible sentence, from misdemeanor through felony.",
      "A NY defendant who cannot afford a private attorney — eligibility is determined by a financial questionnaire at arraignment.",
      "A NY parent or guardian in a Family Court Article 10 child-neglect or child-abuse proceeding.",
      "A NY respondent in a family offense petition seeking an order of protection when the court finds representation necessary.",
      "A NY juvenile in a Family Court juvenile delinquency or PINS proceeding.",
      "A NY defendant on appeal from a criminal conviction who cannot afford private appellate counsel."
    ]
  },

  whatItMeans: {
    en: "The right to counsel for criminal defendants comes from the Sixth Amendment to the U.S. Constitution and has been extended to state criminal cases through Gideon v. Wainwright. NY implements the right through County Law Article 18-B, with the key provisions at NY County Law § 722. Each NY county must provide indigent criminal defense through one or more of the structures listed in County Law § 722 — a public defender office, a legal-aid organization under contract, an assigned-counsel panel, or a combination. Monroe County uses a combination: the Monroe County Public Defender's Office handles most felony and misdemeanor cases, and the 18-B Assigned Counsel Program (a panel of private attorneys) covers conflict cases (where the Public Defender already represents a co-defendant) and certain overflow categories. At the first court appearance — usually arraignment — the court asks whether the defendant has a lawyer or needs one assigned. A defendant who states inability to afford counsel completes a short financial questionnaire (Form CJA-23 or the local equivalent) identifying income, assets, and dependents. The judge determines eligibility based on financial guidelines set by the NY Office of Indigent Legal Services and the local public-defender office. Once assigned, the lawyer represents the defendant at no cost for the duration of the case. Assigned counsel has the same ethical duties as a private retained attorney under the NY Rules of Professional Conduct — confidentiality, competent representation, loyalty, communication, and diligence. Anything the defendant tells the assigned lawyer is protected by attorney-client privilege. The lawyer's fees are paid by Monroe County, funded in part by state and federal aid. The defendant does not owe the lawyer anything at the end of the case, though certain cost-reimbursement obligations may apply at sentencing depending on the disposition. The right attaches at critical stages: arraignment, preliminary and felony hearings, grand jury appearances (if the defendant chooses to testify), pretrial motions, plea negotiations, trial, sentencing, and the first appeal of right. After a conviction, the Appellate Division assigns new counsel from its 18-B appellate panel at no cost to the defendant. A defendant dissatisfied with assigned counsel can request a substitution. The court evaluates the request based on whether the problems show a genuine breakdown in communication or ineffective representation, not simply disagreement over strategy. Substitution is discretionary. The NY Office of Indigent Legal Services (ILS) oversees the statewide system and provides training, caseload standards, and funding to county providers. Beyond the Sixth Amendment right, certain Family Court proceedings also carry a right to assigned counsel. NY Family Court Act §§ 261-262 give parents and guardians the right to assigned counsel in Article 10 child-neglect or child-abuse cases, in family-offense proceedings where an order of protection is sought, in permanent neglect/termination-of-parental-rights cases, and in certain other matters. The Monroe County Family Court provides assigned counsel through the same 18-B panel structure."
  },

  yourRights: {
    en: [
      "A NY criminal defendant has the Sixth Amendment right (incorporated under Gideon v. Wainwright) to counsel at every critical stage of the case.",
      "A NY defendant unable to afford a private attorney has the right under County Law § 722 to court-assigned counsel at no cost.",
      "A NY defendant has the right to confidential, privileged communications with assigned counsel under attorney-client privilege.",
      "A NY defendant has the right to consult with counsel before answering police questions — the right to counsel during custodial interrogation is established under Miranda and NY People v. Rogers.",
      "A NY defendant has the right to a conflict-free attorney — if the Public Defender has a conflict, the 18-B panel or Conflict Defender takes over.",
      "A NY defendant has the right to request a different assigned attorney if a genuine breakdown in representation occurs, subject to court review.",
      "A NY defendant convicted at trial or by plea has the right to assigned appellate counsel for a first appeal of right, through the Appellate Division's 18-B panel.",
      "A NY parent in a Family Court Article 10 neglect/abuse or TPR case has the right under FCT §§ 261-262 to assigned counsel."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Public Defender at (585) 753-4210 — 10 North Fitzhugh Street, Rochester — represents most indigent criminal defendants from arraignment through disposition.",
      "Monroe County Assigned Counsel Program (18-B panel) — court-coordinated assignment for conflict cases and certain overflow categories.",
      "Monroe County Conflict Defender — handles cases where the Public Defender has a conflict.",
      "Appellate Division Fourth Department 18-B panel — assigned appellate counsel after conviction.",
      "NY Office of Indigent Legal Services at ils.ny.gov — statewide oversight, policies, and caseload standards.",
      "Legal Aid Society of Rochester at (585) 232-4090 — limited criminal-defense role but handles many collateral-consequences matters for low-income defendants.",
      "Monroe County Family Court at 99 Exchange Boulevard, Rochester — Family Court assigned counsel for Article 10 and related matters.",
      "NY Court Help at nycourts.gov — plain-language guides to assigned-counsel eligibility and procedures."
    ]
  },

  example: {
    en: "Kevin was arrested in Rochester on a felony charge and brought before the Rochester City Court for arraignment. The judge asked whether Kevin had a lawyer. Kevin said he could not afford one. The judge had Kevin complete a short financial questionnaire and, based on his income and assets, found him eligible for assigned counsel. Under County Law § 722, the Monroe County Public Defender was assigned. A public defender appeared with Kevin at arraignment, argued for release on recognizance, and continued the representation through preliminary hearing and grand-jury presentation. Kevin met with the attorney the following week at the Public Defender's office at 10 North Fitzhugh Street to review discovery and build a defense. The representation cost Kevin nothing."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Public Defender",
      focus: "Criminal defense at all stages for indigent defendants",
      qualifier: "Monroe County criminal defendant unable to afford private counsel",
      access: "Assigned at arraignment or by application",
      outcome: "Full free representation from arraignment through trial or plea",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/publicdefender",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Appellate Division Fourth Department — 18-B Assigned Counsel",
      focus: "Assigned appellate counsel for Monroe County criminal appeals",
      qualifier: "Monroe County criminal defendant pursuing a first appeal of right",
      access: "Application through the court after sentencing",
      outcome: "Free appellate representation",
      phone: "(585) 530-3100",
      url: "https://ad4.nycourts.gov",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Collateral-consequences representation, record sealing, reentry support",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free collateral-issue representation during or after the criminal case",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "criminal-case-process-ny",
    "rights-when-arrested-ny",
    "criminal-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY right to counsel",
    "Sixth Amendment Gideon",
    "County Law 722",
    "Article 18-B",
    "Monroe County Public Defender",
    "18-B Assigned Counsel Program",
    "conflict defender",
    "Family Court FCT 261",
    "assigned appellate counsel",
    "indigent defense"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CNT/722",
    "https://www.ils.ny.gov/"
  ],

  lastVerified: "2026-04-21",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
