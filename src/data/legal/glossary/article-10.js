// Glossary term: Article 10 (Child Abuse/Neglect proceeding)
// Citation verified: NY Family Court Act Article 10, § 1011+. CPS
// (statewide) or ACS (NYC) is the agency that investigates and files.
// Bench trial only — no jury right under FCA § 1044. § 1024 covers
// emergency removal without a court order. Parents have a right to
// free counsel under FCA § 262.

export const ARTICLE_10 = {
  id: "article-10",
  term: { en: "Article 10 Proceeding" },
  aka: ["Child Protective Case", "Neglect Case", "CPS Case"],
  category: "family",
  subtags: ["children", "safety", "court-filing"],

  context: {
    en: "You hear this when Child Protective Services or a similar agency files in Family Court claiming a parent neglected or abused a child. Outside New York City the agency is usually called CPS. In New York City it is called ACS."
  },

  plainEnglish: {
    en: "A civil case in Family Court where a child protection agency claims a parent abused or neglected a child. It is not a criminal case — no jail comes out of Article 10 itself — but the consequences are serious: the child can be removed from the home. The agency has to prove the claim before a judge, with no jury. Parents have the right to a free lawyer. In an emergency, the agency can remove a child from the home before filing, but they have to bring the case to Family Court quickly afterward. The parent can fight the removal and the claim at every step. If the judge finds against the parent, the case moves to a separate stage where the court decides what services, supervision, or placement should follow."
  },

  whatToAsk: {
    en: [
      "Has a petition been filed, or is this still an investigation?",
      "Do I have the right to a free lawyer right now?",
      "Was my child removed — if so, when is my next court date?",
      "What exactly does the agency say I did or did not do?",
      "What do I have to do to get my child back?"
    ]
  },

  related: ["family-court", "custody", "visitation", "public-defender"],
  legalEntryIds: ["custody-basics-ny","order-of-protection-ny"],

  citation: "NY FCA Article 10 (§ 1011+); § 262 (right to counsel)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/FCT/A10",
  lastVerified: "2026-04-15",
  status: "active"
};
