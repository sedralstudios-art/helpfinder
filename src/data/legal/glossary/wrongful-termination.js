export const WRONGFUL_TERMINATION = {
  id: "wrongful-termination",
  term: { en: "Wrongful Termination" },
  aka: ["Wrongful Discharge", "Illegal Firing"],
  category: "employment",
  subtags: ["rights", "civil-rights"],

  context: {
    en: "Wrongful termination is when an employer fires a worker for an illegal reason. New York is an at-will state, so most firings are legal. But firing for a protected reason — discrimination, retaliation, refusal to do something illegal, or breach of contract — can support a lawsuit."
  },

  plainEnglish: {
    en: "An employment termination that violates a specific law or contract. New York follows the at-will employment rule. An employer can usually fire a worker for any reason or no reason — but not for an illegal reason. Illegal reasons include discrimination based on a protected characteristic, retaliation for protected activity (filing a discrimination complaint, reporting wage theft, taking FMLA leave, filing a workers' compensation claim, whistleblowing under Labor Law § 740), refusal to do something illegal, taking jury duty leave, and breach of an employment contract that limits firing reasons. Public-sector workers have additional due-process protections. Damages can include reinstatement, back pay, front pay, emotional distress, attorney fees, and in some cases punitive damages. Different agencies and courts handle different claims. Deadlines run from days to a few years depending on the law. Some claims must first go through an agency like the EEOC or NY Division of Human Rights before a lawsuit can be filed."
  },

  whatToAsk: {
    en: [
      "What was the employer's stated reason for the firing?",
      "Could discrimination, retaliation, or another protected activity be the real reason?",
      "Is there an employment contract that limits firing reasons?",
      "Which agency handles claims for the type of wrongful termination at issue?",
      "What is the deadline to file a charge or lawsuit?"
    ]
  },

  related: ["discrimination", "hostile-work-environment", "retaliation-employment", "whistleblower", "fmla", "workers-compensation"],
  legalEntryIds: [],

  citation: "NY Exec. Law § 296; NY Labor Law § 740, § 215; Title VII; ADEA; ADA",
  sourceUrl: "https://dol.ny.gov/employment-discrimination",
  lastVerified: "2026-04-26",
  status: "active"
};
