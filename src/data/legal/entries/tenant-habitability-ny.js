export const TENANT_HABITABILITY_NY = {
  id: "tenant-habitability-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPP 235-B",
  status: "active",

  title: { en: "Warranty of Habitability — Your Right to a Safe Home" },

  summary: {
    en: "Every tenant in New York has a legal right to a home that is safe, clean, and fit to live in. This right is built into every lease — written or spoken — and your landlord cannot make you give it up."
  },

  whoQualifies: {
    en: [
      "Every person who rents a home in New York State, whether on a written lease or a verbal agreement.",
      "This right applies to apartments, houses, rooms, and any residential space — including month-to-month tenants.",
      "It covers your unit and all shared areas like hallways, stairs, and laundry rooms.",
      "This protection cannot be waived. Any lease clause that tries to remove this right is void under New York law."
    ]
  },

  whatItMeans: {
    en: "Under NY Real Property Law § 235-b, your landlord must keep your home fit for human habitation. This means working heat, hot water, plumbing, electricity, and freedom from dangerous conditions like mold, lead paint, pest infestations, or broken locks. Heat is required from October 1 through May 31 when outside temperatures drop below the legal threshold. If a condition makes your home unsafe and you did not cause it, your landlord is legally responsible for fixing it."
  },

  yourRights: {
    en: [
      "You have the right to a home that is safe, clean, and free of conditions that are dangerous to your life, health, or safety (RPL § 235-b).",
      "You have the right to working heat from October 1 through May 31, and hot water year-round.",
      "You have the right to be free from retaliation. Under RPL § 223-b, your landlord cannot evict you, raise your rent, or reduce services because you complained about conditions or contacted a government agency.",
      "You have the right to request repairs and to contact local code enforcement if your landlord does not respond.",
      "RPL § 227 allows a tenant to cancel a lease and recover prepaid rent and security deposit if the home becomes uninhabitable through fire or damage the tenant did not cause.",
      "Any lease language that tries to waive your right to a habitable home is void as against public policy."
    ]
  },

  legalOptions: {
    en: [
      "Under RPL § 235-b, tenants may bring a claim in court for a rent reduction when habitability conditions are not corrected. The court does not require expert testimony to assess damages.",
      "Local code enforcement offices accept complaints about housing conditions. In cities covered by the Multiple Residence Law, complaints may be directed to the local building or housing department.",
      "The New York State Attorney General's office provides information about tenant rights and habitability standards at ag.ny.gov.",
      "Free legal help for housing issues in Monroe County is available through the Legal Aid Society of Rochester at (585) 232-4090, Legal Assistance of Western New York (LawNY) at (585) 325-2520, and JustCause through the Monroe County Bar Association.",
      "Under RPL § 223-b, retaliation claims may be raised as a defense in any eviction proceeding that follows a habitability complaint. Courts may dismiss retaliatory eviction cases.",
      "In some circumstances, New York courts have recognized a tenant's right to make necessary repairs and deduct reasonable costs from the rent when the landlord fails to act after receiving notice of dangerous conditions."
    ]
  },

  example: {
    en: "Denise rents an apartment in Genesee County. In November, her heat stopped working. She told her landlord in writing, but nothing was fixed for two weeks. She contacted her local code enforcement office, which sent an inspector. The inspector confirmed the broken furnace and issued a violation to the landlord. The landlord made the repair within days. When her lease came up for renewal, Denise was concerned about retaliation. Under New York law, her landlord cannot refuse to renew her lease or raise her rent because she reported the problem."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Eviction defense, habitability complaints, tenant representation in Rochester City Court",
      qualifier: "Low income tenants in Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090, walk-in at Rochester City Court on court dates",
      outcome: "Direct representation in eviction and housing cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Housing, fair housing, habitability, public benefits, elder law",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation in housing matters",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "JustCause",
      focus: "Housing, landlord-tenant disputes, and other civil legal matters",
      qualifier: "Low income residents of Monroe County",
      access: "Referral through Monroe County Bar Association",
      outcome: "Pro bono volunteer attorney representation",
      phone: "585-232-3051",
      url: "https://mcba.org/?pg=TelescaCenterforJustice",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Housing rights, systemic housing advocacy, fair housing",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "eviction-process-ny",
    "security-deposit-ny",
    "illegal-eviction-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "apartment not safe",
    "no heat",
    "no hot water",
    "mold in apartment",
    "bugs in apartment",
    "cockroaches",
    "mice",
    "rats",
    "landlord won't fix",
    "broken pipes",
    "unsafe apartment",
    "tenant rights",
    "habitability",
    "landlord problems",
    "code violations",
    "lead paint",
    "bad living conditions"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPP/235-B",
    "https://www.nysenate.gov/legislation/laws/RPP/223-B",
    "https://www.nysenate.gov/legislation/laws/RPP/227",
    "https://ag.ny.gov/resources/individuals/tenants-homeowners/legal-services-and-code-enforcement",
    "https://www.nysenate.gov/legislation/laws/RPP/A7"
  ],

  lastVerified: "2026-04-04",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
