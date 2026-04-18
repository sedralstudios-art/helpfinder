export const FAFSA_FINANCIAL_AID_APPLICATION_NY_PROGRAM = {
  id: "fafsa-financial-aid-application-ny-program",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "agency-program",
  status: "active",

  title: { en: "FAFSA — Free Application for Federal Student Aid" },

  summary: {
    en: "The FAFSA is the single application that unlocks federal Pell Grants, federal student loans, work-study, most state aid (TAP in New York), and most college-based aid. It is free. The form reopens each October 1 for the following academic year, and a new FAFSA is required each year a student is enrolled. Not filing costs families thousands in lost grants."
  },

  whoQualifies: {
    en: [
      "Any current or prospective college student who wants federal, state, or institutional financial aid.",
      "U.S. citizens, permanent residents, and some eligible non-citizens.",
      "Undocumented students are generally not eligible for federal aid but may qualify for NY DREAM Act state aid (see TAP entry).",
      "Students pursuing an undergraduate, graduate, or professional degree, or certain certificate programs."
    ]
  },

  whatItMeans: {
    en: "The Free Application for Federal Student Aid (FAFSA) is the U.S. Department of Education application at studentaid.gov. It collects household and student income, asset, and demographic information to calculate the Student Aid Index (SAI) — replacing the older Expected Family Contribution. The SAI is used by federal, state, and institutional programs to determine aid eligibility. Filing the FAFSA opens access to Pell Grants (up to about $7,395 per year in 2024-2025, need-based, no repayment), Federal Direct Loans (subsidized and unsubsidized, with annual limits), Work-Study (part-time employment tied to financial need), state aid programs like New York's TAP (see separate tap-tuition-assistance-program-ny-program entry), and most institutional scholarships — many colleges require FAFSA data to award their own aid. The FAFSA is free. Paid services that charge to complete it are not necessary. The form reopens October 1 each year for the following academic year (though recent years have had delays). Students file a new FAFSA every year in school. Dependent students (most undergraduates under 24) must report parent income; independent students (age 24+, married, veterans, parents of dependents, foster youth, homeless youth) report their own. The 2024-2025 form was a major redesign under the FAFSA Simplification Act. The form uses tax data from the prior-prior year (e.g., the 2024-2025 form uses 2022 tax returns), often imported directly from the IRS. Common mistakes: missing the state or college priority deadline (earlier than federal deadline), forgetting to file for a second parent after divorce, and not updating when family circumstances change. Colleges can perform a professional judgment review for families with major income changes not reflected in the tax return."
  },

  yourRights: {
    en: [
      "Any student applying for college aid has the right to file the FAFSA at no cost.",
      "A student whose family income has dropped significantly (job loss, medical event) has the right to request professional judgment review at each college.",
      "A dependent student whose parent refuses to provide information may qualify for a limited FAFSA — unsubsidized loans only — after documenting the parent's refusal.",
      "Homeless and foster youth have the right to an independent student determination without parent information.",
      "A student who made a mistake on the FAFSA has the right to correct it through the corrections portal.",
      "An applicant whose aid offer seems wrong has the right to an appeal with the college's financial aid office."
    ]
  },

  legalOptions: {
    en: [
      "File at studentaid.gov — the official FAFSA portal. No fee. Avoid lookalike paid sites.",
      "FSA ID: both the student and parent (for dependents) need an FSA ID. Set up at studentaid.gov.",
      "Federal Student Aid Information Center: (800) 433-3243 for FAFSA help.",
      "Monroe Community College Financial Aid Office at (585) 292-2050 helps prospective and enrolled students.",
      "Foundation for Monroe Community College Scholarship Office at (585) 292-3100 assists with institutional scholarships beyond FAFSA.",
      "New York State Financial Aid Night events at many Monroe County high schools offer free in-person FAFSA help each fall.",
      "For undocumented students: the NY DREAM Act application at hesc.ny.gov/dream replaces the FAFSA for state aid purposes.",
      "For professional judgment review after a family income drop, contact each college's financial aid office directly."
    ]
  },

  example: {
    en: "A single father in Rochester had a daughter starting at Monroe Community College. He nearly skipped the FAFSA because he thought his income was too high to qualify. At the high school's Financial Aid Night in November, a counselor walked him through the form at studentaid.gov. His daughter was approved for a Pell Grant of about $4,400 based on their income, plus TAP of about $3,800. Combined, the aid covered all tuition and fees, with money left over for books. The entire FAFSA took about 45 minutes including importing tax data from the IRS. No fee, no repayment."
  },

  counsel: [
    {
      type: "government",
      name: "Federal Student Aid Information Center",
      focus: "FAFSA help, Pell Grant, federal loans, work-study",
      qualifier: "Any U.S. student",
      access: "Phone at (800) 433-3243",
      outcome: "Application help, status updates, aid explanation",
      phone: "(800) 433-3243",
      url: "https://studentaid.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Monroe Community College Financial Aid Office",
      focus: "Enrolled and prospective student financial aid navigation",
      qualifier: "Anyone considering MCC or currently enrolled",
      access: "Phone at (585) 292-2050",
      outcome: "FAFSA review, aid package explanation, appeals",
      phone: "(585) 292-2050",
      url: "https://www.monroecc.edu/depts/finaid/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "tap-tuition-assistance-program-ny-program",
    "student-loan-options-ny",
    "student-loan-forgiveness-pslf-ny",
    "ged-hse-programs-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "FAFSA",
    "Pell Grant",
    "federal student aid",
    "Student Aid Index",
    "SAI",
    "FAFSA deadline",
    "professional judgment review",
    "college financial aid",
    "dependent student FAFSA",
    "independent student FAFSA"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/20/1087nn",
    "https://www.law.cornell.edu/uscode/text/20/1090",
    "https://studentaid.gov"
  ],

  lastVerified: "2026-04-18",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
