// LGLW6-D_roofing-residential-ny-mon-irondequoit-town_01.js
// Town of Irondequoit roofing entry. Non-structural repairs exempt.
// Re-shingling over sound decking = no permit. Sheathing replacement = permit.
// Fire Marshal permit required for heat-generating roofing equipment.
// Source: irondequoit.gov Building Dept + eCode360 Ch 98.

export const entry = {
  id: "roofing-residential-ny-mon-irondequoit-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-irondequoit-town",
  status: "active",

  title: {
    en: "Roofing in the Town of Irondequoit: what the town requires"
  },

  summary: {
    en: "In the Town of Irondequoit, no building permit is required for repairs that are not structural in nature and do not involve plumbing, electrical, heating, ventilation, or fire-protection systems. Simple re-shingling over sound decking is a non-structural repair. If the roof deck or structural framing needs replacement, a permit is required. A separate Fire Marshal permit is required when heat-generating roofing equipment or open-flame devices are used."
  },

  whatItMeans: {
    en: "Irondequoit's Town Code Chapter 98 exempts non-structural repairs from the building permit requirement. Re-shingling a roof where the underlying decking and framing are sound falls under this exemption — it is a repair, not a structural alteration. If the project involves replacing plywood sheathing, repairing structural framing, or altering the roof structure, a building permit is required. Additionally, the Fire Marshal requires a separate permit for any roof repair or replacement that uses heat-generating equipment or open-flame devices (such as torch-applied roofing). Contractors must carry liability, disability, and workers comp insurance (pays medical bills if a worker gets hurt on the job) with the Town of Irondequoit named as certificate holder for the duration of the project. Plumbing work requires a plumber licensed in the Town."
  },

  example: {
    en: "A roofer in Irondequoit tears off old asphalt shingles and inspects the decking. The plywood is solid with no water damage. The roofer installs new shingles directly over the existing sound decking. Because this is a non-structural repair, no Town building permit is needed. On a different job where the decking has rotted through, the roofer contacts the Building Department at 585-336-6020 to apply for a permit before replacing the sheathing."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors working inside the Town of Irondequoit",
      "Non-structural roof repairs (re-shingling over sound decking) do not require a building permit",
      "Structural roof work (sheathing or framing replacement) requires a building permit",
      "Use of heat-generating or open-flame roofing equipment requires a Fire Marshal permit"
    ]
  },

  yourRights: {
    en: [
      "The right to perform non-structural roof repairs without a building permit",
      "The right to contact the Building Department to verify permit needs before starting",
      "Qualified residents may be eligible for the Irondequoit Home Improvement Program (IHIP) which provides grant funds for specified renovation projects",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Town of Irondequoit Building Department handles permit applications, inspections, and code enforcement for construction work inside the Town",
      "The Fire Marshal handles permits for heat-generating roofing equipment and fire-related code enforcement",
      "The Irondequoit Home Improvement Program (IHIP) provides grant funds to qualified residents for specified home renovation projects",
      "Permit review generally takes 7 to 10 business days, up to 15 during peak building season"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Irondequoit Building Department",
      focus: "Building permits, code compliance, inspections",
      qualifier: "Open to residents, property owners, and contractors working inside the Town",
      access: "Town Hall; phone; inspection request line (requests by 3pm for next-day inspection)",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-336-6020",
      url: "https://www.irondequoit.gov/180/Building",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["roofing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "roofing", "irondequoit", "monroe county",
    "building permit", "town ordinance", "fire marshal",
    "non-structural repair", "IHIP home improvement grant"
  ],

  sources: [
    "https://www.irondequoit.gov/180/Building",
    "https://ecode360.com/6404661",
    "https://ecode360.com/6404785"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
