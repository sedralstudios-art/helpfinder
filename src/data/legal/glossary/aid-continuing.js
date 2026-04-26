// Glossary term: Aid Continuing
// Citation verified: 18 NYCRR 358-3.6 (right to aid continuing pending
// fair hearing decision). Triggered by timely request — before the
// effective date on the notice, OR within 10 days of the notice's
// postmark date if notice was late. Covers SNAP, TA, Medicaid, and more.

export const AID_CONTINUING = {
  id: "aid-continuing",
  term: { en: "Aid Continuing" },
  aka: ["Aid to Continue", "Aid Pending"],
  category: "benefits",
  subtags: ["appeal", "due-process"],

  context: {
    en: "You hear this when a benefit notice says help is going to stop or go down. If you ask for a fair hearing fast enough, your benefits can stay the same while you wait for the decision."
  },

  plainEnglish: {
    en: "A rule that keeps a person's benefits going at the same level while they wait for a fair hearing decision. It applies to SNAP, Temporary Assistance, Medicaid, and some other programs. To get aid continuing, the recipient has to request the fair hearing before the date the change would take effect — that date is on the notice. If the notice was mailed late, the deadline becomes 10 days from the postmark. Without this request, the change goes through even before the hearing. A recipient who loses the hearing may have to pay back the benefits received during the wait — legal aid can explain the trade-off."
  },

  whatToAsk: {
    en: [
      "What exact date is on the notice — is that the deadline?",
      "How do I ask for the fair hearing AND for aid continuing in the same request?",
      "If I lose the hearing, how much could I have to pay back?",
      "Can I keep my benefits during the hearing for SNAP and Medicaid both?",
      "Does asking for a hearing hurt my current benefits in any other way?"
    ]
  },

  related: ["fair-hearing", "adequate-notice", "recoupment", "snap", "medicaid", "temporary-assistance"],
  legalEntryIds: ["benefits-denial-appeal-ny", "fair-hearing-ny"],

  citation: "18 NYCRR § 358-3.6",
  sourceUrl: "https://www.law.cornell.edu/regulations/new-york/18-NYCRR-358-3.6",
  lastVerified: "2026-04-15",
  status: "active"
};
