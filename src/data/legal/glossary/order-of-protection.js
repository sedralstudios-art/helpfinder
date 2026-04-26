// Glossary term: Order of Protection
// Citation verified: NY CPL § 530.12 (family offenses — criminal court);
// § 530.13 (non-family). Family offense orders up to 8 years for felony
// conviction, 5 years for Class A misdemeanor. Family court also issues
// orders of protection separately (Family Court Act Article 8).

export const ORDER_OF_PROTECTION = {
  id: "order-of-protection",
  term: { en: "Order of Protection" },
  aka: ["OP", "Protection Order", "Restraining Order"],
  category: "criminal",
  subtags: ["arraignment-stage", "post-plea", "family", "safety"],

  context: {
    en: "You hear this in cases where someone got hurt or threatened. A criminal court judge can issue one on the day of arraignment. Family court can also issue one, even without a criminal case. Breaking one is a new crime on its own."
  },

  plainEnglish: {
    en: "A court paper that tells one person to stay away from another person. It can say: no contact at all, no coming near home or work, no calls or messages, no touching, no having a gun. A judge can issue a short-term order fast, on the same day, if it seems needed for safety. A longer-term order can last up to 8 years after a felony or 5 years after a Class A misdemeanor. Breaking the order is a separate crime, even when the protected person said it was okay."
  },

  whatToAsk: {
    en: [
      "Is there an order of protection in my case? Who is it against?",
      "Does it say 'full' (no contact at all) or 'limited' (no harassment only)?",
      "When does it expire?",
      "If the other person contacts me first, what should I do?",
      "Can a family court order be changed in criminal court, or the other way around?"
    ]
  },

  related: ["arraignment", "plea", "bail", "public-defender"],
  legalEntryIds: ["order-of-protection-ny"],

  citation: "NY CPL § 530.12 (family); § 530.13 (non-family)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/530.12",
  lastVerified: "2026-04-15",
  status: "active"
};
