// LGLW6-D_plumbing-residential-ny-mon-rush-town_01.js
// Town of Rush plumbing entry. Small rural town. Ordinary like-kind repair is
// exempt from permit. Scope-based permit triggers, not licensee-based.
// Source: townofrush.com.

export const entry = {
  id: "plumbing-residential-ny-mon-rush-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-rush-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Rush: what the town requires"
  },

  summary: {
    en: "Rush is a small rural town. Ordinary like-kind plumbing repairs (fixing a leak, replacing a faucet) don't need a permit. Structural changes and work covered by the state Plumbing Code need a permit. Call the Building Inspector to confirm fees and homeowner rules before starting."
  },

  whatItMeans: {
    en: "Rush publishes a permit-trigger list that's based on project scope, not licensee type. Ordinary like-kind replacement (faucet swap, clog clearing, leak repair at an existing fitting) is exempt from permits.\n\nBut structural changes — new fixture installation, water heater replacement, sewer line work — are covered by the state Plumbing Code and typically need a permit. The exact list of what needs a permit isn't spelled out on the public page; call to confirm.\n\nRush doesn't have its own plumber licensing chapter. Plumbers need liability insurance and workers comp. Whether Rush honors a Rochester Examining Board plumber certificate and whether homeowners can pull plumbing permits aren't published. Call (585) 533-1312 to confirm.\n\nThe Town Clerk accepts permit applications outside inspector hours (Mon-Thu 7am-12pm)."
  },

  example: {
    en: "A Rush homeowner's toilet flush valve breaks. Fixing it is a like-kind repair — no permit needed. A few months later, they want to add a laundry room with new plumbing. That's a structural addition and needs a permit. They call Building Inspector, apply, and get inspected after install."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Rush",
      "Anyone doing ordinary like-kind plumbing repairs (no permit needed for these)",
      "Plumbers with liability insurance and workers comp for bigger jobs",
      "Homeowners — call the Building Inspector to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to do ordinary like-kind repairs without a permit",
      "The right to clear guidance from the Building Inspector on what counts as \"structural\"",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Rush Building Department handles plumbing permits and inspections",
      "Ordinary like-kind replacement is exempt from permits (per published guidance)",
      "The Town Clerk can accept applications when the Building Inspector isn't in"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Rush Building Department",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents and contractors working in Rush",
      access: "5977 East Henrietta Rd; phone; hours M-Th 7am-12pm",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-533-1312",
      url: "https://www.townofrush.com/departments/building.html",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "rush", "monroe county",
    "building permit", "rural", "like kind repair",
    "water heater", "town ordinance"
  ],

  sources: [
    "https://www.townofrush.com/departments/building.html"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
