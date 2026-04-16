// Glossary term: Grand Jury
// Citation verified: NY CPL Article 190. § 190.25 (proceedings, 16 min, 12 vote),
// § 190.65 (when indictment authorized — legally sufficient evidence + reasonable cause).

export const GRAND_JURY = {
  id: "grand-jury",
  term: { en: "Grand Jury" },
  aka: [],
  category: "criminal",
  subtags: ["felony-stage", "pre-trial"],

  context: {
    en: "You hear this in felony cases. The grand jury is a group of regular people who look at the prosecutor's evidence and decide if the case should move forward. It is not a trial. The defendant is usually not there."
  },

  plainEnglish: {
    en: "A group of 16 to 23 regular people who listen to the prosecutor's evidence in a felony case. They decide if there is enough for the case to go forward. If at least 12 of them agree, they vote to 'indict' and the case goes to superior court. If not enough agree, the case can be dropped. Grand jury meetings are secret. Defendants have the right to testify if they want, but most don't. Their lawyer cannot speak or question witnesses — only advise between questions."
  },

  whatToAsk: {
    en: [
      "Is my case going to a grand jury? When?",
      "Should I testify?",
      "Can I see what the prosecutor will show them?",
      "What happens if they do not indict me?"
    ]
  },

  related: ["indictment", "felony", "arraignment", "motion-to-dismiss", "public-defender"],
  legalEntryIds: ["criminal-case-process-ny"],

  citation: "NY CPL Article 190 (§ 190.25, § 190.65)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A190",
  lastVerified: "2026-04-15",
  status: "active"
};
