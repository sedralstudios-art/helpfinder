// LGLW6-D_electrical-residential-ny-mon-greece-town_01.js
// Town of Greece electrical entry. Town inspectors do NOT inspect electrical.
// Three approved agencies: NYEIA, Commonwealth, MDIA.
// Source: greeceny.gov.

export const entry = {
  id: "electrical-residential-ny-mon-greece-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-greece-town",
  status: "active",

  title: {
    en: "Electrical work in the Town of Greece: what the town requires"
  },

  summary: {
    en: "Greece approves three Electrical Inspection Agencies: NYEIA, Commonwealth, and Middle Department. The town does NOT do electrical inspections itself — you must pick one of the three agencies. Electrical questions go to the agency you picked, not the town."
  },

  whatItMeans: {
    en: "Greece takes a hands-off approach to electrical. The town does NOT do electrical inspections. Town inspectors handle building, plumbing, and other trades. For electrical, you pick one of the town's three approved agencies.\n\nThe approved Electrical Inspection Agencies in Greece are:\n\n1) New York Electrical Inspection Agency (NYEIA) — (585) 436-4460\n2) Commonwealth Electrical Inspection Service — (585) 624-2380\n3) Middle Department Inspection Agency (MDIA) — (585) 454-5191\n\nThe town brochure tells homeowners and contractors: \"Address any questions regarding the electrical component of the installation to the registered agency that you have chosen to inspect the work.\"\n\nHomeowners CAN apply for permits on their own — \"even if the work is to be performed by others\" — but the town reminds them they take on \"a higher level of responsibility and liability for compliance.\" Whether a homeowner can do the actual electrical work themselves isn't explicitly addressed. Call the Building Department to confirm before DIY electrical work.\n\nGreece charges the agencies a $600 registration fee to operate in town. Per-permit electrical fees to the homeowner aren't clearly published — call the town."
  },

  example: {
    en: "A Greece homeowner wants to install a whole-house generator with an automatic transfer switch. The town tells him: electrical inspection isn't done by town staff. He picks MDIA. His electrician does the install. MDIA inspects, issues the Certificate of Compliance, and sends it to the town. The town closes out the permit."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work inside the Town of Greece",
      "Electricians with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner electrical rules"
    ]
  },

  yourRights: {
    en: [
      "The right to pick from three approved inspection agencies (NYEIA, Commonwealth, MDIA)",
      "The right to direct electrical questions to the agency you picked",
      "The right as a homeowner to apply for the permit yourself (with added liability responsibility)",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Greece Building Department handles overall building permits. It does NOT do electrical inspections.",
      "Three approved Electrical Inspection Agencies inspect electrical work and issue Certificates of Compliance",
      "The agencies register with the town at $600 each (practice-of-trade fee, paid by the agency, not by homeowners)",
      "For electrical-specific questions, contact the agency you picked, not the town"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Greece Building Department",
      focus: "Permit intake, agency list, overall code compliance (NOT electrical inspection itself)",
      qualifier: "Open to residents, property owners, and electricians working inside the Town",
      access: "Town Hall, 1 Vince Tofany Blvd; phone; email BuildingDepartment@greeceny.gov",
      outcome: "Permit issuance, agency list, code guidance",
      phone: "585-723-2443",
      url: "https://greeceny.gov/departments/building/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    },
    {
      type: "free",
      name: "New York Electrical Inspection Agency (NYEIA)",
      focus: "Electrical inspection and Certificate of Compliance for Greece properties",
      qualifier: "Any electrical work inside the Town of Greece",
      access: "Phone to schedule inspection",
      outcome: "Electrical inspection and certificate issuance",
      phone: "585-436-4460",
      url: "https://nyeia.com",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["electrical-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "electrical", "electrician", "greece",
    "monroe county", "NYEIA", "Commonwealth", "MDIA",
    "inspection agency", "third-party inspection",
    "EV charger", "service panel", "generator", "town ordinance"
  ],

  sources: [
    "https://greeceny.gov/departments/building/"
  ],

  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
