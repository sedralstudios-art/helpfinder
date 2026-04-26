export const HOSTILE_WORK_ENVIRONMENT = {
  id: "hostile-work-environment",
  term: { en: "Hostile Work Environment" },
  aka: ["Workplace Harassment", "Harassment Claim"],
  category: "employment",
  subtags: ["civil-rights", "discrimination"],

  context: {
    en: "A hostile work environment is a workplace where unwelcome conduct based on a protected characteristic — race, sex, religion, disability, age, and others — becomes severe or pervasive enough to change the work conditions. Federal and state law treat it as a form of discrimination."
  },

  plainEnglish: {
    en: "A workplace claim under federal and state anti-discrimination law. Federal law sets a four-part test for a hostile-work-environment claim. First, the conduct was unwelcome. Second, it was based on a protected characteristic — race, sex, religion, national origin, age, disability, and others. Third, it was severe or pervasive enough to alter the work conditions. Fourth, the employer knew or should have known and failed to act. New York's standard is broader. Under the NYS Human Rights Law as amended in 2019, the worker only has to show the conduct rose above 'petty slights and trivial inconveniences.' That is a lower bar than the federal standard. Examples include slurs and repeated unwanted comments or touching. Displays of offensive material can count. So can exclusion from meetings or assignments that single out the worker because of a protected trait. Reporting through the employer's complaint process matters because it puts the employer on notice."
  },

  whatToAsk: {
    en: [
      "What protected characteristic is the conduct based on?",
      "Has the conduct been documented — dates, witnesses, examples?",
      "Was the conduct reported to HR or to a supervisor in writing?",
      "Should the case be filed under federal law (EEOC) or state law (NY Division of Human Rights)?",
      "What is the deadline to file a complaint with the relevant agency?"
    ]
  },

  related: ["discrimination", "retaliation-employment", "reasonable-accommodation", "fair-hearing"],
  legalEntryIds: [],

  citation: "Title VII (42 USC § 2000e); NY Exec. Law § 296",
  sourceUrl: "https://www.eeoc.gov/harassment",
  lastVerified: "2026-04-26",
  status: "active"
};
