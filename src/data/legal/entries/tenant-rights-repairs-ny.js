export const TENANT_RIGHTS_REPAIRS_NY = {
  id: "tenant-rights-repairs-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPP 235-B",
  status: "active",

  title: { en: "Tenant Rights — Repairs, Habitability, and Withholding Rent" },

  summary: {
    en: "Every rental in New York comes with a warranty of habitability — a legal promise that the home is safe, clean, and fit to live in. When a landlord fails to make necessary repairs, tenants have rights including rent reduction, repair-and-deduct in some cases, and the ability to file a complaint with code enforcement. Landlords cannot retaliate against tenants who assert these rights."
  },

  whoQualifies: {
    en: [
      "Any residential tenant in New York, whether on a written lease, oral lease, or month-to-month tenancy.",
      "The warranty of habitability applies even if the lease says otherwise — it cannot be waived.",
      "Tenants in all types of housing: apartments, houses, rooms, and public or subsidized housing."
    ]
  },

  whatItMeans: {
    en: "Real Property Law § 235-b requires every landlord to maintain the rental in a condition fit for human habitation. This includes working heat and hot water, functional plumbing, no pest infestations, no mold, working smoke and carbon monoxide detectors, safe stairs and railings, and freedom from lead paint hazards. When a landlord is notified of a problem in writing and fails to fix it within a reasonable time, the tenant can: (1) file a complaint with local code enforcement, (2) bring a court proceeding (called an HP proceeding in NYC, or a housing court action elsewhere) to compel repairs, (3) raise the condition as a defense in a nonpayment case and seek a rent abatement, or (4) in limited circumstances, hire someone to make the repair and deduct the cost from rent ('repair and deduct'). The landlord cannot retaliate against a tenant who complains — Real Property Law § 223-b creates a rebuttable presumption of retaliation if the landlord takes adverse action within one year of a good-faith complaint."
  },

  yourRights: {
    en: [
      "You have the right to a home that is safe, clean, and fit to live in — this cannot be waived by your lease.",
      "You have the right to notify your landlord of needed repairs in writing and expect a timely response.",
      "You have the right to call local code enforcement to inspect your unit without the landlord's permission.",
      "You have the right to a rent reduction (abatement) proportional to the severity and duration of the problem.",
      "You have the right to raise habitability conditions as a defense if the landlord sues for nonpayment of rent.",
      "You have the right to be free from retaliation for making complaints about conditions.",
      "You have the right to file a court action to compel repairs."
    ]
  },

  legalOptions: {
    en: [
      "It is recommended to document everything: take photos, keep copies of written complaints to the landlord, and save any response or lack of response.",
      "A code enforcement complaint can be filed with the City of Rochester (for city residents) at 311 or the relevant town/village building department. An inspector will visit and can order the landlord to make repairs.",
      "Free legal advice on how to compel repairs or seek a rent abatement is available through Legal Aid Society of Rochester at (585) 232-4090 or LawNY at (585) 295-5700.",
      "If you are being sued for nonpayment, raise the habitability conditions as an affirmative defense in your answer. The court can reduce the rent owed based on the severity of the problem.",
      "Under Real Property Law § 223-b, if the landlord retaliates within one year of a complaint, the burden shifts to the landlord to prove they had a non-retaliatory reason."
    ]
  },

  example: {
    en: "David's apartment in Rochester has had no hot water for three weeks. He texted his landlord twice and got no response. David calls 311 and files a code enforcement complaint. An inspector visits, confirms the issue, and orders the landlord to fix it within 10 days. David also contacts Legal Aid, which helps him understand that if the landlord sues for rent, David can raise the no-hot-water condition as a defense and ask for a proportional rent reduction for the weeks he went without."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Tenant rights, habitability, eviction defense, rent disputes",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake or walk-in",
      outcome: "Direct representation and advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "LawNY (Legal Assistance of Western NY)",
      focus: "Housing, tenant rights, eviction defense",
      qualifier: "Low-income residents in 14 Western NY counties",
      access: "Phone intake at (585) 295-5700",
      outcome: "Direct representation",
      phone: "(585) 295-5700",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "eviction-process-ny",
    "illegal-eviction-ny",
    "security-deposit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "tenant rights",
    "repairs",
    "warranty of habitability",
    "rent withholding",
    "rent abatement",
    "code enforcement",
    "landlord not fixing",
    "no heat",
    "no hot water",
    "mold",
    "pests",
    "bedbugs",
    "broken plumbing",
    "retaliation",
    "repair and deduct"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPP/235-B",
    "https://www.nysenate.gov/legislation/laws/RPP/223-B",
    "https://ag.ny.gov/publications/residential-tenants-rights-guide"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
