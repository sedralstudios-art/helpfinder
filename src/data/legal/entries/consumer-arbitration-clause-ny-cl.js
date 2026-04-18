export const CONSUMER_ARBITRATION_CLAUSE_NY_CL = {
  id: "consumer-arbitration-clause-ny-cl",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "common-law",
  primaryStatute: "9 USC 1",
  status: "active",

  title: { en: "Arbitration Clauses in Consumer Contracts — What They Do and How Courts Treat Them" },

  summary: {
    en: "Most consumer contracts — credit cards, cell phone plans, ride-share apps, gym memberships — include a mandatory arbitration clause and class-action waiver. These clauses are broadly enforced under the Federal Arbitration Act. A few narrow exceptions exist. Consumers should not count on going to court for a dispute covered by an arbitration clause, but the clause itself does not end all options."
  },

  whoQualifies: {
    en: [
      "Any consumer who signed a contract containing an arbitration clause and has a dispute with the company.",
      "Any person researching a purchase and trying to understand what they are giving up by signing.",
      "Any person whose case was thrown out of court because the company moved to compel arbitration.",
      "Any person harmed by a company along with many others who wondered about class action."
    ]
  },

  whatItMeans: {
    en: "An arbitration clause is a contract term that requires disputes to be resolved by a private arbitrator instead of a court, often with limited discovery, no jury, confidential proceedings, and restricted appeal rights. Most consumer arbitration clauses also include a class-action waiver — the consumer gives up the right to join a class lawsuit. The Federal Arbitration Act of 1925 (9 USC Sections 1-16) establishes a strong federal policy favoring arbitration. In AT&T Mobility LLC v. Concepcion (563 U.S. 333, 2011), the U.S. Supreme Court held that the FAA preempts state laws that would treat class-action waivers as unconscionable. Epic Systems Corp. v. Lewis (2018) extended this to employment contracts. Practical effect: most consumer arbitration clauses and class-action waivers are enforceable in New York courts. Narrow exceptions: fraud in signing the contract itself (not fraud in the underlying product), truly unconscionable terms (extremely high arbitrator fees, forum thousands of miles away, procedurally unfair), specific federal carve-outs (the 2022 Ending Forced Arbitration of Sexual Assault and Sexual Harassment Act, 9 USC Section 402, voids arbitration for those claims), and state-law whistleblower or public-policy claims that Congress did not preempt. What arbitration clauses do NOT do: they do not end the consumer's ability to file complaints with regulators (FTC, CFPB, NYS Attorney General), do not prevent small-claims court in many states (some clauses carve out small claims explicitly), and do not stop mass arbitration tactics where thousands of individual arbitration cases are filed at once. Consumers with disputes in covered contracts have three realistic paths: file a regulatory complaint (FTC, CFPB, NYS AG), pursue small-claims court if the clause carves it out or the amount is below the small-claims limit ($5,000-$10,000 in NY depending on court), or file individual arbitration through the contract's designated arbitration provider (usually AAA or JAMS)."
  },

  yourRights: {
    en: [
      "A consumer cannot be forced to arbitrate claims that fall outside the arbitration clause — read the scope.",
      "A consumer has the right to file regulatory complaints regardless of any arbitration clause.",
      "Many arbitration clauses preserve small-claims court as an option for small disputes.",
      "Sexual assault and sexual harassment claims cannot be forced into arbitration (9 USC Section 402).",
      "A consumer can challenge an arbitration clause in limited circumstances — true unconscionability, fraud in forming the agreement itself, or a federal carve-out.",
      "Individual arbitration is available even if class arbitration is waived — consumers can still pursue their own case."
    ]
  },

  legalOptions: {
    en: [
      "Read the arbitration clause carefully — many carve out small claims or disputes under a dollar threshold.",
      "For regulatory recourse: FTC at reportfraud.ftc.gov, CFPB at consumerfinance.gov, NY Attorney General at ag.ny.gov/consumer-frauds-bureau.",
      "For small claims: disputes under $5,000 (NYC) or $3,000-$5,000 (elsewhere in NY) may be eligible for small claims court regardless of the arbitration clause.",
      "For sexual assault or harassment claims in a contract with an arbitration clause, the 2022 federal law (9 USC 402) gives the victim the right to file in court.",
      "For individual arbitration, the contract will name the provider (most often AAA at adr.org or JAMS at jamsadr.com). Fees vary.",
      "Free legal help with consumer disputes including arbitration questions is available through Legal Aid Society of Rochester at (585) 232-4090 and Empire Justice Center at (585) 454-4060."
    ]
  },

  example: {
    en: "A Rochester resident's credit card issuer charged him an unauthorized fee he could not resolve through customer service. His cardholder agreement included a mandatory arbitration clause and class-action waiver — but it carved out disputes eligible for small claims court. He filed in Monroe County Small Claims Court for $180 in wrongful charges. The credit card issuer did not move to compel arbitration because the clause itself allowed small claims. The judge heard the case in about 15 minutes and ordered the issuer to refund the fee plus $25 in court costs."
  },

  counsel: [
    {
      type: "free",
      name: "NYS Attorney General — Consumer Frauds Bureau",
      focus: "Consumer complaints, deceptive business practices, systemic consumer harm",
      qualifier: "Any NYS consumer",
      access: "Phone at (800) 771-7755",
      outcome: "Complaint investigation, mediation, enforcement",
      phone: "(800) 771-7755",
      url: "https://ag.ny.gov/consumer-frauds-bureau/file-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Consumer Financial Protection Bureau (CFPB)",
      focus: "Credit card, bank, loan, and debt collection complaints",
      qualifier: "Any U.S. consumer",
      access: "Phone at (855) 411-2372",
      outcome: "Complaint forwarded to company with required response",
      phone: "(855) 411-2372",
      url: "https://www.consumerfinance.gov/complaint/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "small-claims-procedure-ny",
    "debt-collection-rights-ny",
    "sexual-harassment-reporting-ny",
    "return-refund-policy-ny",
    "cell-phone-contract-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "arbitration clause",
    "forced arbitration",
    "class action waiver",
    "FAA",
    "Concepcion",
    "small claims carve-out",
    "sexual assault arbitration exception",
    "consumer arbitration",
    "mass arbitration",
    "AAA JAMS"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/9/1",
    "https://www.law.cornell.edu/uscode/text/9/2",
    "https://www.law.cornell.edu/uscode/text/9/402",
    "https://supreme.justia.com/cases/federal/us/563/333/"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
