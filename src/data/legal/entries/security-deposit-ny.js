export const SECURITY_DEPOSIT_NY = {
  id: "security-deposit-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY GOB 7-108",
  status: "active",

  title: { en: "Security Deposits — Tenant Rights at Move-In and Move-Out" },

  summary: {
    en: "New York law limits security deposits to one month's rent and requires your landlord to return it within 14 days after you move out. If the landlord keeps any of it, they must give you a written list explaining every deduction. If they don't, they lose the right to keep any of it."
  },

  whoQualifies: {
    en: [
      "Every tenant who pays a security deposit on a residential rental in New York State.",
      "This applies whether you have a written lease or a verbal agreement, and whether you rent an apartment, a house, or a room.",
      "Rent-stabilized tenants have similar protections under GOL § 7-107. This entry covers non-rent-stabilized units under GOL § 7-108, which is the vast majority of rentals outside New York City.",
      "There is a narrow exemption for owner-occupied buildings with fewer than three units, which are not subject to the statewide deposit cap."
    ]
  },

  whatItMeans: {
    en: "Under GOL § 7-108, your landlord cannot charge more than one month's rent as a security deposit. The deposit is your money held in trust — the landlord cannot mix it with their own funds. When you move out, the landlord has exactly 14 days to return your deposit with an itemized statement of any deductions. The only lawful deductions are unpaid rent, damage you caused beyond normal wear and tear, and unpaid utilities owed directly to the landlord. Moving or storage costs for belongings you left behind may also be deducted. Normal wear and tear — like scuffed floors or faded paint — cannot be deducted."
  },

  yourRights: {
    en: [
      "Your security deposit cannot exceed one month's rent (GOL § 7-108).",
      "Your deposit must be held in trust. The landlord cannot mix it with their personal funds (GOL § 7-103).",
      "In buildings with six or more apartments, your deposit must earn interest. You are entitled to that interest minus a 1% administrative fee the landlord may keep (GOL § 7-103).",
      "Before you move in, the landlord must offer you the chance to inspect the unit together and create a written record of its condition. Any damage noted in that record cannot be charged against your deposit later (GOL § 7-108(1-a)(c)).",
      "Before you move out, the landlord must notify you in writing of your right to request a pre-move-out inspection and to be present at it. After the inspection, the landlord must give you an itemized list of proposed deductions so you have a chance to fix any issues before you leave (GOL § 7-108(1-a)(d)).",
      "Within 14 days after you move out, the landlord must return your deposit with an itemized statement of any amount kept. If the landlord fails to do this, they forfeit the right to keep any part of the deposit (GOL § 7-108(1-a)(e)).",
      "The landlord cannot deduct for ordinary wear and tear or for damage caused by a prior tenant."
    ]
  },

  legalOptions: {
    en: [
      "Under GOL § 7-108(1-a)(e), a landlord who fails to return the deposit with an itemized statement within 14 days forfeits all rights to retain any portion of the deposit, regardless of actual damages.",
      "Small claims court in New York accepts cases for amounts up to $5,000 in city courts and $3,000 in town and village courts. Security deposit disputes are among the most common small claims filings.",
      "The New York State Attorney General's office provides guidance on security deposit rights and accepts complaints about landlords who violate the law at ag.ny.gov.",
      "Free legal help for security deposit disputes in Monroe County is available through the Legal Aid Society of Rochester at (585) 232-4090 and Legal Assistance of Western New York (LawNY) at (585) 325-2520.",
      "Under GOL § 7-109, the Attorney General may bring a proceeding or action to compel compliance with security deposit requirements.",
      "If a building is sold, the former landlord must transfer all security deposits to the new owner within five days and notify tenants by certified mail of the new owner's name and address."
    ]
  },

  example: {
    en: "Aaliyah rented an apartment in Livingston County for two years. When she moved out, she left the apartment clean and in good condition. Her landlord did not return her deposit or send any statement. After 14 days passed with no response, Aaliyah learned that under New York law her landlord had forfeited the right to keep any of the money. She sent a written demand. When the landlord still did not respond, she filed a claim in small claims court. The judge ordered the landlord to return her full deposit."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Housing disputes, security deposit recovery, eviction defense",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Direct representation and advice on housing cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Housing, security deposits, fair housing, public benefits",
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
      focus: "Landlord-tenant disputes, small claims guidance, civil legal matters",
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
      focus: "Housing rights, systemic advocacy, fair housing",
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
    "tenant-habitability-ny",
    "eviction-process-ny",
    "illegal-eviction-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "security deposit",
    "deposit not returned",
    "landlord keeping my money",
    "move out money",
    "damage deposit",
    "getting my deposit back",
    "landlord deductions",
    "wear and tear",
    "small claims court",
    "landlord won't pay me back",
    "deposit refund",
    "moving out"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/GOB/7-108",
    "https://www.nysenate.gov/legislation/laws/GOB/7-103",
    "https://ag.ny.gov/resources/individuals/tenants-homeowners/tenants/recovering-rent-security-deposits-and-interest",
    "https://codes.findlaw.com/ny/general-obligations-law/gob-sect-7-108/"
  ],

  lastVerified: "2026-04-04",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
