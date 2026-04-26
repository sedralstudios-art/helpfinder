export const BUILDING_PERMIT = {
  id: "building-permit",
  term: { en: "Building Permit" },
  aka: ["construction permit", "work permit", "zoning permit"],
  category: "housing",
  subtags: ["construction", "zoning", "code-enforcement"],

  context: {
    en: "This comes up when a homeowner wants to build something — an addition, a deck, a fence, a shed, or even finish a basement. Most construction projects need a permit from the local building department before work begins."
  },

  plainEnglish: {
    en: "A building permit is permission from the local government to do construction work on a property. The permit makes sure the work follows the building code and zoning rules — things like setbacks from the property line, height limits, and safe electrical and plumbing work. The owner applies at the local building department and pays a fee. An inspector checks the work during and after construction. Building without a permit can result in fines, a stop-work order, and being forced to tear down what was built. When selling a house, unpermitted work can cause problems with the buyer's inspection and insurance."
  },

  whatToAsk: {
    en: [
      "Does my project need a permit?",
      "How long does it take to get a permit approved?",
      "What happens if I already did the work without a permit?",
      "Can I apply for a permit myself or does the contractor do it?"
    ]
  },

  related: ["code-enforcement", "warranty-of-habitability"],
  legalEntryIds: ["zoning-variance-permit-ny", "home-improvement-contractor-ny"],

  citation: "NY Uniform Fire Prevention & Building Code Act, Executive Law § 381",
  sourceUrl: "https://www.dos.ny.gov/dcea/buildingcode.html",
  lastVerified: "2026-04-16",
  status: "active"
};
