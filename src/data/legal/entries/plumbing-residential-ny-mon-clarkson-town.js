// LGLW6-D_plumbing-residential-ny-mon-clarkson-town_01.js
// Town of Clarkson plumbing entry. Separate plumbing permit with published fee:
// $65 flat + $2/fixture residential. Double fees if work started w/o permit.
// Source: townofclarksonny.gov + eCode360 Ch 8648444.

export const entry = {
  id: "plumbing-residential-ny-mon-clarkson-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-clarkson-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Clarkson: what the town requires"
  },

  summary: {
    en: "Clarkson has a separate plumbing permit with a published fee: $65 flat plus $2 per fixture for residential work. Fees double if work starts without a permit. The town doesn't have its own plumber licensing — plumbers must carry liability insurance and workers comp."
  },

  whatItMeans: {
    en: "Clarkson requires a separate plumbing permit (not bundled with the building permit). The fee is $65 plus $2 per fixture for residential. Commercial is $100 plus $10 per fixture.\n\nIf you start plumbing work without a permit, the fee doubles. A new sewer hookup is a separate cost: $125 to the town plus a $250 county fee.\n\nThe town does not have its own plumber licensing chapter. Plumbers have to show liability insurance and workers comp (or a CE-200 waiver for sole proprietors). Whether the town honors a Rochester Examining Board certificate is not published — call to confirm.\n\nHomeowner self-work rules for plumbing are not spelled out on the town's public fee schedule. Call the Building Department at (585) 637-1145 to confirm before doing your own work."
  },

  example: {
    en: "A plumber in Clarkson does a bathroom remodel with 5 new fixtures. The plumbing permit fee is $65 + ($2 × 5) = $75 total, plus workers comp and insurance proof. If the plumber had started work first, the fee would have doubled to $150. The town building inspector does the rough-in and final inspections."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Clarkson",
      "Plumbers with liability insurance and workers comp coverage",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to a published fee schedule ($65 + $2/fixture residential)",
      "The right to avoid the doubled fee by pulling the permit BEFORE starting work",
      "The right to clear guidance from the Building Department",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Clarkson Building Department handles plumbing permits, inspections, and code complaints",
      "The published fee schedule dated 5/1/2018 is still the active schedule — confirm before filing",
      "Sewer hookup is a separate process: $125 town fee + $250 county fee"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Clarkson Building Department",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents, property owners, and plumbers working inside the Town",
      access: "3710 Lake Road North, Brockport (back entrance); phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-637-1145",
      url: "https://townofclarksonny.gov/building-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "clarkson", "monroe county",
    "plumbing permit fee", "town ordinance", "water heater",
    "sewer hookup", "per fixture"
  ],

  sources: [
    "https://townofclarksonny.gov/building-department/",
    "https://clarksonny.org/wp-content/uploads/2018/06/fee-schedule.pdf",
    "https://ecode360.com/8648444"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
