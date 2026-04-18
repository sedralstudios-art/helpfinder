export const CAR_TOWED_REPOSSESSED_NY = {
  id: "car-towed-repossessed-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 182",
  status: "active",

  title: { en: "Your Car Was Towed or Repossessed — What to Do in New York" },

  summary: {
    en: "If your car was towed by the city or a private company, or repossessed by a lender, you have rights. New York law limits towing fees, requires notice before sale, and gives you the right to get your belongings out of the car. For repossession, the lender must follow specific rules and you may have the right to get the car back."
  },

  whoQualifies: {
    en: [
      "Anyone whose vehicle was towed from a public street for parking violations, expired registration, or other traffic reasons.",
      "Anyone whose vehicle was towed by a private company from a parking lot, private property, or tow-away zone.",
      "Anyone whose vehicle was repossessed by a lender or finance company for missed loan payments."
    ]
  },

  whatItMeans: {
    en: "City/police tow: in Rochester, vehicles can be towed for unpaid parking tickets, expired registration, blocking a hydrant, or being in a tow-away zone. The car goes to the city impound lot. The owner must pay the outstanding tickets plus the tow fee plus daily storage to get it back. If not claimed within a set period, the city can sell the vehicle at auction. The owner has the right to a hearing to contest the tickets before paying. Private tow: a private property owner can authorize towing from their lot, but the tow company must follow VTL § 182 requirements — including posting signs, charging only authorized rates, and releasing personal belongings from the car without charge. Repossession: if a car loan is in default, the lender can repossess the vehicle without going to court (self-help repossession). However, the repossession cannot involve a breach of the peace — meaning the repo agent cannot use force, threats, or break into a locked garage. After repossession, the lender must send a notice before selling the vehicle, and the borrower has the right to 'redeem' (pay off the full loan balance) before the sale. Under UCC Article 9, the sale must be 'commercially reasonable.' If there is a deficiency (the sale price is less than what is owed), the lender can sue for the difference."
  },

  yourRights: {
    en: [
      "For city tows: the right to a hearing to contest the underlying tickets before paying.",
      "For private tows: the tow company must post signs, follow rate limits, and release personal property from the vehicle without charge.",
      "For repossession: the repo agent cannot use force, break into a locked structure, or breach the peace.",
      "After repossession: the lender must provide written notice before selling the vehicle.",
      "The borrower has the right to redeem the vehicle by paying the full balance before the sale.",
      "Personal belongings in the vehicle must be returned regardless of the type of tow or repo.",
      "If the repossession was wrongful (breach of the peace, no default), the borrower can sue for damages."
    ]
  },

  legalOptions: {
    en: [
      "For city tows in Rochester: the impound lot can be contacted at (585) 428-7600. Parking ticket hearings can be requested through the Rochester Parking Violations Bureau.",
      "For private tows: a complaint about overcharging or improper towing can be filed with the NY Department of State at (518) 474-4429 or the NY AG Consumer Helpline at (800) 771-7755.",
      "For repossession: free legal help is available through Legal Aid Society of Rochester at (585) 232-4090. They can evaluate whether the repossession was lawful and whether defenses exist to a deficiency claim.",
      "Under VTL § 182, private tow companies must clearly post their rates and authorization. Unauthorized towing may be challenged.",
      "If a lender breached the peace during repossession, the borrower may have a claim for damages under UCC Article 9."
    ]
  },

  example: {
    en: "A woman in Rochester comes outside and her car is gone. She calls the police non-emergency line and learns it was towed by the city for unpaid parking tickets. She goes to the impound lot and is told the total is $350 for tickets, tow, and storage. She requests a hearing on two tickets she believes were issued in error. The hearing officer dismisses one ticket, reducing her total. She pays the remainder and gets her car back."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Repossession defense, consumer rights, deficiency claims",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "respond-to-lawsuit-ny",
    "license-suspension-unpaid-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "car towed",
    "towed vehicle",
    "repossession",
    "repo",
    "car repo",
    "impound",
    "tow fee",
    "private tow",
    "breach of peace",
    "get car back",
    "parking tickets",
    "deficiency balance"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/182",
    "https://www.law.cornell.edu/ucc/9"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
