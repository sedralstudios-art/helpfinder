export const REPRESENTATIVE_PAYEE = {
  id: "representative-payee",
  term: { en: "Representative Payee" },
  aka: ["Rep Payee", "Payee"],
  category: "benefits",
  subtags: ["disability", "program-jargon"],

  context: {
    en: "You hear this when someone receives Social Security, SSI, or SSDI but is not able to manage their own money. Social Security appoints another person or organization to receive and manage the benefits on their behalf."
  },

  plainEnglish: {
    en: "A person or organization that Social Security appoints to receive and manage benefits for someone who cannot manage their own finances — usually because of a disability, age, or mental health condition. The payee must use the money for the person's basic needs: food, housing, clothing, medical care, and personal items. The payee must keep records and file an annual report with Social Security showing how the money was spent. Being a payee is a responsibility, not a right — Social Security can change or remove a payee if they are not acting in the person's best interest."
  },

  whatToAsk: {
    en: [
      "Who is my representative payee?",
      "How is my money being spent?",
      "Can I request a different payee?",
      "Do I still get to have some of my own money for personal needs?",
      "If I think my payee is misusing my benefits, who do I report it to?"
    ]
  },

  related: ["ssi-ssdi", "medicaid", "case-manager"],
  legalEntryIds: [],

  citation: "42 USC § 405(j) (OASDI); 42 USC § 1383(a)(2) (SSI)",
  sourceUrl: "https://www.ssa.gov/payee/",
  lastVerified: "2026-04-16",
  status: "active"
};
