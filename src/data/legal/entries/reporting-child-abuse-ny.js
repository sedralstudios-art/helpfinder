export const REPORTING_CHILD_ABUSE_NY = {
  id: "reporting-child-abuse-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",
  draft: true,

  title: { en: "Reporting Child Abuse or Neglect in New York" },

  summary: {
    en: "If a child is being abused or neglected, anyone can report it to the New York Statewide Central Register (SCR) at any time. Certain professionals — teachers, doctors, social workers, police — are legally required to report (mandated reporters). Reports can also be made anonymously by anyone. The report triggers an investigation by Child Protective Services."
  },

  whoQualifies: {
    en: [
      "Anyone who suspects a child is being abused or neglected can make a report. There is no requirement to be certain — a reasonable suspicion is enough.",
      "Mandated reporters (teachers, school staff, doctors, nurses, social workers, police, day care workers, and others listed in Social Services Law § 413) are legally required to report. Failure to report is a misdemeanor.",
      "Reports can be made about any child under 18 in New York."
    ]
  },

  whatItMeans: {
    en: "When a report is made to the SCR hotline, it is transmitted to the local Child Protective Services (CPS) office — in Monroe County, that is the Monroe County Department of Human Services. CPS must begin an investigation within 24 hours for reports alleging abuse and within 24 hours for neglect reports. The investigation includes visiting the home, interviewing the child, and assessing safety. If the child is in immediate danger, CPS can remove the child from the home under Family Court Act § 1024 (emergency removal) and must bring the case to Family Court within 24-72 hours. The investigation results in one of three findings: indicated (evidence supports the allegation), unsubstantiated (not enough evidence), or unfounded (no credible evidence). An indicated finding goes on the SCR registry. The parent has the right to request a fair hearing to challenge an indicated finding. Reporters acting in good faith are immune from civil and criminal liability under Social Services Law § 419."
  },

  yourRights: {
    en: [
      "Anyone making a report in good faith is protected from liability (SSL § 419).",
      "Reports can be made anonymously, though mandated reporters must identify themselves.",
      "The identity of a reporter is confidential and not disclosed to the family except under limited circumstances.",
      "A parent who is the subject of a report has the right to know the allegations and to a fair hearing if the report is indicated.",
      "A parent has the right to an attorney in any resulting Family Court proceeding (Article 10).",
      "The child's safety is the primary concern at every stage."
    ]
  },

  legalOptions: {
    en: [
      "The NYS Statewide Central Register (SCR) hotline is available 24/7 at 1-800-342-3720. This is the number for reporting suspected child abuse or neglect.",
      "Mandated reporters can also report through the online portal at ocfs.ny.gov/main/cps/.",
      "If a child is in immediate danger, calling 911 is appropriate and CPS can be contacted afterward.",
      "If a parent has been the subject of a report and it was indicated, a fair hearing can be requested to challenge the finding. Information is available through the NYS Office of Children and Family Services.",
      "Free legal help for parents facing an Article 10 proceeding is available — the court must assign an attorney under FCA § 262.",
      "For questions about mandated reporter obligations, the NYS OCFS provides training and guidance at ocfs.ny.gov."
    ]
  },

  example: {
    en: "A teacher in an RCSD school notices a student frequently coming to class with unexplained bruises and appearing fearful. As a mandated reporter, the teacher calls the SCR hotline at 1-800-342-3720 and provides the child's name, school, and observations. Monroe County CPS begins an investigation within 24 hours. A caseworker visits the home and interviews the child in a safe setting. Services are offered to the family, and the child's safety is monitored."
  },

  counsel: [
    {
      type: "free",
      name: "NYS Statewide Central Register (SCR) — Child Abuse Hotline",
      focus: "Receiving reports of suspected child abuse or neglect",
      qualifier: "Anyone — reports accepted 24/7",
      access: "Phone",
      outcome: "Report intake and transmission to local CPS",
      phone: "1-800-342-3720",
      url: "https://ocfs.ny.gov/main/cps/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Article 10 defense, parental rights, family court representation",
      qualifier: "Low-income parents facing CPS proceedings",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "custody-basics-ny",
    "order-of-protection-ny",
    "guardianship-article81-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "child abuse",
    "child neglect",
    "CPS",
    "report abuse",
    "mandated reporter",
    "SCR hotline",
    "child protective services",
    "Article 10",
    "suspected abuse",
    "child safety",
    "Monroe County CPS"
  ],

  sources: [
    "https://ocfs.ny.gov/main/cps/",
    "https://www.nysenate.gov/legislation/laws/SOS/413",
    "https://www.nysenate.gov/legislation/laws/SOS/419"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
