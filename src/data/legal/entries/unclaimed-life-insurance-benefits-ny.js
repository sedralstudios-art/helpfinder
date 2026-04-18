export const UNCLAIMED_LIFE_INSURANCE_BENEFITS_NY = {
  id: "unclaimed-life-insurance-benefits-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY ISC 3240",
  status: "active",

  title: { en: "Unclaimed Life Insurance Benefits — How to Find Policies a Deceased Relative May Have Had" },

  summary: {
    en: "Many life insurance benefits go unclaimed because family members never know a policy existed. New York Insurance Law Section 3240 now requires insurers to search periodically for deaths and notify beneficiaries. The NYS Comptroller's Office of Unclaimed Funds holds millions of dollars in unclaimed life insurance proceeds. Both the insurer's records and the state database are free to search."
  },

  whoQualifies: {
    en: [
      "Any person who recently lost a relative and suspects there may be unknown life insurance policies.",
      "Any person handling a small estate where the decedent's financial records were incomplete.",
      "Any sibling or child of a deceased parent whose papers did not mention insurance.",
      "Any estranged family member reconnecting after a death."
    ]
  },

  whatItMeans: {
    en: "Life insurance proceeds go unclaimed when the beneficiary does not know the policy exists and the insurer does not learn the insured has died. Under New York Insurance Law Section 3240 (enacted 2012), life insurance companies must periodically check the Social Security Administration Death Master File against their active policies and attempt to contact beneficiaries of policies matched. The law was a response to industry practice of holding proceeds for years after death. Since 2012 many previously unclaimed policies have been reunited with families. However, gaps remain — older policies, policies sold to reinsurance, and policies where the beneficiary changed addresses. NYS Comptroller's Office of Unclaimed Funds holds property turned over by insurers after they are unable to locate beneficiaries. Unclaimed property becomes state-held after three years of dormancy. The state holds the funds indefinitely — there is no time limit to claim. To search: visit osc.state.ny.us/unclaimed-funds and enter the deceased person's name. The search is free. Matches show the amount held, the company that reported it, and claim instructions. Multi-state search: the National Association of Unclaimed Property Administrators (NAUPA) runs missingmoney.com, a consolidated search across most state unclaimed-property databases. Life insurance policy locator services: the NAIC has a free Life Insurance Policy Locator at naic.org — submits an inquiry to participating insurers who check their records for the deceased's name. Typical response time 30 to 90 days. Private locator services charge a fee (often a percentage of recovered proceeds) — unnecessary since the free tools cover most cases. Claiming process: the beneficiary submits a claim form to the insurance company or the Office of Unclaimed Funds. Required documents typically include the death certificate, identification of the claimant, and proof of beneficiary status. Processing takes 4 to 12 weeks."
  },

  yourRights: {
    en: [
      "Any person with a reasonable interest can search the NYS Office of Unclaimed Funds and the NAIC Life Insurance Policy Locator for free.",
      "Unclaimed property is held by the state indefinitely — there is no deadline to claim.",
      "A beneficiary has the right to receive the policy proceeds without being charged a finder's fee by the state.",
      "Life insurance companies must periodically check death records and attempt to contact beneficiaries under Insurance Law 3240.",
      "A beneficiary denied a claim has the right to appeal within the company and to file a complaint with NYS DFS.",
      "Interest accrues on unclaimed proceeds in many cases — the claimant may receive more than the face amount."
    ]
  },

  legalOptions: {
    en: [
      "Free search: osc.state.ny.us/unclaimed-funds (NY only).",
      "Multi-state free search: missingmoney.com.",
      "NAIC Life Insurance Policy Locator: https://eapps.naic.org/life-policy-locator/#/welcome.",
      "Check the deceased's personal papers, tax returns (premium deductions), bank statements (premium auto-debits), and email for policy references.",
      "Contact former employers' HR departments — employer-provided life insurance is common and often forgotten.",
      "NYS Comptroller Office of Unclaimed Funds: (800) 221-9311.",
      "For disputed claims: NYS Department of Financial Services at (800) 342-3736.",
      "Free legal help with small estate matters is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Avoid paid finder services — the free tools cover most needs."
    ]
  },

  example: {
    en: "A Rochester resident learned after her mother's death that her mother had mentioned life insurance years ago but left no paperwork. She searched osc.state.ny.us/unclaimed-funds with her mother's name and found nothing. She then used the NAIC Life Insurance Policy Locator, which sent an inquiry to participating insurers. Six weeks later, an insurer replied that yes, her mother had a $15,000 policy that had been paid to the state's unclaimed funds office two years earlier after the insurer's failed attempts to contact beneficiaries. She filed a claim with the state, provided the death certificate and her ID, and received the funds eight weeks later. She did not pay a finder's fee because the free tools produced the match."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Office of the Comptroller — Unclaimed Funds",
      focus: "Unclaimed property including life insurance proceeds, unclaimed bank accounts",
      qualifier: "Anyone with a potential claim",
      access: "Phone at (800) 221-9311 or osc.state.ny.us/unclaimed-funds",
      outcome: "Free search, claim processing",
      phone: "(800) 221-9311",
      url: "https://www.osc.state.ny.us/unclaimed-funds",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NAIC Life Insurance Policy Locator",
      focus: "Free search for unclaimed life insurance policies across multiple insurers",
      qualifier: "Potential beneficiaries nationwide",
      access: "Online at naic.org",
      outcome: "Insurer inquiry, policy matching",
      phone: "",
      url: "https://eapps.naic.org/life-policy-locator/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "when-someone-dies-ny",
    "abandoned-bank-account-ny",
    "life-insurance-policy-lapse-protection-ny",
    "small-estate-affidavit-ny",
    "social-security-survivors-benefits-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "unclaimed life insurance",
    "Insurance Law 3240",
    "Office of Unclaimed Funds",
    "Death Master File",
    "NAIC policy locator",
    "missingmoney.com",
    "find old life insurance",
    "lost life insurance policy",
    "unclaimed death benefit",
    "insurer dormancy"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ISC/3240",
    "https://www.nysenate.gov/legislation/laws/ABP",
    "https://www.osc.state.ny.us/unclaimed-funds"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
