export const IMMIGRATION_DETAINER_ICE_NY = {
  id: "immigration-detainer-ice-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Immigration Detainers — What Happens When ICE Asks Local Jail to Hold Someone" },

  summary: {
    en: "An immigration detainer is a request from ICE asking a local jail to hold a person beyond their release date so ICE can pick them up for deportation proceedings. New York limits when local jails can honor these requests. Under state law and local policies, most jails in New York will not hold a person on an ICE detainer alone — a judicial warrant is required."
  },

  whoQualifies: {
    en: [
      "Any person in local custody who received notice of an ICE detainer.",
      "Any family member of a person being held past their release date on an ICE detainer.",
      "Any person who was transferred from local custody to ICE without a judicial warrant.",
      "Any person who wants to understand their rights if they are arrested and have immigration concerns."
    ]
  },

  whatItMeans: {
    en: "When ICE issues a detainer (Form I-247A), it asks the local jail to hold the person for up to 48 additional hours after they would otherwise be released, so ICE can take custody. A detainer is a request, not a court order — it is not signed by a judge. New York Executive Order 170 (the sanctuary executive order) and the Protect Our Courts Act limit cooperation between local law enforcement and ICE. Most counties in New York, including Monroe County, have policies that restrict honoring detainers without a judicial warrant signed by a federal judge. Without a judicial warrant, the local jail has no legal obligation to hold the person past their release date. If the person's criminal case is resolved (bail posted, sentence served, charges dismissed), the jail should release the person regardless of the detainer — unless ICE presents a judicial warrant. If a person is held solely on an ICE detainer without a judicial warrant, the detention may be unlawful and the person may have a legal claim for false imprisonment. An immigration attorney can intervene before the transfer happens if contacted quickly enough."
  },

  yourRights: {
    en: [
      "An ICE detainer is a request, not a court order. A local jail is not legally required to honor it without a judicial warrant.",
      "A person has the right to be released from local custody when their criminal case is resolved, regardless of an ICE detainer — unless ICE has a judicial warrant.",
      "A person who is held past their release date solely on an ICE detainer without a judicial warrant may have a false imprisonment claim.",
      "A person in local custody has the right to contact an immigration attorney before any transfer to ICE.",
      "A person has the right to remain silent during any interview with ICE agents. Anything said can be used in deportation proceedings.",
      "A person has the right to refuse to sign any documents presented by ICE without consulting an attorney."
    ]
  },

  legalOptions: {
    en: [
      "Legal Aid Society of Rochester at (585) 232-4090 provides free immigration legal services and can intervene in detainer situations.",
      "Catholic Family Center Immigration Services at (585) 339-9801 assists with immigration emergencies.",
      "Worker Justice Center of New York at (585) 325-3050 represents immigrant workers with ICE-related concerns.",
      "The NYS Immigrant Defense Project hotline at (212) 725-6422 provides emergency guidance on ICE detainers.",
      "If a family member is being held on a detainer, contact an immigration attorney immediately — timing matters.",
      "The ACLU immigrants rights project can be reached at aclu.org/issues/immigrants-rights for policy guidance."
    ]
  },

  example: {
    en: "After a minor traffic arrest in Rochester, José was booked into the Monroe County Jail. His case was resolved the next morning with a fine and time served. Before release, an ICE detainer was lodged. José's family contacted Legal Aid Society of Rochester. An immigration attorney called the jail and confirmed that Monroe County policy does not honor ICE detainers without a judicial warrant. ICE had not obtained a warrant. The jail released José on schedule. His immigration attorney began working on his case before ICE could take further action."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester — Immigration",
      focus: "ICE detainer intervention, deportation defense, immigration emergencies",
      qualifier: "Low income immigrants in Monroe County",
      access: "Phone intake at (585) 232-4090",
      outcome: "Emergency legal intervention, detainer challenges, deportation defense",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "immigration-basics-ny",
    "undocumented-rights-ny",
    "rights-when-arrested-ny",
    "right-to-remain-silent-ny",
    "u-visa-crime-victim-ny",
    "asylum-basics-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "ICE detainer",
    "immigration detainer",
    "ICE hold",
    "ICE jail",
    "detainer warrant",
    "sanctuary policy",
    "ICE transfer",
    "immigration arrest",
    "ICE deportation",
    "ICE rights"
  ],

  sources: [
    "https://www.ice.gov/doclib/detention-standards/doc/detainer_form.pdf",
    "https://www.governor.ny.gov/executive-order/no-170-ensuring-protection-immigrant-new-yorkers"
  ],

  lastVerified: "2026-04-17",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
