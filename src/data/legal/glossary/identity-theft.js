export const IDENTITY_THEFT = {
  id: "identity-theft",
  term: { en: "Identity Theft" },
  aka: ["ID Theft"],
  category: "consumer",
  subtags: ["crime", "credit", "scam"],

  context: {
    en: "Identity theft is when someone uses another person's name, Social Security number, or financial information to open accounts, get loans, file fake tax returns, or commit other fraud."
  },

  plainEnglish: {
    en: "When someone uses another person's personal information without permission to commit fraud or other crimes. Common forms include opening credit cards or loans in the victim's name and draining bank accounts. Filing fake tax returns to steal refunds and getting medical care under the victim's name are also common. Identity theft is a federal crime under 18 USC § 1028. New York Penal Law also criminalizes identity theft in three degrees based on the amount of harm. The first step for a victim is to file a report at IdentityTheft.gov, which generates an identity theft affidavit. Victims should also place a fraud alert or credit freeze with the three credit bureaus. Filing a police report with the local police is another step. Each fraudulent account should be disputed in writing with the creditor."
  },

  whatToAsk: {
    en: [
      "Has an identity theft report been filed at IdentityTheft.gov?",
      "Has a fraud alert or credit freeze been placed with all three credit bureaus?",
      "Has a police report been filed with the local police?",
      "Have the fraudulent accounts been disputed in writing with each creditor?",
      "Is free help available through Legal Aid or a nonprofit credit counselor?"
    ]
  },

  related: ["credit-report", "debt-collection", "small-claims"],
  legalEntryIds: [],

  citation: "18 USC § 1028 (federal); NY Penal Law § 190.78+ (NY)",
  sourceUrl: "https://www.identitytheft.gov/",
  lastVerified: "2026-04-26",
  status: "active"
};
