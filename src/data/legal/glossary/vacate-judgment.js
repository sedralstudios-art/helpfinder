export const VACATE_JUDGMENT = {
  id: "vacate-judgment",
  term: { en: "Vacate a Judgment" },
  aka: ["Motion to Vacate", "Set Aside Judgment"],
  category: "courts",
  subtags: ["civil", "procedure", "remedies"],

  context: {
    en: "Vacating a judgment is when a court undoes a prior judgment, treating it as if it never existed. The most common situation is vacating a default judgment after the defendant proves a good reason for missing court and a real defense to the case."
  },

  plainEnglish: {
    en: "A court order that undoes a prior judgment and treats it as if it never existed. The most common ground is a default judgment that was entered because the defendant did not appear. Under New York CPLR § 5015(a)(1), the defendant can ask the court to vacate the default by showing both a reasonable excuse for not appearing (illness, lack of notice, mistake) and a meritorious defense to the underlying claim. The motion generally must be filed within one year of the default. Other grounds under CPLR § 5015 include newly discovered evidence, fraud or misconduct by the other party, lack of jurisdiction, and reversal of an underlying ruling. A vacated judgment goes away. The case usually starts back up where it left off — the parties pick up the litigation, with the defendant now able to file an answer and litigate the merits. Vacating a judgment can also remove a related judgment lien on property and stop ongoing wage garnishment."
  },

  whatToAsk: {
    en: [
      "What is the ground for vacating — default, fraud, jurisdiction, or other?",
      "What excuse and defense can be shown for a default?",
      "How long do I have to file the motion?",
      "What happens to the case after the judgment is vacated?",
      "Will vacating the judgment also lift a wage garnishment or judgment lien?"
    ]
  },

  related: ["default-judgment", "service-of-process", "garnishment", "summons", "complaint"],
  legalEntryIds: [],

  citation: "NY CPLR § 5015 (relief from judgment or order)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/5015",
  lastVerified: "2026-04-26",
  status: "active"
};
