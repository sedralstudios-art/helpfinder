// Glossary term: PINS (Person in Need of Supervision)
// Citation verified: NY Family Court Act Article 7 (§ 711+). Distinct
// from Juvenile Delinquency (JD) under Article 3. Cases require a
// pre-petition diversion meeting with probation before a petition can
// be filed. Disposition options include release with warning, in-home
// placement, relative or group-home placement up to 18 months.

export const PINS = {
  id: "pins",
  term: { en: "Person in Need of Supervision" },
  aka: ["PINS"],
  category: "family",
  subtags: ["children", "process", "juvenile"],

  context: {
    en: "You hear this when a parent, guardian, or school is dealing with a child under 18 who is out of control — running away, skipping school, refusing to follow rules at home — but has not committed a crime. PINS is the non-criminal side of juvenile court."
  },

  plainEnglish: {
    en: "A Family Court case for a child under 18 who is not under control and whose behavior is not a crime — like skipping school, running away, or not obeying a parent or guardian. Before anyone can file a PINS petition, the family has to meet with a probation officer to try services first. Only if those do not work can the case go to court. A judge can do a range of things: a warning, home-based services, living with a relative, or placement in a group or foster home for up to 18 months. PINS is different from Juvenile Delinquency — JD is for kids charged with something that would be a crime for an adult. PINS cases are for behavior that is not itself a crime."
  },

  whatToAsk: {
    en: [
      "Have we met with probation yet to try services first?",
      "What services are available before filing?",
      "If a case is filed, does my child get a free lawyer?",
      "What placements are possible, and how long can they last?",
      "Can the case be closed early if things improve?"
    ]
  },

  related: ["family-court", "public-defender"],
  legalEntryIds: ["custody-basics-ny"],

  citation: "NY FCA Article 7 (§ 711+)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/FCT/A7",
  lastVerified: "2026-04-15",
  status: "active"
};
