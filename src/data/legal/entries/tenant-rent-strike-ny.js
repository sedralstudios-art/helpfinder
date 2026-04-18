export const TENANT_RENT_STRIKE_NY = {
  id: "tenant-rent-strike-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPP 235-B",
  status: "active",

  title: { en: "Rent Withholding — When Tenants Can Legally Hold Back Rent" },

  summary: {
    en: "If a landlord refuses to fix serious problems that make a home unsafe or unlivable, New York law allows tenants to withhold rent. This is not the same as skipping rent — it is a legal tool with specific rules. Using it incorrectly can lead to an eviction case."
  },

  whoQualifies: {
    en: [
      "Any tenant whose apartment has serious problems the landlord has been notified about but refuses to fix.",
      "Any tenant dealing with no heat, no hot water, mold, pest infestation, broken plumbing, or other conditions that make the home unsafe.",
      "Any tenant who has been reporting problems to the landlord in writing and nothing has been done.",
      "Any tenant who wants to understand the difference between legal rent withholding and simply not paying rent."
    ]
  },

  whatItMeans: {
    en: "Under New York Real Property Law Section 235-b, every residential lease includes a warranty of habitability. This means the landlord must keep the home in a condition that is safe, clean, and fit to live in. When the landlord fails to do this — no heat in winter, sewage backup, lead paint, serious mold, rodent infestation — the tenant may have the right to withhold rent. Rent withholding means the tenant stops paying rent and puts the money aside (ideally in a separate bank account) until the landlord makes the repairs. The tenant is not spending the money — they are holding it. If the landlord files an eviction case for nonpayment, the tenant raises the habitability defense in court. The judge looks at the conditions, decides how much the rent should be reduced because of the problems, and the tenant pays the reduced amount. The key is documentation. The tenant needs proof that the landlord was notified (texts, emails, letters, 311 complaints, code enforcement reports) and proof of the conditions (photos, videos, inspection reports). Without this evidence, a judge may not accept the defense."
  },

  yourRights: {
    en: [
      "A tenant has the right to a home that is safe and fit to live in under the warranty of habitability.",
      "A tenant has the right to withhold rent when the landlord fails to fix serious habitability problems after being notified.",
      "A tenant who withholds rent has the right to raise the habitability defense if the landlord files for eviction.",
      "A judge can reduce the rent owed based on the severity of the conditions — sometimes to zero for the worst cases.",
      "A tenant has the right to report housing code violations to local code enforcement without fear of landlord retaliation.",
      "Under RPL Section 223-b, a landlord cannot evict, raise rent, or cut services in retaliation for a habitability complaint."
    ]
  },

  legalOptions: {
    en: [
      "Under RPL Section 235-b, the warranty of habitability cannot be waived in any lease. A lease clause that says the tenant accepts the apartment as-is does not eliminate this right.",
      "Before withholding rent, the tenant should notify the landlord of the problem in writing and keep a copy. Texts and emails count.",
      "The tenant should also file a complaint with local code enforcement — in Rochester at (585) 428-6520 — to create an official record of the conditions.",
      "The withheld rent should be set aside in a separate account, not spent. This shows the court the tenant is acting in good faith.",
      "If the landlord files for eviction, the tenant has the right to raise the habitability defense and present evidence of the conditions.",
      "Free legal help with rent withholding and habitability cases is available through Legal Aid Society of Rochester at (585) 232-4090 and Housing Council at Rochester at (585) 546-3700."
    ]
  },

  example: {
    en: "David's apartment in Rochester had no heat for three weeks in January. He texted his landlord five times and called code enforcement, which cited the landlord for a heating violation. The landlord still did not fix it. David stopped paying rent and put the money in a savings account. When the landlord filed for eviction, David went to court with his text messages, the code enforcement report, and photos of the thermostat showing 48 degrees. The judge found the apartment was not habitable and reduced the rent owed for those three weeks to zero. The landlord was ordered to fix the heat."
  },

  counsel: [
    {
      type: "free",
      name: "Housing Council at Rochester",
      focus: "Tenant rights, habitability complaints, rent withholding guidance",
      qualifier: "Monroe County residents",
      access: "Phone at (585) 546-3700",
      outcome: "Counseling, mediation, referrals",
      phone: "(585) 546-3700",
      url: "https://www.thehousingcouncil.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Housing law, eviction defense, habitability cases",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "tenant-habitability-ny",
    "tenant-rights-repairs-ny",
    "housing-code-violations-ny",
    "landlord-retaliation-ny",
    "eviction-process-ny",
    "right-to-counsel-eviction-ny-program"
  ],

  relatedHelpResources: [],

  tags: [
    "rent withholding",
    "withhold rent",
    "rent strike",
    "no heat apartment",
    "habitability",
    "landlord wont fix",
    "unsafe apartment",
    "rent reduction",
    "hold back rent",
    "warranty of habitability"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPP/235-B",
    "https://www.nysenate.gov/legislation/laws/RPP/223-B"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
