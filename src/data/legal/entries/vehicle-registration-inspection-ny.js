export const VEHICLE_REGISTRATION_INSPECTION_NY = {
  id: "vehicle-registration-inspection-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 401",
  status: "active",

  title: { en: "Vehicle Registration, Inspection, and Insurance Requirements in New York" },

  summary: {
    en: "Every vehicle driven on public roads in New York must be registered, inspected annually, and insured. Driving without any of these can result in tickets, fines, vehicle impoundment, and license suspension. Understanding the requirements and where to get help if you cannot afford them can prevent a minor lapse from becoming a major problem."
  },

  whoQualifies: {
    en: [
      "Any person who owns or operates a motor vehicle on public roads in New York.",
      "Registration, inspection, and insurance requirements apply to all passenger cars, trucks, motorcycles, and most trailers.",
      "Vehicles that are not driven on public roads (farm-use only, stored, etc.) may be exempt from some requirements."
    ]
  },

  whatItMeans: {
    en: "Registration: every vehicle must be registered with the NY DMV. Registration must be renewed every two years. Driving with expired registration is a traffic infraction and can result in a fine and points. Inspection: every registered vehicle must pass a safety and emissions inspection once a year at a licensed inspection station. An inspection sticker that is more than 60 days expired can result in a ticket. A vehicle that fails inspection must be repaired and re-inspected. Insurance: New York requires minimum liability insurance on every registered vehicle. The minimum is 25/50/10 (bodily injury per person/per accident/property damage) plus no-fault coverage. Driving without insurance is a serious offense — the registration is suspended, and reinstating it requires paying a civil penalty plus showing proof of new insurance. If any of these lapse and you are pulled over or involved in an accident, the consequences compound quickly — tickets, fines, suspension, impoundment, and even criminal charges in some cases (driving while suspended)."
  },

  yourRights: {
    en: [
      "The right to a grace period for inspection — a vehicle can be driven up to 60 days past the inspection expiration (though some officers still ticket).",
      "The right to contest a registration or inspection ticket in court.",
      "If registration is suspended for lapsed insurance, the right to reinstate by showing proof of new coverage and paying the civil penalty.",
      "The right to request a payment plan for DMV civil penalties in some cases.",
      "Low-income drivers may qualify for reduced-cost insurance through the NY Automobile Insurance Plan."
    ]
  },

  legalOptions: {
    en: [
      "Registration can be renewed online at dmv.ny.gov, by mail, or in person at any DMV office. In Monroe County, DMV offices are in Rochester, Greece, and other locations.",
      "Inspection stations are licensed auto repair shops and gas stations. A list is available at dmv.ny.gov or by calling (518) 474-8943.",
      "Insurance quotes can be compared through the NY DFS at dfs.ny.gov. The NY Automobile Insurance Plan provides coverage for drivers who cannot obtain it through the regular market.",
      "If a registration is suspended for lapsed insurance, the DMV sends a notice. The civil penalty was in the range of several hundred dollars as of April 2026 (subject to change — verify at dmv.ny.gov/insurance/lapse-insurance-702).",
      "Free legal advice on traffic and registration issues is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A driver in Gates lets his insurance lapse for one month because of a tight budget. The insurance company notifies the DMV, which suspends his registration. He does not realize it until he is pulled over and ticketed for driving with a suspended registration. He reinstates coverage with a new insurance policy, pays the DMV civil penalty, and resolves the ticket in court. The judge reduces the fine because he acted quickly."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County DMV",
      focus: "Registration, titles, license, insurance compliance",
      qualifier: "Any vehicle owner in Monroe County",
      access: "In person or online",
      outcome: "Registration processing, penalty information",
      phone: "(585) 753-7600",
      url: "https://dmv.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "license-suspension-ny",
    "license-suspension-unpaid-ny",
    "traffic-ticket-options-ny",
    "dwi-first-offense-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "vehicle registration",
    "car registration",
    "inspection",
    "inspection sticker",
    "car insurance",
    "no insurance",
    "lapsed insurance",
    "registration suspended",
    "DMV",
    "expired registration",
    "annual inspection"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/401",
    "https://www.nysenate.gov/legislation/laws/VAT/301",
    "https://dmv.ny.gov/registration",
    "https://dmv.ny.gov/insurance/lapse-insurance-702"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
