export const IGNITION_INTERLOCK_DWI_NY = {
  id: "ignition-interlock-dwi-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Ignition Interlock Device — DWI Rules, Costs, and How Long It Lasts" },

  summary: {
    en: "After a DWI conviction in New York, a judge may order the driver to install an ignition interlock device (IID) in every vehicle they own or operate. The device requires the driver to blow into a breathalyzer before the car will start. The interlock requirement typically lasts 6 months to 1 year but can be longer for repeat offenders."
  },

  whoQualifies: {
    en: [
      "Any person convicted of DWI, DWAI, or Aggravated DWI in New York who was ordered to install an interlock device.",
      "Any person on conditional discharge or probation for DWI with an interlock condition.",
      "Any person who wants to understand the interlock requirement before a DWI sentencing.",
      "Any person who cannot afford the interlock device and needs financial assistance."
    ]
  },

  whatItMeans: {
    en: "Under Penal Law Section 65.10(2)(k-1) and VTL Section 1198, a judge can order an ignition interlock device as a condition of probation or conditional discharge for any DWI-related conviction. For Leandra's Law cases (DWI with a child under 16 in the vehicle), the interlock is mandatory. The device is installed in the vehicle's ignition system. Before starting the car, the driver must blow into the device. If the breath alcohol level is above the preset limit (usually 0.025%), the car will not start. The device also requires random retests while driving. The interlock must be installed on every vehicle the person owns, operates, or has access to. The driver pays for installation (typically $100-$200) and a monthly monitoring fee (typically $75-$100 per month). If the driver cannot afford the device, the court can order the interlock company to install it at reduced cost or no cost — the driver must apply for the indigency waiver. The interlock period is usually 6 months to 1 year for a first offense, longer for repeat offenders. Tampering with, circumventing, or having someone else blow into the device is a separate crime. Driving a vehicle without an interlock while under an interlock order is a misdemeanor."
  },

  yourRights: {
    en: [
      "A person ordered to install an interlock device has the right to choose from a list of approved interlock providers.",
      "A person who cannot afford the interlock device has the right to apply for a financial hardship waiver — the court can order reduced or no cost.",
      "A person has the right to a vehicle that works properly — if the interlock device malfunctions, the provider must fix or replace it.",
      "A failed test does not automatically mean a violation. The person has the right to explain false positives (mouthwash, certain foods) and may retest.",
      "A person has the right to request early removal of the interlock after the court-ordered period ends — file a motion with the sentencing court.",
      "If the interlock period is a condition of probation, the probation officer monitors compliance. A violation can trigger a probation violation hearing."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Probation Department at (585) 753-4000 monitors interlock compliance for people on probation.",
      "The DMV Ignition Interlock Unit handles questions about interlock requirements and approved providers — call (518) 473-5595.",
      "Monroe County Public Defender's Office at (585) 753-4210 can argue for shorter interlock periods at sentencing.",
      "Approved interlock providers in the Rochester area include Intoxalock and Smart Start — the court or probation officer will provide a list.",
      "If the interlock company overcharges or provides poor service, a complaint can be filed with the NYS Division of Consumer Protection at (800) 697-1220.",
      "A person who completes the interlock period can petition the court for removal and request full license restoration at the DMV."
    ]
  },

  example: {
    en: "After a first-offense DWI conviction in Rochester, Miguel was sentenced to a conditional discharge with a 12-month ignition interlock requirement. He had the device installed in his car for $150 and paid $80 per month for monitoring. He blew into the device before every start and during random retests while driving. After 12 months with no violations, his attorney filed a motion to remove the interlock. The judge approved. Miguel had the device removed and got his full license back from the DMV."
  },

  counsel: [
    {
      type: "government",
      name: "NYS DMV — Ignition Interlock Unit",
      focus: "Interlock requirements, approved providers, compliance, license restoration",
      qualifier: "Any NYS driver with an interlock order",
      access: "Phone at (518) 473-5595",
      outcome: "Interlock guidance, provider list, license restoration",
      phone: "(518) 473-5595",
      url: "https://dmv.ny.gov/tickets/ignition-interlock-device",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "dwi-first-offense-ny",
    "license-suspension-ny",
    "probation-basics-ny",
    "probation-violation-ny",
    "traffic-ticket-options-ny",
    "suspended-license-hardship-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "ignition interlock",
    "interlock device",
    "DWI interlock",
    "breathalyzer car",
    "blow and go",
    "interlock cost",
    "interlock how long",
    "DWI probation interlock",
    "Leandra law interlock",
    "interlock removal",
    "interlock financial hardship"
  ],

  sources: [
    "https://dmv.ny.gov/tickets/ignition-interlock-device",
    "https://www.nysenate.gov/legislation/laws/PEN/65.10",
    "https://www.nysenate.gov/legislation/laws/VAT/1198"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
