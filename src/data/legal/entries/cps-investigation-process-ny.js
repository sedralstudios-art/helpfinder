export const CPS_INVESTIGATION_PROCESS_NY = {
  id: "cps-investigation-process-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",
  draft: true,

  title: { en: "CPS Investigation — What to Expect and What Rights a Parent Has" },

  summary: {
    en: "If Child Protective Services (CPS) receives a report about a child, they must investigate. This does not mean the parent did anything wrong — most investigations are closed without a finding of abuse or neglect. A parent has rights during the investigation, including the right to know the allegations and the right to a lawyer if the case goes to family court."
  },

  whoQualifies: {
    en: [
      "Any parent or guardian who has been contacted by CPS about a report.",
      "Any parent or guardian who expects a CPS visit.",
      "Any parent or guardian who received a finding of neglect or abuse and wants to challenge it.",
      "Any mandated reporter who wants to understand what happens after a report is filed."
    ]
  },

  whatItMeans: {
    en: "When CPS (part of Monroe County Department of Human Services) receives a report of suspected child abuse or neglect, the caseworker must begin an investigation within 24 hours for reports alleging abuse, and within 24 hours for most neglect reports. The caseworker will visit the home, talk to the child (often at school first), talk to the parent or guardian, and may talk to other family members, teachers, or doctors. The parent does not have to let CPS into the home without a court order, but refusing entry can lead CPS to seek a court order and may make the investigation take longer. The caseworker is looking at whether the child is safe — not whether the house is perfectly clean. They check for basic safety: working utilities, food in the house, the child's physical condition, and whether there are obvious dangers. After the investigation, CPS makes a finding. The finding is either indicated (there is some credible evidence of abuse or neglect) or unfounded (there is not enough evidence). An indicated finding goes on the NYS Statewide Central Register (SCR) and can affect employment in childcare, healthcare, and education. A parent can request a fair hearing to challenge an indicated finding within 90 days. If CPS believes the child is in immediate danger, they can seek an emergency removal order from family court — but this requires a judge's approval. CPS cannot remove a child without a court order except in the most extreme emergencies."
  },

  yourRights: {
    en: [
      "A parent has the right to know the general nature of the allegations. CPS does not have to reveal who made the report.",
      "A parent has the right to refuse to let CPS enter the home without a court order. However, CPS may seek a court order if refused.",
      "A parent has the right to have a lawyer present during any interview with CPS. If the case goes to family court, the parent has the right to a free attorney if they cannot afford one.",
      "A parent has the right to challenge an indicated finding by requesting a fair hearing through the NYS OCFS within 90 days.",
      "CPS cannot remove a child from the home without a court order unless there is an immediate risk of serious harm.",
      "A parent has the right to visit and communicate with a child who has been placed in foster care, unless a court orders otherwise.",
      "If a CPS report was made maliciously and the person who made it knew the report was false, the parent may have a claim under Social Services Law Section 422."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County CPS can be reached at (585) 753-6532 for questions about an investigation.",
      "The NYS Statewide Central Register (SCR) hotline for reports is (800) 342-3720. To check a finding or request records, call (518) 474-6904.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents parents in family court abuse and neglect proceedings.",
      "LawNY at (585) 325-2520 handles family court cases for low-income families.",
      "A parent who wants to challenge an indicated finding should request a fair hearing in writing within 90 days — OCFS Fair Hearing Section at (518) 474-9700.",
      "If a parent believes the CPS report was made in bad faith, a consultation with an attorney about filing a false report complaint is an option — Monroe County Bar Association referral at (585) 546-2130."
    ]
  },

  example: {
    en: "A teacher at a school in Rochester noticed bruises on a 7-year-old's arm and filed a mandated report with CPS. A caseworker visited the family the next day. The mother explained that her son fell off his bike over the weekend and showed photos of the bike helmet and scrapes. The caseworker interviewed the child at school, spoke to the pediatrician, and visited the home. The home was safe, the child was well-cared-for, and the doctor confirmed the injuries were consistent with a bike fall. CPS closed the case as unfounded within two weeks."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Department of Human Services — Child Protective Services",
      focus: "Child abuse and neglect investigations, family safety",
      qualifier: "Monroe County families",
      access: "Phone at (585) 753-6532",
      outcome: "Investigation, safety planning, referrals to services",
      phone: "(585) 753-6532",
      url: "https://www.monroecounty.gov/hs-children",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Family court representation, CPS defense, custody, neglect proceedings",
      qualifier: "Low income parents in Monroe County",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal representation in family court",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "reporting-child-abuse-ny",
    "false-cps-report-ny",
    "home-alone-age-kids-ny",
    "family-court-what-to-expect-ny",
    "foster-parent-rights-ny",
    "custody-basics-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "CPS investigation",
    "child protective services",
    "CPS visit",
    "CPS caseworker",
    "child abuse investigation",
    "child neglect investigation",
    "CPS report",
    "CPS rights parent",
    "indicated finding",
    "unfounded CPS",
    "fair hearing CPS",
    "CPS remove child"
  ],

  sources: [
    "https://ocfs.ny.gov/programs/cps/",
    "https://www.nysenate.gov/legislation/laws/SOS/422",
    "https://www.nysenate.gov/legislation/laws/FCT/A10"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
