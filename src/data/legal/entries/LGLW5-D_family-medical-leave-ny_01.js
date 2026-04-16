export const FAMILY_MEDICAL_LEAVE_NY = {
  id: "family-medical-leave-ny",
  category: "employment",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Family and Medical Leave — FMLA and New York Paid Family Leave" },

  summary: {
    en: "Workers in New York may be entitled to job-protected leave for serious health conditions, the birth or adoption of a child, or to care for a family member. Two main laws apply: the federal FMLA (unpaid, up to 12 weeks) and New York Paid Family Leave (paid, up to 12 weeks). The two programs have different eligibility rules and can sometimes be used together."
  },

  whoQualifies: {
    en: [
      "Federal FMLA: employees who have worked for the employer at least 12 months, at least 1,250 hours in the past year, and the employer has 50 or more employees within 75 miles.",
      "NY Paid Family Leave (PFL): most private-sector employees who have worked for their employer for at least 26 consecutive weeks (or 175 days for part-time workers). There is no employer-size minimum.",
      "NY PFL covers bonding with a new child (birth, adoption, foster), caring for a family member with a serious health condition, and certain military-related needs.",
      "FMLA also covers the employee's own serious health condition. NY PFL does not — but NY short-term disability insurance (DBL) may cover that."
    ]
  },

  whatItMeans: {
    en: "The federal Family and Medical Leave Act provides up to 12 weeks of unpaid, job-protected leave per year for eligible workers. The employer must hold the job (or an equivalent one) and continue health insurance during the leave. New York Paid Family Leave provides up to 12 weeks of paid leave at 67% of the worker's average weekly wage, capped at 67% of the state average weekly wage (check paidfamilyleave.ny.gov for the current cap). PFL is funded by a small payroll deduction from the employee's paycheck. The two programs overlap in some situations — for example, bonding leave after a birth may qualify under both FMLA and PFL, and the employer can require them to run concurrently. For the worker's own illness or injury, FMLA provides unpaid leave while NY short-term disability insurance (DBL) provides partial wage replacement. Employers cannot retaliate against a worker for requesting or using leave under either program."
  },

  yourRights: {
    en: [
      "Eligible workers have the right to up to 12 weeks of job-protected leave per year under FMLA.",
      "Eligible workers have the right to up to 12 weeks of paid leave per year under NY PFL at 67% of average weekly wage.",
      "The employer must hold the job and continue health insurance during FMLA leave.",
      "The employer cannot retaliate for requesting or using family or medical leave.",
      "Leave can be taken intermittently (a few days or hours at a time) when medically necessary.",
      "If an employer wrongly denies leave, a complaint can be filed with the US Department of Labor (FMLA) or the Workers' Compensation Board (PFL)."
    ]
  },

  legalOptions: {
    en: [
      "NY Paid Family Leave claims are filed through the employer's PFL insurance carrier. The employer must provide the necessary forms within 5 business days of a request. Information and forms are available at paidfamilyleave.ny.gov.",
      "FMLA leave is requested from the employer. The employer may require medical certification. Information is available at dol.gov/agencies/whd/fmla.",
      "If a PFL claim is denied, an appeal can be filed with the Workers' Compensation Board. Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If an employer retaliates for taking leave, a complaint can be filed with the US Department of Labor at (866) 487-9243 (for FMLA) or with the NY Workers' Compensation Board (for PFL).",
      "For the worker's own serious health condition, NY short-term disability insurance (DBL) may provide partial wage replacement. Claims are filed through the employer's disability carrier."
    ]
  },

  example: {
    en: "A worker at a Rochester warehouse needs to care for her mother who is undergoing cancer treatment. She applies for NY Paid Family Leave through her employer's insurance carrier. She is approved for 8 weeks of paid leave at 67% of her average weekly wage. Her employer holds her position and continues her health insurance. She returns to the same job after the leave."
  },

  counsel: [
    {
      type: "free",
      name: "NY Paid Family Leave Helpline",
      focus: "PFL applications, denials, appeals",
      qualifier: "Any worker in New York",
      access: "Phone",
      outcome: "Information and claims assistance",
      phone: "(844) 337-6303",
      url: "https://paidfamilyleave.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "US Dept of Labor — FMLA",
      focus: "FMLA rights, complaints, retaliation",
      qualifier: "Any eligible worker",
      access: "Phone",
      outcome: "Investigation and enforcement",
      phone: "(866) 487-9243",
      url: "https://www.dol.gov/agencies/whd/fmla",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "wrongful-termination-ny",
    "workplace-discrimination-ny",
    "workers-compensation-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "FMLA",
    "family leave",
    "medical leave",
    "paid family leave",
    "PFL",
    "maternity leave",
    "paternity leave",
    "caring for family member",
    "job protected leave",
    "disability leave",
    "bonding leave"
  ],

  sources: [
    "https://paidfamilyleave.ny.gov",
    "https://www.dol.gov/agencies/whd/fmla"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
