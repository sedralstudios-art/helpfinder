// Glossary term: Speedy Trial
// Citation verified: NY CPL § 30.30. DA readiness windows: 6 months for
// felony, 90 days for A misdemeanor, 60 days for B misdemeanor. Clock
// starts the day after the accusatory instrument is filed; pauses for
// certain excludable time (defense motions, adjournments at request, etc.).

export const SPEEDY_TRIAL = {
  id: "speedy-trial",
  term: { en: "Speedy Trial" },
  aka: ["30.30", "30/30 motion"],
  category: "criminal",
  subtags: ["pre-trial", "disposition", "timing"],

  context: {
    en: "You hear this when your lawyer is counting the days since the case was filed. New York gives the prosecutor a limited time to be ready for trial. If they miss it, the case can be thrown out."
  },

  plainEnglish: {
    en: "A rule that gives the prosecutor only so much time to be ready for trial after your case is filed. The time depends on the charge: about 6 months for a felony, 90 days for a Class A misdemeanor, 60 days for a Class B misdemeanor. Some time does not count, like when your own lawyer asks for more time. If the prosecutor goes past the limit, your lawyer can file a motion to dismiss the case on speedy-trial grounds. This is one of the strongest ways to get a case thrown out."
  },

  whatToAsk: {
    en: [
      "How much 'speedy trial time' has the prosecutor used so far?",
      "Is any of my adjournment time helping them or hurting them?",
      "Can we file a speedy-trial motion right now?",
      "What is the total limit for my charge?"
    ]
  },

  related: ["motion-to-dismiss", "arraignment", "plea", "public-defender"],
  legalEntryIds: [],

  citation: "NY CPL § 30.30",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/30.30",
  lastVerified: "2026-04-15",
  status: "active"
};
