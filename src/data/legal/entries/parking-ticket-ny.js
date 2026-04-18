export const PARKING_TICKET_NY = {
  id: "parking-ticket-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 1200",
  status: "active",

  title: { en: "Parking Tickets in Rochester and Monroe County — Pay, Fight, or Consequences" },

  summary: {
    en: "Parking tickets may seem minor, but unpaid tickets in Rochester add up fast — late fees, registration holds, booting, towing, and eventually a suspended license. Understanding when to fight a ticket, how to request a hearing, and what happens if tickets go unpaid prevents a small fine from becoming a major problem."
  },

  whoQualifies: {
    en: [
      "Anyone who received a parking ticket in Rochester or a Monroe County town/village.",
      "Anyone whose vehicle has been booted or towed for unpaid tickets.",
      "Anyone whose registration has been suspended because of unpaid parking fines."
    ]
  },

  whatItMeans: {
    en: "In Rochester, parking enforcement issues tickets for expired meters, no-parking zones, street cleaning violations, fire hydrant blocks, and other violations. Each ticket has a deadline to pay or contest. If the ticket is not paid or contested by the deadline, late fees are added. After multiple unpaid tickets, the city can boot the vehicle (immobilize it with a wheel lock), tow it to the impound lot, or request that the DMV suspend the vehicle's registration. The City of Rochester Parking Violations Bureau handles payment and hearings for city-issued tickets. To contest a ticket, a hearing can be requested — the vehicle owner presents evidence (photos, receipts, witnesses) and a hearing officer decides. Common defenses include: the sign was missing or obscured, the meter was broken, the vehicle was legally parked, or the ticket was issued in error. In suburban towns, parking enforcement varies — some towns issue tickets through their own courts, others through the local police department."
  },

  yourRights: {
    en: [
      "The right to contest any parking ticket by requesting a hearing.",
      "The right to present evidence at the hearing (photos, meter receipts, witness statements).",
      "The right to receive the ticket in person or on the vehicle — tickets mailed after the fact may be challengeable.",
      "If the vehicle is booted or towed, the right to retrieve personal belongings.",
      "A payment plan may be available for large unpaid balances — contacting the Parking Violations Bureau is one path."
    ]
  },

  legalOptions: {
    en: [
      "Rochester parking tickets can be paid or contested through the City of Rochester Parking Violations Bureau at (585) 428-7600 or online at cityofrochester.gov.",
      "A hearing can be requested by mail or in person within the deadline printed on the ticket.",
      "If the vehicle has been booted, the boot can usually be removed after paying the outstanding balance. Contact the Parking Violations Bureau.",
      "If the vehicle has been towed to the city impound lot, contact (585) 428-7600 for the location and the amount owed (outstanding tickets + tow fee + daily storage).",
      "For suburban Monroe County tickets, the court or agency listed on the ticket handles payment and disputes."
    ]
  },

  example: {
    en: "A driver in Rochester receives a ticket for parking during street cleaning. She was parked legally the night before but did not see the temporary sign posted that morning. She takes a photo showing the sign was partially hidden by a tree branch. She requests a hearing with the Parking Violations Bureau. At the hearing, she presents the photo. The hearing officer dismisses the ticket."
  },

  counsel: [
    {
      type: "free",
      name: "City of Rochester Parking Violations Bureau",
      focus: "Parking ticket payment, hearings, boot/tow issues",
      qualifier: "Anyone with a Rochester parking ticket",
      access: "Phone, online, or in person",
      outcome: "Payment processing, hearing scheduling, dispute resolution",
      phone: "(585) 428-7600",
      url: "https://www.cityofrochester.gov/parking/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "traffic-ticket-options-ny",
    "license-suspension-unpaid-ny",
    "car-towed-repossessed-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "parking ticket",
    "parking fine",
    "unpaid ticket",
    "booted vehicle",
    "towed vehicle",
    "parking violations bureau",
    "contest parking ticket",
    "street cleaning ticket",
    "meter expired",
    "registration suspended parking"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/1200",
    "https://www.nysenate.gov/legislation/laws/VAT/1201",
    "https://www.cityofrochester.gov/parking/"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
