export const POWER_OUTAGE_RIGHTS_NY = {
  id: "power-outage-rights-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBS 32",
  status: "active",

  title: { en: "Power Outages — Customer Rights When the Electricity Goes Out" },

  summary: {
    en: "When a power outage lasts more than a few hours, customers have rights. New York's Public Service Commission requires utilities to restore power within specific timeframes, provide credits for extended outages, and keep customers informed. If food spoils or a medical device loses power, there may be ways to recover costs."
  },

  whoQualifies: {
    en: [
      "Any RG&E or National Grid customer who lost power for an extended period.",
      "Any customer who lost food because the refrigerator or freezer was off for too long.",
      "Any customer who depends on a medical device that requires electricity.",
      "Any customer who believes the utility took too long to restore power."
    ]
  },

  whatItMeans: {
    en: "In Monroe County, Rochester Gas and Electric (RG&E, an Avangrid company) provides electricity to most residents. National Grid serves some areas. Both are regulated by the NYS Public Service Commission (PSC). Under PSC rules, utilities must restore power to the majority of customers within specific timeframes based on the severity of the storm or outage. For major storms, restoration targets are set by the PSC after the event. For non-storm outages, restoration is expected within hours. If power is out for more than 24 hours, the utility may be required to provide bill credits. The amount depends on the length of the outage and PSC orders. For spoiled food, most utilities offer a claims process — RG&E has a food spoilage claim form. The amount covered is typically limited (often $150-$250). Homeowner's insurance may also cover food spoilage if the outage was caused by an event covered by the policy. Customers who depend on electricity for medical equipment (oxygen concentrators, CPAP machines, home dialysis) can register with the utility as a life-support customer, which gives them priority restoration."
  },

  yourRights: {
    en: [
      "A customer has the right to report an outage and receive an estimated restoration time from the utility.",
      "A customer whose power is out for more than 24 hours may be entitled to a bill credit.",
      "A customer has the right to file a food spoilage claim with the utility for extended outages.",
      "A customer who depends on medical equipment can register as a life-support customer for priority restoration.",
      "A customer has the right to file a complaint with the PSC if the utility is not restoring power in a reasonable time.",
      "A customer cannot be charged for electricity during a period when power was out."
    ]
  },

  legalOptions: {
    en: [
      "RG&E outage reporting and estimated restoration times are available at rge.com or by calling (800) 743-1701.",
      "National Grid outage reporting is at nationalgridus.com or (800) 642-4272.",
      "Food spoilage claims can be filed with the utility after the outage. Keep receipts or a list of spoiled items.",
      "Life-support customer registration with RG&E is available by calling (800) 743-1701 and requesting to be added to the medical priority list.",
      "Complaints about utility response to outages can be filed with the NYS Public Service Commission at (800) 342-3377 or dps.ny.gov.",
      "If the outage was caused by a utility's failure to maintain its equipment (not a storm), the utility may be liable for damages beyond just food spoilage."
    ]
  },

  example: {
    en: "After an ice storm, the Garcia family in Irondequoit lost power for four days. Their refrigerator and freezer full of food spoiled. Mrs. Garcia filed a food spoilage claim with RG&E for $200, which was paid within six weeks. She also filed a complaint with the PSC about the four-day restoration time. The PSC investigated and RG&E provided a bill credit of $50 to affected customers in the area. Going forward, Mr. Garcia — who uses a CPAP machine — registered as a life-support customer so their home would get priority restoration in future outages."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Public Service Commission",
      focus: "Utility complaints, outage response, bill credits, customer rights",
      qualifier: "Any NYS utility customer",
      access: "Phone at (800) 342-3377 or online at dps.ny.gov",
      outcome: "Investigation, enforcement, customer credits",
      phone: "(800) 342-3377",
      url: "https://www.dps.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "utility-shutoff-protections-ny",
    "after-a-fire-ny",
    "tenant-habitability-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "power outage",
    "electricity out",
    "power outage rights",
    "RGE outage",
    "food spoilage claim",
    "power outage credit",
    "medical equipment power",
    "life support customer",
    "power outage Rochester",
    "utility outage complaint",
    "storm power outage"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBS/32",
    "https://www.nysenate.gov/legislation/laws/PBS/66",
    "https://www.dps.ny.gov",
    "https://www.rge.com"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
