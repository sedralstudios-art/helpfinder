// LGLW6-D_plumbing-residential-ny-mon-irondequoit-town_01.js
// Town of Irondequoit plumbing entry. Town requires Town-licensed plumber.
// Chapter 98 explicitly requires permits for plumbing work.
// Source: irondequoit.gov Building Dept page.

export const entry = {
  id: "plumbing-residential-ny-mon-irondequoit-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-irondequoit-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Irondequoit: what the town requires"
  },

  summary: {
    en: "Irondequoit requires plumbing to be done by a Town-licensed plumber. A plumbing permit is required for any work involving plumbing systems — the town code explicitly lists it as not exempt from permits. Inspections are done by town inspectors. Call to confirm current fees and homeowner rules."
  },

  whatItMeans: {
    en: "Irondequoit's Chapter 98 building code says that non-structural repairs may be exempt from permits, EXCEPT when the work involves plumbing, electrical, heating, ventilation, or fire-protection systems. So plumbing work gets a permit pretty much every time.\n\nThe town requires plumbing work to be done by a plumber licensed in the Town of Irondequoit. Whether that means a Rochester Examining Board certificate qualifies, or whether the town has its own separate license, isn't fully clear from the public page — call (585) 336-6020 to confirm.\n\nInspection requests submitted by 3pm are typically scheduled for the next day.\n\nThe town has an online fee schedule — call for specific plumbing amounts. Homeowner plumbing rules aren't published on the public page."
  },

  example: {
    en: "An Irondequoit homeowner wants to replace an aging sewer line from the house to the street. They call the Building Department. They're told the work needs a permit AND has to be done by a town-licensed plumber. They hire a qualified plumber, the plumber pulls the permit, does the work, and the town inspector signs off."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Irondequoit",
      "Plumbers licensed in the Town of Irondequoit",
      "Homeowners — call the Building Department to confirm whether you can do any plumbing work yourself"
    ]
  },

  yourRights: {
    en: [
      "The right to have inspections scheduled quickly (next day if requested by 3pm)",
      "The right to clear guidance from the Building Department on licensing requirements",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Irondequoit Building Department handles plumbing permits, inspections, and licensing questions",
      "Town code Ch 98 requires permits for plumbing work (no exemption for non-structural repairs involving plumbing)",
      "Inspections are done by town inspectors, not third-party agencies"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Irondequoit Building Department",
      focus: "Plumbing licensing, plumbing permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working in Irondequoit",
      access: "Phone; inspection requests by 3pm for next-day",
      outcome: "License guidance, permit issuance, inspection scheduling",
      phone: "585-336-6020",
      url: "https://www.irondequoit.gov/180/Building",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "irondequoit", "monroe county",
    "plumber license", "chapter 98", "water heater",
    "town ordinance", "next day inspection"
  ],

  sources: [
    "https://www.irondequoit.gov/180/Building"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
