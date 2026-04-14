// generate-hvac-entries-48.cjs
// Generates HVAC entries for the 25 remaining Monroe County municipalities.
// Pulls contact info from the existing plumbing entries (already verified).
// HVAC rules are highly uniform across Monroe County: no town licenses HVAC
// contractors, gas line work needs a licensed plumber, town staff inspects.
// Per-town variations are captured in NOTES.

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

// Towns remaining after the pilot (Brighton, Rochester, Greece already done).
// Each object: slug (for file + jurisdiction), tier, title name, phone, URL,
// plumbingLicenseNote (how gas line plumbing licensing works for this town),
// homeownerNote (homeowner self-work rules — usually allowed),
// extraNote (town-specific quirks), sources (existing verified URLs),
// relatedIds (to plumbing/electrical entries for same town).

const TOWNS = [
  {
    slug: 'brockport-village', tier: 'village', name: 'Village of Brockport',
    phone: '585-637-5300',
    url: 'https://brockportny.org/building-code/',
    plumbingNote: "A Brockport-licensed plumber is needed for gas line work.",
    homeownerNote: "Call the Building and Code office at (585) 637-5300 to confirm homeowner HVAC rules before starting work.",
    extraNote: "",
    sources: ['https://brockportny.org/building-code/'],
  },
  {
    slug: 'chili-town', tier: 'town', name: 'Town of Chili',
    phone: '585-889-6143',
    url: 'https://www.chiliny.gov/202/Building-Department',
    plumbingNote: "Gas line work needs a Chili-licensed master plumber. Chili licenses its own plumbers (doesn't accept Rochester certs for plumbing).",
    homeownerNote: "Chili allows homeowner plumbing on like-for-like swaps. Call the Building Department to confirm what HVAC work is open to homeowners.",
    extraNote: "Permits file through the CloudPermit portal.",
    sources: ['https://www.chiliny.gov/202/Building-Department'],
  },
  {
    slug: 'churchville-village', tier: 'village', name: 'Village of Churchville',
    phone: '585-293-3720',
    url: 'https://churchville.net/applications/',
    plumbingNote: "Gas line work follows standard NY rules — a qualified plumber pulls the plumbing permit.",
    homeownerNote: "Call the Building Inspector at (585) 293-3720 ext 134 to confirm homeowner HVAC rules.",
    extraNote: "Churchville runs its own municipal electric utility. That does not directly affect gas HVAC work but matters for any electrical work that comes with the HVAC install.",
    sources: ['https://churchville.net/applications/'],
  },
  {
    slug: 'clarkson-town', tier: 'town', name: 'Town of Clarkson',
    phone: '585-637-1145',
    url: 'https://townofclarksonny.gov/building-department/',
    plumbingNote: "Gas line work needs a qualified plumber with insurance (or CE-200 waiver).",
    homeownerNote: "Call the Building Department at (585) 637-1145 to confirm homeowner HVAC rules.",
    extraNote: "Clarkson's published fee schedule covers plumbing ($65 + $2/fixture). HVAC-specific fee — call to confirm.",
    sources: ['https://townofclarksonny.gov/building-department/'],
  },
  {
    slug: 'riga-town', tier: 'town', name: 'Town of Riga',
    phone: '585-293-3880',
    url: 'https://www.townofriga.com/building-department/',
    plumbingNote: "Gas line work follows standard NY rules — a qualified plumber handles the plumbing permit.",
    homeownerNote: "Call Building Inspector James Ignatowski (cell 585-752-2931) to confirm homeowner HVAC rules.",
    extraNote: "",
    sources: ['https://www.townofriga.com/building-department/'],
  },
  {
    slug: 'gates-town', tier: 'town', name: 'Town of Gates',
    phone: '585-429-8241',
    url: 'https://www.townofgatesny.gov/building-department-and-public-works/',
    plumbingNote: "Gas line work needs a Gates-registered plumber (Chapter 143).",
    homeownerNote: "Call the Building Inspector at (585) 429-8241 to confirm homeowner HVAC rules.",
    extraNote: "",
    sources: ['https://www.townofgatesny.gov/building-department-and-public-works/'],
  },
  {
    slug: 'ogden-town', tier: 'town', name: 'Town of Ogden',
    phone: '585-617-6195',
    url: 'https://ogdenny.gov/building-department/',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the Building Department at (585) 617-6195 to confirm homeowner HVAC rules.",
    extraNote: "Ogden also handles all HVAC permits for properties inside the Village of Spencerport — Spencerport delegates all building/mechanical permits to Ogden.",
    sources: ['https://ogdenny.gov/building-department/'],
  },
  {
    slug: 'parma-town', tier: 'town', name: 'Town of Parma',
    phone: '585-392-9449',
    url: 'https://parmany.gov/departments/building/',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the Building Department at (585) 392-9449 to confirm homeowner HVAC rules.",
    extraNote: "The Village of Hilton is inside Parma but has its own Building Department. Addresses inside village limits use Hilton's office, not Parma.",
    sources: ['https://parmany.gov/departments/building/'],
  },
  {
    slug: 'spencerport-village', tier: 'village', name: 'Village of Spencerport',
    phone: '585-617-6195',
    url: 'https://ogdenny.gov/building-department/',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Spencerport uses the Ogden Building Department for all building/HVAC questions.",
    extraNote: "IMPORTANT: Spencerport village does NOT run its own HVAC permits. All HVAC permits for Spencerport addresses go to the Town of Ogden Building Department at (585) 617-6195. Spencerport Municipal Electric is the utility — they connect service once inspection passes.",
    sources: ['https://spencerport.gov/code-enforcement/', 'https://ogdenny.gov/building-department/'],
  },
  {
    slug: 'sweden-town', tier: 'town', name: 'Town of Sweden',
    phone: '585-637-8684',
    url: 'https://www.townofswedenny.gov/building-department',
    plumbingNote: "Gas line work needs a qualified plumber with insurance. The town has a separate building sewer connection permit for any sewer work related to the HVAC job (rare).",
    homeownerNote: "Call the Building Department at (585) 637-8684 to confirm homeowner HVAC rules.",
    extraNote: "Sweden covers the area OUTSIDE Brockport village. Brockport village has its own Building Department. Check which jurisdiction your address falls in.",
    sources: ['https://www.townofswedenny.gov/building-department'],
  },
  {
    slug: 'east-rochester-village', tier: 'village', name: 'East Rochester',
    phone: '585-586-3553',
    url: 'https://eastrochesterny.gov/departments/building-department',
    plumbingNote: "Gas line work needs a qualified plumber with insurance (or a homeowner signing the affidavit).",
    homeownerNote: "East Rochester allows homeowner HVAC work. Homeowners can sign an affidavit in place of contractor insurance.",
    extraNote: "East Rochester has a combined town/village government — one application covers both jurisdictions. Call (585) 385-3513 to schedule inspections with Inspector Jim Herko.",
    sources: ['https://eastrochesterny.gov/departments/building-department'],
  },
  {
    slug: 'fairport-village', tier: 'village', name: 'Village of Fairport',
    phone: '585-421-3207',
    url: 'https://www.village.fairport.ny.us/departments/building_planning___zoning_code_enforcement/',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call Building Inspector Mark Lenzi at (585) 421-3207 to confirm homeowner HVAC rules.",
    extraNote: "Fairport village runs its own electric utility (Fairport Electric / Fairport Municipal Commission — (585) 223-9500). If your HVAC job involves electric work tied to service changes, coordinate with the utility. Addresses OUTSIDE the village (in Perinton) use the Town of Perinton, not the village.",
    sources: ['https://www.village.fairport.ny.us/departments/building_planning___zoning_code_enforcement/'],
  },
  {
    slug: 'perinton-town', tier: 'town', name: 'Town of Perinton',
    phone: '585-223-0770',
    url: 'https://perinton.gov/departments/public-works/building-and-codes-department/',
    plumbingNote: "Gas line work needs a qualified plumber with insurance (or a homeowner filing directly).",
    homeownerNote: "Homeowners can file permits themselves in Perinton. Contractor insurance is required only when a contractor is being used.",
    extraNote: "Perinton uses the online GovWell portal for permit applications (app.govwell.com/perinton). Addresses INSIDE Fairport village use the village Code Enforcement office, not Perinton.",
    sources: ['https://perinton.gov/departments/public-works/building-and-codes-department/'],
  },
  {
    slug: 'penfield-town', tier: 'town', name: 'Town of Penfield',
    phone: '585-340-8636',
    url: 'https://www.penfieldny.gov/your_government/departments/building/',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Penfield explicitly allows property owners to do their own HVAC. You still need a permit and inspection.",
    extraNote: "",
    sources: ['https://www.penfieldny.gov/your_government/departments/building/'],
  },
  {
    slug: 'pittsford-town', tier: 'town', name: 'Town of Pittsford',
    phone: '585-248-6265',
    url: 'https://www.townofpittsfordny.gov/code',
    plumbingNote: "Gas line work needs a Pittsford-licensed plumber (Ch 114 annual plumbing license required).",
    homeownerNote: "Call Code Enforcement at (585) 248-6265 to confirm homeowner HVAC rules.",
    extraNote: "The Town of Pittsford and the Village of Pittsford are separate governments. Addresses INSIDE the village use the village Building Inspector at (585) 586-4332.",
    sources: ['https://www.townofpittsfordny.gov/code'],
  },
  {
    slug: 'hamlin-town', tier: 'town', name: 'Town of Hamlin',
    phone: '585-964-8181',
    url: 'https://hamlinny.org/building-inspector/',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the Building Department at (585) 964-8181 to confirm homeowner HVAC rules.",
    extraNote: "Starting work without a permit costs a $125 fine. Pull the permit first.",
    sources: ['https://hamlinny.org/building-inspector/'],
  },
  {
    slug: 'hilton-village', tier: 'village', name: 'Village of Hilton',
    phone: '585-392-4144',
    url: 'https://hiltonny.gov/html/building-dept.html',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call CEO Mark Mazzucco at (585) 392-4144 ext 106 to confirm homeowner HVAC rules.",
    extraNote: "Hilton village is inside Parma town but runs its own Building Department. Make sure your address is inside the village before filing here.",
    sources: ['https://hiltonny.gov/html/building-dept.html'],
  },
  {
    slug: 'irondequoit-town', tier: 'town', name: 'Town of Irondequoit',
    phone: '585-336-6020',
    url: 'https://www.irondequoit.gov/180/Building',
    plumbingNote: "Gas line work needs a plumber licensed in the Town of Irondequoit.",
    homeownerNote: "Irondequoit allows homeowner HVAC work with a signed affidavit that homeowner's insurance covers the work.",
    extraNote: "Chapter 98 of the town code explicitly requires permits for plumbing, electrical, heating, ventilation, and fire-protection systems. Inspection requests by 3pm are typically scheduled for the next day.",
    sources: ['https://www.irondequoit.gov/180/Building'],
  },
  {
    slug: 'webster-town', tier: 'town', name: 'Town of Webster',
    phone: '585-872-7036',
    url: 'https://www.websterny.gov/162/Building-Department',
    plumbingNote: "Gas line work needs a qualified plumber. Insurance certificates must list Town of Webster as cert holder.",
    homeownerNote: "Call the Building Department at (585) 872-7036 to confirm homeowner HVAC rules.",
    extraNote: "The Village of Webster is inside Webster town but has its own separate Building Department. Addresses inside village limits use the village, not the town. Construction over $20,000 may require stamped plans.",
    sources: ['https://www.websterny.gov/162/Building-Department'],
  },
  {
    slug: 'henrietta-town', tier: 'town', name: 'Town of Henrietta',
    phone: '585-359-7060',
    url: 'https://www.henrietta.org/building',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the Building and Fire Prevention Department at (585) 359-7060 to confirm homeowner HVAC rules.",
    extraNote: "Henrietta adopted the NYStretch Energy Code effective January 2023. That's STRICTER than the state base code. A replacement furnace, AC, or heat pump has to meet those higher efficiency standards. This is a real cost factor to plan for.",
    sources: ['https://www.henrietta.org/building'],
  },
  {
    slug: 'honeoye-falls-village', tier: 'village', name: 'Village of Honeoye Falls',
    phone: '585-624-6150',
    url: 'https://www.villageofhoneoyefalls.gov/code-enforcement',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the CEO at (585) 624-6150 to confirm homeowner HVAC rules.",
    extraNote: "The village is inside Town of Mendon but runs its own Code Enforcement office. Addresses OUTSIDE the village (in Mendon town) use the Mendon Building Department.",
    sources: ['https://www.villageofhoneoyefalls.gov/code-enforcement'],
  },
  {
    slug: 'mendon-town', tier: 'town', name: 'Town of Mendon',
    phone: '585-624-6066',
    url: 'https://townofmendonny.gov/departments/building/',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the Building Department at (585) 624-6066 to confirm homeowner HVAC rules.",
    extraNote: "Mendon issues five separate permit types (zoning, building, electrical, plumbing, gas). HVAC typically files under the building permit plus a separate gas permit for the gas line. The Village of Honeoye Falls is inside Mendon but has its own code office.",
    sources: ['https://townofmendonny.gov/departments/building/'],
  },
  {
    slug: 'rush-town', tier: 'town', name: 'Town of Rush',
    phone: '585-533-1312',
    url: 'https://www.townofrush.com/departments/building.html',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the Building Department at (585) 533-1312 to confirm homeowner HVAC rules. Building Inspector hours are M-Th 7am-12pm; Town Clerk accepts applications outside inspector hours.",
    extraNote: "Ordinary like-kind repair is exempt from permits in Rush. A new furnace or AC install is a structural change and needs a permit.",
    sources: ['https://www.townofrush.com/departments/building.html'],
  },
  {
    slug: 'scottsville-village', tier: 'village', name: 'Village of Scottsville',
    phone: '585-889-6050',
    url: 'https://www.scottsvilleny.org/code-enforcement-building-inspector',
    plumbingNote: "Gas line work needs a plumber registered with the village (Scottsville registers plumbing contractors formally).",
    homeownerNote: "Homeowners can sign as their own contractor on the building permit form.",
    extraNote: "The village is inside Town of Wheatland but has its own code office. Properties on Rochester Street in the Historic District may need a Certificate of Appropriateness for any outdoor HVAC unit (condenser, mini-split head) visible from the street.",
    sources: ['https://www.scottsvilleny.org/code-enforcement-building-inspector'],
  },
  {
    slug: 'wheatland-town', tier: 'town', name: 'Town of Wheatland',
    phone: '585-889-1553',
    url: 'https://www.townofwheatland.org/building-department',
    plumbingNote: "Gas line work needs a qualified plumber.",
    homeownerNote: "Call the Building Department at (585) 889-1553 to confirm homeowner HVAC rules.",
    extraNote: "Wheatland's permit language is strict. Starting work without a permit costs 4 times the normal fee plus a $100 stop-work order. Pull the permit first. Scottsville village is inside Wheatland but has its own code office.",
    sources: ['https://www.townofwheatland.org/building-department'],
  },
];

