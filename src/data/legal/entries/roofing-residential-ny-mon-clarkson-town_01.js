// LGLW6-D_roofing-residential-ny-mon-clarkson-town_01.js
// Town of Clarkson roofing entry. Explicit roofing permit REQUIRED.
// $100 fee for contractor jobs. DIY roofing also requires permit (no fee).
// Fees doubled if work starts without a permit.
// Contains Village of Brockport (separate jurisdiction).
// Source: clarksonny.org fee schedule + eCode360 Ch 52.

export const entry = {
  id: "roofing-residential-ny-mon-clarkson-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-clarkson-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Roofing in the Town of Clarkson: what the town requires"
  },

  summary: {
    en: "The Town of Clarkson explicitly requires a building permit for all roofing work. The permit fee is $100 for contractor jobs. Homeowners doing their own roofing (DIY) also need a permit but pay no fee. Permit fees are doubled if work begins without a permit. The Village of Brockport, which sits partly inside the Town, has separate code enforcement."
  },

  whatItMeans: {
    en: "Clarkson's fee schedule explicitly lists roofing as a permit-required activity — both for contractor work ($100 fee) and for homeowners doing their own roofing (permit required, no fee charged). This is one of the clearest roofing permit requirements in Monroe County. The Building Department enforces the NYS Uniform Fire Prevention and Building Code under Chapter 52 of the Town Code. If work begins without a permit, the permit fee is doubled. The Town also has a Historic Preservation Board that reviews exterior alterations in the Clarkson Historical Overlay District. The Village of Brockport straddles the Town of Clarkson and the Town of Sweden — verify which jurisdiction your property is in before applying."
  },

  example: {
    en: "A roofing contractor accepts a job on a house in Clarkson, outside the Village of Brockport. Before starting, the contractor contacts the Building Department at 585-637-1145 and applies for a roofing permit, paying the $100 fee. If the contractor had started work without the permit, the fee would have been $200."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors performing roofing work inside the Town of Clarkson",
      "Contractor roofing jobs require a permit with a $100 fee",
      "DIY roofing by homeowners requires a permit but no fee is charged",
      "The Village of Brockport has separate code enforcement — verify your jurisdiction"
    ]
  },

  yourRights: {
    en: [
      "The right to perform DIY roofing with a no-fee permit",
      "The right to clear fee information — the published fee schedule is available online",
      "Properties in the Clarkson Historical Overlay District may require Historic Preservation Board review for exterior work",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Clarkson Building Department handles permit applications, inspections, and code enforcement",
      "The Historic Preservation Board reviews exterior alterations in the Historical Overlay District",
      "The Zoning Board of Appeals meets on the 1st and 3rd Wednesdays of the month"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Clarkson Building Department",
      focus: "Building permits, code enforcement, inspections, zoning",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "3710 Lake Road, PO Box 858, Clarkson, NY 14430; phone; email",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-637-1145",
      url: "https://townofclarksonny.gov/building-department/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny", "roofing-residential-ny-mon-brockport-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "clarkson", "monroe county",
    "building permit", "town ordinance", "brockport",
    "historic preservation"
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
