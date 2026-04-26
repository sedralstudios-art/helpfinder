export const YOUTHFUL_OFFENDER = {
  id: "youthful-offender",
  term: { en: "Youthful Offender (YO)" },
  aka: ["YO Status", "Youthful Offender Adjudication"],
  category: "criminal",
  subtags: ["disposition", "youth", "record-cleanup"],

  context: {
    en: "Youthful Offender is a special status in New York that lets some defendants ages 14-18 (and 19 in limited cases) replace a criminal conviction with a Youthful Offender adjudication. A YO finding is not a criminal conviction. The record is sealed and the defendant avoids most collateral consequences."
  },

  plainEnglish: {
    en: "A special status under NY CPL Article 720 that lets some young defendants replace a criminal conviction with a Youthful Offender (YO) adjudication. A YO adjudication is not a conviction. The record is sealed under CPL § 720.35 and the defendant generally avoids the collateral consequences that follow a conviction — like effects on employment, housing, immigration, and gun rights. Eligibility depends on age at the time of the offense, the nature of the offense, and the defendant's prior record. Defendants ages 14 through 18 are eligible for many offenses; some armed felonies and serious sex offenses are excluded or require special findings. The judge decides YO status at sentencing, after hearing from both sides. A YO adjudication can include a sentence of probation, conditional discharge, or in some cases a short jail or prison term, but the criminal record is sealed and replaced with the YO label. The defense lawyer is the best source on YO eligibility and strategy."
  },

  whatToAsk: {
    en: [
      "Is this defendant eligible for Youthful Offender status?",
      "What offenses are excluded from YO eligibility?",
      "What sentence options are available with a YO adjudication?",
      "What collateral consequences are avoided when YO status is granted?",
      "How does the sealing work, and who can still see the record?"
    ]
  },

  related: ["sealed-record", "conditional-discharge", "probation", "felony", "misdemeanor", "diversion-program"],
  legalEntryIds: [],

  citation: "NY CPL Article 720 (§§ 720.10-720.35)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A720",
  lastVerified: "2026-04-26",
  status: "active"
};
