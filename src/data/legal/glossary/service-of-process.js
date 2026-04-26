export const SERVICE_OF_PROCESS = {
  id: "service-of-process",
  term: { en: "Service of Process" },
  aka: ["Service", "Personal Service"],
  category: "courts",
  subtags: ["civil", "procedure"],

  context: {
    en: "Service of process is how a defendant is officially notified that a lawsuit has been filed. The plaintiff must follow specific rules — improper service can lead to the case being dismissed or any default judgment vacated."
  },

  plainEnglish: {
    en: "The legal way of delivering a summons and complaint to a defendant so the case can move forward. Personal service means handing the papers directly to the defendant. Substituted service means leaving the papers with someone of suitable age at the defendant's home or business and also mailing a copy. Conspicuous service (sometimes called 'nail and mail') means posting the papers at the door and mailing copies. It is used after personal and substituted service have been tried. Other special methods exist for businesses, the state, and people who cannot be found. The plaintiff usually hires a process server to do the work and to file an affidavit of service with the court. Improper service is a defense the defendant can raise to dismiss the case or to vacate a default judgment. Many old default judgments fall apart when a defendant proves they were never properly served."
  },

  whatToAsk: {
    en: [
      "How is service supposed to happen in this kind of case?",
      "Was service done correctly?",
      "Is there a defense based on improper service?",
      "Can a default judgment be vacated because service was bad?",
      "How is service done on a business, an estate, or a person out of state?"
    ]
  },

  related: ["summons", "default-judgment", "plaintiff", "defendant"],
  legalEntryIds: [],

  citation: "NY CPLR § 308 (service on a natural person); CPLR Article 3",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/308",
  lastVerified: "2026-04-26",
  status: "active"
};
