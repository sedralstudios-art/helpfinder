export const VERIFICATION = {
  id: "verification",
  term: { en: "Verification" },
  aka: ["Proof", "Documentation", "Supporting Documents"],
  category: "benefits",
  subtags: ["program-jargon"],

  context: {
    en: "You hear this every time you apply for benefits. The agency asks you to verify things like income, address, household size, and identity. If you cannot provide the paperwork, the application can be delayed or denied."
  },

  plainEnglish: {
    en: "The documents an agency requires to prove you qualify for a program. Common verification items: photo ID, Social Security card, proof of income (pay stubs, tax return, benefits letter), proof of address (utility bill, lease), birth certificates for children, and immigration documents if applicable. Different programs require different proof. If you do not have a document, tell the caseworker — there are often alternative ways to verify (like a signed statement from someone who can confirm the information). Agencies cannot demand documents that do not exist or are unreasonably difficult to get."
  },

  whatToAsk: {
    en: [
      "Exactly what documents do I need to bring?",
      "If I do not have one of the required documents, what alternatives are accepted?",
      "Can I submit documents by mail, fax, or upload instead of in person?",
      "What happens if I cannot get the documents before the deadline?"
    ]
  },

  related: ["eligibility-determination", "recertification", "intake", "snap", "medicaid", "temporary-assistance"],
  legalEntryIds: ["benefits-verification-letter-ny-program"],

  citation: "18 NYCRR Part 385 (TA verification); 7 CFR 273.2 (SNAP)",
  sourceUrl: "https://www.law.cornell.edu/cfr/text/7/273.2",
  lastVerified: "2026-04-16",
  status: "active"
};
