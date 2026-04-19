export const INTERNET_OUTAGE_REFUND_NY = {
  id: "internet-outage-refund-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY GBS 349",
  status: "active",

  title: { en: "Internet Outage — When a Refund or Credit Applies to a Bill" },

  summary: {
    en: "When internet service goes down for hours or days, the customer is paying for a service they are not receiving. Most internet providers will give a credit if the customer asks — but they usually do not offer it automatically. The FCC and NYS Public Service Commission handle complaints when the provider refuses."
  },

  whoQualifies: {
    en: [
      "Any internet customer whose service was out for an extended period.",
      "Any customer whose internet speed is consistently much slower than what they pay for.",
      "Any customer who called the provider about an outage and was told they cannot get a credit.",
      "Any customer who relies on internet for work or school and lost income because of an outage."
    ]
  },

  whatItMeans: {
    en: "Internet service providers charge a flat monthly rate regardless of uptime. When the service goes down — whether from equipment failure, cable damage, weather, or a network issue — the customer is paying for service not received. Most providers (Spectrum, Frontier, T-Mobile Home Internet) will issue a prorated credit for extended outages, but only if the customer requests it. They almost never offer it automatically. The credit is calculated as the daily rate (monthly bill divided by 30) multiplied by the number of days the service was down. For a $70/month plan, that is about $2.33 per day. If the provider refuses a credit, the customer can file a complaint with the FCC (for internet service) or the NYS Public Service Commission (for cable TV service bundled with internet). The FCC requires the provider to respond to the complaint within 30 days. For work-from-home customers who lost income because of an outage, the terms of service usually limit the provider's liability to credits — not lost wages. But documenting the loss is still important."
  },

  yourRights: {
    en: [
      "A customer has the right to request a credit for any period when internet service was not working.",
      "A customer has the right to file a complaint with the FCC if the provider refuses a reasonable credit.",
      "A customer has the right to cancel service without an early termination fee if the outages are persistent and the provider cannot fix them.",
      "A customer has the right to a speed that is reasonably close to what was advertised. Consistently slow speeds may justify a service tier change or credit.",
      "A customer has the right to file a complaint with the NYS Attorney General if the provider's advertising was misleading.",
      "A customer has the right to switch providers at any time (most residential internet contracts do not have early termination fees anymore)."
    ]
  },

  legalOptions: {
    en: [
      "The first step is calling the provider and requesting a credit. Ask for the exact number of days the service was down and the prorated credit amount.",
      "If the provider refuses, an FCC complaint can be filed at fcc.gov/consumers/guides/filing-informal-complaint or (888) 225-5322. The provider must respond within 30 days.",
      "For cable TV bundled with internet, a complaint can also be filed with the NYS Public Service Commission at (800) 342-3377.",
      "A complaint about misleading speed advertising can be filed with the NYS Attorney General at (800) 771-7755.",
      "For persistent outages, the customer may have grounds to cancel without penalty under the implied warranty of the service contract.",
      "Document every outage — date, time, duration, and the name of anyone spoken to at the provider. This strengthens any complaint."
    ]
  },

  example: {
    en: "After a storm knocked out Spectrum internet for four days in Henrietta, the Garcias called and requested a credit. The representative initially said credits were not available for weather-related outages. Mr. Garcia asked to speak to a supervisor and cited the FCC complaint process. The supervisor approved a credit of $9.32 (four days at $2.33/day). It was not a lot of money, but Mr. Garcia's neighbor filed an FCC complaint after being refused — Spectrum contacted the neighbor within a week and issued the credit plus an additional $25 goodwill credit."
  },

  counsel: [
    {
      type: "government",
      name: "FCC — Consumer Complaint Center",
      focus: "Internet service complaints, outage credits, speed issues",
      qualifier: "Anyone in the U.S.",
      access: "Online at fcc.gov or (888) 225-5322",
      outcome: "Provider must respond within 30 days, credit or resolution",
      phone: "(888) 225-5322",
      url: "https://www.fcc.gov/consumers/guides/filing-informal-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "power-outage-rights-ny",
    "cable-internet-billing-ny",
    "robocall-donotcall-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "internet outage refund",
    "internet down credit",
    "Spectrum outage credit",
    "internet not working",
    "internet bill credit",
    "internet outage Rochester",
    "FCC complaint internet",
    "internet speed slow",
    "internet service complaint",
    "internet outage how long"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/GBS/349",
    "https://www.nysenate.gov/legislation/laws/PBS/66",
    "https://www.fcc.gov/consumers/guides/filing-informal-complaint",
    "https://www.dps.ny.gov"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
