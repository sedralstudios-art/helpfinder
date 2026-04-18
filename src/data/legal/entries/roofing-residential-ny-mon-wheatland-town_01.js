// LGLW6-D_roofing-residential-ny-mon-wheatland-town_01.js
// Town of Wheatland roofing entry. Explicit roofing permit REQUIRED.
// "Roofs, decks, porches and entryways- any size" listed as permit-required.
// Penalty: 4x permit cost + $100 for no permit.
// Contains Village of Scottsville (separate jurisdiction with Historic District).
// Source: townofwheatland.org Building Department page.

export const entry = {
  id: "roofing-residential-ny-mon-wheatland-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-wheatland-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Roofing in the Town of Wheatland: what the town requires"
  },

  summary: {
    en: "The Town of Wheatland explicitly requires a building permit for roofs, decks, porches, and entryways of any size. If work begins without a permit, the Town can issue a Stop Work order with penalties of four times the permit cost plus $100. The Village of Scottsville, which sits inside the Town, has separate code enforcement."
  },

  whatItMeans: {
    en: "Wheatland's Building Department website explicitly lists 'Roofs, decks, porches and entryways — any size' among the projects that require a building permit. The Town also requires permits for replacement of any project that originally required a permit, and all replacement projects must comply with current zoning and building code requirements. The Building Department and Fire Marshal conduct plan reviews and construction inspections. Property owners who start work without a required permit face a Stop Work order and penalties of four times the permit cost plus $100. The Village of Scottsville has a Historic District on Rochester Street — properties in that area may have additional requirements."
  },

  example: {
    en: "A homeowner in Wheatland needs a complete roof replacement. Because the Town explicitly lists roofs of any size as requiring a building permit, the homeowner contacts the Building Department before hiring a contractor. The contractor submits a permit application and waits for approval before starting work."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors performing roofing work inside the Town of Wheatland",
      "Roofs of any size require a building permit — this is explicitly listed by the Building Department",
      "The Village of Scottsville has separate code enforcement — verify your jurisdiction"
    ]
  },

  yourRights: {
    en: [
      "The right to clear information about permit requirements — the Building Department publishes a detailed list",
      "The right to know the penalty structure before starting work (4x permit cost + $100 for no permit)",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Wheatland Building Department handles permit applications, plan review, inspections, and code enforcement",
      "The Fire Marshal handles fire safety inspections and fire-related code enforcement",
      "The Building Department investigates zoning complaints and property maintenance issues"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Wheatland Building Department",
      focus: "Building permits, code enforcement, fire marshal, inspections",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "22 Main Street, Scottsville; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-889-1553",
      url: "https://www.townofwheatland.org/building-department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny", "roofing-residential-ny-mon-scottsville-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "wheatland", "monroe county",
    "building permit", "town ordinance", "scottsville"
  ],

  sources: [
    "https://www.townofwheatland.org/building-department",
    "https://www.townofwheatland.org/general-faqs",
    "https://ecode360.com/10499430"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
