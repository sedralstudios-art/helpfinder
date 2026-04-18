export const GUARDIAN_AD_LITEM_NY = {
  id: "guardian-ad-litem-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP 1201",
  status: "active",

  title: { en: "Guardian Ad Litem — Court-Appointed Representative for a Person Unable to Protect Their Own Interests" },

  summary: {
    en: "A guardian ad litem (GAL) is a person appointed by a court to represent the interests of someone who cannot represent themselves in a lawsuit — a minor, a person with a mental or cognitive disability, or an absent party. The GAL is not a guardian in the full sense; the role ends when the case ends. New York CPLR Article 12 governs GAL appointments in civil cases, while SCPA 403 governs them in Surrogate's Court. Family Court uses the related role of attorney for the child (AFC) under Family Court Act 241."
  },

  whoQualifies: {
    en: [
      "A minor who is a party to a civil lawsuit (plaintiff or defendant).",
      "An adult who is incapacitated by mental illness, dementia, or cognitive disability and has no guardian.",
      "A person whose whereabouts are unknown and who has an interest in pending litigation.",
      "A beneficiary of an estate in Surrogate's Court who is a minor or incapacitated.",
      "A person involved in a mortgage foreclosure who is served but unable to respond due to disability.",
      "An unborn child with a contingent interest in a trust or estate proceeding."
    ]
  },

  whatItMeans: {
    en: "CPLR 1201 requires that a person under disability — an infant (under 18), a person judicially declared incompetent, or a person for whom a committee or conservator has been appointed — appear by a representative. CPLR 1202 lets the court appoint a GAL when no natural guardian or general guardian is available or willing. The GAL can be an attorney, a family member, or a neutral third party. CPLR 1203 requires that the GAL act in the best interests of the person represented and that any settlement of an infant's claim be approved by court order (CPLR 1207). CPLR 1204 covers GAL compensation, typically paid from the represented party's recovery or from the opposing party in specific situations. In Surrogate's Court, SCPA 403 authorizes appointment of a GAL for a person under disability in estate proceedings. This commonly happens when a minor or incapacitated adult is a will beneficiary or distributee. In mortgage foreclosure actions, CPLR 1201 combined with RPAPL 1321 often triggers a GAL appointment when the defendant homeowner cannot meaningfully respond. Family Court uses a different role: the attorney for the child (AFC) under Family Court Act Section 241. An AFC represents the child's wishes (not just best interests) in custody, visitation, abuse/neglect, and juvenile delinquency cases. AFCs are appointed in most contested Family Court matters involving children. Selection: the court typically appoints from a panel of qualified attorneys who have completed required training (22 NYCRR 36 for fiduciary appointments). The appointee files a consent to act. Duties: investigate the facts, consult with the represented person if possible, file answers or motions, attend hearings, and report to the court. The GAL's role is to protect the person's legal interests in the pending case — not to make long-term life decisions. Discharge: the GAL's authority ends when the case is resolved, unless the court continues it for post-judgment matters (for example, holding settlement funds in a Surrogate's Court guardianship for a minor)."
  },

  yourRights: {
    en: [
      "A person under disability has the right to appear by a representative (CPLR 1201).",
      "A court has authority to appoint a GAL when no general guardian is available (CPLR 1202).",
      "A GAL must act in the best interests of the person represented (CPLR 1203).",
      "An infant settlement requires court approval before it is binding (CPLR 1207).",
      "A child in Family Court has the right to an attorney for the child in contested custody, visitation, or abuse cases (FCA 241).",
      "A beneficiary in Surrogate's Court has the right to a GAL if under disability (SCPA 403).",
      "A represented person has the right to be consulted if capable (CPLR 1203)."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Supreme Court at (585) 371-3300 — civil GAL appointments.",
      "Monroe County Surrogate's Court at (585) 371-3630 — estate GAL appointments.",
      "Monroe County Family Court at (585) 428-3720 — attorney for the child assignments.",
      "Empire Justice Center at (585) 295-5800 — help for incapacitated adults in civil litigation.",
      "Legal Aid Society of Rochester at (585) 232-4090 — help for low-income persons needing GAL relief.",
      "Mental Hygiene Legal Service at (585) 530-3050 — representation of persons with mental disabilities.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — private GAL matters."
    ]
  },

  example: {
    en: "An 82-year-old Irondequoit widow with advanced dementia was named as a defendant in a mortgage foreclosure after her late husband's estate lapsed on payments. The bank moved for default judgment when she did not appear. Her daughter contacted Legal Aid, which petitioned for appointment of a guardian ad litem under CPLR 1201 and 1202. The court appointed a panel attorney as GAL. The GAL filed an answer asserting the protections of RPAPL 1304 (the 90-day pre-foreclosure notice) and a loan modification request. The foreclosure was stayed while the estate was probated and a full Article 81 guardianship was obtained for the mother. The GAL's role ended when the Article 81 guardian was appointed."
  },

  counsel: [
    {
      type: "free",
      name: "Mental Hygiene Legal Service (MHLS)",
      focus: "Legal representation of persons with mental disabilities in civil proceedings",
      qualifier: "Persons subject to civil proceedings involving mental capacity",
      access: "Phone at (585) 530-3050",
      outcome: "Representation in guardianship, GAL, and civil commitment matters",
      phone: "(585) 530-3050",
      url: "https://ww2.nycourts.gov/courts/ad4/mhls/index.shtml",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Petitioning for GAL appointments and advising families of incapacitated adults",
      qualifier: "Low-income Monroe County residents",
      access: "Phone at (585) 232-4090",
      outcome: "Pro bono petition and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "guardianship-article81-ny",
    "when-someone-dies-estate-ny",
    "custody-basics-ny",
    "visitation-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "guardian ad litem",
    "CPLR 1201",
    "CPLR 1202",
    "CPLR 1203",
    "SCPA 403",
    "attorney for the child",
    "FCA 241",
    "infant settlement",
    "incapacitated party",
    "court-appointed representative"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/1201",
    "https://www.nysenate.gov/legislation/laws/CVP/1202",
    "https://www.nysenate.gov/legislation/laws/SCP/403"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
