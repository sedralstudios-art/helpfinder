// Glossary term: Small Claims Court
// Citation verified: NYCCCA § 1801 ($10,000 cap, NYC); UCCA § 1801
// ($5,000 cap, outside NYC cities); UJCA § 1801 (same $5,000 cap for
// town and village justice courts). Procedures designed for self-
// representation — simplified rules of evidence, no formal pleadings.

export const SMALL_CLAIMS = {
  id: "small-claims",
  term: { en: "Small Claims Court" },
  aka: [],
  category: "consumer",
  subtags: ["court-filing", "money"],

  context: {
    en: "You hear this when someone owes money and the amount is below a certain limit. Small claims is designed for people to handle themselves without a lawyer. Security deposit cases, unpaid loans to friends, and minor damage claims often end up here."
  },

  plainEnglish: {
    en: "A part of the local court that handles smaller money disputes, with dollar caps set by statute (NYCCCA, UCCA, and UJCA § 1801) — current caps for NYC and outside-NYC are at nycourts.gov. Filing fees are modest. The process is simpler than regular court — less paperwork, no formal rules of evidence, usually one short hearing. Lawyers are not required, and most people do not bring one. The plaintiff files at the clerk's window of the city court, town court, or village justice court where the other party lives or works. A win produces a judgment — collecting on it is a separate step."
  },

  whatToAsk: {
    en: [
      "Is the amount I'm asking for under the local limit?",
      "Which court do I file in — where does the other party live or work?",
      "What evidence should I bring — receipts, photos, texts, witnesses?",
      "What are the filing fees in my county?",
      "If I win, how do I actually collect?"
    ]
  },

  related: ["judgment", "debt-collection", "statute-of-limitations-debt", "security-deposit", "wage-garnishment"],
  legalEntryIds: ["small-claims-procedure-ny"],

  citation: "NYCCCA § 1801 (NYC); UCCA § 1801; UJCA § 1801",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/UJC/1801",
  lastVerified: "2026-04-15",
  status: "active"
};
