export const SSDI_DENIAL_APPEAL_NY = {
  id: "ssdi-denial-appeal-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "SSDI or SSI Denied — How to Appeal a Social Security Disability Decision" },

  summary: {
    en: "Most Social Security disability claims are denied on the first application. That does not mean the claim is hopeless — many denials are overturned on appeal, especially at the hearing level before an Administrative Law Judge. The appeal process has strict deadlines (60 days at each level) and multiple stages. Free legal help is available, and many disability attorneys work on contingency."
  },

  whoQualifies: {
    en: [
      "Anyone whose application for SSDI (Social Security Disability Insurance) or SSI (Supplemental Security Income) was denied.",
      "Anyone whose benefits were terminated after a continuing disability review.",
      "Anyone who missed the 60-day appeal deadline may still be able to request a late filing with good cause."
    ]
  },

  whatItMeans: {
    en: "The Social Security disability appeal process has four levels. Reconsideration: a different examiner reviews the full case. The denial is upheld more often than not at this level, but filing it preserves the right to the next stage. ALJ Hearing: this is where most cases are won. An Administrative Law Judge holds a hearing (in person or by video) where the claimant testifies, medical evidence is presented, and a vocational expert may be questioned. The claimant has the right to a lawyer or representative at the hearing. Appeals Council: reviews the ALJ decision for legal errors. The council can send the case back for a new hearing or issue its own decision. Federal Court: judicial review in US District Court. The 60-day deadline runs from the date the denial letter is received (Social Security assumes 5 days after mailing). Missing it can be fatal to the case. Medical evidence is the most important factor — detailed records from treating physicians showing the functional limitations caused by the condition. The treating physician's opinion carries significant weight. Many disability attorneys and non-attorney representatives work on contingency — their fee (typically 25% of past-due benefits, capped by law) is paid only if the case is won."
  },

  yourRights: {
    en: [
      "The right to appeal a denial at each level within 60 days of the decision.",
      "The right to a hearing before an Administrative Law Judge.",
      "The right to a lawyer or representative at the hearing — many work on contingency (no fee unless they win).",
      "The right to present medical evidence, testimony, and witness statements at the hearing.",
      "The right to continue receiving benefits during the appeal if they were previously receiving and the appeal is timely.",
      "Attorney fees are regulated by law — capped at 25% of past-due benefits or a set dollar amount, whichever is less."
    ]
  },

  legalOptions: {
    en: [
      "The denial letter includes instructions for filing the appeal. The appeal can be filed online at ssa.gov, by phone at (800) 772-1213, or at the local Social Security office.",
      "Free legal help with disability appeals is available through Legal Aid Society of Rochester at (585) 232-4090 and through the Center for Disability Rights at (585) 546-7510.",
      "Many private disability attorneys take cases on contingency — the fee is paid from past-due benefits only if the case is won. The fee is capped by Social Security regulations.",
      "Medical records from treating physicians are the strongest evidence. Providing detailed functional limitations (what the person cannot do, how long they can sit/stand/walk, concentration difficulties) is more useful than just a diagnosis.",
      "If the 60-day deadline was missed, a late filing with good cause (hospitalization, mental health crisis, mail not received) can sometimes be accepted."
    ]
  },

  example: {
    en: "A woman in Rochester applies for SSDI after a back injury prevents her from working. She is denied at the initial level and again at reconsideration. She contacts Legal Aid, which represents her at the ALJ hearing. Her treating physician submits a detailed report on her functional limitations — she cannot sit for more than 20 minutes, cannot lift more than 10 pounds, and needs to lie down during the day. The ALJ grants the claim. She receives 14 months of back-pay from the date of her application."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "SSDI/SSI appeals, disability benefits, ALJ hearings",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation at hearings",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Center for Disability Rights",
      focus: "Disability advocacy, benefits navigation, rights protection",
      qualifier: "People with disabilities in the Rochester area",
      access: "Phone or in person",
      outcome: "Advocacy, referral, and peer support",
      phone: "(585) 546-7510",
      url: "https://cdrnys.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "ssdi-ny",
    "ssi-disability-ny",
    "fair-hearing-ny",
    "benefits-denial-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "SSDI denied",
    "SSI denied",
    "disability denied",
    "Social Security appeal",
    "ALJ hearing",
    "disability lawyer",
    "disability appeal",
    "60 day deadline",
    "reconsideration",
    "back pay disability",
    "functional limitations"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/423",
    "https://www.law.cornell.edu/uscode/text/42/405",
    "https://www.ssa.gov/benefits/disability/appeal.html"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