function entryTemplate(t) {
  const id = 'hvac-residential-ny-mon-' + t.slug;
  const jurisdiction = 'us-ny-monroe-' + t.slug;
  const tierWord = t.tier === 'village' ? 'village' : t.tier === 'city' ? 'city' : 'town';
  const notes = t.extraNote ? '\\n\\n' + t.extraNote : '';

  return `// LGLW6-D_${id}_01.js

export const entry = {
  id: "${id}",
  category: "trades",
  tier: "${t.tier}",
  jurisdiction: "${jurisdiction}",
  status: "active",

  title: { en: "HVAC work in the ${t.name}: what the ${tierWord} requires" },

  summary: {
    en: "${t.name} does not license HVAC contractors. Gas line work for a new furnace still needs a licensed plumber — the gas pipe is plumbing work. Town staff do HVAC inspections directly (no third-party agencies). The state Energy Code (2025) applies to all permits filed after December 31, 2025."
  },

  whatItMeans: {
    en: "${t.name} follows the state Uniform Fire Prevention and Building Code for HVAC work. That includes the Mechanical Code and the Fuel Gas Code. The 2025 Energy Code applies to any permit filed after December 31, 2025 — replacement furnaces, heat pumps, and AC units all have to meet the stricter efficiency rules.\\n\\nThe ${tierWord} does NOT license HVAC contractors. But gas line work is plumbing. ${t.plumbingNote}\\n\\nHVAC permits go through the Building Department. There's no separate third-party agency for HVAC inspection — the ${tierWord}'s own inspectors handle it. That's different from electrical, which does use outside agencies.\\n\\nAnyone handling refrigerant must have federal EPA Section 608 certification.\\n\\nHomeowner rules: ${t.homeownerNote}${notes}"
  },

  example: {
    en: "A homeowner in ${t.name} replaces an old furnace with a new high-efficiency gas furnace. The HVAC contractor files the mechanical permit with the Building Department. A licensed plumber files a separate plumbing permit for the gas line work. The ${tierWord}'s own inspector checks the final install. Because the permit was filed after December 31, 2025, the new unit has to meet the 2025 Energy Code."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing HVAC work inside ${t.name}",
      "Plumbers for gas line work (licensing per local rules)",
      "Homeowners doing work on their own home (call the Building Department to confirm)"
    ]
  },

  yourRights: {
    en: [
      "The right to clear guidance from the Building Department on what HVAC work needs a permit",
      "The right to know the current permit fee",
      "The right to inspection by ${tierWord} staff (not a third-party agency)",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "${t.name} Building Department handles HVAC permits and inspections",
      "Gas line work needs a licensed plumber (local rules vary)",
      "Anyone handling refrigerant needs federal EPA Section 608 certification"
    ]
  },

  counsel: [{
    type: "free",
    name: "${t.name} Building Department",
    focus: "HVAC permits, inspections, code compliance",
    qualifier: "Open to residents and contractors working in ${t.name}",
    access: "Phone",
    outcome: "Permit issuance, inspection scheduling, code guidance",
    phone: "${t.phone}",
    url: "${t.url}",
    verified: true,
    bilingual: false,
    languages: ["en"]
  }],

  relatedIds: ["hvac-residential-ny", "plumbing-residential-ny-mon-${t.slug}", "electrical-residential-ny-mon-${t.slug}"],
  relatedHelpResources: [],
  tags: ["trades", "HVAC", "furnace", "heat pump", "${t.slug.replace(/-(town|village|city)$/, '')}", "monroe county", "${t.tier} ordinance", "energy code", "gas line"],
  sources: ${JSON.stringify(t.sources)},
  lastVerified: "2026-04-14",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
`;
}

let written = 0;
for (const t of TOWNS) {
  const filename = 'LGLW6-D_hvac-residential-ny-mon-' + t.slug + '_01.js';
  const outPath = path.join(ENTRIES_DIR, filename);
  if (fs.existsSync(outPath)) {
    console.log('  skipped (exists): ' + filename);
    continue;
  }
  fs.writeFileSync(outPath, entryTemplate(t), 'utf8');
  console.log('  wrote: ' + filename);
  written++;
}
console.log('\nDone. Wrote ' + written + ' HVAC entries.');
