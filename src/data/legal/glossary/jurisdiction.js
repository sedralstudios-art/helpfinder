export const JURISDICTION = {
  id: "jurisdiction",
  term: { en: "Jurisdiction" },
  aka: ["Subject Matter Jurisdiction", "Personal Jurisdiction"],
  category: "courts",
  subtags: ["procedure", "civil"],

  context: {
    en: "Jurisdiction is the legal power of a court to decide a case. A court without jurisdiction cannot hear the case, and any decision is invalid. There are two main kinds — power over the subject of the case and power over the parties."
  },

  plainEnglish: {
    en: "The legal power of a court to hear a case and bind the parties. There are two main kinds. Subject matter jurisdiction is the power to handle the type of case — Family Court handles family cases, Surrogate's Court handles wills and estates, Supreme Court handles most large civil cases. Filing a case in the wrong court can lead to dismissal or transfer. Personal jurisdiction is the power over the people involved. A New York court usually has personal jurisdiction over a person who lives in New York or who took action in New York that gave rise to the case. Out-of-state defendants can sometimes be sued in New York under the long-arm statute. Federal courts have their own rules for both kinds of jurisdiction. A defendant who shows up and answers without raising the issue often waives a personal-jurisdiction defense. Subject matter jurisdiction can be raised at any time."
  },

  whatToAsk: {
    en: [
      "Does this court have the power to hear this kind of case?",
      "Does the court have personal jurisdiction over the defendant?",
      "Can a defective summons or service knock out personal jurisdiction?",
      "Was the case filed in the right county or court?",
      "Should I file in state court, Family Court, or federal court?"
    ]
  },

  related: ["service-of-process", "summons", "complaint", "default-judgment"],
  legalEntryIds: [],

  citation: "NY CPLR § 301-302 (long-arm); NY Constitution Article VI",
  sourceUrl: "https://www.law.cornell.edu/wex/jurisdiction",
  lastVerified: "2026-04-26",
  status: "active"
};
