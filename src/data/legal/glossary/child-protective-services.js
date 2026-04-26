export const CHILD_PROTECTIVE_SERVICES = {
  id: "child-protective-services",
  term: { en: "Child Protective Services (CPS)" },
  aka: ["CPS", "Child Welfare"],
  category: "family",
  subtags: ["children", "safety", "investigation"],

  context: {
    en: "Child Protective Services is the county agency that investigates reports of child abuse or neglect. CPS opens cases through the State Central Register hotline. The agency can make findings, offer services, file in Family Court, or in serious cases remove a child."
  },

  plainEnglish: {
    en: "The county agency that investigates reports of suspected child abuse or neglect. In Monroe County, CPS is part of the Department of Human Services. Investigations start when a report comes in to the State Central Register hotline (sometimes called the SCR). Mandated reporters — teachers, doctors, social workers, and others — are required to call when they suspect abuse or neglect. Anyone else can also report. After a report, a CPS caseworker must begin investigating within 24 hours and complete the investigation within 60 days. Possible outcomes include unfounded (no credible evidence), indicated (some credible evidence), and various service plans. CPS can offer voluntary services, file an Article 10 case in Family Court for court supervision, or in emergencies remove the child. Parents in CPS cases have the right to a free Family Court attorney called an 18-B lawyer. Free advocacy is also available through Legal Aid Society of Rochester."
  },

  whatToAsk: {
    en: [
      "What is the report alleging, and who made it?",
      "Is the investigation indicated, unfounded, or still open?",
      "What services is CPS offering or requiring?",
      "Can I get a free 18-B lawyer if a Family Court case is filed?",
      "What happens if CPS files an Article 10 petition or seeks removal?"
    ]
  },

  related: ["family-offense-petition", "guardianship", "best-interest-of-child", "fair-hearing"],
  legalEntryIds: [],

  citation: "NY Soc. Services Law Article 6, Title 6 (CPS); NY FCA Article 10",
  sourceUrl: "https://ocfs.ny.gov/programs/cps/",
  lastVerified: "2026-04-26",
  status: "active"
};
