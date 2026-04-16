// Glossary term: Certificate of Relief from Disabilities
// Citation verified: NY Correction Law § 702 (issued by sentencing court)
// and § 703 (issued by NY DOCCS). Certificate of Good Conduct: § 703-A.
// These remove automatic bars to licenses and jobs triggered by a conviction.

export const CERTIFICATE_OF_RELIEF = {
  id: "certificate-of-relief",
  term: { en: "Certificate of Relief from Disabilities" },
  aka: ["CRD", "Certificate of Relief", "CoRD"],
  category: "criminal",
  subtags: ["post-conviction", "record-cleanup", "employment"],

  context: {
    en: "You hear this after a conviction, when you are trying to get a job, license, or housing and the conviction is blocking you. It is a paper from a court or the state that tells employers and licensing boards to look at you as a whole person, not just the record."
  },

  plainEnglish: {
    en: "A paper that says your past conviction should not automatically block you from a job, a license, or public housing. It does not erase the conviction — the record is still there. But it removes the automatic 'no' that some jobs and licenses use. You can get one at sentencing, or later by applying to the court that sentenced you (for single-county records) or to the state Department of Corrections (for multi-county or out-of-state records). Free legal help can walk you through the application."
  },

  whatToAsk: {
    en: [
      "Am I eligible?",
      "Should I apply at sentencing, or wait?",
      "What specific 'disability' is blocking my job or license?",
      "Is there free help filling out the application?",
      "Will this show up on background checks, or does it replace the record?"
    ]
  },

  related: ["sealed-record", "plea", "sentence", "felony", "misdemeanor"],
  legalEntryIds: ["clean-slate-ny"],

  citation: "NY Correction Law § 702 (court-issued); § 703 (DOCCS-issued); § 703-A (Good Conduct)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/COR/A23",
  lastVerified: "2026-04-15",
  status: "active"
};
