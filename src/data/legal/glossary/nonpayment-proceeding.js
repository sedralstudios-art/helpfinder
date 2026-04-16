// Glossary term: Nonpayment Proceeding
// Citation verified: NY RPAPL § 711(2). 2019 HSTPA amended to require a
// 14-day WRITTEN rent demand (oral demands abolished). RPL § 235-e also
// requires a certified-mail reminder if rent is not received within 5
// days of due date — failure to send is an affirmative defense. Tenant
// answer period extended to 10 days under RPAPL § 732.

export const NONPAYMENT_PROCEEDING = {
  id: "nonpayment-proceeding",
  term: { en: "Nonpayment Proceeding" },
  aka: ["Nonpayment Case", "Rent Case"],
  category: "housing",
  subtags: ["housing-court", "eviction-type", "rent"],

  context: {
    en: "You hear this when a landlord is trying to evict for unpaid rent. It is the most common kind of housing court case in New York. Before it can be filed, the landlord has to send a written rent demand."
  },

  plainEnglish: {
    en: "A court case a landlord files when rent has not been paid. Before going to court, the landlord must send a 14-day written rent demand that says exactly how much is owed and when. If the landlord did not send this in writing — or said it out loud only — the case can be thrown out. The landlord also has to send a separate reminder notice by certified mail if rent is more than 5 days late. Once filed, the tenant has 10 days to answer. At any time before the eviction, paying everything owed usually ends the case — this is called pay and stay."
  },

  whatToAsk: {
    en: [
      "Did I get a written 14-day rent demand? Can I see it?",
      "Did I get the certified-mail reminder from RPL 235-e?",
      "Is the amount the landlord is asking for correct?",
      "If I pay it all, does the case end?",
      "Can I get a free lawyer?"
    ]
  },

  related: ["eviction", "holdover", "warrant-of-eviction", "warranty-of-habitability", "landlord-retaliation"],
  legalEntryIds: ["eviction-process-ny"],

  citation: "NY RPAPL § 711(2); RPL § 235-e (reminder); RPAPL § 732 (answer)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/RPA/711",
  lastVerified: "2026-04-15",
  status: "active"
};
