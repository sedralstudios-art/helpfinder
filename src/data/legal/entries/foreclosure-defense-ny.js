export const FORECLOSURE_DEFENSE_NY = {
  id: "foreclosure-defense-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPA 1304",
  status: "active",

  title: { en: "Foreclosure Defense in New York — Homeowner Rights Under RPAPL 1304" },

  summary: {
    en: "When a homeowner falls behind on mortgage payments, the lender may start foreclosure to take the home. New York has strong homeowner protections: a mandatory 90-day pre-foreclosure notice, a judicial process in state court, and court-supervised settlement conferences where loan modification is negotiated. The process is among the slowest in the country, often 1 to 3 years, which gives time to negotiate, modify the loan, apply for relief, or move on other terms. Free legal help is available through HUD-approved counselors and legal-aid programs."
  },

  whoQualifies: {
    en: [
      "A homeowner in New York who has received a foreclosure notice or is behind on mortgage payments.",
      "A homeowner who has received a 90-day pre-foreclosure notice required before the lender can file.",
      "A homeowner who has been served with a foreclosure summons and complaint.",
      "A homeowner whose mortgage is held by a federal lender (Fannie Mae, Freddie Mac, FHA, VA) — those loans have additional federal loss-mitigation protections on top of state law."
    ]
  },

  whatItMeans: {
    en: "Foreclosure in New York is a judicial process. The lender has to sue in state Supreme Court to take the property. A judge has to sign the order. That is different from the 'power of sale' nonjudicial process used in many other states.\n\nThe 90-day pre-foreclosure notice (RPAPL 1304). Before filing a foreclosure action, the lender has to send a written notice at least 90 days before filing. The notice has to list at least five HUD-approved housing counseling agencies. If the lender skips this notice or the notice leaves out the counseling list, a defense attorney can move to dismiss the foreclosure on that ground alone.\n\nSettlement conferences (CPLR 3408). Once the lender files and the homeowner answers, the court has to schedule a mandatory settlement conference. The homeowner and the lender meet in front of a court attorney referee. The goal is to find an alternative to foreclosure. The lender has a statutory duty to negotiate in good faith — failing to do so can lead to sanctions.\n\nCommon alternatives explored at the conference:\n- Loan modification (permanent change to interest rate, term, or principal to lower the payment).\n- Forbearance (temporary reduction or pause in payments with a later catch-up plan).\n- Repayment plan (spread missed payments over several months on top of the regular payment).\n- Short sale (sell the home for less than the balance, with the lender waiving the shortfall).\n- Deed-in-lieu (give the property to the lender to avoid the full foreclosure process).\n- Reinstatement (pay the full arrears at once).\n\nAnswering the complaint matters. A foreclosure summons and complaint is served with a short deadline — 20 or 30 days depending on how served. Missing the deadline leads to a default judgment and cuts off most defenses. Typical defenses include improper 1304 notice, standing (the plaintiff cannot prove it owned the note on the filing date), statute of limitations, predatory lending, and servicing errors (misapplied payments, incorrect escrow, force-placed insurance).\n\nStatute of limitations (CPLR 213(4)). A foreclosure action has to be filed within six years of the default acceleration. The 2022 Foreclosure Abuse Prevention Act (FAPA) tightened limits on how a lender can restart the clock by 'de-accelerating' and re-filing. FAPA is a strong defense when the same loan has been filed and voluntarily dismissed more than once.\n\nStaying in the home during the case. The homeowner remains in the home throughout the court case. Even after a judgment, a court-appointed referee has to compute the amount and schedule a public sale. The homeowner has a redemption window right up to the sale.\n\nFinancial help programs. The NY Homeowner Protection Program (HOPP) funds free legal services and housing counseling for homeowners facing foreclosure. The Homeowner Assistance Fund (HAF), administered by NYS HCR, provides direct financial assistance to qualifying homeowners to bring the mortgage current.\n\nTax and insurance arrears. A foreclosure often starts because of unpaid property taxes or escrow shortfalls rather than missed principal-and-interest payments alone. A HUD-approved counselor can help sort out what is actually owed and whether a separate property-tax payment plan through the county is possible."
  },

  yourRights: {
    en: [
      "A homeowner has the right to receive a 90-day pre-foreclosure notice before the lender files suit (RPAPL 1304).",
      "The pre-foreclosure notice has to list at least five HUD-approved housing counseling agencies.",
      "A homeowner has the right to a court-supervised settlement conference after the lender files (CPLR 3408).",
      "The lender has a statutory duty to negotiate in good faith at the settlement conference.",
      "A homeowner has the right to answer the complaint and raise defenses, including improper notice, standing, statute of limitations, and predatory lending.",
      "A homeowner has the right to a lawyer; free foreclosure defense is available through legal-aid programs funded by the NY Homeowner Protection Program (HOPP).",
      "A homeowner has the right to stay in the home throughout the court case until a public sale is completed and confirmed."
    ]
  },

  legalOptions: {
    en: [
      "After a 90-day pre-foreclosure notice, free housing counseling is available through HUD-approved agencies. In Monroe County: PathStone at (585) 340-3400 and the Urban League of Rochester at (585) 325-6530.",
      "After a foreclosure summons and complaint is served, answering within 20 to 30 days preserves defenses. Free foreclosure defense is available through Legal Aid Society of Rochester at (585) 232-4090 and LawNY at (585) 295-5700.",
      "At the settlement conference, loan modification, forbearance, repayment plans, short sale, deed-in-lieu, and reinstatement are all paths that may be explored.",
      "If the lender skipped the 90-day notice or the notice did not include the counseling agency list, the foreclosure may be dismissed under RPAPL 1304.",
      "The NY Homeowner Protection Program (HOPP) funds free legal services; the Homeowner Assistance Fund (HAF) provides direct financial help to qualifying homeowners. Both are listed at the NYS Attorney General's homeownership page and the NYS HCR site."
    ]
  },

  example: {
    en: "After losing a job, a homeowner in Greece falls three months behind on the mortgage. The lender sends a 90-day pre-foreclosure notice. The homeowner calls PathStone, a HUD-approved counselor, and begins working on a loan modification application. When the lender files suit anyway, the homeowner contacts Legal Aid. A foreclosure defense attorney answers the complaint, attends the settlement conference, and negotiates a loan modification that reduces the monthly payment to a sustainable level. The foreclosure case is discontinued."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Foreclosure defense, settlement conferences, loan modification",
      qualifier: "Low-income homeowners in Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation at settlement conferences and in court",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "PathStone (HUD-Approved Housing Counseling)",
      focus: "Foreclosure prevention, loan modification, budgeting",
      qualifier: "Any homeowner facing foreclosure",
      access: "Phone or in person",
      outcome: "Counseling, lender negotiation, modification assistance",
      phone: "(585) 340-3400",
      url: "https://www.pathstone.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "eviction-process-ny",
    "utility-shutoff-protections-ny",
    "respond-to-lawsuit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "foreclosure",
    "mortgage behind",
    "losing home",
    "foreclosure defense",
    "settlement conference",
    "loan modification",
    "90 day notice",
    "RPAPL 1304",
    "housing counseling",
    "HUD approved",
    "short sale",
    "forbearance"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPA/1304",
    "https://ag.ny.gov/homeownership/homeowner-protection-program",
    "https://hcr.ny.gov/haf"
  ],

  lastVerified: "2026-04-22",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
