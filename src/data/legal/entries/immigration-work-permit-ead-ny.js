export const IMMIGRATION_WORK_PERMIT_EAD_NY = {
  id: "immigration-work-permit-ead-ny",
  category: "employment",
  tier: "federal",
  jurisdiction: "us-fed",
  authorityType: "federal-statute",
  status: "active",
  draft: true,

  title: { en: "Work Permits (EAD) — Who Can Get One and How" },

  summary: {
    en: "An Employment Authorization Document (EAD) is a card issued by USCIS that allows certain non-citizens to work legally in the United States. Many people are eligible but do not know it. The application process, wait times, and rules depend on the person's immigration status."
  },

  whoQualifies: {
    en: [
      "Asylum applicants who have a pending case for at least 150 days.",
      "People with Temporary Protected Status (TPS).",
      "DACA recipients.",
      "Spouses of certain visa holders (H-4, L-2, E-1/E-2).",
      "People with pending adjustment of status (green card) applications.",
      "Certain crime victims with pending U-visa or T-visa applications."
    ]
  },

  whatItMeans: {
    en: "An EAD (Employment Authorization Document) is a work permit card issued by U.S. Citizenship and Immigration Services (USCIS). It allows the holder to work for any employer in the United States. The card is typically valid for one or two years and must be renewed before it expires. Different immigration categories have different paths to an EAD. Asylum applicants can apply 150 days after filing their case if no decision has been made. TPS holders apply as part of their TPS registration. DACA recipients apply with their DACA renewal. People with pending green card applications can apply while waiting. The application is Form I-765, filed with USCIS. Filing fees vary — some categories qualify for a fee waiver. Processing times can be long, sometimes six months or more. An expired EAD means the person cannot legally work until the new one arrives, though some categories have automatic extensions while the renewal is pending. Working without a valid EAD can have serious immigration consequences."
  },

  yourRights: {
    en: [
      "A person with a valid EAD has the right to work for any employer in the United States.",
      "An employer cannot refuse to accept a valid EAD as proof of work authorization.",
      "An employer cannot demand specific documents — any combination of acceptable documents from the I-9 list is valid.",
      "Certain EAD categories receive automatic 180-day extensions when a timely renewal is filed.",
      "A person has the right to request expedited processing from USCIS if they face severe financial loss.",
      "A person has the right to file a complaint with the Department of Justice if an employer discriminates based on immigration status or EAD category."
    ]
  },

  legalOptions: {
    en: [
      "Form I-765 (Application for Employment Authorization) is filed with USCIS online at uscis.gov or by mail.",
      "Filing fees depend on the category. Fee waivers are available for certain categories including asylum applicants and VAWA petitioners.",
      "USCIS processing times can be checked at egov.uscis.gov/processing-times. Current wait times for EADs vary widely.",
      "If the EAD is taking too long, the applicant can contact the USCIS Contact Center at (800) 375-5283 or file an inquiry (e-Request) online.",
      "Free legal help with EAD applications and immigration questions is available through Catholic Family Center Immigration Services at (585) 546-7220.",
      "The Legal Aid Society of Rochester provides immigration legal help at (585) 232-4090."
    ]
  },

  example: {
    en: "Maria applied for asylum after fleeing violence in her home country. After 150 days with no decision on her asylum case, she was eligible to apply for an EAD. She filed Form I-765 with a fee waiver. Seven months later, she received her EAD card and was able to work legally. When the card was about to expire, she filed a renewal. Because she filed on time, she received an automatic 180-day extension that allowed her to keep working while waiting for the new card."
  },

  counsel: [
    {
      type: "free",
      name: "Catholic Family Center — Immigration Services",
      focus: "EAD applications, asylum, TPS, DACA, immigration legal help",
      qualifier: "Low income immigrants in Monroe County",
      access: "Phone at (585) 546-7220",
      outcome: "Legal assistance with immigration applications and renewals",
      phone: "(585) 546-7220",
      url: "https://www.cfcrochester.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "USCIS Contact Center",
      focus: "Immigration case status, EAD processing, general questions",
      qualifier: "Anyone with a pending USCIS case",
      access: "Phone at (800) 375-5283",
      outcome: "Case status updates, appointment scheduling, inquiry filing",
      phone: "(800) 375-5283",
      url: "https://www.uscis.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "immigration-basics-ny",
    "undocumented-rights-ny",
    "workplace-discrimination-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "work permit",
    "EAD",
    "employment authorization",
    "work authorization",
    "I-765",
    "asylum work permit",
    "TPS work permit",
    "DACA work permit",
    "immigration work",
    "EAD renewal",
    "EAD expired"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/8/1324a",
    "https://www.law.cornell.edu/cfr/text/8/274a.12",
    "https://www.uscis.gov/working-in-the-united-states/information-for-employers-and-employees/employment-authorization-document",
    "https://www.uscis.gov/i-765"
  ],

  lastVerified: "2026-04-17",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
