export const LICENSE_SUSPENSION_NY = {
  id: "license-suspension-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 510",
  status: "active",

  title: { en: "Driver's License Suspension — Your Rights in New York" },

  summary: {
    en: "New York can suspend or revoke your driver's license for a long list of reasons — unpaid traffic tickets, unpaid child support, DWI, too many points, and more. In most cases you have a right to notice and a hearing before the suspension kicks in, and many suspensions can be cleared by paying what you owe or fixing the problem."
  },

  whoQualifies: {
    en: [
      "Anyone with a New York driver's license, learner permit, or non-driver ID.",
      "Drivers from other states who get a New York suspension — it can follow you home through the Driver License Compact.",
      "Undocumented drivers with a Standard license (Green Light Law) have the same suspension rules and the same rights.",
      "Commercial drivers (CDL holders) face tougher rules — some offenses that wouldn't suspend a regular license will suspend a CDL."
    ]
  },

  whatItMeans: {
    en: "A suspension means your license is temporarily out of service. A revocation means it's canceled, and you have to re-apply when the period ends. Driving while suspended or revoked is a separate crime — Aggravated Unlicensed Operation (AUO), Vehicle and Traffic Law § 511 — and can add jail time, more fines, and more suspension time.\n\nCommon reasons the DMV suspends a New York license:\n1. Failure to answer a traffic ticket (VTL § 226, § 510).\n2. Failure to pay a traffic fine or court-ordered surcharge.\n3. DWI, DWAI, or refusing a chemical test (VTL § 1193, § 1194).\n4. Getting 11 or more points on your license in 18 months.\n5. Failure to pay child support (Social Services Law § 111-b).\n6. Failure to maintain car insurance — even for one day.\n7. Three or more speeding tickets in 18 months.\n8. Failure to appear in court after a traffic ticket.\n9. Unpaid judgment from a car accident.\n10. Medical issues reported to the DMV.\n\nFor most suspensions, the DMV has to mail you a Notice of Proposed Suspension or Order of Suspension before it takes effect. The notice tells you the reason, the date it starts, and how to request a hearing or clear the suspension.\n\nA 2021 state law (VTL § 510(4-e)) ended most debt-based suspensions for low-income drivers. If your license was suspended only because you couldn't pay a traffic fine, you may be able to get it back by entering a payment plan — without paying the full amount upfront."
  },

  yourRights: {
    en: [
      "You have the right to written notice from the DMV before a suspension takes effect (for most types).",
      "You have the right to a hearing at the DMV before a revocation in most cases (VTL § 510).",
      "You have the right to a payment plan under the 2021 reforms if the suspension is for unpaid traffic fines (VTL § 510(4-e)).",
      "You have the right to keep driving in some cases — a 'conditional license' or 'restricted use' license can let you drive to work, school, doctor, or childcare even while suspended.",
      "You have the right to a lawyer. You do not get a free court-appointed lawyer at a DMV hearing, but you can bring a private attorney or legal aid lawyer.",
      "You have the right to appeal a DMV hearing decision to the DMV Appeals Board within 60 days, and then to State Supreme Court in an Article 78 proceeding.",
      "You have the right to refuse to answer questions at a DMV hearing that could incriminate you in a criminal case.",
      "You have the right to request a copy of your full driving record (an 'abstract') from the DMV to see every suspension, point, and order on your file."
    ]
  },

  legalOptions: {
    en: [
      "The starting point is usually a DMV driving abstract, available online at dmv.ny.gov or at a DMV office. Small fee (around $10 as of April 2026 — current cost is posted at dmv.ny.gov). The abstract lists every open suspension and why.",
      "For unpaid traffic tickets: the court or Traffic Violations Bureau (TVB) that issued the ticket is the right office for a payment plan. Under the 2021 law, a plan can't be denied just because the driver is low-income.",
      "For unpaid child support: the Support Collection Unit is the office that handles holds — paying part of what's owed or entering a plan usually lifts the suspension.",
      "For a DWI or chemical-test refusal: a hearing can be requested, and the deadline is short. A conditional license may become available after 30 days for drivers enrolled in the Drinking Driver Program.",
      "For insurance lapses: a new SR-22 insurance policy with proof sent to the DMV is the usual path to reinstatement. The civil penalty set by VTL § 318 is currently about $8 per day for up to 90 days (current rate at dmv.ny.gov).",
      "For points: completing an approved Point and Insurance Reduction Program (PIRP) takes 4 points off the record.",
      "Free legal help with license suspension in Monroe County: Legal Aid Society of Rochester (lasroc.org), LawNY (lawny.org), and the Monroe County Bar Association referral service (mcba.org). See counsel list below for intake details.",
      "On an Aggravated Unlicensed Operation charge (driving while suspended), the right to a court-appointed lawyer kicks in — a public defender is assigned at the first court date on request."
    ]
  },

  example: {
    en: "Keisha gets a Notice of Proposed Suspension from the DMV. She owes $250 on an old speeding ticket from Irondequoit Town Court. She calls the court and asks for a payment plan. Under the 2021 law, the court sets her up on $25 a month. She mails in the first payment and a signed payment plan agreement. The court clears the suspension hold with the DMV. Ten days later her license is valid again. She never had to pay the full $250 upfront."
  },

  counsel: [
    {
      type: "free",
      name: "NYS DMV Customer Service Center",
      focus: "License status, suspension reasons, payment plan info, hearing requests",
      qualifier: "Any New York driver",
      access: "Phone or dmv.ny.gov",
      outcome: "Info on suspension status and how to clear it",
      phone: "518-486-9786",
      url: "https://dmv.ny.gov/tickets/pay-ticket-fines",
      verified: true,
      bilingual: true,
      languages: ["en", "es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "License suspension, driving while suspended charges, conditional license help",
      qualifier: "Low-income residents of Monroe County and nearby counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Representation and advice on license and traffic matters",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "License suspension issues tied to poverty, debt, or child support",
      qualifier: "Low-income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Representation in civil license matters",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "paid",
      name: "Monroe County Bar Association Lawyer Referral Service",
      focus: "Referral to a private traffic or DWI defense lawyer",
      qualifier: "Anyone who can pay an initial consult fee",
      access: "Phone at (585) 546-2130",
      outcome: "30-minute consult with a local attorney (reduced fee)",
      phone: "(585) 546-2130",
      url: "https://www.mcba.org/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: [
    "dwi-first-offense-ny",
    "speeding-ticket-ny",
    "child-support-ny",
    "foil-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "license suspension",
    "driver license suspended",
    "DMV suspension",
    "AUO",
    "aggravated unlicensed operation",
    "conditional license",
    "restricted use license",
    "unpaid ticket suspension",
    "child support license",
    "insurance lapse license",
    "points suspension",
    "PIRP",
    "drinking driver program",
    "DWI license",
    "green light law suspension"
  ],

  sources: [
    "https://dmv.ny.gov/",
    "https://www.nysenate.gov/legislation/laws/VAT/510",
    "https://www.nysenate.gov/legislation/laws/VAT/511",
    "https://www.nysenate.gov/legislation/laws/VAT/1193",
    "https://dmv.ny.gov/tickets/pay-ticket-fines",
    "https://dmv.ny.gov/licenses-permits-ids/get-conditional-or-restricted-use-license"
  ],

  lastVerified: "2026-04-14",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
