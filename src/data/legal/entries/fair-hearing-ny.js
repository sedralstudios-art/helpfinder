export const FAIR_HEARING_NY = {
  id: "fair-hearing-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 22",
  status: "active",

  title: { en: "Fair Hearings — What to Expect and How to Get Ready" },

  summary: {
    en: "A fair hearing is your chance to tell a judge why you think a decision about your benefits was wrong. You don't need a lawyer. The hearing is less formal than a regular court case. Most hearings happen by phone. What matters most is getting ready and having proof."
  },

  whoQualifies: {
    en: [
      "Anyone who asked for a fair hearing after their benefits were denied, cut, or stopped.",
      "Anyone whose benefits application was not decided in time.",
      "You don't need a lawyer. You can do this yourself.",
      "You can bring a lawyer, legal aid advocate, friend, family member, or anyone else to help you."
    ]
  },

  whatItMeans: {
    en: "A state judge runs the hearing — someone who was not part of the original decision. Most hearings happen by phone. You can ask for an in-person hearing when you request the hearing.\n\nAt the hearing, the DSS worker goes first. They explain the decision. Then it's your turn. You tell your side. You can show papers, bring people to speak for you, and ask the DSS worker questions. The judge may ask questions too. The hearing is recorded.\n\nA few weeks later, you get a written decision in the mail. If you win, the decision tells your local DSS office to fix your case. If they don't, you can file a compliance complaint. If you lose, you can still appeal to State Supreme Court. You have 4 months to file that appeal (called an Article 78 case)."
  },

  yourRights: {
    en: [
      "You have the right to see your whole case file at the DSS office before the hearing. Copies are free.",
      "You have the right to get the DSS evidence packet at least 2 business days before the hearing.",
      "You have the right to send in your own proof at least 2 business days before the hearing — by fax, mail, or the upload portal.",
      "You have the right to bring people who can speak for you.",
      "You have the right to ask the DSS worker questions about their proof and what they say.",
      "You have the right to a free interpreter if you don't speak English.",
      "You have the right to ask to move the hearing to another day if you can't make it.",
      "You have the right to ask the judge to leave the record open for a few days so you can turn in more proof.",
      "You have the right to be paid back for travel, child care, and other costs of going to the hearing.",
      "You have the right to ask for the hearing to be reopened if you missed it for a good reason. You have 1 year to do this."
    ]
  },

  legalOptions: {
    en: [
      "The state's Office of Administrative Hearings runs fair hearings (18 NYCRR Part 358).",
      "Phone hearings are set for morning (9am-1pm) or afternoon (1pm-5pm). The judge calls from a blocked number. Set your phone to take blocked or unknown calls.",
      "If you miss the judge's call, they try again in 10-20 minutes. Miss both calls, and the hearing may be counted as dropped.",
      "You can send proof to the state at upload.ny.gov using your myBenefits login, by fax to (518) 473-6735, or by mail to OTDA Office of Administrative Hearings, P.O. Box 1930, Albany, NY 12201.",
      "Your own words count as proof. Even without papers, you can tell your side at the hearing.",
      "If you asked to keep getting benefits during the appeal (called \"aid continuing\") and you lose, you may have to pay back the benefits you got during the appeal. DSS will send a notice if so.",
      "If DSS doesn't follow a decision you won, you can file a compliance complaint at otda.ny.gov/hearings/, by phone at 1-800-342-3334, or by mail.",
      "Free help getting ready for a hearing and representation at the hearing: Legal Aid Society of Rochester (585-232-4090), LawNY (585-325-2520), and Empire Justice Center (585-454-4060)."
    ]
  },

  example: {
    en: "Michael gets Temporary Assistance. He got a notice saying his benefits would be cut because he missed a work appointment. Michael missed it because he had a doctor's visit that day. He asked for a fair hearing and asked to keep getting benefits during the appeal. Before the hearing, he got a note from his doctor. He uploaded the note 2 days before the hearing. At the phone hearing, the DSS worker said Michael was marked absent. Michael told the judge about the doctor visit and the note. The judge ruled in Michael's favor and ordered his benefits put back."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Fair hearing preparation and representation, public benefits appeals",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation at fair hearings and advice on appeals",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Fair hearings, public benefits, housing, consumer issues",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Benefits appeals, systemic advocacy, impact litigation",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "benefits-denial-appeal-ny",
    "snap-rights-ny",
    "medicaid-ny",
    "tanf-public-assistance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "fair hearing",
    "benefits hearing",
    "appeal hearing",
    "how to prepare hearing",
    "what to expect hearing",
    "benefits judge",
    "OTDA hearing",
    "hearing evidence",
    "hearing by phone",
    "won my hearing",
    "lost my hearing appeal",
    "hearing compliance"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/22",
    "https://www.law.cornell.edu/regulations/new-york/title-18/chapter-II/subchapter-B/article-1/part-358/subpart-358-5",
    "https://otda.ny.gov/hearings/",
    "https://otda.ny.gov/hearings/faq.asp",
    "https://otda.ny.gov/hearings/telephonic-hearings.asp"
  ],

  lastVerified: "2026-04-13",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
