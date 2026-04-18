export const DWI_FIRST_OFFENSE_NY = {
  id: "dwi-first-offense-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 1192",
  status: "active",

  title: { en: "DWI First Offense — What Happens After a Drunk Driving Arrest in New York" },

  summary: {
    en: "A first-offense DWI in New York is a serious misdemeanor. It can mean a $500 to $1,000 fine, up to 1 year in jail, and losing your license for at least 6 months. The court also has to order an ignition interlock on your car. On top of that, the DMV charges a $250 fee each year for 3 years. If you have a CDL, you lose it for 1 year — even if you weren't driving a work truck."
  },

  whoQualifies: {
    en: [
      "Any driver arrested in New York for driving drunk or impaired (VTL § 1192).",
      "Three levels of charges: DWAI (Driving While Ability Impaired, BAC .05-.07, a traffic ticket), DWI (BAC .08 or higher, a misdemeanor), and Aggravated DWI (BAC .18 or higher, a more serious misdemeanor).",
      "CDL (commercial license) holders face a lower limit. Just .04 BAC triggers charges. You lose your CDL for a year even if you were in your personal car (VTL § 1192(5)).",
      "Drivers under 21 have the Zero Tolerance Law. Any BAC of .02 or higher triggers penalties from the DMV (VTL § 1192-a)."
    ]
  },

  whatItMeans: {
    en: "New York has three levels of alcohol-driving charges (VTL § 1192):\n\n1) DWAI (ability impaired, BAC .05-.07): Traffic infraction. Up to $500 fine, 15 days jail, 90-day license suspension.\n\n2) DWI (BAC .08 or higher): Misdemeanor. $500-$1,000 fine, up to 1 year jail, at least 6 months with no license.\n\n3) Aggravated DWI (BAC .18 or higher): Misdemeanor with bigger penalties. $1,000-$2,500 fine, up to 1 year jail, at least 1 year with no license.\n\nEvery conviction also adds a state fee of about $395. The DMV adds a Driver Responsibility Assessment: $250 a year for 3 years."
  },

  yourRights: {
    en: [
      "You have the right to a lawyer at every step — arraignment, hearings, and trial. If you can't afford one, the court appoints one for you.",
      "You have the right to plead not guilty and have a trial. The prosecutor has to prove every part of the case beyond a reasonable doubt.",
      "You have the right to challenge the traffic stop, the field sobriety tests, and the accuracy of any chemical test (breathalyzer, blood, or urine).",
      "You have the right to refuse a chemical test. But refusing triggers an automatic 1-year license revocation through a separate DMV hearing — even if you beat the criminal charge.",
      "After 30 days of license suspension or revocation, you may qualify for a conditional license through the Impaired Driver Program (IDP). A conditional license lets you drive only for work, school, medical visits, and court-ordered programs.",
      "A second DWI within 10 years is a Class E felony. Penalties: up to 4 years in prison, $1,000-$5,000 fine, and at least 1 year with no license."
    ]
  },

  legalOptions: {
    en: [
      "A first DWI case goes to your local criminal court (VTL § 1192). Outside New York City, you have the right to a jury trial in most courts.",
      "Many prosecutors will offer a plea reduction from DWI to DWAI if the evidence allows. A DWAI plea avoids a criminal record. It still means a license suspension, fine, state fee, and the annual DMV fee. New York usually doesn't allow the charge to be reduced to something that isn't alcohol-related.",
      "If you are convicted of DWI, the judge must order an ignition interlock on any car you own or drive. You have to keep it for at least 6 months. You pay for the install and monthly monitoring (Leandra's Law, VTL § 1193).",
      "The DMV runs a separate hearing for chemical test refusals. That hearing is separate from the criminal case. You can lose your license from the DMV hearing even if the criminal case is dismissed.",
      "Free defense lawyer: Monroe County Public Defender's Office at (585) 753-4210, for anyone charged with a crime who can't afford a lawyer.",
      "The Impaired Driver Program (IDP) is a 7-week course. Most people convicted of DWI have to finish it to get their full license back. Info at dmv.ny.gov."
    ]
  },

  example: {
    en: "Brian was stopped at a checkpoint and arrested for DWI after a breathalyzer showed .11 BAC. At arraignment the next morning, the judge suspended his license and appointed a public defender. His lawyer looked at the case and worked out a plea reduction to DWAI. Brian paid a $300 fine plus the $395 state fee, got a 90-day license suspension, and had to finish the Impaired Driver Program. After 30 days, he got a conditional license so he could drive to work while finishing the program."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Public Defender's Office",
      focus: "Criminal defense for all charges including DWI, DWAI, and Aggravated DWI",
      qualifier: "Anyone charged with a crime in Monroe County who cannot afford an attorney",
      access: "Appointed at arraignment or by request",
      outcome: "Full criminal defense representation from arraignment through trial or disposition",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/defender",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Civil consequences of DWI — license issues affecting employment, housing, benefits",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Advice and representation on civil impacts of a criminal case",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "speeding-ticket-ny",
    "rights-when-arrested-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "DWI",
    "DUI",
    "drunk driving",
    "arrested for drinking and driving",
    "breathalyzer",
    "BAC",
    "blood alcohol",
    "license revoked",
    "ignition interlock",
    "first offense DWI",
    "DWAI",
    "impaired driving",
    "drinking and driving",
    "got pulled over",
    "refused breathalyzer",
    "CDL DWI"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/1192",
    "https://dmv.ny.gov/tickets/penalties-alcohol-or-drug-related-violations",
    "https://www.criminaljustice.ny.gov/ops/erc/faqs.htm",
    "https://dmv.ny.gov/tickets/pay-driver-responsibility-assessment",
    "https://www.nysenate.gov/legislation/laws/VAT/1193"
  ],

  lastVerified: "2026-04-13",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
