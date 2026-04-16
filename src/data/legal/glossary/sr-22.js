export const SR_22 = {
  id: "sr-22",
  term: { en: "SR-22 (Proof of Financial Responsibility)" },
  aka: ["SR-22 filing", "SR22", "financial responsibility certificate"],
  category: "consumer",
  subtags: ["auto-insurance", "DMV", "license-restoration"],

  context: {
    en: "This comes up when a driver's license or registration is suspended — usually for driving without insurance, a DWI, or too many points. The DMV requires the driver to have their insurance company file an SR-22 before the license or registration can be restored."
  },

  plainEnglish: {
    en: "An SR-22 is a form that your insurance company files with the DMV proving that you have the required auto insurance. It is not a special type of insurance — it is just proof that you have a policy. The DMV requires it after certain violations — like driving without insurance, a DWI, or an uninsured accident. Your insurance company files it electronically. You have to keep the SR-22 on file for 3 years. If your insurance lapses during that time, the company notifies the DMV and your license or registration gets suspended again. Having an SR-22 requirement usually makes insurance more expensive."
  },

  whatToAsk: {
    en: [
      "How long do I need to keep the SR-22 on file?",
      "What happens if my insurance lapses while the SR-22 is active?",
      "Does every insurance company offer SR-22 filings?",
      "How much more will my insurance cost with an SR-22?"
    ]
  },

  related: ["license-suspension", "dwi-dwai"],
  legalEntryIds: ["driving-without-insurance-ny", "dwi-first-offense-ny", "license-suspension-ny"],

  citation: "NY VTL § 319",
  sourceUrl: "https://dmv.ny.gov/insurance/insurance-requirements",
  lastVerified: "2026-04-16",
  status: "active"
};
