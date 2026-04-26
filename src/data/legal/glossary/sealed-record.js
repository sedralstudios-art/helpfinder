// Glossary term: Sealed Record
// Citation verified: NY CPL § 160.50 (termination in favor of accused —
// auto-seal on dismissal/acquittal/ACD) and § 160.55 (non-criminal
// dispositions like violations). Also see NY Clean Slate Act for separate
// conviction-sealing pathway (different statute — link from legal library).

export const SEALED_RECORD = {
  id: "sealed-record",
  term: { en: "Sealed Record" },
  aka: ["Sealing", "Case Sealing"],
  category: "criminal",
  subtags: ["post-conviction", "disposition", "record-cleanup"],

  context: {
    en: "You hear this when a case ends and the judge orders the record closed off from the public. It also happens on its own after an ACD or after a dismissal."
  },

  plainEnglish: {
    en: "When a case is sealed, most people — including future employers and landlords — cannot see that it ever happened. Police and some government agencies can still see it for a few reasons (like a new case or a gun license). New York seals the record automatically when a case ends in the defendant's favor: dismissed, found not guilty, ACD finished clean, or charges dropped. No application is needed. For other cases, like finished convictions, an application may be required — the rules depend on the charge and how long it has been."
  },

  whatToAsk: {
    en: [
      "Will my case be sealed on its own, or do I need to apply?",
      "How long do I have to wait before I can apply?",
      "Who can still see the sealed record, and when?",
      "Do I need a lawyer to seal it?"
    ]
  },

  related: ["acd", "misdemeanor", "felony", "arraignment"],
  legalEntryIds: ["marijuana-sealing-ny"],

  citation: "NY CPL § 160.50; NY CPL § 160.55",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/160.50",
  lastVerified: "2026-04-15",
  status: "active"
};
