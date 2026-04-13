#!/usr/bin/env node
/**
 * migrate-dead-links-40.cjs
 * =========================
 * Fixes remaining dead/moved URLs identified in the 2026-04-12 audit.
 * Research sources: Google Search, WebFetch, Facebook, immigration.justia.org
 *
 * FIXES:
 *   1. VLSP → JustCause (rebranded, same phone 585-232-3051) — 3 entries
 *   2. BBBS: bfroch.org → beabig.org, phone 585-232-2150 → 585-442-2250
 *   3. Arc of Monroe: arcofmonroe.org → arcmonroe.org (phone unchanged)
 *   4. Dimitri House: dimitrihouse.org → dimitri-house.org, address updated
 *   5. Family Voices: fvny.org → ptopnys.org (Parent to Parent of NYS)
 *   6. Saathi: add phone (585) 234-1050 (found via Google)
 *   7. La Leche League: lllrochester.org → lllusa.org (no local site exists)
 *   8. Eldersource: phone 585-325-2400 → 585-325-2800 (Google Maps listing)
 *   9. Perinatal Network: PERMANENTLY CLOSED per Google — remove both entries
 *  10. Tenant Helpline: COVID program ENDED, phone disconnected — remove entry
 *
 * NOT touched (need maintainer decision):
 *   - scottsvilleny.org (works, self-signed cert — content verified correct)
 *   - hiltonny.org (cert mismatch — needs browser verification)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HF = path.join(ROOT, 'src/components/HelpFinder.jsx');
let failures = 0;
let successes = 0;

function doReplace(filePath, oldStr, newStr, label) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(oldStr)) {
    console.error("ABORT: could not find expected string");
    console.error("  Label: " + label);
    console.error("  Expected: " + JSON.stringify(oldStr).slice(0, 140));
    failures++;
    return content;
  }
  const count = content.split(oldStr).length - 1;
  const updated = content.split(oldStr).join(newStr);
  fs.writeFileSync(filePath, updated, 'utf8');
  console.log("OK: " + label + " (" + count + "x)");
  successes++;
  return updated;
}

// Read HelpFinder.jsx once, apply changes sequentially
let hf = fs.readFileSync(HF, 'utf8');

function hfReplace(oldStr, newStr, label) {
  if (!hf.includes(oldStr)) {
    console.error("ABORT: " + label);
    console.error("  Expected: " + JSON.stringify(oldStr).slice(0, 140));
    failures++;
    return;
  }
  const count = hf.split(oldStr).length - 1;
  hf = hf.split(oldStr).join(newStr);
  console.log("OK: " + label + " (" + count + "x)");
  successes++;
}

// ── 1. VLSP → JustCause (3 entries: vlsp, vlspfamily, bankruptcyhelp) ──
// All three share url:"https://vlsp.org" — replace all at once
hfReplace(
  'url:"https://vlsp.org"',
  'url:"https://www.justcauseny.org"',
  'VLSP → JustCause URL (3 entries)'
);
// Update org names
hfReplace(
  'n:"Volunteer Legal Services (Free Clinics)"',
  'n:"JustCause Legal Clinics (Free)"',
  'VLSP name → JustCause (main)'
);
hfReplace(
  'n:"Volunteer Legal Services — Family Law Clinic"',
  'n:"JustCause — Family Law Clinic"',
  'VLSP name → JustCause (family)'
);
hfReplace(
  'd:"Volunteer Legal Services runs free bankruptcy clinics.',
  'd:"JustCause (formerly Volunteer Legal Services) runs free bankruptcy clinics.',
  'VLSP desc → JustCause (bankruptcy)'
);

// ── 2. BBBS: bfroch.org → beabig.org, phone + address update ──
hfReplace(
  '{ id:"bbbs", n:"Big Brothers Big Sisters of Greater Rochester", c:"youth", d:"Free one-to-one mentoring. Every child matched with a caring adult volunteer. Ages 6-18.", ph:"585-232-2150", url:"https://www.bfroch.org", hr:"M-F 9am-5pm", doc:"None to apply", tg:["kids","any"], reach:"remote" }',
  '{ id:"bbbs", n:"Big Brothers Big Sisters of Greater Rochester", c:"youth", d:"Free one-to-one mentoring. Every child matched with a caring adult volunteer. Ages 6-18.", ph:"585-442-2250", ad:"1 S Washington St Suite 405, Rochester NY 14614", url:"https://www.beabig.org", hr:"M-F 8:30am-5pm", doc:"None to apply", tg:["kids","any"], town:"rochester", zip:"14614", lat:43.1558, lng:-77.6107, reach:"local" }',
  'BBBS: URL + phone + address update'
);

// ── 3. Arc of Monroe: arcofmonroe.org → arcmonroe.org ──
hfReplace(
  'url:"https://www.arcofmonroe.org"',
  'url:"https://arcmonroe.org"',
  'Arc of Monroe: URL fix'
);

// ── 4. Dimitri House: dimitrihouse.org → dimitri-house.org, address ──
hfReplace(
  'ad:"1 Shelter St, Rochester NY 14611", url:"https://www.dimitrihouse.org"',
  'ad:"102 N Union St, Rochester NY 14607", url:"https://dimitri-house.org"',
  'Dimitri House: URL + address fix'
);

// ── 5. Family Voices: fvny.org → ptopnys.org ──
hfReplace(
  '{ id:"familyvoices", n:"Family Voices of NY", c:"caregiver", d:"Help for families of children with special healthcare needs. Insurance navigation, care coordination, advocacy.", url:"https://fvny.org", hr:"M-F", doc:"None", tg:["kids","dis","any"], reach:"remote" }',
  '{ id:"familyvoices", n:"Parent to Parent of NYS (Family Voices)", c:"caregiver", d:"Help for families of children with special healthcare needs. Insurance navigation, care coordination, advocacy.", ph:"518-381-4350", url:"https://www.ptopnys.org", hr:"M-F", doc:"None", tg:["kids","dis","any"], reach:"remote" }',
  'Family Voices: fvny.org → ptopnys.org'
);

// ── 6. Saathi: add phone number ──
hfReplace(
  'url:"https://saathirochester.org", hr:"See website"',
  'ph:"585-234-1050", url:"https://saathirochester.org", hr:"See website"',
  'Saathi: add phone 585-234-1050'
);

// ── 7. La Leche League: lllrochester.org → lllusa.org ──
hfReplace(
  '{ id:"lll", n:"La Leche League Rochester", c:"childcare", d:"Free breastfeeding support. Meetings and phone help.", url:"https://lllrochester.org", hr:"See website", doc:"None", tg:["preg","u5","any"], reach:"remote" }',
  '{ id:"lll", n:"La Leche League Rochester West", c:"childcare", d:"Free breastfeeding support. Zoom meetings 3rd Saturday of each month at 10:30am.", ph:"585-621-1403", url:"https://lllusa.org", hr:"3rd Sat 10:30am (Zoom)", doc:"None", tg:["preg","u5","any"], reach:"remote" }',
  'La Leche League: URL + details update'
);

// ── 8. Eldersource: phone update ──
hfReplace(
  'ph:"585-325-2400", url:"https://eldersource.org"',
  'ph:"585-325-2800", url:"https://eldersource.org"',
  'Eldersource: phone 585-325-2400 → 585-325-2800'
);

// ── 9. Perinatal Network: PERMANENTLY CLOSED — remove both entries ──
// Remove perinatal entry (line 908)
hfReplace(
  '  { id:"perinatal", n:"Perinatal Network of Monroe County", c:"childcare", d:"Everything pregnancy. Prenatal care referrals, doula support, breastfeeding help, newborn home visits. Free.", ph:"585-546-2140", url:"https://www.perinatalnetwork.org", hr:"M-F 9am-5pm", doc:"None", tg:["preg","u5","any"], reach:"remote" },\n',
  '',
  'Perinatal Network: remove (permanently closed)'
);
// Remove rochbaby entry (line 910)
hfReplace(
  '  { id:"rochbaby", n:"Rochester Healthy Baby Network", c:"childcare", d:"Free community health workers help pregnant women get prenatal care, navigate Medicaid, find baby supplies, and prepare for birth.", ph:"585-546-2140", url:"https://www.perinatalnetwork.org", hr:"M-F", doc:"None", tg:["preg","u5","any"], reach:"remote" },\n',
  '',
  'Rochester Healthy Baby Network: remove (perinatal network closed)'
);

// ── 10. Tenant Helpline: COVID program ended, phone disconnected — remove ──
hfReplace(
  '  { id:"renterhelpny", n:"NY Tenant Helpline (Statewide)", c:"legal", d:"Free legal advice for tenants facing eviction, harassment, or unsafe conditions anywhere in New York State.", ph:"833-499-0318", url:"https://www.housingjusticeny.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"], nt:"Available statewide. If you\'re outside Monroe County this is your first call.", reach:"remote" },\n',
  '',
  'NY Tenant Helpline: remove (COVID rent relief ended, phone disconnected)'
);

// Write final HelpFinder.jsx
fs.writeFileSync(HF, hf, 'utf8');

console.log("\n" + successes + " replacements succeeded, " + failures + " failed.");
if (failures > 0) process.exit(1);
