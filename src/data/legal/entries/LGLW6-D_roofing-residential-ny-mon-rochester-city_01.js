// LGLW6-D_roofing-residential-ny-mon-rochester-city_01.js
// City of Rochester roofing entry. Explicit roofing permit REQUIRED.
// Online submission mandatory for roofing permits.
// Historic preservation districts may require Certificate of Appropriateness.
// Introduces new tier value: "city".
// Source: cityofrochester.gov Building Permits + eCode360 Ch 39/90.

export const entry = {
  id: "roofing-residential-ny-mon-rochester-city",
  category: "trades",
  tier: "city",
  jurisdiction: "us-ny-monroe-rochester-city",
  status: "active",

  title: {
    en: "Roofing in the City of Rochester: what the city requires"
  },

  summary: {
    en: "The City of Rochester requires a building permit for re-roofing and roof replacement. Roofing permit applications must be submitted online — the City does not accept paper roofing applications. Properties in a Preservation District or designated as a Building of Historic Value may also require a Certificate of Appropriateness."
  },

  whatItMeans: {
    en: "Rochester explicitly requires a roofing permit for roof replacement and structural roof repairs. All roofing permit applications must be submitted through the City's online permitting system — paper applications are not accepted for roofing. Permit fees are calculated on a value-based schedule. The City reviews construction plans for compliance with the NYS Uniform Code and City of Rochester Building Code. Properties located in a Preservation District or designated as a Building of Historic Value may require a Certificate of Appropriateness for exterior work, even when a building permit alone would otherwise suffice. The Permit Office is available by appointment on Tuesdays and Thursdays, with walk-in hours on Mondays, Wednesdays, and Fridays."
  },

  example: {
    en: "A contractor needs to replace the roof on a house in the 19th Ward neighborhood of Rochester. The contractor submits a roofing permit application through the City's online system and pays the value-based fee. Before starting, the contractor checks whether the property is in a Preservation District — if it is, a Certificate of Appropriateness from the Preservation Board may also be required before exterior work can begin."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors performing roofing work inside the City of Rochester",
      "Re-roofing and roof replacement require a building permit",
      "Properties in Preservation Districts or with Historic Value designation may need a Certificate of Appropriateness"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Permit Office on what your project requires",
      "Certain minor repairs — such as replacing existing fixtures without altering wiring, plumbing, or structure — may not require a permit",
      "All state-level worker protections carried forward from New York State law"
    ]
  },

  legalOptions: {
    en: [
      "The City of Rochester Building Permit Office handles roofing, building, electrical, and plumbing permits through its online system",
      "The Bureau of Buildings and Compliance conducts inspections and enforces building codes",
      "The Preservation Board reviews applications for Certificates of Appropriateness in designated historic areas"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "City of Rochester Building Permit Office",
      focus: "Building permits, roofing permits, inspections, code compliance",
      qualifier: "Open to residents, property owners, and contractors working inside the City",
      access: "Appointments Tuesdays and Thursdays; walk-ins Mondays, Wednesdays, Fridays; phone; online",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-428-6526",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "rochester", "monroe county",
    "building permit", "city ordinance", "historic preservation",
    "online permit"
  ],

  sources: [
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permit-types-and-applications",
    "https://ecode360.com/8677400"
  ],

  lastAudited: "2026-04-10",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
