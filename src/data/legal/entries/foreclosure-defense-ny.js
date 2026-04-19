export const FORECLOSURE_DEFENSE_NY = {
  id: "foreclosure-defense-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPA 1304",
  status: "active",

  title: { en: "Foreclosure Defense — Homeowner Rights After Falling Behind on a Mortgage in New York" },

  summary: {
    en: "If you fall behind on mortgage payments, the lender may start foreclosure proceedings to take your home. New York has strong protections for homeowners, including mandatory settlement conferences, a 90-day pre-foreclosure notice, and the right to cure. The process is slow — often 1 to 3 years — which gives time to negotiate, modify the loan, or find other options. Free legal help is available."
  },

  whoQualifies: {
    en: [
      "Any homeowner in New York who has received a foreclosure notice or is behind on mortgage payments.",
      "Homeowners who have received a 90-day pre-foreclosure notice (required before the lender can file).",
      "Homeowners who have been served with a foreclosure summons and complaint."
    ]
  },

  whatItMeans: {
    en: "Foreclosure in New York is a judicial process — the lender must sue in court to take the property. It cannot happen without a judge's order. Before filing, the lender must send a 90-day pre-foreclosure notice (RPAPL § 1304) that lists at least five HUD-approved housing counseling agencies. After filing, the court schedules mandatory settlement conferences where the homeowner and lender negotiate in front of a court attorney. The goal is to find an alternative to foreclosure: loan modification (changing the terms to lower payments), forbearance (temporary pause), repayment plan, short sale, or deed in lieu of foreclosure. During the process, the homeowner stays in the home. New York foreclosures are among the slowest in the country. Even after a judgment, the homeowner has a redemption period and the property must go through a referee sale. Answering the foreclosure complaint is critical — a default judgment speeds up the process and eliminates most defenses."
  },

  yourRights: {
    en: [
      "The lender must send a 90-day pre-foreclosure notice before filing suit (RPAPL § 1304).",
      "The notice must include a list of at least five HUD-approved housing counseling agencies.",
      "After the lender files, the court must schedule mandatory settlement conferences.",
      "During settlement conferences, the lender must negotiate in good faith.",
      "The homeowner has the right to answer the complaint and raise defenses (improper notice, standing issues, predatory lending).",
      "The homeowner has the right to a lawyer. Free foreclosure defense is available through legal aid.",
      "The homeowner remains in the home throughout the court process until a sale is completed."
    ]
  },

  legalOptions: {
    en: [
      "If a 90-day pre-foreclosure notice has been received, free housing counseling is available through HUD-approved agencies. In Monroe County, PathStone at (585) 340-3400 and the Urban League of Rochester at (585) 325-6530 provide foreclosure prevention counseling.",
      "If a foreclosure summons and complaint has been received, answering within 20-30 days is critical to preserving defenses. Free foreclosure defense is available through Legal Aid Society of Rochester at (585) 232-4090 and LawNY at (585) 295-5700.",
      "At the mandatory settlement conference, loan modification, forbearance, repayment plans, short sale, and deed in lieu of foreclosure are all options that can be explored.",
      "Under RPAPL § 1304, if the lender did not send the required 90-day notice or did not include the counseling agency list, the foreclosure may be dismissed.",
      "The NY Homeowner Protection Program (HOPP) funds free legal services for homeowners facing foreclosure. A list of providers is available at the state attorney general's website."
    ]
  },

  example: {
    en: "After losing a job, a homeowner in Greece falls three months behind on the mortgage. The lender sends a 90-day pre-foreclosure notice. The homeowner calls PathStone, a HUD-approved counselor, and begins working on a loan modification application. When the lender files suit anyway, the homeowner contacts Legal Aid. A lawyer answers the complaint, attends the settlement conference, and negotiates a loan modification that reduces the monthly payment. The foreclosure case is discontinued."
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
    "https://ag.ny.gov/homeownership/homeowner-protection-program"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
