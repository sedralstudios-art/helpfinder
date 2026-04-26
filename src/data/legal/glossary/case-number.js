export const CASE_NUMBER = {
  id: "case-number",
  term: { en: "Case Number" },
  aka: ["Docket Number", "Index Number", "File Number"],
  category: "general",
  subtags: ["program-jargon", "court"],

  context: {
    en: "You hear this at court, at DSS, and at almost any government agency. It is the number assigned to your file. You need it to check on your case, request records, or talk to someone about your situation."
  },

  plainEnglish: {
    en: "A unique number assigned to a case by a court, agency, or program. Courts call it a docket number or index number. DSS calls it a case number. Every interaction with the system — calling, mailing, appearing in court — uses this number. It is usually on the first paper the person received. A lost case number can be looked up at the clerk's office or agency by name and date of birth."
  },

  whatToAsk: {
    en: [
      "What is my case number?",
      "Where can I find it on the paperwork I received?",
      "If I lost the paper, how do I look up my case number?",
      "Is my case number the same across all agencies, or does each one assign a different one?"
    ]
  },

  related: ["arraignment", "fair-hearing", "intake"],
  legalEntryIds: [],

  citation: "Common administrative term — no single statute",
  sourceUrl: "https://www.nycourts.gov/courthelp/index.shtml",
  lastVerified: "2026-04-16",
  status: "active"
};
