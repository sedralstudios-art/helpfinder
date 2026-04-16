export const DRIVING_WITHOUT_INSURANCE_NY = {
  id: "driving-without-insurance-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Driving Without Insurance in New York — Penalties and What to Do" },

  summary: {
    en: "New York requires every registered vehicle to carry liability insurance. Driving without insurance is a serious violation — it can result in license and registration suspension, fines, civil penalties, and even vehicle seizure. The DMV actively monitors insurance coverage through an electronic verification system and will suspend the registration if the insurer reports a lapse. Getting caught without insurance is expensive — but there are steps to resolve it."
  },

  whoQualifies: {
    en: [
      "Any driver whose insurance has lapsed and is still driving.",
      "Any driver ticketed for operating without insurance.",
      "Any vehicle owner whose registration was suspended by the DMV for an insurance lapse.",
      "Any driver involved in an accident while uninsured."
    ]
  },

  whatItMeans: {
    en: "Under Vehicle and Traffic Law § 319, every motor vehicle registered in New York must have liability insurance. The minimum coverage is: $25,000/$50,000 bodily injury, $10,000 property damage, $50,000 no-fault (PIP), and $25,000/$50,000 uninsured motorist. When an insurance policy is cancelled or lapses, the insurer notifies the DMV electronically. The DMV sends the vehicle owner a notice and suspends the registration if insurance is not restored. Penalties for driving without insurance (VTL § 319): first offense — fine of $150-$1,500, license suspension for up to 1 year, registration revocation, and a civil penalty of $750. Subsequent offense within 6 months — fine of $300-$1,500, suspension up to 1 year, and civil penalty of $750. The vehicle can also be seized and impounded. If the driver is involved in an accident while uninsured, they are personally liable for all damages — and their license and registration are revoked until all judgments are satisfied. The DMV requires the driver to file an SR-22 (proof of financial responsibility) for 3 years after a lapse, which increases insurance costs. If the lapse was brief and the owner can show continuous coverage was restored quickly, the civil penalty may be reduced."
  },

  yourRights: {
    en: [
      "The DMV must send notice before suspending the registration for an insurance lapse.",
      "The owner can respond to the notice by providing proof that insurance was maintained continuously.",
      "If the lapse was brief, the civil penalty may be reduced.",
      "The right to a hearing to contest the suspension.",
      "After resolving the lapse, the registration can be restored — but an SR-22 filing is required for 3 years.",
      "If ticketed for no insurance but coverage was actually in effect, the ticket can be dismissed with proof of insurance at the court date."
    ]
  },

  legalOptions: {
    en: [
      "If the registration is suspended, the first step is obtaining insurance and then applying for registration restoration at the DMV.",
      "An SR-22 filing (proof of financial responsibility) must be maintained for 3 years — the insurance company files it with the DMV.",
      "If ticketed, bring proof of insurance to court. If coverage was in effect at the time, the ticket can be dismissed.",
      "The civil penalty ($750) must be paid to the DMV before the registration is restored.",
      "Free legal help with DMV and traffic issues is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "For drivers who cannot afford insurance, some insurers offer minimum-coverage policies — comparison shopping through the NY Auto Insurance Plan (NYAIP) may help."
    ]
  },

  example: {
    en: "A man in Rochester lets his insurance lapse for 2 months because he could not afford the premium. The DMV suspends his registration. He is pulled over and ticketed for driving with a suspended registration and no insurance. He faces a fine of up to $1,500 plus the $750 civil penalty. He obtains a new insurance policy, pays the civil penalty, has the insurer file an SR-22, and applies for registration restoration at the DMV. He then goes to court with proof of the new insurance to address the ticket."
  },

  counsel: [
    {
      type: "free",
      name: "NY DMV — Registration and Insurance",
      focus: "Registration restoration, insurance lapses, SR-22 filings",
      qualifier: "Any vehicle owner in New York",
      access: "In person, online, or by mail",
      outcome: "Registration restoration, penalty information",
      phone: "(518) 486-9786",
      url: "https://dmv.ny.gov/insurance/insurance-requirements",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "license-suspension-ny",
    "traffic-ticket-options-ny",
    "car-accident-no-fault-ny",
    "uninsured-motorist-accident-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "no insurance",
    "driving uninsured",
    "insurance lapse",
    "VTL 319",
    "registration suspended",
    "SR-22",
    "civil penalty",
    "$750 penalty",
    "auto insurance required",
    "DMV suspension",
    "minimum coverage",
    "insurance ticket"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/319",
    "https://dmv.ny.gov/insurance/insurance-requirements"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
