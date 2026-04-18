export const SENIOR_DRIVER_LICENSE_RENEWAL_NY = {
  id: "senior-driver-license-renewal-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Senior Driver's License — Renewal Rules, Vision Tests, and Reporting an Unsafe Driver" },

  summary: {
    en: "New York does not have a maximum age for driving or require extra tests for older drivers at renewal. All drivers must renew every 8 years and pass a vision test. However, a doctor, police officer, or family member can report a potentially unsafe driver to the DMV, which can trigger a reexamination."
  },

  whoQualifies: {
    en: [
      "Any senior driver renewing their license.",
      "Any family member concerned about an elderly relative's driving safety.",
      "Any senior whose license was suspended or restricted after a medical report.",
      "Any person who wants to understand the process for reporting an unsafe driver."
    ]
  },

  whatItMeans: {
    en: "New York treats all drivers the same at renewal regardless of age. Every driver renews every 8 years and must pass a vision test (at least 20/40 in the better eye, with or without corrective lenses). There is no written test or road test at renewal. However, the DMV can order a reexamination at any time if there is reason to believe a driver is unsafe. A reexamination can be triggered by a report from a doctor, a police officer, a court, or a concerned family member or other individual. The report can be made confidentially — the driver is not told who made the report. If the DMV orders a reexamination, the driver must take a vision test, a written test, a road test, or a medical evaluation — depending on the concern. If the driver fails or refuses, the license can be suspended or restricted (for example, daytime-only driving or no highway driving). The driver has the right to a hearing before the license is permanently revoked. For families, this is a difficult situation. Taking away a senior's license can affect their independence. Before reporting, families may want to explore alternatives — rides from family, RGRTA public transit, medical transportation through Medicaid, or volunteer driver programs."
  },

  yourRights: {
    en: [
      "A senior driver has the same renewal requirements as any other driver — vision test every 8 years, no extra tests based on age.",
      "If the DMV orders a reexamination, the driver has the right to take the required tests rather than losing the license automatically.",
      "A driver has the right to a DMV hearing before the license is permanently revoked.",
      "The person who reported the driver to the DMV remains confidential — the driver is not told who filed the report.",
      "A driver whose license is restricted (daytime only, no highway) has the right to request a new road test to try to remove the restriction.",
      "A senior who loses their license has the right to apply for a non-driver ID card at the DMV for identification purposes."
    ]
  },

  legalOptions: {
    en: [
      "To report an unsafe driver to the DMV, use form DS-6 (Request for Driver Reexamination) — available at dmv.ny.gov or any DMV office. Reports can be anonymous.",
      "The NYS DMV Medical Review Unit handles reports involving medical conditions — call (518) 474-0774.",
      "For seniors who lose their license, RGRTA/RTS public transit serves Monroe County — call (585) 288-1700 for route information.",
      "Medicaid transportation is available for medical appointments — call the Medicaid transportation broker.",
      "Lifespan of Greater Rochester at (585) 244-8400 can help seniors find transportation alternatives.",
      "If a driver disagrees with a DMV reexamination result, they can request an administrative hearing."
    ]
  },

  example: {
    en: "After noticing her 84-year-old father had two fender benders in three months and seemed confused about familiar routes, Carol submitted a DS-6 form to the DMV requesting a reexamination. The DMV sent her father a notice requiring a road test. He took the test and passed — the examiner noted he was slow but safe. His license was kept without restrictions. Carol was relieved. The DMV never told her father who filed the report."
  },

  counsel: [
    {
      type: "government",
      name: "NYS DMV — Medical Review Unit",
      focus: "Driver reexamination, medical fitness to drive, license restrictions",
      qualifier: "Any NYS driver",
      access: "Phone at (518) 474-0774",
      outcome: "Reexamination orders, license restriction, medical review",
      phone: "(518) 474-0774",
      url: "https://dmv.ny.gov/driver-license/request-driver-re-examination",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Lifespan of Greater Rochester",
      focus: "Senior services, transportation alternatives, aging support",
      qualifier: "Seniors in the Greater Rochester area",
      access: "Phone at (585) 244-8400",
      outcome: "Transportation planning, community resources, referrals",
      phone: "(585) 244-8400",
      url: "https://www.lifespan-roch.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "license-suspension-ny",
    "ada-public-transit-ny",
    "paratransit-ada-transportation-ny",
    "elder-abuse-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "senior driver",
    "elderly driver",
    "license renewal senior",
    "unsafe driver report",
    "DMV reexamination",
    "senior driving test",
    "old driver license",
    "report unsafe driver",
    "driver reexamination",
    "senior license suspension",
    "vision test driving"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/503",
    "https://www.nysenate.gov/legislation/laws/VAT/506",
    "https://dmv.ny.gov/driver-license/request-driver-re-examination",
    "https://dmv.ny.gov/driver-license/renew-license"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
