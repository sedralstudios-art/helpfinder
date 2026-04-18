export const TRAFFIC_TICKET_OPTIONS_NY = {
  id: "traffic-ticket-options-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Got a Traffic Ticket — Your Options in New York (Outside NYC)" },

  summary: {
    en: "When you receive a traffic ticket in New York outside of NYC, it goes to a local town, village, or city court — not the DMV's Traffic Violations Bureau. This matters because outside NYC, plea bargaining is available. Many tickets can be negotiated down to a lower offense with fewer points. Ignoring the ticket leads to a license suspension and a possible warrant."
  },

  whoQualifies: {
    en: [
      "Anyone who received a traffic ticket (moving violation, parking violation, or equipment violation) anywhere in New York outside of New York City.",
      "Anyone who received a ticket in Monroe County — including Rochester, all towns, and all villages.",
      "NYC tickets go to the Traffic Violations Bureau (TVB), where plea bargaining is NOT available. This entry covers non-NYC courts only."
    ]
  },

  whatItMeans: {
    en: "A traffic ticket is an accusatory instrument — it charges you with a violation or, in some cases, a misdemeanor. When you receive one, the ticket tells you the court, the charge, and the date you must respond by. Three main options exist. First: plead guilty by mail or online and pay the fine plus surcharge. This is the fastest but results in full points on your license and may raise insurance rates. Second: plead not guilty and request a court date. At court, the prosecutor may offer a plea bargain — a reduction to a lower charge with fewer points or no points. This is the most common path and often the best outcome. Third: plead not guilty and go to trial. The officer must appear and testify. If they do not, the ticket may be dismissed. If you do nothing — no plea, no appearance — the court notifies the DMV and your license is suspended for failure to appear. A bench warrant may also be issued."
  },

  yourRights: {
    en: [
      "Outside NYC, plea bargaining with the prosecutor is available in most courts.",
      "A not-guilty plea preserves the right to negotiate or go to trial.",
      "The officer must appear and testify at trial — if absent, the ticket may be dismissed.",
      "Points from a conviction stay on the license for 18 months for insurance purposes.",
      "A defensive driving course (PIRP) can reduce up to 4 points and lower insurance by 10% for 3 years.",
      "If the ticket is a misdemeanor (reckless driving, AUO), the right to a lawyer applies — including a free one if you cannot afford it."
    ]
  },

  legalOptions: {
    en: [
      "The court, date, and plea instructions are on the ticket. Responding before the deadline is critical — failure to respond leads to license suspension.",
      "In Rochester City Court, traffic cases are handled at the Hall of Justice, 99 Exchange Blvd. Phone: (585) 428-2444.",
      "For town and village courts in Monroe County, the court address and phone number are on the ticket. Court hours vary — many hold sessions only one or two evenings per month.",
      "A traffic lawyer is not required but can be helpful for serious tickets (speeding 20+ over, reckless driving, AUO). Some lawyers handle traffic tickets for a flat fee.",
      "The PIRP defensive driving course can be taken online or in person. It does not remove the conviction but reduces the point impact. Cost is approximately $25-$50 (subject to change — verify at dmv.ny.gov/tickets/point-insurance-reduction-program)."
    ]
  },

  example: {
    en: "A driver gets a speeding ticket for 20 mph over the limit on Route 104 in Webster. The ticket carries 6 points. He pleads not guilty by mail and receives a court date. At court, the prosecutor offers a reduction to a 1-10 mph over charge (3 points) with a surcharge. The driver accepts the plea. He also takes the PIRP course online to reduce the point impact to 0 visible points and get a 10% insurance discount for 3 years."
  },

  counsel: [
    {
      type: "free",
      name: "Rochester City Court — Traffic",
      focus: "Traffic ticket processing, pleas, court dates",
      qualifier: "Anyone with a ticket issued in Rochester city",
      access: "In person or phone",
      outcome: "Plea processing, trial scheduling",
      phone: "(585) 428-2444",
      url: "https://ww2.nycourts.gov/courts/7jd/courts/city/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "speeding-ticket-ny",
    "license-suspension-ny",
    "license-suspension-unpaid-ny",
    "dwi-first-offense-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "traffic ticket",
    "speeding ticket",
    "moving violation",
    "plea bargain ticket",
    "points on license",
    "defensive driving",
    "PIRP",
    "failure to appear",
    "traffic court",
    "reduce points",
    "fight ticket"
  ],

  sources: [
    "https://dmv.ny.gov/tickets",
    "https://dmv.ny.gov/tickets/point-insurance-reduction-program"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
