export const EXPUNGEMENT = {
  id: "expungement",
  term: { en: "Expungement" },
  aka: ["Expunge"],
  category: "criminal",
  subtags: ["record-cleanup", "post-conviction"],

  context: {
    en: "Expungement means erasing a criminal record so it is treated as if it never existed. New York generally does not have full expungement — most clean-slate options here are sealing, which limits who can see the record but does not destroy it. The exception is marijuana possession records, which are automatically expunged under the 2021 reform."
  },

  plainEnglish: {
    en: "The destruction or erasure of a criminal record. Many states use the word expungement to mean wiping the record completely. New York mostly uses sealing instead. Sealing limits who can see the record but does not destroy it. The exception is marijuana possession convictions and many low-level marijuana cases that the 2021 Marijuana Regulation and Taxation Act ordered to be automatically expunged. Other paths to clean up a record in New York include sealing under CPL § 160.50 (cases ending in the defendant's favor), CPL § 160.55 (non-criminal dispositions), and the Clean Slate Act (automatic sealing of certain old convictions starting in late 2024). True expungement of non-marijuana cases is generally not available in New York. People who already moved away from New York may have other options under the laws of their current state."
  },

  whatToAsk: {
    en: [
      "Is this case eligible for expungement, or only for sealing?",
      "Was the conviction marijuana-related and possibly expunged automatically?",
      "Is the case eligible for sealing under CPL 160.50, 160.55, or the Clean Slate Act?",
      "Does the record show on a background check after sealing?",
      "Can a free legal aid lawyer help with the application?"
    ]
  },

  related: ["sealed-record", "certificate-of-relief", "conditional-discharge", "misdemeanor", "felony"],
  legalEntryIds: [],

  citation: "NY MRTA (2021); NY CPL § 160.50, § 160.55; Clean Slate Act",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/160.50",
  lastVerified: "2026-04-26",
  status: "active"
};
