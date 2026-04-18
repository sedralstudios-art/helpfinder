export const COMMUNITY_SOLAR_SUBSCRIPTION_NY = {
  id: "community-solar-subscription-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-regulation",
  status: "active",

  title: { en: "Community Solar in New York — How a Subscription Works and the Consumer Disclosure Rules" },

  summary: {
    en: "Community solar lets a New York resident subscribe to a share of a shared solar array and receive credits on the utility bill — no rooftop panels needed. State rules require specific disclosures from community solar providers, a cooling-off period to cancel, and caps on fees. Savings for subscribers vary but are typically 5 to 10 percent. Low-income subscribers often see 20 percent or more through state programs."
  },

  whoQualifies: {
    en: [
      "Any National Grid, RG&E, or other major NY utility customer in a service area with community solar projects available.",
      "Renters who cannot install rooftop solar.",
      "Homeowners whose roofs are not suitable for solar (shade, orientation, structure).",
      "Low- and moderate-income households eligible for enhanced community solar through the NYS Solar for All program."
    ]
  },

  whatItMeans: {
    en: "Community solar (also called community distributed generation) is a shared solar array whose production is allocated to subscribers. Instead of owning panels, the subscriber buys a share of the array's output. The utility credits the subscriber's bill for their share of the electricity the array produces. The subscriber pays the community solar provider (not the utility) for those credits, usually at a discount to the utility rate. The result is net savings on the electric bill. New York community solar is regulated by the Public Service Commission under Value of Distributed Energy Resources (VDER) tariffs and consumer protection orders. Key consumer protections: required disclosures before sign-up, including the subscription price, the utility bill credit expected, any fees, contract term, and cancellation terms. A standard contract summary must be provided. A 5-business-day cooling-off period after sign-up during which the subscriber can cancel without penalty. Early termination fees are capped. Fixed or escalating pricing must be clearly disclosed. Low-income protections: the state's Solar for All and Expanded Solar for All programs provide enhanced benefits to income-qualified customers — no-cost subscriptions in some cases, with projected savings of 10 to 25 percent. Subscribers do not have to own or finance panels. The community solar provider owns the array. The utility bills and credits flow normally. When moving within the same utility service area, the subscription often transfers. Moving to a different utility requires a new subscription or cancellation (which should be penalty-free under the consumer protection rules). Credits appear on the monthly utility bill as a line item. Some subscribers also receive a separate bill from the community solar provider for the subscription cost. Net savings is bill credit minus subscription cost. Complaints about community solar providers go to the NYS DPS."
  },

  yourRights: {
    en: [
      "A subscriber has the right to clear disclosures about subscription price, utility credit, fees, and contract term before sign-up.",
      "A subscriber has a 5-business-day cooling-off period after signing.",
      "Early termination fees are capped by PSC consumer protection rules.",
      "Income-qualified subscribers have the right to enhanced benefits through Solar for All and Expanded Solar for All.",
      "A subscriber has the right to transfer the subscription when moving within the same utility service area.",
      "Complaints about pricing, disclosures, or billing go to the NYS DPS."
    ]
  },

  legalOptions: {
    en: [
      "NYS Department of Public Service Consumer Complaints line: (800) 342-3377 for community solar complaints.",
      "NYSERDA Solar for All and Expanded Solar for All: call (877) 697-6278 or visit nyserda.ny.gov/all-programs/solar-for-all.",
      "Before signing with a provider, compare at least two community solar options in the area — many providers serve the same geographic zone.",
      "Request the standard contract summary in writing before committing.",
      "To cancel within the cooling-off period, send written notice to the provider within 5 business days of signing.",
      "For billing disputes (utility credit not showing, incorrect subscription cost), contact the provider first, then escalate to DPS if not resolved.",
      "Low-income customers can also access HEAP for bill assistance (see heap-utility-assistance-ny) alongside community solar."
    ]
  },

  example: {
    en: "A Rochester apartment renter on RG&E electric signed up for a community solar subscription through a provider's website. The sign-up showed a projected 10 percent savings on electric bills. After the cooling-off period elapsed, her first bill arrived with a $42 solar credit from RG&E — and a separate $38 charge from the community solar provider for that month. Net savings: $4 — less than projected but still positive. Over the year she saved about $55 net. Had she signed up for Solar for All instead (she was income-eligible), the savings would have been substantially higher — the enhanced program targets 20 to 25 percent savings for income-qualified customers."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Department of Public Service — Consumer Assistance",
      focus: "Community solar complaints, billing disputes, consumer protection",
      qualifier: "Any NY utility customer",
      access: "Phone at (800) 342-3377",
      outcome: "Investigation, mediation, enforcement",
      phone: "(800) 342-3377",
      url: "https://dps.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYSERDA — Solar for All",
      focus: "Income-qualified enhanced community solar enrollment",
      qualifier: "Low- and moderate-income NY households",
      access: "Phone at (877) 697-6278",
      outcome: "Program enrollment, provider matching, bill assistance",
      phone: "(877) 697-6278",
      url: "https://www.nyserda.ny.gov/all-programs/solar-for-all",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "heap-utility-assistance-ny",
    "utility-shutoff-protections-ny",
    "power-outage-rights-ny",
    "home-energy-audit-rebates-ny",
    "weatherization-assistance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "community solar",
    "solar subscription",
    "VDER tariff",
    "Solar for All",
    "utility bill credit",
    "cooling off period solar",
    "low income solar NY",
    "community distributed generation",
    "PSC solar complaint",
    "NY solar savings"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBS/66-J",
    "https://dps.ny.gov/community-distributed-generation"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
