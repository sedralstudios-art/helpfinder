export const DOMESTIC_VIOLENCE = {
  id: "domestic-violence",
  term: { en: "Domestic Violence" },
  aka: ["DV", "Intimate Partner Violence"],
  category: "family",
  subtags: ["safety", "criminal", "civil"],

  context: {
    en: "Domestic violence covers physical, sexual, emotional, financial, or psychological abuse between people in a current or past intimate relationship, family relationship, or household. It can lead to criminal charges, civil orders of protection, and special protections in housing and employment."
  },

  plainEnglish: {
    en: "A pattern of abusive behavior used to control a partner, family member, or household member. It can include physical violence, sexual abuse, threats, stalking, and coercive control over money, communication, or movement. New York treats domestic violence both as a criminal matter and as the basis for civil protection. Criminal charges can include assault, harassment, menacing, strangulation, and many others. Civil orders of protection are available in Family Court (under FCA Article 8) and in criminal court (under CPL § 530.12). New York gives DV survivors specific protections in housing (early lease release, locks-changing rights, source-of-income protection), employment (paid leave for related court appearances), and benefits (TA without certain work requirements). Local resources include Willow Domestic Violence Center (formerly Alternatives for Battered Women) and other Monroe County agencies. Help is also available through the NY Domestic Violence Hotline."
  },

  whatToAsk: {
    en: [
      "Is a temporary order of protection available right away today?",
      "Should I file in Family Court, criminal court, or both?",
      "What housing protections apply to me as a DV survivor?",
      "Can I take paid leave from work for related court dates?",
      "What free legal and shelter services are available in Monroe County?"
    ]
  },

  related: ["family-offense-petition", "order-of-protection", "restraining-order"],
  legalEntryIds: [],

  citation: "NY FCA Article 8; NY CPL § 530.12; NY RPL § 227-c (housing); NY Labor Law § 196-b",
  sourceUrl: "https://www.opdv.ny.gov/",
  lastVerified: "2026-04-26",
  status: "active"
};
