// Glossary term: DWI / DWAI
// Citation verified: NY Vehicle & Traffic Law § 1192.
// - § 1192(1) DWAI-Alcohol: BAC > 0.05 to 0.07 or visible impairment.
//   Traffic infraction, not a crime. 90-day suspension, $300-$500 fine.
// - § 1192(2) DWI per se: BAC >= 0.08. Misdemeanor (first offense).
//   6-month revocation minimum, $500-$1,000 fine, ignition interlock.
// - § 1192(3), (4), (4-a) DWI by impairment, DWAI-drugs, DWAI-combination.
// Aggravated DWI under § 1192(2-a) at BAC >= 0.18.

export const DWI_DWAI = {
  id: "dwi-dwai",
  term: { en: "DWI / DWAI" },
  aka: ["DWI", "DWAI", "Drunk Driving", "Driving While Intoxicated"],
  category: "vehicle",
  subtags: ["alcohol", "charge"],

  context: {
    en: "You hear this after a traffic stop involving alcohol or drugs. These are different charges with different penalties in New York — the numbers from the breath test or blood test usually decide which one applies."
  },

  plainEnglish: {
    en: "The main impaired-driving charges in New York. DWAI (Driving While Ability Impaired) is the lower charge — a BAC between 0.05 and 0.07 or other signs of impairment. A first-offense DWAI is a traffic infraction (not a crime). Penalties are a fine of $300 to $500, a 90-day license suspension, and a mandatory surcharge. DWI (Driving While Intoxicated) is a crime — a BAC of 0.08 or higher. First-offense DWI is a misdemeanor with a fine of $500 to $1,000, a license revocation of at least 6 months, an ignition interlock device in any car you drive, a mandatory surcharge, and possible jail. DWI creates a criminal record. Aggravated DWI (BAC 0.18+) has stiffer penalties."
  },

  whatToAsk: {
    en: [
      "What exactly am I charged with — DWI or DWAI, and under which subsection?",
      "What was my BAC, and was the testing procedure correct?",
      "Is this a misdemeanor (DWI) or a traffic infraction (DWAI)?",
      "What will happen to my license and when?",
      "Do I qualify for a free lawyer if this is a misdemeanor?"
    ]
  },

  related: ["license-suspension", "traffic-infraction", "driver-responsibility-assessment", "misdemeanor", "arraignment", "public-defender"],
  legalEntryIds: ["dwi-first-offense-ny"],

  citation: "NY VTL § 1192",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/VAT/1192",
  lastVerified: "2026-04-15",
  status: "active"
};
