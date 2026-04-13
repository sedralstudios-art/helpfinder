export const WRONGFUL_TERMINATION_NY = {
  id: "wrongful-termination-ny",
  category: "employment",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Wrongful Termination — When Getting Fired Is Against the Law" },

  summary: {
    en: "New York is an at-will employment state, which means your employer can generally fire you at any time for any reason — or no reason. But there are important exceptions. Your employer cannot fire you because of who you are, because you reported something illegal, or because you exercised a legal right. If they do, it may be wrongful termination."
  },

  whoQualifies: {
    en: [
      "Any worker in New York who was fired, laid off, or forced out of a job for an illegal reason — including discrimination, retaliation, or whistleblowing.",
      "Workers in businesses with four or more employees are covered by the New York State Human Rights Law. Some protections, like wage retaliation, apply regardless of employer size.",
      "Workers who were constructively discharged — meaning conditions were made so intolerable that a reasonable person would have no choice but to quit — may also have a wrongful termination claim.",
      "Workers with an employment contract, union agreement, or certain handbook provisions that limit the employer's ability to fire them without cause."
    ]
  },

  whatItMeans: {
    en: "Being fired for no reason is legal in New York. Being fired for an illegal reason is not. The most common illegal reasons are discrimination based on a protected characteristic, retaliation for exercising a legal right, and whistleblowing. Under the New York State Human Rights Law (Executive Law § 296), employers cannot fire anyone because of a protected characteristic. Protected classes include race, color, national origin, sex, pregnancy, age, disability, and religion. Sexual orientation, gender identity, marital status, military status, and domestic violence victim status are also protected. This list is broader than federal law."
  },

  yourRights: {
    en: [
      "You have the right not to be fired because of your race, sex, age, disability, religion, national origin, pregnancy, sexual orientation, gender identity, marital status, military status, arrest or conviction record, or status as a domestic violence victim (Executive Law § 296).",
      "You have the right not to be fired for reporting discrimination, harassment, wage theft, unsafe working conditions, or other violations of law — this is called retaliation and it is illegal (Executive Law § 296; Labor Law § 215).",
      "You have the right not to be fired for whistleblowing — reporting activity that you reasonably believe violates a law, rule, or regulation, or that creates a substantial danger to public health or safety (Labor Law § 740).",
      "You have the right not to be fired for exercising legally protected rights, including taking family or medical leave, filing a workers' compensation claim, serving on a jury, voting, or serving in the military.",
      "You have the right not to be fired for requesting a reasonable accommodation for a disability or pregnancy. Under the Reasonable Accommodation Anti-Retaliation Act (effective December 2025), requesting an accommodation is itself a protected activity.",
      "Remedies under these laws can include back pay, front pay, compensatory damages, emotional distress damages, punitive damages, reinstatement, and attorney's fees. Courts decide what remedies apply in each case."
    ]
  },

  legalOptions: {
    en: [
      "The New York State Division of Human Rights accepts complaints of employment discrimination and retaliation. Complaints must generally be filed within one year of the termination. The Division investigates and can hold hearings and award damages. More information is available at dhr.ny.gov.",
      "The U.S. Equal Employment Opportunity Commission (EEOC) accepts complaints of discrimination under federal law. In New York, complaints must be filed within 300 days of the termination. The EEOC office serving Western New York is located in Buffalo.",
      "Under the New York State Human Rights Law, workers may also file a civil lawsuit in state court within three years of the discriminatory act. A civil action may be filed instead of, but not in addition to, a Division of Human Rights complaint.",
      "Whistleblower retaliation claims under Labor Law § 740 must generally be brought within two years. Remedies include reinstatement, back pay, front pay, and compensation for damages.",
      "Wage retaliation complaints may be filed with the New York State Department of Labor at 1-888-469-7365. Under Labor Law § 215, remedies for retaliation include reinstatement, back pay, and liquidated damages of up to $10,000.",
      "Free legal help for employment discrimination and wrongful termination in Monroe County is available through the Legal Aid Society of Rochester at (585) 232-4090 and Legal Assistance of Western New York (LawNY) at (585) 325-2520."
    ]
  },

  example: {
    en: "David worked at a warehouse in Chemung County for three years. After he injured his back on the job, he filed a workers' compensation claim. Two weeks later, his employer fired him, saying the company was restructuring. David believed the real reason was his injury claim. He contacted the Division of Human Rights and filed a complaint alleging retaliation. The Division investigated and found that no restructuring had taken place and that David was the only employee terminated. The employer was ordered to pay David back wages and damages."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Employment discrimination, wrongful termination, worker rights",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Direct representation and advice on employment cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Employment, discrimination, public benefits, housing",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation in employment matters",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Employment rights, discrimination, systemic advocacy",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "minimum-wage-ny",
    "wage-theft-ny",
    "disability-work-accommodation-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "fired unfairly",
    "wrongful termination",
    "fired for no reason",
    "retaliation",
    "fired after complaining",
    "discrimination at work",
    "fired for being pregnant",
    "fired for being sick",
    "fired after injury",
    "whistleblower",
    "fired for reporting",
    "lost my job",
    "unfair firing",
    "let go after complaint",
    "fired for taking leave"
  ],

  sources: [
    "https://dhr.ny.gov/",
    "https://www.nysenate.gov/legislation/laws/EXC/296",
    "https://www.nysenate.gov/legislation/laws/LAB/740",
    "https://www.nysenate.gov/legislation/laws/LAB/215",
    "https://www.eeoc.gov/field-office/buffalo/location"
  ],

  lastAudited: "2026-04-04",
  lastVerifiedBy: "Claude + Tony",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
