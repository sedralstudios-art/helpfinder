// LGLW6-D_electrical-residential-ny-mon-rochester-city_01.js
// City of Rochester electrical entry. Examining Board licenses electricians.
// Three license types. CIVICS portal for permits. Homeowner self-work allowed.
// Source: cityofrochester.gov + eCode360 Ch 49.

export const entry = {
  id: "electrical-residential-ny-mon-rochester-city",
  category: "trades",
  tier: "city",
  jurisdiction: "us-ny-monroe-rochester-city",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Electrical work in the City of Rochester: what the city requires"
  },

  summary: {
    en: "Rochester licenses its own electricians through the Examining Board of Electricians. There are three license types: Master Three-Phase, Master Single-Phase, and Single-Phase Residential. Homeowners can pull their own electrical permits on their own single-family home. Permits are filed online through the CIVICS portal."
  },

  whatItMeans: {
    en: "Rochester is one of the few upstate cities that licenses its own electricians. The Examining Board of Electricians issues three license types:\n\n1) Master Three-Phase — for commercial and industrial work\n2) Master Single-Phase — full residential authority\n3) Single-Phase Residential — residential only, simpler scope\n\nThe Board is at City Hall Room 121B. Phone (585) 428-9339. The licensing rules are in Chapter 49 of the City Code.\n\nElectrical permits are separate from building permits. File them online through the CIVICS portal at infor.cityofrochester.gov. The city has three permit types:\n\n- Electrical Permits — general electrical work. Pulled by a licensed city electrician OR a single-family owner-occupant doing their own work.\n- Electrical Reconnections — for restoring power (anyone can apply).\n- Electrical Systems — a special permit covering EV chargers, generators, geothermal, and energy storage.\n\nHomeowner self-work is allowed in Rochester. This is unusual — NYC and Buffalo don't allow it.\n\nInspections are done by third-party Electrical Inspection Agencies approved by the city. Call the Building Permit Office at (585) 428-6526 to confirm the current approved agency list."
  },

  example: {
    en: "A homeowner in Rochester's 19th Ward wants to upgrade the service panel from 100A to 200A. She goes to the CIVICS portal and files an Electrical Permit. Because she's the owner-occupant of a single-family home, she can do the work herself. After the install, she picks an approved Electrical Inspection Agency from the city's list. The agency inspects, issues the Certificate of Compliance, and sends it to the city. The city closes out the permit."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing electrical work inside the City of Rochester",
      "Electricians holding a Rochester license (Master Three-Phase, Master Single-Phase, or Single-Phase Residential)",
      "Homeowners working on their own single-family home (owner-occupants)"
    ]
  },

  yourRights: {
    en: [
      "The right to pull an electrical permit as a homeowner on your own single-family home — unusual for a NY city",
      "The right to pick from the city's approved Electrical Inspection Agencies",
      "The right to file permits online through the CIVICS portal",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Examining Board of Electricians issues city electrician licenses. Office at City Hall Room 121B, phone (585) 428-9339.",
      "The Building Permit Office processes electrical permits through the CIVICS online portal at infor.cityofrochester.gov.",
      "The Bureau of Buildings and Compliance enforces electrical code violations.",
      "Third-party Electrical Inspection Agencies issue the Certificate of Compliance after passed inspection. The list of approved agencies is available from the Building Permit Office.",
      "Unlicensed electrical work is a city code violation and can lead to fines and stop-work orders."
    ]
  },

  counsel: [
    {
      type: "free",
      name: "City of Rochester Examining Board of Electricians",
      focus: "Electrician licensing, master certificates, single-phase residential license",
      qualifier: "Electricians operating inside the City of Rochester",
      access: "City Hall Room 121B; phone",
      outcome: "License issuance, certificate of competency",
      phone: "585-428-9339",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/examining-board-electricians",
      verified: true,
      bilingual: false,
      languages: ["en"]
    },
    {
      type: "free",
      name: "City of Rochester Building Permit Office",
      focus: "Electrical permits, inspection agency list, code compliance",
      qualifier: "Open to residents, property owners, and licensed electricians inside the City",
      access: "Online through CIVICS portal; phone; walk-ins Mon/Wed/Fri",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-428-6526",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["electrical-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "electrical", "electrician", "rochester",
    "monroe county", "master electrician", "examining board",
    "CIVICS portal", "homeowner electrical", "service panel",
    "EV charger", "city ordinance"
  ],

  sources: [
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/examining-board-electricians",
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permit-types-and-applications",
    "https://ecode360.com/8675854"
  ],

  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
