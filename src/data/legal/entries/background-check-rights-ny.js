export const BACKGROUND_CHECK_RIGHTS_NY = {
  id: "background-check-rights-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY COR A23-A",
  status: "active",

  title: { en: "Background Check Rights — What Employers Can and Cannot Ask in New York" },

  summary: {
    en: "In New York, employers cannot automatically reject someone because of a criminal record. Under Article 23-A of the Correction Law (the 'Fair Chance' law) and New York City and some local ban-the-box laws, employers must consider the nature of the offense, how long ago it was, and evidence of rehabilitation before making a decision. A blanket policy of rejecting all applicants with records is illegal."
  },

  whoQualifies: {
    en: [
      "Any job applicant or employee in New York who has a criminal conviction on their record.",
      "Anyone who has been denied a job, fired, or had a license denied because of a criminal record.",
      "Anyone whose sealed or dismissed case was improperly used in a background check."
    ]
  },

  whatItMeans: {
    en: "Correction Law Article 23-A is the core rule. It applies to every employer and licensing agency in New York and requires a specific analysis before denying employment or a license based on a criminal conviction.\n\nThe eight Article 23-A factors. Before rejecting an applicant, an employer has to weigh: (1) the public policy of encouraging employment of people with records, (2) the specific duties of the job, (3) the nature and seriousness of the offense, (4) how long ago it occurred, (5) the person's age at the time, (6) any evidence of rehabilitation, (7) the employer's legitimate interest in protecting people and property, and (8) any information produced by the applicant about their circumstances. A blanket policy of 'no criminal records' is illegal. A denial has to be based on either a direct relationship between the offense and the job, or an unreasonable risk to people or property.\n\nWhat 'direct relationship' means. A decade-old shoplifting conviction is not directly related to warehouse work. An embezzlement conviction may be directly related to a bookkeeping job. Courts weigh the specific duties against the specific offense.\n\nSealed and dismissed cases. Records sealed under Criminal Procedure Law 160.50 (cases ending favorably to the accused), 160.55 (violations), or the Clean Slate Act (CPL 160.57, automatic sealing after the waiting period) cannot appear on background checks. Employers cannot ask about sealed cases, and applicants do not have to disclose them.\n\nCertificate of Relief from Disabilities. Correction Law 702 creates this certificate, which a court can issue for eligible applicants. Once granted, it creates a legal presumption of rehabilitation. The presumption is evidence the employer must weigh in the Article 23-A analysis. A Certificate of Good Conduct (Correction Law 703) is available after a longer waiting period and offers similar protection.\n\nBackground check company duties. The federal Fair Credit Reporting Act (15 USC 1681) regulates background check companies. They have to maintain accuracy, investigate disputed items within 30 days, and correct errors. If a sealed case appears on a report, the company has to remove it on dispute. If an old conviction appears on a report for a non-exempt job, the company also has to follow the FCRA's seven-year rule for most convictions.\n\nNew York City's Fair Chance Act. Inside NYC, the Fair Chance Act adds another layer. Employers cannot ask about criminal history until after a conditional offer. If they then want to rescind, they have to provide a written analysis of the Article 23-A factors and give the applicant a chance to respond.\n\nEnforcement. The NY Division of Human Rights and the NYC Commission on Human Rights both handle these complaints. Retaliation for asserting these rights is illegal under the same laws."
  },

  yourRights: {
    en: [
      "An employer cannot reject an applicant based solely on the existence of a criminal record without the Article 23-A analysis.",
      "Sealed and dismissed cases cannot appear on background checks and employers cannot ask about them.",
      "If denied a job because of a record, the employer must provide a written explanation upon request (in some jurisdictions).",
      "Background check companies must follow accuracy standards and allow disputes under the federal Fair Credit Reporting Act.",
      "A Certificate of Relief from Disabilities creates a presumption of rehabilitation under Article 23-A.",
      "Retaliation for asserting these rights is illegal."
    ]
  },

  legalOptions: {
    en: [
      "If a job was denied because of a criminal record without proper analysis, a complaint can be filed with the NY Division of Human Rights at (888) 392-3644.",
      "If a sealed case appeared on a background check, a dispute can be filed with the background check company. They must investigate and correct errors within 30 days under the FCRA.",
      "Free legal help with employment discrimination based on criminal records is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "A Certificate of Relief from Disabilities (Correction Law § 702) can strengthen an employment application by creating a legal presumption of rehabilitation.",
      "The Center for Community Alternatives at (315) 422-5638 provides advocacy and legal services specifically for people with criminal records in the employment context."
    ]
  },

  example: {
    en: "A man with a 10-year-old misdemeanor conviction applies for a warehouse job in Rochester. The employer runs a background check, sees the conviction, and rescinds the offer. The man contacts Legal Aid. A lawyer explains that under Article 23-A, the employer must consider how long ago the offense was and whether it relates to the job. The conviction was minor, a decade old, and unrelated to warehouse work. Legal Aid sends a letter to the employer citing the law. The employer reverses the decision and hires him."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Criminal record employment discrimination, Article 23-A",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "NY Division of Human Rights",
      focus: "Employment discrimination complaints including criminal record",
      qualifier: "Any person in New York",
      access: "Phone or online",
      outcome: "Investigation and enforcement",
      phone: "(888) 392-3644",
      url: "https://dhr.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "clean-slate-ny",
    "dismissed-case-sealing-ny",
    "marijuana-sealing-ny",
    "getting-id-documents-ny-program",
    "workplace-discrimination-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "background check",
    "criminal record",
    "employment record",
    "Article 23-A",
    "Fair Chance",
    "ban the box",
    "denied job record",
    "sealed record employment",
    "certificate of relief",
    "rehabilitation",
    "FCRA",
    "background check error"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/COR/A23-A",
    "https://dhr.ny.gov"
  ],

  lastVerified: "2026-04-23",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
