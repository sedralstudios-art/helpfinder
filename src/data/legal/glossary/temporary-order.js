export const TEMPORARY_ORDER = {
  id: "temporary-order",
  term: { en: "Temporary Order" },
  aka: ["Pendente Lite Order", "Interim Order"],
  category: "courts",
  subtags: ["civil", "family", "procedure"],

  context: {
    en: "A temporary order is a court order put in place while a case is still pending. It addresses urgent issues that cannot wait for the final decision. Common examples are temporary custody, temporary support, and temporary orders of protection."
  },

  plainEnglish: {
    en: "A short-term court order issued while the case is still being decided. It handles urgent matters that cannot wait for a final order. In a divorce or custody case, a temporary order can set parenting time, decide who lives in the marital home, set temporary child support and spousal support, and bar either party from selling marital assets. In a family-safety case, a temporary order of protection can issue on the day the petition is filed if the judge finds good cause. In a civil case, a temporary restraining order or preliminary injunction can pause an action while the court considers the merits. Temporary orders stay in effect until the court issues a different order or the case ends. The standard for getting a temporary order is usually lower than the standard for the final order, but the requesting party still has to show some basis for the relief."
  },

  whatToAsk: {
    en: [
      "What kind of temporary order fits this situation?",
      "What does the court need to see to grant a temporary order?",
      "How quickly can a temporary order issue — same day, days, weeks?",
      "How long does a temporary order last?",
      "Can the temporary order be modified before the final order?"
    ]
  },

  related: ["restraining-order", "order-of-protection", "family-offense-petition", "custody"],
  legalEntryIds: [],

  citation: "NY DRL § 240; NY CPLR Article 63 (injunctions); FCA Article 8",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/A63",
  lastVerified: "2026-04-26",
  status: "active"
};
