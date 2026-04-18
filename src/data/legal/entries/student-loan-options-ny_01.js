export const STUDENT_LOAN_OPTIONS_NY = {
  id: "student-loan-options-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "Student Loan Debt — Repayment Options, Forgiveness, and Default in New York" },

  summary: {
    en: "Student loan debt affects millions of New Yorkers. Federal student loans have multiple repayment options including income-driven plans that cap payments based on what you earn, forgiveness programs for public service workers, and protections if you default. Private student loans have fewer options but are still subject to the statute of limitations. Understanding the difference between federal and private loans is the first step."
  },

  whoQualifies: {
    en: [
      "Anyone with federal student loan debt (Direct Loans, FFEL, Perkins) who is struggling to make payments.",
      "Anyone with private student loan debt who has been contacted by a collector or is in default.",
      "Public service workers (government employees, nonprofit employees, teachers, nurses, etc.) who may qualify for Public Service Loan Forgiveness (PSLF).",
      "Anyone whose federal loans are in default — there are paths to get out of default and restore eligibility for income-driven repayment."
    ]
  },

  whatItMeans: {
    en: "Federal and private student loans are different systems with different rules. Federal loans: income-driven repayment (IDR) plans cap monthly payments at a percentage of discretionary income. The main plans are SAVE (most generous for many borrowers), PAYE, IBR, and ICR. Payments can be as low as $0/month for very low-income borrowers. After 20-25 years of payments on an IDR plan, the remaining balance is forgiven. Public Service Loan Forgiveness (PSLF) forgives the remaining balance after 120 qualifying payments (10 years) for borrowers who work full-time for a qualifying public service employer. If federal loans are in default, options include loan rehabilitation (9 months of agreed payments to restore good standing) and consolidation. Private loans: these do not qualify for IDR or PSLF. If a private loan is in default, the lender can sue. In New York, the statute of limitations on private student loan debt is 6 years (CPLR § 213). If the lender sues after 6 years, the statute of limitations is a defense. Beware of student loan scams — legitimate federal programs are free. Anyone who charges a fee to help with federal loan programs is a scam."
  },

  yourRights: {
    en: [
      "Federal loan borrowers have the right to enroll in income-driven repayment at any time — payments can drop to $0 for low-income borrowers.",
      "Public service workers have the right to PSLF after 120 qualifying payments.",
      "Borrowers in default have the right to rehabilitate or consolidate their loans to get out of default.",
      "Private loan debt in New York has a 6-year statute of limitations — old debt may be unenforceable in court.",
      "No one should pay a fee for help with federal student loan programs — all programs are free to apply for at studentaid.gov.",
      "Wage garnishment for federal student loans in default is capped at 15% of disposable pay."
    ]
  },

  legalOptions: {
    en: [
      "Federal loan information and applications for IDR and PSLF are available at studentaid.gov. The PSLF Help Tool at studentaid.gov/pslf helps determine eligibility.",
      "For federal loans in default, the loan servicer or the Department of Education can be contacted about rehabilitation or consolidation. The Federal Student Aid website has contact information at studentaid.gov.",
      "For private student loan lawsuits, checking whether the statute of limitations has expired (6 years in New York from the date of default or last payment) is an important first step.",
      "Free legal help with student loan issues is available through Legal Aid Society of Rochester at (585) 232-4090 and through the NY Attorney General's Student Protection Unit.",
      "The NY Attorney General's office has a student loan helpline and has taken enforcement action against loan servicers and scammers. Reports can be filed at ag.ny.gov."
    ]
  },

  example: {
    en: "A single mother in Rochester has $35,000 in federal student loans from a degree she did not finish. She earns $28,000 per year and cannot afford the standard payment. She applies for the SAVE income-driven repayment plan at studentaid.gov. Her monthly payment drops from $350 to $45 based on her income. After 20 years of payments on the IDR plan, the remaining balance is forgiven. She pays nothing to enroll — the application is free."
  },

  counsel: [
    {
      type: "free",
      name: "Federal Student Aid (studentaid.gov)",
      focus: "Federal loan repayment plans, PSLF, default resolution",
      qualifier: "Any federal student loan borrower",
      access: "Online or phone",
      outcome: "Enrollment in repayment plans, forgiveness applications",
      phone: "(800) 433-3243",
      url: "https://studentaid.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Student loan disputes, default defense, private loan statute of limitations",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "wage-garnishment-defense-ny",
    "respond-to-lawsuit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "student loan",
    "student debt",
    "loan forgiveness",
    "PSLF",
    "income driven repayment",
    "IDR",
    "SAVE plan",
    "student loan default",
    "private student loan",
    "student loan scam",
    "student loan statute of limitations",
    "cannot pay student loan"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/20/1087e",
    "https://www.nysenate.gov/legislation/laws/CVP/213",
    "https://studentaid.gov",
    "https://studentaid.gov/pslf/"
  ],

  lastVerified: "2026-04-16",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
