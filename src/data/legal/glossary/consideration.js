export const CONSIDERATION = {
  id: "consideration",
  term: { en: "Consideration (Contract Law)" },
  aka: ["Bargained-for Exchange"],
  category: "consumer",
  subtags: ["contract"],

  context: {
    en: "Consideration is the bargained-for exchange that makes a contract enforceable. Each side has to give something of value — money, a service, a promise, or even giving up a legal right. Without consideration, most agreements are not legally binding."
  },

  plainEnglish: {
    en: "What each side gives and gets in a contract. To be enforceable, most contracts need consideration on both sides — something of legal value exchanged. Consideration can take many forms: money paid, goods or services delivered, a promise to do something, or even giving up a legal right (like the right to sue). The amount does not have to match in dollar value. Courts generally do not look at whether the deal was a fair trade, only whether something of legal value passed each way. Common situations where consideration is missing include gifts (no return promise), past consideration (an exchange that already happened cannot support a new promise), and pre-existing duty (a promise to do something the person was already required to do does not count). Some contracts are enforceable without classic consideration — under doctrines like promissory estoppel, where a promise was reasonably relied on to the promisee's detriment. Sealed instruments and modifications under UCC Article 2 also have special rules."
  },

  whatToAsk: {
    en: [
      "What did each side give and get in this deal?",
      "Was anything of legal value actually promised on each side?",
      "Could a missing consideration argument knock out this contract?",
      "Does promissory estoppel apply if I relied on a promise to my detriment?",
      "Are there special rules under the UCC for sale-of-goods modifications?"
    ]
  },

  related: ["breach-of-contract", "implied-warranty", "small-claims", "cooling-off-period"],
  legalEntryIds: [],

  citation: "NY common law; NY GOL § 5-1103 (modifications without consideration)",
  sourceUrl: "https://www.law.cornell.edu/wex/consideration",
  lastVerified: "2026-04-26",
  status: "active"
};
