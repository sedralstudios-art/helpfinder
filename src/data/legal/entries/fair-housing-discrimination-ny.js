export const FAIR_HOUSING_DISCRIMINATION_NY = {
  id: "fair-housing-discrimination-ny",
  category: "housing",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "42 USC 3604",
  status: "active",

  title: { en: "Housing Discrimination — Federal Fair Housing Act and New York Protections" },

  summary: {
    en: "Landlords, real estate agents, and mortgage lenders cannot refuse to rent, sell, or lend based on race, color, religion, national origin, sex, familial status, disability, or other protected classes. New York extends the federal list to include source of income, sexual orientation, gender identity, lawful occupation, marital status, age, military status, and more. A person who experienced discrimination has multiple places to file a complaint."
  },

  whoQualifies: {
    en: [
      "Any person denied housing, shown different terms, or steered based on a protected class.",
      "Any person refused a reasonable accommodation for a disability.",
      "Any person refused a reasonable modification to a unit for accessibility.",
      "Any family with children denied by a landlord claiming 'adults only' (familial status discrimination).",
      "Any Section 8 voucher holder refused because of the voucher (source-of-income discrimination in NY)."
    ]
  },

  whatItMeans: {
    en: "The federal Fair Housing Act (42 USC Sections 3601-3619) prohibits discrimination in housing transactions based on race, color, national origin, religion, sex, familial status (having children under 18), and disability. The law covers rentals, sales, mortgage lending, homeowner's insurance, and housing advertising. Refusing to rent, charging higher rent, setting different terms, providing different services, falsely saying a unit is unavailable, and steering applicants to certain neighborhoods are all illegal. For disability, landlords must allow reasonable accommodations (a change to rules or policies — like allowing a service animal in a no-pets building) and reasonable modifications (physical changes to the unit — like installing a ramp, at the tenant's expense in rentals). New York State Human Rights Law (Executive Law Section 296) extends the protected classes to include source of income (including Section 8 vouchers, Social Security, veterans benefits, and other lawful sources), sexual orientation, gender identity or expression, lawful occupation, marital status, age, military status, domestic violence victim status, arrest or conviction record (with limits), and status as a victim of domestic violence. Complaints can be filed with HUD (federal) or the NYS Division of Human Rights (state). A private federal lawsuit can also be filed within two years. State complaints go through the Division of Human Rights first. Remedies can include lease enforcement, damages for emotional distress, civil penalties, and attorney fees. Testers and audits are a major tool in fair housing enforcement. Fair housing organizations send paired testers — applicants of different races, family compositions, or other characteristics — to apply for the same housing and document differential treatment. Test results are admissible evidence and have produced large settlements against landlords with discriminatory practices. Pattern-or-practice cases brought by HUD or DOJ can produce systemic remedies including monitoring, training requirements, and large civil penalties. Algorithmic discrimination is an emerging area: tenant screening services that use automated scoring can produce disparate-impact results that violate the Fair Housing Act even without explicit discriminatory intent. Recent HUD guidance has addressed how landlords should evaluate applicants whose criminal records or eviction histories may reflect past discrimination. Source-of-income discrimination cases have grown substantially in NY since the law's expansion in 2019; landlords who refuse Section 8 vouchers face increasing litigation risk and are now a frequent target of testing programs."
  },

  yourRights: {
    en: [
      "A person cannot be refused housing based on race, color, religion, national origin, sex, familial status, or disability (federal Fair Housing Act).",
      "In New York, a person cannot be refused based on source of income (including Section 8), sexual orientation, gender identity, lawful occupation, marital status, age, or military status.",
      "A person with a disability has the right to a reasonable accommodation and a reasonable modification.",
      "A person who experienced discrimination has the right to file a HUD or NYS Division of Human Rights complaint at no cost.",
      "Discriminatory advertising — for example, 'no children' or 'Section 8 need not apply' — is prohibited.",
      "Retaliation against a person who filed a discrimination complaint is itself illegal."
    ]
  },

  legalOptions: {
    en: [
      "HUD Fair Housing complaints: call (800) 669-9777 or file online at hud.gov.",
      "NYS Division of Human Rights: call (888) 392-3644 or file at dhr.ny.gov.",
      "The Fair Housing Enforcement Project of Monroe County at (585) 325-2500 handles fair housing testing and advocacy.",
      "Empire Justice Center at (585) 454-4060 handles housing discrimination litigation.",
      "Legal Aid Society of Rochester at (585) 232-4090 handles discrimination cases for low-income renters.",
      "A federal Fair Housing Act lawsuit must be filed within 2 years of the discriminatory act. State DHR complaints within 1 year."
    ]
  },

  example: {
    en: "A family of four in Rochester applied for an apartment advertised as a two-bedroom. The landlord refused, saying he did not want children in the building. Under the Fair Housing Act and NY Human Rights Law, this is familial-status discrimination. The family filed a complaint with the NYS Division of Human Rights. An investigator tested the listing — a test caller without children was invited to view; the test caller with children was told the unit was rented. The family received damages for emotional distress and the landlord paid a civil penalty. The listing was corrected."
  },

  counsel: [
    {
      type: "government",
      name: "HUD — Fair Housing Enforcement",
      focus: "Federal fair housing complaints, investigations, mediation",
      qualifier: "Anyone in the United States",
      access: "Phone at (800) 669-9777",
      outcome: "Investigation, conciliation, referral to DOJ for pattern cases",
      phone: "(800) 669-9777",
      url: "https://www.hud.gov/fairhousing",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Division of Human Rights",
      focus: "NY fair housing + expanded protected classes (source of income, LGBTQ, age, etc.)",
      qualifier: "Any NYS resident",
      access: "Phone at (888) 392-3644",
      outcome: "Investigation, hearings, damages, civil penalties",
      phone: "(888) 392-3644",
      url: "https://dhr.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "illegal-eviction-ny",
    "section-8-housing-voucher-ny",
    "section-8-portability-ny-program",
    "ada-workplace-accommodation-ny",
    "workplace-discrimination-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "fair housing",
    "housing discrimination",
    "familial status discrimination",
    "source of income discrimination",
    "Section 8 refused",
    "disability housing accommodation",
    "service animal housing",
    "HUD complaint",
    "Division of Human Rights",
    "Fair Housing Act"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/3604",
    "https://www.law.cornell.edu/uscode/text/42/3601",
    "https://www.nysenate.gov/legislation/laws/EXC/296",
    "https://www.hud.gov/fairhousing"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
