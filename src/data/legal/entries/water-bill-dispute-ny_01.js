export const WATER_BILL_DISPUTE_NY = {
  id: "water-bill-dispute-ny",
  category: "consumer",
  tier: "county",
  jurisdiction: "us-ny-mon",
  authorityType: "local-ordinance",
  status: "active",

  title: { en: "Water Bill Too High — How to Dispute It in Monroe County" },

  summary: {
    en: "If a water bill is suddenly much higher than usual, it could be a leak, a meter error, or a billing mistake. Monroe County Water Authority (MCWA) and the City of Rochester each handle water billing differently. Both have processes for disputing a bill, requesting a meter test, and applying for a leak adjustment."
  },

  whoQualifies: {
    en: [
      "Any homeowner or tenant whose water bill is much higher than normal.",
      "Any customer who believes the water meter is reading incorrectly.",
      "Any customer who had a hidden leak (like a running toilet or underground pipe break) and received a huge bill.",
      "Any customer who is struggling to pay a water bill and wants to know about payment plans."
    ]
  },

  whatItMeans: {
    en: "In Monroe County, water service is provided by the Monroe County Water Authority (MCWA) for most suburban areas and by the City of Rochester's Bureau of Water for city residents. A sudden spike in the water bill usually has one of three causes: a leak (running toilet, dripping faucet, or underground pipe break), a meter error, or a billing mistake. MCWA and the city both offer leak adjustment programs — if the high bill was caused by a hidden leak that has since been fixed, the customer can apply for a credit that reduces the bill to closer to normal usage. Both also offer payment plans for customers who cannot pay a large bill all at once. A customer can request a meter test to verify that the meter is reading accurately. If the meter is wrong, the bill is adjusted. Water service in New York cannot be shut off without proper notice. Under PSC rules and local regulations, the utility must provide advance written notice, offer a payment plan, and cannot shut off service during the heating season if the customer has no alternative water source."
  },

  yourRights: {
    en: [
      "A customer has the right to request a meter test if they believe the meter is reading incorrectly. The test is usually free.",
      "A customer has the right to apply for a leak adjustment if a hidden leak caused the high bill.",
      "A customer has the right to a payment plan if they cannot pay a large bill all at once.",
      "Water service cannot be shut off without advance written notice.",
      "A customer has the right to dispute a bill before any shutoff action begins.",
      "A tenant is not responsible for water bills in the landlord's name unless the lease specifically assigns water costs to the tenant."
    ]
  },

  legalOptions: {
    en: [
      "MCWA (suburban customers) can be reached at (585) 442-7200 for billing questions, meter tests, and leak adjustments.",
      "City of Rochester Bureau of Water can be reached at (585) 428-6855 for city water billing.",
      "A meter test can be requested from either provider. If the meter is found to be inaccurate, the bill is adjusted.",
      "Leak adjustment applications are available from the water provider. The customer must show that the leak has been repaired.",
      "If a billing dispute is not resolved by the provider, a complaint can be filed with the NYS Public Service Commission at (800) 342-3377 for privately-owned water companies, or with the municipal provider's governing board for public systems.",
      "Free legal help with utility billing disputes is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "Rita's quarterly water bill in Greece jumped from $80 to $340. She had no idea what happened. She called MCWA, which sent a technician to test the meter. The meter was accurate, but the technician heard water running under the house. Rita called a plumber, who found a cracked pipe in the basement wall that had been leaking for weeks. After the repair, Rita applied for MCWA's leak adjustment program. Her bill was reduced to $120 — closer to her normal usage — because the leak was hidden and she had it fixed promptly."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Water Authority (MCWA)",
      focus: "Water billing, meter testing, leak adjustments, payment plans",
      qualifier: "MCWA suburban customers",
      access: "Phone at (585) 442-7200",
      outcome: "Bill adjustment, meter test, payment plan",
      phone: "(585) 442-7200",
      url: "https://www.mcwa.com",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "City of Rochester — Bureau of Water",
      focus: "City water billing, meter testing, leak adjustments",
      qualifier: "Rochester city water customers",
      access: "Phone at (585) 428-6855",
      outcome: "Bill adjustment, meter test, payment plan",
      phone: "(585) 428-6855",
      url: "https://www.cityofrochester.gov/water/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "utility-shutoff-protections-ny",
    "power-outage-rights-ny",
    "tenant-habitability-ny",
    "water-damage-tenant-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "water bill high",
    "water bill dispute",
    "MCWA bill",
    "water meter wrong",
    "leak adjustment",
    "water bill spike",
    "water shutoff",
    "water payment plan",
    "water bill Rochester",
    "water bill Monroe County",
    "monroe-county"
  ],

  sources: [
    "https://www.mcwa.com",
    "https://www.cityofrochester.gov/water/"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
