// LGLW6-D_roofing-residential-ny-mon-pittsford-town_01.js
// Town of Pittsford roofing entry. Layers on top of the state floor.
// Source: Town of Pittsford Building Dept guidelines (Rev. 03/04/2025)
//         and eCode360 Chapter 64.

export const entry = {
  id: "roofing-residential-ny-mon-pittsford-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-pittsford-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Pittsford: what the town requires"
  },

  summary: {
    en: "The Town of Pittsford does not require a building permit for re-roofing, siding, or replacement windows on existing homes. State-level rules still apply. The Village of Pittsford, which sits inside the Town, has separate rules."
  },

  whatItMeans: {
    en: "As of the most recent Town of Pittsford Building Department guidance (revised March 2025), building permits for roofing, siding, and replacement windows on existing houses are not required inside the Town. All state-level rules still apply — Workers' Compensation, NYS Uniform Code, and wage laws. Any contractor working in the Town of Pittsford must provide proof of $1,000,000 liability insurance listing the Town of Pittsford (11 South Main Street, Pittsford, NY 14534) as certificate holder, plus Workers' Compensation and disability insurance or a NYS waiver of exemption. Firms performing plumbing work must hold an annual plumbing license from the Town Code Enforcement Department."
  },

  example: {
    en: "A homeowner on Monroe Avenue in the Town of Pittsford hires a roofer to replace asphalt shingles. Because the property is inside the Town boundary (not the Village), no Town building permit is required. The contractor still provides Workers' Compensation insurance and lists the Town as certificate holder on their liability policy before starting."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Pittsford boundary, outside the Village of Pittsford",
      "Roofing, siding, and replacement window work on existing one- and two-family homes",
      "Properties designated as Town of Pittsford Landmarks may require Design Review and Historic Preservation Board approval for exterior work"
    ]
  },

  yourRights: {
    en: [
      "The right to have re-roofing, siding, or window replacement done without a Town building permit",
      "All state-level worker protections carried forward from New York State law",
      "The right to verify a contractor's insurance filings with the Town Code Enforcement Department before work begins"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Pittsford Code Enforcement Department handles contractor insurance verification and construction complaints inside the Town boundary",
      "The Town of Pittsford maintains a plumbing license registry for firms licensed to perform plumbing work inside the Town",
      "Properties in or adjacent to historically designated or inventoried properties may require review by the Design Review and Historic Preservation Board before exterior work begins"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Pittsford Code Enforcement Department",
      focus: "Building permits, contractor insurance verification, construction complaints",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Walk-in at Town Hall, 11 South Main Street, Pittsford, NY 14534; phone",
      outcome: "Permit guidance, insurance verification, complaint intake",
      phone: "585-248-6265",
      url: "https://www.townofpittsfordny.gov/code",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "pittsford", "monroe county",
    "building permit", "town ordinance", "contractor insurance"
  ],

  sources: [
    "https://ecode360.com/6434784",
    "https://www.townofpittsfordny.gov/code",
    "https://www.townofpittsfordny.gov/sites/default/files/forms/bldg_permit.pdf"
  ],

  lastAudited: "2026-04-10",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
