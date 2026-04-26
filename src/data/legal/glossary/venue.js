export const VENUE = {
  id: "venue",
  term: { en: "Venue" },
  aka: ["Place of Trial"],
  category: "courts",
  subtags: ["procedure", "civil"],

  context: {
    en: "Venue is the specific county or court location where a case is filed and heard. Even after a court has jurisdiction, the case still has to be in the right venue. Venue rules are about convenience and fairness."
  },

  plainEnglish: {
    en: "The specific location — usually a county — where a case is filed and tried. Venue is different from jurisdiction. Jurisdiction is the court's power to hear the case at all. Venue is about the right county within a court system. New York's general civil venue rule places a case in the county where any party lives, or where the events happened. Real property cases must be filed where the property is located. Family Court cases are usually filed in the county where the petitioner or respondent lives. The wrong venue is not always fatal — the court can transfer the case to the right county. Either side can move to change venue based on convenience or for an impartial trial. A defendant has to act fast to demand a venue change before being treated as having accepted the chosen venue."
  },

  whatToAsk: {
    en: [
      "What is the proper venue for this kind of case?",
      "Can the case be transferred to a more convenient county?",
      "Is the wrong venue a basis to dismiss or just to transfer?",
      "How long do I have to demand a change of venue?",
      "Where would the case land if both sides agree to a change?"
    ]
  },

  related: ["jurisdiction", "service-of-process", "summons", "complaint"],
  legalEntryIds: [],

  citation: "NY CPLR Article 5 (§§ 503-511 venue rules)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/A5",
  lastVerified: "2026-04-26",
  status: "active"
};
