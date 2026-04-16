export const UNEMPLOYMENT_OVERPAYMENT_NY = {
  id: "unemployment-overpayment-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Unemployment Overpayment — What to Do If the DOL Says You Were Overpaid" },

  summary: {
    en: "If the NY Department of Labor determines that a person received unemployment benefits they were not entitled to — because of a mistake, a misunderstanding, or unreported earnings — they will demand the money back. This is called an overpayment. The DOL can offset future benefits, intercept tax refunds, and send the debt to collections. But the claimant has the right to appeal the overpayment determination and, in some cases, request a waiver if repayment would cause financial hardship."
  },

  whoQualifies: {
    en: [
      "Any person who received a notice of overpayment from the NY Department of Labor.",
      "Any person whose unemployment benefits were retroactively denied or reduced.",
      "Any person who made an honest mistake on a weekly certification (forgot to report a day of work, misunderstood a question).",
      "Overpayments can result from DOL errors, employer protests, or claimant mistakes."
    ]
  },

  whatItMeans: {
    en: "Under Labor Law § 597, when the DOL determines that benefits were overpaid, the claimant must repay the overpayment. The DOL can recover the money by: offsetting future unemployment benefits (deducting from future payments), intercepting state and federal tax refunds, and referring the debt to a collection agency. If the overpayment was due to fraud (the claimant intentionally misrepresented their situation), the penalty is more severe — the claimant must repay the overpayment plus a penalty of 15% of the overpaid amount, and may face criminal charges. If the overpayment was due to an honest mistake or a DOL error (non-fraud), the claimant can request a waiver of repayment. The DOL considers whether the overpayment was not the claimant's fault and whether repayment would cause financial hardship. The claimant has the right to appeal the overpayment determination within 30 days of the notice. The appeal goes to an Administrative Law Judge (ALJ) who reviews the facts. Common grounds for appeal: the DOL miscalculated the overpayment, the claimant was eligible for the benefits, the claimant reported earnings correctly, or the overpayment was the DOL's error."
  },

  yourRights: {
    en: [
      "The right to appeal an overpayment determination within 30 days.",
      "The right to request a waiver of repayment if the overpayment was not the claimant's fault and repayment would cause hardship.",
      "The right to a hearing before an Administrative Law Judge on the appeal.",
      "If the overpayment was a DOL error, the claimant should not be penalized.",
      "The right to set up a repayment plan if the full amount cannot be paid at once.",
      "Fraud penalties (15% surcharge + possible criminal charges) apply only if the claimant intentionally misrepresented — honest mistakes are treated differently."
    ]
  },

  legalOptions: {
    en: [
      "The appeal must be filed within 30 days of the overpayment notice — do not miss this deadline. The appeal can be filed online at labor.ny.gov or by calling (888) 581-5812.",
      "At the hearing, the claimant should bring: the overpayment notice, any documentation showing the earnings or circumstances, and evidence that the mistake was honest (if applicable).",
      "A waiver request (for non-fraud overpayments) is filed separately — the claimant explains why repayment would cause financial hardship.",
      "Free legal help with unemployment overpayment appeals is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If the overpayment is referred to collections and the claimant believes it is wrong, they can still dispute it — but the appeal deadline is critical."
    ]
  },

  example: {
    en: "A woman in Rochester receives unemployment benefits for 12 weeks. She starts a part-time job in week 8 but forgets to report the first week of earnings on her certification. The DOL discovers the unreported earnings and issues an overpayment notice for 5 weeks of benefits — more than the actual unreported amount. She appeals within 30 days, shows that only 1 week was unreported (an honest mistake), and the ALJ reduces the overpayment to the correct amount. She also requests a waiver because she is a single parent with limited income."
  },

  counsel: [
    {
      type: "free",
      name: "NY Department of Labor — Unemployment Appeals",
      focus: "Overpayment appeals, unemployment determinations",
      qualifier: "Any unemployment claimant in New York",
      access: "Phone or online",
      outcome: "ALJ hearing, overpayment review",
      phone: "(888) 581-5812",
      url: "https://dol.ny.gov/unemployment-insurance-hearings",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "unemployment-insurance-ny",
    "unemployment-appeal-ny",
    "benefit-overpayment-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "unemployment overpayment",
    "overpaid benefits",
    "DOL repayment",
    "unemployment appeal",
    "waiver overpayment",
    "Labor Law 597",
    "ALJ hearing",
    "tax refund offset",
    "honest mistake UI",
    "fraud penalty UI",
    "repayment plan",
    "30 day appeal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/LAB/597",
    "https://dol.ny.gov/unemployment-insurance-hearings"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
