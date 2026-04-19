// One-shot audit: tally corpus against proposed validator checks so thresholds
// can be calibrated before rules are enforced.

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');
const skipB = new Set([
  'bankruptcy-automatic-stay-ny.js', 'bankruptcy-chapter13-ny.js',
  'bankruptcy-chapter7-ny.js', 'bankruptcy-discharge-ny.js',
  'bankruptcy-exemptions-ny.js', 'bankruptcy-means-test-ny.js',
  'bankruptcy-reaffirmation-ny.js',
]);

function getField(src, field) {
  const m = src.match(new RegExp(field + ':\\s*"([^"]*)"'));
  return m ? m[1] : null;
}
function getEn(src, field) {
  const m = src.match(new RegExp(field + ':\\s*\\{\\s*en:\\s*"([^"]*)"'));
  return m ? m[1] : null;
}
function countArrayStrings(src, field) {
  // \n\s* anchors to line-start to avoid substring matches (e.g., "sources:"
  // matching inside "relatedHelpResources:"). All entry fields are on their
  // own line at 2-space indent.
  const m = src.match(new RegExp('\\n\\s+' + field + ':\\s*\\[([\\s\\S]*?)\\]'));
  if (!m) return null;
  return [...m[1].matchAll(/"[^"]*"/g)].length;
}
function countEnArrayItems(src, field) {
  const m = src.match(new RegExp(field + ':\\s*\\{\\s*en:\\s*\\[([\\s\\S]*?)\\]'));
  if (!m) return null;
  return [...m[1].matchAll(/"[^"]*"/g)].length;
}
function extractArrayStrings(src, field) {
  const m = src.match(new RegExp('\\n\\s+' + field + ':\\s*\\[([\\s\\S]*?)\\]'));
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]*)"/g)].map(x => x[1]);
}
function countCounselEntries(src) {
  const m = src.match(/counsel:\s*\[([\s\S]*?)\n\s*\],/);
  if (!m) return null;
  return (m[1].match(/type:\s*"/g) || []).length;
}

const stats = {
  categories: {}, tiers: {}, statuses: {}, volatilities: {}, jurisdictions: {},
  authorityTypes: {},
  tagCounts: [], sourceCounts: [], counselCounts: [], relatedIdCounts: [],
  whoQualifiesCounts: [], yourRightsCounts: [], legalOptionsCounts: [],
  titleLengths: [], summaryLengths: [], whatItMeansLengths: [],
  missingSummary: 0, missingWhatItMeans: 0, missingExample: 0,
  missingWhoQualifies: 0, missingYourRights: 0, missingLegalOptions: 0,
  missingLastVerified: 0, missingCounsel: 0,
  invalidLastVerified: [], duplicateTagsInEntry: [],
  nonHttpsSources: 0, nonHttpsFiles: [],
  futureLastVerified: [],
};

let scanned = 0;
const today = new Date('2026-04-19');

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.js') || skipB.has(f)) continue;
  scanned++;
  const src = fs.readFileSync(path.join(dir, f), 'utf8');

  const cat = getField(src, 'category'); if (cat) stats.categories[cat] = (stats.categories[cat]||0)+1;
  const tier = getField(src, 'tier'); if (tier) stats.tiers[tier] = (stats.tiers[tier]||0)+1;
  const st = getField(src, 'status'); if (st) stats.statuses[st] = (stats.statuses[st]||0)+1;
  const vol = getField(src, 'volatility'); if (vol) stats.volatilities[vol] = (stats.volatilities[vol]||0)+1;
  const jr = getField(src, 'jurisdiction'); if (jr) stats.jurisdictions[jr] = (stats.jurisdictions[jr]||0)+1;
  const at = getField(src, 'authorityType'); if (at) stats.authorityTypes[at] = (stats.authorityTypes[at]||0)+1;

  const lv = getField(src, 'lastVerified');
  if (!lv) stats.missingLastVerified++;
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(lv)) stats.invalidLastVerified.push(f + ' = ' + lv);
  else {
    const d = new Date(lv);
    const diffDays = (d - today) / (1000 * 60 * 60 * 24);
    if (diffDays > 7) stats.futureLastVerified.push(f + ' = ' + lv);
  }

  const tagC = countArrayStrings(src, 'tags');
  if (tagC !== null) stats.tagCounts.push(tagC);
  const srcC = countArrayStrings(src, 'sources');
  if (srcC !== null) stats.sourceCounts.push(srcC);
  const ridC = countArrayStrings(src, 'relatedIds');
  if (ridC !== null) stats.relatedIdCounts.push(ridC);

  const ctC = countCounselEntries(src);
  if (ctC !== null) stats.counselCounts.push(ctC);
  else stats.missingCounsel++;

  const wqC = countEnArrayItems(src, 'whoQualifies');
  if (wqC !== null) stats.whoQualifiesCounts.push(wqC);
  else stats.missingWhoQualifies++;
  const yrC = countEnArrayItems(src, 'yourRights');
  if (yrC !== null) stats.yourRightsCounts.push(yrC);
  else stats.missingYourRights++;
  const loC = countEnArrayItems(src, 'legalOptions');
  if (loC !== null) stats.legalOptionsCounts.push(loC);
  else stats.missingLegalOptions++;

  const sum = getEn(src, 'summary');
  if (!sum) stats.missingSummary++; else stats.summaryLengths.push(sum.length);
  const wim = getEn(src, 'whatItMeans');
  if (!wim) stats.missingWhatItMeans++; else stats.whatItMeansLengths.push(wim.length);
  const ex = getEn(src, 'example');
  if (!ex) stats.missingExample++;
  const title = getEn(src, 'title');
  if (title) stats.titleLengths.push(title.length);

  const tags = extractArrayStrings(src, 'tags').map(t => t.toLowerCase());
  if (new Set(tags).size !== tags.length) stats.duplicateTagsInEntry.push(f);

  const sources = extractArrayStrings(src, 'sources');
  const nonHttps = sources.filter(s => s && !s.startsWith('https://'));
  if (nonHttps.length) { stats.nonHttpsSources += nonHttps.length; stats.nonHttpsFiles.push(f); }
}

