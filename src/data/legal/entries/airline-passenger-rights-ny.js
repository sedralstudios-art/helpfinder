export const AIRLINE_PASSENGER_RIGHTS_NY = {
  id: "airline-passenger-rights-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-regulation",
  primaryStatute: "14 CFR PART 259",
  status: "active",

  title: { en: "Airline Passenger Rights — Delays, Cancellations, Refunds, and Compensation Rules" },

  summary: {
    en: "Federal rules require airlines to refund passengers for canceled or significantly delayed flights. For domestic flights the refund rule applies whether the cause was weather, mechanical, or airline-caused. Tarmac delays of three hours or more trigger specific protections. Involuntary bumping triggers compensation. These rules come from DOT regulations, not statute, and the enforcement channel is a DOT complaint."
  },

  whoQualifies: {
    en: [
      "Any air passenger whose flight was canceled or significantly delayed or changed.",
      "Any passenger involuntarily bumped from an oversold flight.",
      "Any passenger stuck on a plane at the gate or tarmac for three or more hours.",
      "Any passenger who believes an airline fee or charge was misleading or improperly disclosed."
    ]
  },

  whatItMeans: {
    en: "U.S. Department of Transportation regulations at 14 CFR Parts 259, 250, and 399 govern airline passenger rights for flights to, from, or within the United States on both U.S. and foreign carriers. Refunds (14 CFR Part 259 and DOT 2024 final rule): if an airline cancels a flight or significantly delays or changes it, the passenger is entitled to a refund of the fare, taxes, fees, and any paid ancillary services (checked bag, seat selection, Wi-Fi) if those were not provided. A significant change for domestic flights means a delay of three or more hours; for international, six or more hours. The refund must be automatic (no forms, no phone calls required) and in the original form of payment. Passengers who accept rebooking or travel credit can do so but are not required to. Tarmac delays (14 CFR Part 259): on domestic flights, airlines cannot hold a plane on the tarmac for more than three hours without allowing passengers to deplane (four hours for international). Water, food, and functioning lavatories are required after two hours. Involuntary denied boarding (14 CFR Part 250): if an airline bumps a confirmed passenger from an oversold flight, compensation is required — 200 percent of the one-way fare (capped at $775 by statute, adjusted for inflation) if the passenger arrives 1-2 hours late domestic; 400 percent (capped at $1,550) if longer. Voluntary bumping (accepting a voucher for giving up a seat) has no standard rate — the airline can offer whatever, and the passenger can negotiate. Lost or damaged baggage: airlines are liable up to $3,800 on domestic flights (2024 maximum, adjusted annually) under 14 CFR 254. Complaints: DOT's Aviation Consumer Protection office handles complaints. Filing a DOT complaint does more than pursuing the airline alone — DOT tracks complaint rates and publishes airline-specific data that affects airlines' public reputation. Enforcement usually results in a DOT-mediated refund or credit. Unlike EU Regulation 261, the U.S. has no general compensation-for-delay rule — a delayed flight that is not canceled usually entitles only to food vouchers and hotel accommodation in some cases, not cash compensation."
  },

  yourRights: {
    en: [
      "A passenger has the right to an automatic refund if an airline cancels or significantly changes a flight and the passenger does not take the rebooking.",
      "A passenger has the right to deplane after 3 hours on the tarmac (domestic) or 4 hours (international).",
      "A passenger involuntarily bumped has the right to compensation based on arrival delay length.",
      "Baggage liability is capped at $3,800 domestic (adjusted yearly).",
      "A passenger has the right to file a DOT complaint, which typically produces faster airline response than going to the airline alone.",
      "A passenger refused boarding for a disability-related reason can file both DOT and DOJ ADA complaints (42 USC 41705)."
    ]
  },

  legalOptions: {
    en: [
      "For a canceled or significantly changed flight: if not automatically refunded within 7 business days (credit card) or 20 days (other), file a DOT complaint.",
      "File DOT complaints at secure.dot.gov/air-travel-complaint or (202) 366-2220.",
      "For involuntary denied boarding: the airline must provide a written statement of passenger rights — request it at the gate.",
      "For lost or damaged baggage: file a property irregularity report (PIR) at the airport before leaving.",
      "For service animal or disability access issues: file a DOT complaint and also contact Disability Rights Advocates.",
      "State-level consumer protection does not usually cover airlines because of federal preemption, but the NY Attorney General can mediate some disputes at (800) 771-7755."
    ]
  },

  example: {
    en: "A family flying out of Rochester had their return flight canceled by the airline the morning of travel due to a crew scheduling issue. The airline offered a rebooking two days later. The family declined and asked for a refund. The airline resisted, offering only travel credit. The passenger filed a DOT complaint citing 14 CFR Part 259 and the 2024 automatic-refund rule. Within two weeks the airline refunded the full fare, taxes, and the checked-bag fee to the original credit card."
  },

  counsel: [
    {
      type: "government",
      name: "U.S. DOT — Aviation Consumer Protection",
      focus: "Airline complaints, refund enforcement, disability access",
      qualifier: "Any U.S. air passenger",
      access: "Phone at (202) 366-2220 or secure.dot.gov/air-travel-complaint",
      outcome: "DOT-mediated resolution, tracked complaint",
      phone: "(202) 366-2220",
      url: "https://www.transportation.gov/airconsumer",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "internet-purchase-chargebacks-ny",
    "consumer-arbitration-clause-ny-cl",
    "ada-title-iii-public-accommodations-ny",
    "internet-purchase-chargebacks-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "airline refund",
    "flight cancellation refund",
    "tarmac delay rule",
    "denied boarding compensation",
    "airline baggage liability",
    "DOT complaint",
    "14 CFR 259",
    "14 CFR 250",
    "3 hour tarmac rule",
    "automatic airline refund"
  ],

  sources: [
    "https://www.law.cornell.edu/cfr/text/14/part-259",
    "https://www.law.cornell.edu/cfr/text/14/part-250",
    "https://www.law.cornell.edu/cfr/text/14/part-399",
    "https://www.transportation.gov/airconsumer"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
