export const SUPERVISED_RELEASE = {
  id: "supervised-release",
  term: { en: "Supervised Release" },
  aka: ["Federal Supervised Release", "Pretrial Supervised Release"],
  category: "criminal",
  subtags: ["release", "post-conviction"],

  context: {
    en: "Supervised release means different things depending on the system. In federal cases, it is the period of court supervision that follows a federal prison sentence. In New York state pretrial cases, it is one of the non-money release options the judge can use instead of bail."
  },

  plainEnglish: {
    en: "A term that has two main meanings depending on the court system. In federal criminal cases, supervised release is a period of court supervision that follows a prison sentence. The federal court sets specific conditions — drug tests, employment, no new arrests, travel limits, and others. A federal probation officer monitors compliance. Violations can lead the judge to revoke supervised release and send the person back to prison. In New York state pretrial cases, supervised release is one of the non-money release options judges can use after the 2020 bail reforms. A pretrial services agency monitors the defendant — through check-ins, electronic monitoring, or treatment referrals — while the case is pending. New York generally does not have parole for sentences imposed after 1998 for the most serious crimes, and instead uses post-release supervision for determinate sentences. The names overlap but the systems are different."
  },

  whatToAsk: {
    en: [
      "Which kind of supervised release applies — federal post-prison or NY pretrial?",
      "What are the specific conditions of supervision?",
      "Who monitors compliance, and how often?",
      "What happens after a violation?",
      "How long does the supervision period last?"
    ]
  },

  related: ["probation", "parole", "bail", "ror", "violation-of-probation"],
  legalEntryIds: [],

  citation: "18 USC § 3583 (federal supervised release); NY CPL § 510.40 (NY pretrial release)",
  sourceUrl: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services",
  lastVerified: "2026-04-26",
  status: "active"
};