function pct(arr, p) {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.floor((s.length - 1) * p)];
}
function min(a) { return a.length ? Math.min(...a) : 0; }
function max(a) { return a.length ? Math.max(...a) : 0; }

console.log('scanned (non-bankruptcy):', scanned);
console.log('');
console.log('ENUMS (unique values found):');
console.log('  categories:', Object.entries(stats.categories).sort((a,b)=>b[1]-a[1]).map(([k,v])=>k+'('+v+')').join(', '));
console.log('  tiers:', Object.entries(stats.tiers).map(([k,v])=>k+'('+v+')').join(', '));
console.log('  statuses:', Object.entries(stats.statuses).map(([k,v])=>k+'('+v+')').join(', '));
console.log('  volatilities:', Object.entries(stats.volatilities).map(([k,v])=>k+'('+v+')').join(', '));
console.log('  jurisdictions:', Object.entries(stats.jurisdictions).map(([k,v])=>k+'('+v+')').join(', '));
console.log('  authorityTypes:', Object.entries(stats.authorityTypes).map(([k,v])=>k+'('+v+')').join(', '));
console.log('');
console.log('COUNTS (min / p5 / p50 / p95 / max):');
console.log('  tags:        ', min(stats.tagCounts), '/', pct(stats.tagCounts,.05), '/', pct(stats.tagCounts,.5), '/', pct(stats.tagCounts,.95), '/', max(stats.tagCounts));
console.log('  sources:     ', min(stats.sourceCounts), '/', pct(stats.sourceCounts,.05), '/', pct(stats.sourceCounts,.5), '/', pct(stats.sourceCounts,.95), '/', max(stats.sourceCounts));
console.log('  counsel:     ', min(stats.counselCounts), '/', pct(stats.counselCounts,.05), '/', pct(stats.counselCounts,.5), '/', pct(stats.counselCounts,.95), '/', max(stats.counselCounts));
console.log('  relatedIds:  ', min(stats.relatedIdCounts), '/', pct(stats.relatedIdCounts,.05), '/', pct(stats.relatedIdCounts,.5), '/', pct(stats.relatedIdCounts,.95), '/', max(stats.relatedIdCounts));
console.log('  whoQualifies:', min(stats.whoQualifiesCounts), '/', pct(stats.whoQualifiesCounts,.05), '/', pct(stats.whoQualifiesCounts,.5), '/', pct(stats.whoQualifiesCounts,.95), '/', max(stats.whoQualifiesCounts));
console.log('  yourRights:  ', min(stats.yourRightsCounts), '/', pct(stats.yourRightsCounts,.05), '/', pct(stats.yourRightsCounts,.5), '/', pct(stats.yourRightsCounts,.95), '/', max(stats.yourRightsCounts));
console.log('  legalOptions:', min(stats.legalOptionsCounts), '/', pct(stats.legalOptionsCounts,.05), '/', pct(stats.legalOptionsCounts,.5), '/', pct(stats.legalOptionsCounts,.95), '/', max(stats.legalOptionsCounts));
console.log('');
console.log('LENGTHS (min / p5 / p50 / p95 / max):');
console.log('  title:       ', min(stats.titleLengths), '/', pct(stats.titleLengths,.05), '/', pct(stats.titleLengths,.5), '/', pct(stats.titleLengths,.95), '/', max(stats.titleLengths));
console.log('  summary:     ', min(stats.summaryLengths), '/', pct(stats.summaryLengths,.05), '/', pct(stats.summaryLengths,.5), '/', pct(stats.summaryLengths,.95), '/', max(stats.summaryLengths));
console.log('  whatItMeans: ', min(stats.whatItMeansLengths), '/', pct(stats.whatItMeansLengths,.05), '/', pct(stats.whatItMeansLengths,.5), '/', pct(stats.whatItMeansLengths,.95), '/', max(stats.whatItMeansLengths));
console.log('');
console.log('MISSING FIELDS:');
console.log('  summary:', stats.missingSummary);
console.log('  whatItMeans:', stats.missingWhatItMeans);
console.log('  example:', stats.missingExample);
console.log('  whoQualifies:', stats.missingWhoQualifies);
console.log('  yourRights:', stats.missingYourRights);
console.log('  legalOptions:', stats.missingLegalOptions);
console.log('  counsel:', stats.missingCounsel);
console.log('  lastVerified:', stats.missingLastVerified);
console.log('');
console.log('FORMAT ISSUES:');
console.log('  invalid lastVerified format:', stats.invalidLastVerified.length);
if (stats.invalidLastVerified.length) stats.invalidLastVerified.slice(0,5).forEach(x=>console.log('    '+x));
console.log('  future lastVerified (>7 days ahead):', stats.futureLastVerified.length);
if (stats.futureLastVerified.length) stats.futureLastVerified.slice(0,5).forEach(x=>console.log('    '+x));
console.log('  duplicate tags within entry:', stats.duplicateTagsInEntry.length);
if (stats.duplicateTagsInEntry.length) stats.duplicateTagsInEntry.slice(0,10).forEach(x=>console.log('    '+x));
console.log('  non-https source URLs:', stats.nonHttpsSources, '(files:', stats.nonHttpsFiles.length+')');
if (stats.nonHttpsFiles.length) stats.nonHttpsFiles.slice(0,5).forEach(x=>console.log('    '+x));
