export const ODOMETER_FRAUD_USED_CAR_NY = {
  id: "odometer-fraud-used-car-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY GBS 392-C",
  status: "active",

  title: { en: "Odometer Fraud — NY and Federal Protections Against Mileage Rollback on a Used Car" },

  summary: {
    en: "Rolling back or tampering with a vehicle's odometer is a federal and New York state crime. Federal law (49 USC 32703-32710) requires every used vehicle transfer to include a signed odometer disclosure statement, and buyers of rolled-back vehicles can recover three times actual damages or $10,000 per violation, plus attorneys' fees. New York General Business Law Section 392-c prohibits misrepresenting mileage and gives buyers a right to rescind the sale. Most states flag title brands for odometer tampering."
  },

  whoQualifies: {
    en: [
      "A person who bought a used car and later discovered the odometer was rolled back.",
      "A buyer from a licensed NY dealer whose vehicle's true mileage exceeds the mileage shown at sale.",
      "A buyer from a private seller who certified mileage but tampered with the odometer.",
      "A buyer who later sells a vehicle and discovers the person they purchased from committed fraud against them.",
      "A buyer with a vehicle history report showing a mileage discrepancy between prior title transfers.",
      "A buyer whose digital odometer was reset by a shop before resale."
    ]
  },

  whatItMeans: {
    en: "Two layers of law protect buyers from odometer fraud. Federal Odometer Act: 49 USC 32703 prohibits disconnecting, resetting, or altering any motor vehicle odometer with intent to change the mileage. 49 USC 32705 requires the transferor of any motor vehicle under 10 model years old (2022 amendment extended from 10 to 20 years for newer model years) to sign a written odometer disclosure statement on the title certifying the mileage at transfer. 49 CFR Part 580 implements. A person who violates the Act with intent to defraud is liable to the buyer for three times actual damages or $10,000, whichever is greater, plus attorneys' fees (49 USC 32710). New York GBS Section 392-c mirrors the federal rule. A seller who sells a motor vehicle with a materially inaccurate statement of mileage commits a Class A misdemeanor under Section 392-c. A buyer can sue for rescission (undoing the sale), compensatory damages, and — if the seller acted willfully — punitive damages. GBL 349 deceptive practices and common-law fraud are additional avenues. NY also brands the title: if a title comes from another state where the vehicle had a mileage discrepancy, the NY DMV flags the title. Buyers can run a free NMVTIS title check through nmvtis.dot.gov. How to detect: obvious signs include a vehicle's interior wear (steering wheel, seat fabric, pedals) inconsistent with displayed mileage, tire wear patterns suggesting more miles, and service records showing higher mileage at a prior service than the current odometer reading. Vehicle history reports (Carfax, AutoCheck) pull service records and inspection records that often reveal discrepancies — but they do not catch every rollback, especially if the vehicle was registered across state lines. A pre-purchase inspection by an independent mechanic can find red flags. Proving the claim: in court the buyer must show (1) the seller represented the mileage (a signed odometer statement is direct evidence), (2) the actual mileage was higher, and (3) the buyer relied on the misrepresentation. The odometer statement itself is usually sufficient for representation. For actual mileage, service records, prior title history, and inspection records usually suffice. Seller defenses: the seller may argue the odometer was broken and clearly disclosed (49 USC 32705 allows a 'not actual mileage' or 'exceeds mechanical limits' notation). A seller who fails to mark the disclosure but later claims the odometer was broken usually loses on credibility. Dealer liability: a NY licensed dealer is held to a higher standard. Dealer failure to verify title mileage before resale can create strict liability in some cases. Private sellers can still be liable if they signed the odometer statement. Statute of limitations: federal Odometer Act claims must be brought within 2 years of discovery of the violation (49 USC 32710(b)). NY claims generally follow the 3-year consumer-protection statute (CPLR 214). Remedies to seek: rescission (return the car for full price), alternative of damages (difference between represented price and actual value), treble or $10,000 statutory damages, attorneys' fees, plus reporting to NMVTIS and the DMV. Reporting: a buyer should also report the seller to the NY Attorney General and, if a dealer, the NYS DMV Consumer Protection office, for license revocation."
  },

  yourRights: {
    en: [
      "A buyer has the right to three times actual damages or $10,000, whichever is greater, under 49 USC 32710.",
      "A buyer has the right to rescind the sale under NY GBS 392-c.",
      "A buyer has the right to recover attorneys' fees under federal law.",
      "A buyer has the right to a signed odometer disclosure statement on title transfer.",
      "A buyer has the right to report the seller for criminal prosecution as a Class A misdemeanor.",
      "A buyer has 2 years from discovery to bring a federal Odometer Act claim.",
      "A buyer has the right to have the DMV flag the title for subsequent buyers.",
      "A buyer has the right to run a free NMVTIS title check before purchase."
    ]
  },

  legalOptions: {
    en: [
      "NYS DMV Consumer Protection at (518) 474-8943 — dealer complaints.",
      "NY Attorney General Consumer Frauds at (800) 771-7755 — private seller and dealer fraud.",
      "National Highway Traffic Safety Administration Odometer Fraud at (800) 424-9393.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — consumer fraud attorneys.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income buyer cases.",
      "Federal Trade Commission at (877) 382-4357.",
      "NMVTIS vehicle history check at nmvtis.dot.gov.",
      "Monroe County Consumer Protection at (585) 753-1661."
    ]
  },

  example: {
    en: "A Rochester driver bought a 2019 SUV from a small Monroe County used-car dealer for $18,500. The odometer showed 62,000 miles. Six months later her mechanic noticed the transmission mount bolts were stamped with torque markings suggesting a major service at around 140,000 miles. A Carfax pull showed an emissions inspection in Pennsylvania at 139,800 miles, before the NY title transfer. She consulted a consumer fraud attorney who sent a demand under 49 USC 32710 and GBS 392-c. The dealer refused, so the attorney sued. A jury found willful violation and awarded $55,500 (three times the actual damages of $18,500 after resale offset, plus statutory damages); the court added $28,000 in attorneys' fees. The DMV revoked the dealer's license based on the finding."
  },

  counsel: [
    {
      type: "referral",
      name: "Monroe County Bar Association Lawyer Referral",
      focus: "Odometer fraud, dealer misrepresentation, vehicle consumer claims",
      qualifier: "Any Monroe County vehicle buyer",
      access: "Phone at (585) 546-2130",
      outcome: "30-minute consultation, then contingency representation on strong cases",
      phone: "(585) 546-2130",
      url: "https://www.mcba.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "NYS DMV Consumer Protection",
      focus: "Licensed dealer misconduct, odometer misrepresentation, license revocation",
      qualifier: "Any buyer from a NY licensed dealer",
      access: "Phone at (518) 474-8943",
      outcome: "Investigation, administrative action, license sanctions",
      phone: "(518) 474-8943",
      url: "https://dmv.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "used-car-buyer-rights-ny",
    "lemon-law-used-car-ny",
    "auto-repair-rights-ny",
    "deceptive-business-practices-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "odometer fraud",
    "GBS 392-c",
    "49 USC 32705",
    "49 USC 32710",
    "mileage rollback",
    "NMVTIS",
    "odometer disclosure statement",
    "treble damages used car",
    "dealer fraud",
    "49 CFR 580"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/GBS/392-C",
    "https://www.law.cornell.edu/uscode/text/49/32705",
    "https://www.law.cornell.edu/uscode/text/49/32710"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
