export const ABANDONED_VEHICLE_NY = {
  id: "abandoned-vehicle-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 1224",
  status: "active",

  title: { en: "Abandoned Vehicles — What to Do If a Car Is Left on Your Property or the Street" },

  summary: {
    en: "An abandoned vehicle on private property or a public street can be reported for removal. In New York, a vehicle is considered abandoned if it has been left unattended on public property for more than 96 hours, or on private property without the owner's consent. The process for removal depends on whether the vehicle is on public or private property and whether the owner can be identified. Vehicle owners who abandon a car can face fines."
  },

  whoQualifies: {
    en: [
      "Any property owner who has an abandoned vehicle on their land.",
      "Any resident who wants to report an abandoned vehicle on a public street.",
      "Any person who purchased property and found vehicles left behind by the prior owner.",
      "Any person whose own vehicle was towed as abandoned and wants to reclaim it."
    ]
  },

  whatItMeans: {
    en: "Under Vehicle and Traffic Law § 1224, a vehicle left unattended on a public highway or public property for more than 96 consecutive hours is considered abandoned. The police or municipality can have it towed and stored. The owner is notified by mail (if the owner can be identified through the registration). If the owner does not claim the vehicle within a specified period, the vehicle can be sold at auction or scrapped. For vehicles on private property: the property owner can have the vehicle removed, but must follow the process — typically contacting the police or the local code enforcement office, which will attempt to identify the owner and issue a notice. The property owner generally cannot sell or scrap the vehicle themselves — they must go through the legal process, which may include obtaining a court order or a DMV abandoned vehicle title. In Rochester, abandoned vehicles on public streets can be reported through 311. The city will investigate, tag the vehicle, and have it towed if it meets the criteria. For vehicles on private property, the property owner contacts the police non-emergency line."
  },

  yourRights: {
    en: [
      "Vehicles left on public streets for more than 96 hours can be reported and towed.",
      "Property owners can have unauthorized vehicles removed from their land — but must follow the legal process.",
      "The vehicle owner must be notified before the vehicle is disposed of (if the owner can be identified).",
      "If your vehicle was towed as abandoned, you have the right to reclaim it by paying tow and storage fees.",
      "The property owner cannot sell or scrap an abandoned vehicle without following the DMV title process.",
      "Fines may apply to the registered owner who abandoned the vehicle."
    ]
  },

  legalOptions: {
    en: [
      "In Rochester, report abandoned vehicles on public streets through 311 (call or use the app).",
      "For vehicles on private property in Rochester, call the RPD non-emergency line at (585) 428-7033.",
      "In suburban towns, contact the town police or code enforcement office.",
      "To obtain title to an abandoned vehicle on private property, the DMV has a process — form MV-83 (Abandoned Vehicle Affidavit). Contact the DMV at (518) 486-9786 for guidance.",
      "If the vehicle is hazardous (leaking fluids, fire risk), report it to the fire department or code enforcement as an environmental hazard."
    ]
  },

  example: {
    en: "A homeowner in Rochester finds a car parked in her driveway that does not belong to her. It has been there for a week. She calls the RPD non-emergency line. The police run the plates, attempt to contact the registered owner, and tag the vehicle. If the owner does not respond within the notice period, the police arrange for the vehicle to be towed at the registered owner's expense."
  },

  counsel: [
    {
      type: "free",
      name: "Rochester 311 — Abandoned Vehicles",
      focus: "Abandoned vehicle reports on public streets",
      qualifier: "Rochester residents",
      access: "Phone or app",
      outcome: "Investigation, tagging, towing",
      phone: "311",
      url: "https://www.cityofrochester.gov/311/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "car-towed-repossessed-ny",
    "unauthorized-towing-ny",
    "parking-ticket-ny",
    "neighbor-disputes-ny-cl"
  ],

  relatedHelpResources: [],

  tags: [
    "abandoned vehicle",
    "abandoned car",
    "car on property",
    "96 hours",
    "VTL 1224",
    "report abandoned car",
    "tow abandoned",
    "DMV MV-83",
    "abandoned title",
    "311 abandoned",
    "junk car",
    "vehicle removal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/1224",
    "https://www.cityofrochester.gov/311/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
