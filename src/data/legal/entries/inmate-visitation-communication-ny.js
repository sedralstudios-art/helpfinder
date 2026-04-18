export const INMATE_VISITATION_COMMUNICATION_NY = {
  id: "inmate-visitation-communication-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY COR 138",
  status: "active",

  title: { en: "Inmate Visits, Mail, and Phone Calls — New York State Prisons and County Jails" },

  summary: {
    en: "New York Correction Law and DOCCS directives set rules for visits, mail, and phone calls at state prisons. County jails like the Monroe County Jail follow Correction Law Sections 500-b and 500-c plus local sheriff rules. Families and attorneys have limited but real rights to contact an incarcerated person. Facilities can restrict visits for security reasons. The federal Martha Wright-Reed Act of 2022 gave the FCC authority to cap interstate phone and video rates from prisons and jails."
  },

  whoQualifies: {
    en: [
      "A family member of a person held in a NY state prison (DOCCS facility).",
      "A family member of a person held in a NY county jail such as the Monroe County Jail.",
      "An attorney representing an inmate — attorney visits follow stricter confidentiality rules.",
      "A clergy member providing spiritual care under DOCCS religious-services directives.",
      "An approved friend on the inmate's visitor list.",
      "A parent or legal guardian bringing a minor child to visit an incarcerated parent."
    ]
  },

  whatItMeans: {
    en: "Correction Law Section 138 and DOCCS Directive 4403 govern state prison visits. Each inmate submits a visitor list. Each prospective visitor must complete a visitor application and pass a criminal background check. Approval typically takes several weeks. Visitors must bring government-issued photo ID every visit and follow posted dress and conduct rules. Rejected visitors can appeal in writing to the facility superintendent. County jails operate under Correction Law 500-b and 500-c plus local sheriff rules. The Monroe County Jail uses a mix of scheduled video visits and in-person visits for certain categories. Attorney visits are always in-person and confidential under CPLR 4503 (attorney-client privilege). Attorney visits cannot be recorded or listened to. Mail to inmates is opened and inspected for contraband. Legal mail, clearly marked from an attorney, is opened only in the inmate's presence. Phone calls from state prisons are recorded and monitored except for attorney calls. JPay and Securus are common vendors for phone, video, and commissary transfers. The federal Martha Wright-Reed Just and Reasonable Communications Act of 2022 gave the FCC authority to cap interstate phone and video rates from prisons and jails; the FCC has issued rate-cap orders under this authority. Visits can be denied or suspended for rule violations such as introducing contraband, physical contact beyond a brief greeting, dress code violations, or past criminal history involving the facility. Suspensions must be in writing and can be appealed. Visitors with open warrants can be arrested at the visitor entrance."
  },

  yourRights: {
    en: [
      "An inmate has the right to reasonable visits subject to approved visitor lists and facility rules (Correction Law 138).",
      "An inmate has the right to confidential attorney visits and attorney phone calls (CPLR 4503).",
      "An inmate has the right to send and receive mail, with legal mail opened only in the inmate's presence.",
      "An inmate has the right to reasonable phone access, with rates capped by the FCC under the Martha Wright-Reed Act.",
      "A visitor denied or suspended has the right to a written reason and to appeal to the superintendent.",
      "A minor child has the right to visit an incarcerated parent unless a court order prohibits contact.",
      "Clergy of any recognized faith have the right to visit under DOCCS religious-services directives."
    ]
  },

  legalOptions: {
    en: [
      "Prisoners' Legal Services of New York at (877) 268-4430 — free legal help for state inmates.",
      "Monroe County Jail main line at (585) 753-4600 — visit scheduling and general inquiries.",
      "Legal Aid Society Prisoners' Rights Project at (212) 577-3530 — statewide prisoner rights.",
      "DOCCS Office of Special Investigations at (518) 457-5392 — complaints about facility staff.",
      "NYCLU at (212) 607-3300 — systemic prison and jail condition complaints.",
      "JustCause at (585) 295-5708 — family court orders affecting jail visitation.",
      "Correctional Association of NY at (212) 254-5700 — statewide prison oversight."
    ]
  },

  example: {
    en: "A Rochester mother wanted to bring her 7-year-old son to visit the boy's father at a DOCCS medium-security facility. She submitted a visitor application and waited 5 weeks for approval. Her approval came back denied because of a 12-year-old felony conviction. She wrote to the superintendent explaining the circumstances and the time that had passed, and submitted a letter from her parole officer documenting her compliance. The superintendent granted a partial approval for supervised visits with the child. The family scheduled their first visit. They brought her state ID, the child's birth certificate, and quarters for a locker. The visit lasted 90 minutes in the general visiting room."
  },

  counsel: [
    {
      type: "free",
      name: "Prisoners' Legal Services of New York",
      focus: "Legal help for state inmates — visitation appeals, conditions, grievances",
      qualifier: "Indigent inmates in NY state prisons",
      access: "Phone at (877) 268-4430 or write to the field office",
      outcome: "Advice, administrative appeals, litigation on conditions",
      phone: "(877) 268-4430",
      url: "https://www.plsny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "JustCause",
      focus: "Family court, child visitation orders involving an incarcerated parent",
      qualifier: "Low-income Monroe County residents",
      access: "Phone intake at (585) 295-5708",
      outcome: "Pro bono family law support",
      phone: "(585) 295-5708",
      url: "https://www.justcauseny.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "order-of-protection-ny",
    "visitation-rights-ny",
    "criminal-case-process-ny",
    "dismissed-case-sealing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "prison visitation",
    "jail visits",
    "inmate communication",
    "Correction Law 138",
    "DOCCS Directive 4403",
    "attorney-client visits",
    "prison phone rates",
    "Martha Wright-Reed Act",
    "legal mail",
    "Monroe County Jail"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/COR/138",
    "https://doccs.ny.gov/directives",
    "https://www.fcc.gov/consumers/guides/incarcerated-peoples-communications-services"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
