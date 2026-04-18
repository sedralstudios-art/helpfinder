export const INTERNET_SERVICE_OUTAGE_REFUND_NY = {
  id: "internet-service-outage-refund-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY GBS 349",
  status: "active",

  title: { en: "Internet and Cable Outages — When the Provider Owes a Refund or Credit" },

  summary: {
    en: "When internet or cable service goes out for an extended period, the provider may owe a credit or refund for the days without service. New York does not have a specific law requiring outage credits, but the FCC and the provider's own terms of service often do. A customer who loses service for a full day or more has the right to request a pro-rata credit."
  },

  whoQualifies: {
    en: [
      "Any customer who lost internet or cable service for a full day or more.",
      "Any customer whose internet speed is consistently below what was advertised and paid for.",
      "Any customer who was charged for a service that was not provided.",
      "Any customer who wants to cancel service without an early termination fee because the provider failed to deliver the service."
    ]
  },

  whatItMeans: {
    en: "When internet or cable service is interrupted, the provider's terms of service typically address credits. Most major providers will issue a pro-rata credit for outages lasting 24 hours or more — but the customer usually has to ask for it. The credit is not automatic. The amount is calculated by dividing the monthly bill by 30 and multiplying by the number of full days without service. For example, a $90 monthly bill divided by 30 is $3 per day — a 5-day outage would earn a $15 credit. Under the FCC's rules, a provider cannot charge for services not delivered. If the outage is widespread and lasts multiple days (like after a major storm), the provider may issue automatic credits — but this varies by company. If the service is consistently below the advertised speed (not just during occasional peak times), the customer can file a complaint with the FCC. A customer who cancels because the provider cannot deliver the promised service may be able to avoid an early termination fee by documenting the service failures. Under New York GBL Section 349, charging for services not provided is a deceptive business practice."
  },

  yourRights: {
    en: [
      "A customer has the right to request a pro-rata credit for each full day of service outage.",
      "A provider cannot charge for services that were not delivered.",
      "A customer whose internet speed is consistently below the advertised speed can file a complaint with the FCC.",
      "A customer who is denied a credit can escalate through the provider's dispute process, then file a complaint with the FCC or NYS AG.",
      "A customer may be able to cancel without an early termination fee if the provider repeatedly fails to deliver the promised service.",
      "Documenting outages (screenshots of speed tests, dates and times of outages, call logs with the provider) strengthens any complaint."
    ]
  },

  legalOptions: {
    en: [
      "Call the provider's customer service and request a credit for each day of outage. Be specific about dates.",
      "If the provider refuses, file a complaint with the FCC at consumercomplaints.fcc.gov or call (888) 225-5322.",
      "NYS Attorney General at (800) 771-7755 handles deceptive billing complaints.",
      "NYS Public Service Commission at (800) 342-3377 handles some cable and telecom complaints.",
      "For speed complaints, run a speed test at speedtest.net and compare to the advertised speed. Save the results.",
      "If disputing a charge, the credit card company can process a partial chargeback for services not received."
    ]
  },

  example: {
    en: "After a storm knocked out internet service for 4 days in Greece, Angela called her provider and requested a credit. The provider initially offered a $5 courtesy credit. Angela pointed out that her $80 monthly bill divided by 30 days equals $2.67 per day, and 4 days of outage equals $10.67. The provider issued a $10.67 credit. If the provider had refused, Angela could have filed an FCC complaint."
  },

  counsel: [
    {
      type: "government",
      name: "FCC — Consumer Complaints",
      focus: "Internet outages, speed complaints, billing disputes, cable complaints",
      qualifier: "Any U.S. resident",
      access: "Phone at (888) 225-5322, file at consumercomplaints.fcc.gov",
      outcome: "Investigation, provider contact, complaint resolution",
      phone: "(888) 225-5322",
      url: "https://consumercomplaints.fcc.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "internet-outage-refund-ny",
    "cable-internet-billing-ny",
    "cell-phone-contract-rights-ny",
    "subscription-cancellation-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "internet outage refund",
    "cable outage credit",
    "internet down refund",
    "internet speed slow",
    "cable service outage",
    "internet bill credit",
    "internet not working refund",
    "cable refund outage",
    "internet complaint",
    "internet speed complaint"
  ],

  sources: [
    "https://consumercomplaints.fcc.gov",
    "https://www.nysenate.gov/legislation/laws/GBS/349"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
