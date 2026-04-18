export const SSDI_CONTINUING_DISABILITY_REVIEW_NY = {
  id: "ssdi-continuing-disability-review-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "Social Security Continuing Disability Review (CDR) — Keeping Disability Benefits Through Periodic Check-Ins" },

  summary: {
    en: "Social Security periodically reviews SSDI and SSI recipients to confirm the medical disability still exists. If the review finds medical improvement related to the ability to work, benefits can be stopped. The recipient has strong rights during the review — including requesting continuing benefits during appeal. Most CDRs result in benefits continuing."
  },

  whoQualifies: {
    en: [
      "Any current SSDI or SSI recipient who received a notice of Continuing Disability Review.",
      "Any beneficiary whose benefits were stopped or reduced after a CDR.",
      "Any representative payee managing benefits for a person facing CDR.",
      "Any beneficiary who returned to work or improved medically and wants to know how it affects ongoing benefits."
    ]
  },

  whatItMeans: {
    en: "The Social Security Administration conducts Continuing Disability Reviews under 42 USC Section 421 and 20 CFR Parts 404.1589 and 416.989. The CDR evaluates whether the beneficiary's medical condition has improved to the point that they can engage in substantial gainful activity. Review frequency varies by the recipient's medical improvement expected (MIE) rating at the original determination. Typical schedules: MIE expected — review every 6 to 18 months; MIE possible — every three years; MIE not expected — every five to seven years. The CDR is initiated by a mailing called Form SSA-455 (short form) for straightforward cases or a full medical update for more complex cases. The short form asks for updates on medical providers, treatments, work activity, and condition changes. SSA may obtain medical records from named providers and, in some cases, schedule a consultative examination. The standard for stopping benefits on a medical CDR is the medical improvement standard: there must be actual improvement related to the ability to work. Merely feeling better is not enough — the change must be connected to work capacity. If SSA proposes to stop benefits, the beneficiary has the right to a reconsideration, a hearing before an Administrative Law Judge, Appeals Council review, and federal court review. Critically, the beneficiary has the right to elect continuing benefits during the appeal by filing the appeal within 10 days of the cessation notice (generally, the first 60 days allow appeal but only the first 10 preserve continuing benefits). Continuing benefits are not an overpayment if the beneficiary wins; if the beneficiary loses, SSA can seek recovery. Work CDRs (for SSDI only) review whether the beneficiary returned to substantial work. The Trial Work Period and Extended Period of Eligibility provide work incentives — see the ssdi-ny and ticket-to-work entries."
  },

  yourRights: {
    en: [
      "A CDR must apply the medical improvement standard — improvement must relate to the ability to work.",
      "The beneficiary has the right to submit current medical evidence from treating providers.",
      "The beneficiary has the right to file for reconsideration within 60 days of a cessation notice.",
      "Filing a reconsideration within 10 days preserves continuing benefits during the appeal.",
      "The beneficiary has the right to representation by an attorney or a non-attorney representative.",
      "Attorney fees are capped by federal law — typically 25 percent of past-due benefits, max $7,200 (current as of 2025)."
    ]
  },

  legalOptions: {
    en: [
      "On receiving a CDR notice, respond by the deadline with detailed current medical information — list treating providers, recent hospitalizations, current medications, and ongoing symptoms.",
      "If benefits are stopped after the CDR, file the reconsideration request within 10 days to preserve continuing benefits.",
      "Legal Aid Society of Rochester at (585) 232-4090 handles SSDI/SSI cessation appeals for low-income beneficiaries.",
      "Empire Justice Center at (585) 454-4060 handles Social Security matters.",
      "Starbridge at (585) 546-1700 — Work Incentives Planning and Assistance for SSDI/SSI beneficiaries considering work.",
      "Many Social Security representatives work on contingency — no up-front fee, the 25 percent cap applies to past-due benefits only.",
      "SSA local office in Rochester: (866) 964-1893."
    ]
  },

  example: {
    en: "After four years on SSDI for a spinal injury, a Rochester beneficiary received Form SSA-455 as part of a Continuing Disability Review. She listed her current providers, her ongoing treatments, and her pain management. SSA obtained records and made no change — her MIE rating was reset and the next review was scheduled for five years out. Had SSA proposed cessation, she would have filed reconsideration within 10 days to keep benefits during appeal, and gathered updated opinions from her treating physician for the reconsideration file."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "SSDI/SSI CDR appeals, cessation defense, work incentives",
      qualifier: "Low-income Monroe County residents",
      access: "Phone intake at (585) 232-4090",
      outcome: "Representation in CDR appeals and hearings",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Social Security Administration — Rochester",
      focus: "Disability benefits, CDR process, reconsiderations",
      qualifier: "Any SSA beneficiary",
      access: "Phone at (866) 964-1893",
      outcome: "Case status, file reviews, reconsideration filing",
      phone: "(866) 964-1893",
      url: "https://www.ssa.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "ssdi-denial-appeal-ny",
    "ssi-redetermination-ny",
    "medicaid-buy-in-working-disabled-ny",
    "fair-hearing-ny",
    "medicaid-home-care-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "CDR",
    "Continuing Disability Review",
    "SSDI review",
    "medical improvement standard",
    "continuing benefits appeal",
    "SSA-455",
    "Form SSA-454",
    "cessation of benefits",
    "disability review deadline",
    "10 day SSDI appeal"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/421",
    "https://www.law.cornell.edu/cfr/text/20/404.1589",
    "https://www.law.cornell.edu/cfr/text/20/416.989"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
