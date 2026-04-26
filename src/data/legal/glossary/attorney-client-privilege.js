export const ATTORNEY_CLIENT_PRIVILEGE = {
  id: "attorney-client-privilege",
  term: { en: "Attorney-Client Privilege" },
  aka: ["Lawyer-Client Privilege"],
  category: "courts",
  subtags: ["evidence", "privilege"],

  context: {
    en: "Attorney-client privilege protects most communications between a person and their lawyer. The lawyer cannot be forced to share what the client said in confidence. The privilege belongs to the client and helps people speak freely to get accurate legal advice."
  },

  plainEnglish: {
    en: "A legal protection for communications between a person and their lawyer made for the purpose of getting legal advice. The privilege belongs to the client. The lawyer cannot be forced to share what the client said in private, and the lawyer cannot be made to testify about it. The privilege also covers most communications going from the lawyer to the client. Some communications fall outside the privilege. A meeting in front of a friend or family member who is not part of the legal team usually breaks confidentiality. Communications about a planned future crime or fraud are not protected (the crime-fraud exception). The client can waive the privilege by sharing the communication publicly. Related but separate protections cover communications with doctors, spouses, clergy, and a few other relationships. The privilege also applies to communications with public defenders and Legal Aid lawyers."
  },

  whatToAsk: {
    en: [
      "Is what I am about to say to my lawyer protected by privilege?",
      "Will having a friend or family member in the room break the privilege?",
      "Does the privilege cover emails and text messages with my lawyer?",
      "Are there any exceptions that might apply to my situation?",
      "Does the privilege still apply when working with a free legal aid lawyer?"
    ]
  },

  related: ["pro-bono", "public-defender", "discovery", "deposition"],
  legalEntryIds: [],

  citation: "NY CPLR § 4503 (attorney-client privilege)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/4503",
  lastVerified: "2026-04-26",
  status: "active"
};
