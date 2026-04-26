#!/usr/bin/env node
/*
 * scripts/prerender-help.cjs
 * ===========================
 * Prerenders static HTML for HelpFinder so Googlebot and no-JS visitors
 * can see the program directory without waiting for React to mount.
 *
 * Output:
 *   - dist/help/index.html               — category overview + lede
 *   - dist/help/c/<cat>/index.html       — programs in one category
 *
 * The React SPA still owns the interactive experience: on hydrate, App.jsx
 * mounts HelpFinder which replaces <div id="root">. The prerendered
 * #prerender-content div is separate from #root, so hydration is safe.
 *
 * Program data is extracted directly from src/components/HelpFinder.jsx by
 * locating the `const PROGRAMS = [...]` literal and evaluating it as a
 * plain JS array. Pure data — no JSX, no outer-scope references — so this
 * is safe. If that file changes structure so the regex misses, the script
 * aborts instead of silently producing an empty directory.
 *
 * Dual-render trap: if a field shown here is also rendered in HelpFinder.jsx,
 * keep the two surfaces in sync. Today the fields we render (name, short
 * description, phone, address, URL, hours, docs) all come from the same
 * PROGRAMS data, so there is no duplication to drift.
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://helpfinder.help';
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const HF_SOURCE = path.join(ROOT, 'src', 'components', 'HelpFinder.jsx');

// ─── Category metadata ────────────────────────────────────────────────
// Human-readable label + icon for each category key used in PROGRAMS.
// Keep in sync with the category rendering in HelpFinder.jsx. English only;
// when we prerender per language, localize these from UI_* strings.
const CATEGORY_META = {
  crisis:             { label: 'Crisis & emergencies',          icon: '🆘' },
  food:               { label: 'Food',                           icon: '🍞' },
  utilities:          { label: 'Utilities & energy',             icon: '⚡' },
  cash:               { label: 'Cash & benefits',                icon: '💵' },
  housing:            { label: 'Housing & rent',                 icon: '🏠' },
  health:             { label: 'Health & medical',               icon: '➕' },
  dental:             { label: 'Dental',                         icon: '🦷' },
  vision:             { label: 'Vision & eye care',              icon: '👁️' },
  mental:             { label: 'Mental health',                  icon: '🧠' },
  prescriptions:      { label: 'Prescriptions',                  icon: '💊' },
  childcare:          { label: 'Childcare & kids',               icon: '👶' },
  employment:         { label: 'Jobs & training',                icon: '💼' },
  legal:              { label: 'Legal help',                     icon: '⚖️' },
  legalEviction:      { label: 'Legal — eviction',               icon: '⚖️' },
  legalBenefits:      { label: 'Legal — benefits',               icon: '⚖️' },
  legalImmigration:   { label: 'Legal — immigration',            icon: '⚖️' },
  legalDebt:          { label: 'Legal — debt',                   icon: '⚖️' },
  legalCriminal:      { label: 'Legal — criminal',               icon: '⚖️' },
  legalSmallClaims:   { label: 'Legal — small claims',           icon: '⚖️' },
  legalWork:          { label: 'Legal — work',                   icon: '⚖️' },
  legalFamily:        { label: 'Legal — family',                 icon: '⚖️' },
  seniorSvc:          { label: 'Senior services',                icon: '🧓' },
  disabilitySvc:      { label: 'Disability services',            icon: '♿' },
  education:          { label: 'Education & GED',                icon: '📘' },
  internet:           { label: 'Internet & phone',               icon: '📶' },
  transport:          { label: 'Transportation',                 icon: '🚌' },
  weather:            { label: 'Weather emergencies',            icon: '🌡️' },
  documents:          { label: 'Documents & ID',                 icon: '📄' },
  funeral:            { label: 'Funeral help',                   icon: '🕊️' },
  grief:              { label: 'Grief support',                  icon: '💔' },
  clothing:           { label: 'Clothing',                       icon: '👕' },
  parentalProtection: { label: 'Parental protection',            icon: '🛡️' },
  safety:             { label: 'Safety & DV',                    icon: '🛡️' },
  veteran:            { label: 'Veteran services',               icon: '🎖️' },
  pets:               { label: 'Pets',                           icon: '🐾' },
  crisisChild:        { label: 'Child crisis',                   icon: '🆘' },
  trades:             { label: 'Trade permits',                  icon: '🔨' },
};

// ─── Helpers ───────────────────────────────────────────────────────────
function esc(s) {
  if (s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugSafe(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
}

function jsonLDSafe(obj) {
  return JSON.stringify(obj, null, 2).replace(/<\//g, '<\\/');
}

// ─── PROGRAMS loading ─────────────────────────────────────────────────
// Loads from the shared ESM module at src/data/programs.js via dynamic import.
async function loadPrograms() {
  const { pathToFileURL } = require('url');
  const abs = path.join(ROOT, 'src', 'data', 'programs.js');
  const mod = await import(pathToFileURL(abs).href);
  const programs = mod.PROGRAMS;
  if (!Array.isArray(programs) || programs.length === 0) {
    throw new Error('loadPrograms: PROGRAMS not found or empty in src/data/programs.js');
  }
  return programs;
}

// ─── Rendering ────────────────────────────────────────────────────────
function urlPathForCategory(cat) { return '/help/c/' + cat; }
function urlPathForHelpIndex() { return '/help'; }

const SHARED_CSS = `
      body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #1a1a1a; background: #fafaf7; }
      .ssr-content { max-width: 920px; margin: 0 auto; padding: 20px; line-height: 1.6; }
      .ssr-content h1 { font-family: 'DM Serif Display', Georgia, serif; font-size: 32px; font-weight: 400; margin: 16px 0 10px; line-height: 1.25; }
      .ssr-content h2 { font-size: 20px; font-weight: 700; margin: 28px 0 12px; }
      .ssr-content h3 { font-size: 16px; font-weight: 600; margin: 0 0 6px; }
      .ssr-content .lead { font-size: 17px; color: #333; margin-bottom: 22px; }
      .ssr-content .cat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin: 16px 0 28px; }
      .ssr-content .cat-tile { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: #fff; border: 1px solid #e8e4dc; border-radius: 14px; text-decoration: none; color: #1a1a1a; }
      .ssr-content .cat-tile .cat-icon { font-size: 26px; }
      .ssr-content .cat-tile strong { font-size: 15px; font-weight: 700; display: block; }
      .ssr-content .cat-tile small { font-size: 12px; color: #555; }
      .ssr-content .program { background: #fff; border: 1px solid #e8e4dc; border-radius: 12px; padding: 14px 18px; margin-bottom: 12px; }
      .ssr-content .program .meta { font-size: 13px; color: #555; line-height: 1.55; margin-top: 6px; }
      .ssr-content .program .meta a { color: #2e7d32; }
      .ssr-content .program .meta span + span { margin-left: 12px; }
      .ssr-content .disclaimer { background: #fdf6ec; border: 1px solid #f0dab0; border-radius: 10px; padding: 12px 16px; margin-top: 24px; font-size: 12px; color: #555; }
      .ssr-content nav.breadcrumbs { font-size: 13px; color: #767676; margin-bottom: 8px; }
      .ssr-content nav.breadcrumbs a { color: #2e7d32; text-decoration: none; }
`;

function extractBundleTags(indexHTML) {
  const scripts = (indexHTML.match(/<script\b[^>]*>\s*<\/script>|<script\b[^>]*\/>/g) || []).join('\n    ');
  const links = (indexHTML.match(/<link\b[^>]*(?:stylesheet|modulepreload|preload)[^>]*>/g) || []).join('\n    ');
  return { scripts, links };
}

function programSchema(p) {
  const entry = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.n,
    description: p.d,
    areaServed: { '@type': 'AdministrativeArea', name: 'Monroe County, New York' },
    provider: { '@type': 'Organization', name: 'HelpFinder', url: SITE_URL },
  };
  if (p.ph)  entry.telephone = p.ph;
  if (p.url) entry.url = p.url;
  if (p.ad) {
    entry.location = { '@type': 'Place', address: p.ad };
  }
  if (p.hr) entry.hoursAvailable = p.hr;
  return entry;
}

function programCardHTML(p) {
  const bits = [];
  if (p.ph)  bits.push('<span>📞 <a href="tel:' + esc(p.ph.replace(/[^0-9+]/g, '')) + '">' + esc(p.ph) + '</a></span>');
  if (p.ad)  bits.push('<span>📍 ' + esc(p.ad) + '</span>');
  if (p.hr)  bits.push('<span>🕘 ' + esc(p.hr) + '</span>');
  if (p.url) bits.push('<span>🔗 <a href="' + esc(p.url) + '" rel="noopener noreferrer">Website</a></span>');
  if (p.doc) bits.push('<span>📋 Bring: ' + esc(p.doc) + '</span>');

  return (
    '<article class="program" id="' + esc(p.id) + '">' +
      '<h3>' + esc(p.n) + '</h3>' +
      '<p>' + esc(p.d) + '</p>' +
      (bits.length ? '<div class="meta">' + bits.join(' ') + '</div>' : '') +
    '</article>'
  );
}

function buildHeadCommon(title, metaDesc, canonical, jsonBlocks, bundleTags) {
  return (
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '  <head>\n' +
    '    <meta charset="UTF-8" />\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
    '    <title>' + esc(title) + '</title>\n' +
    '    <meta name="description" content="' + esc(metaDesc) + '" />\n' +
    '    <meta name="robots" content="index, follow" />\n' +
    '    <link rel="canonical" href="' + esc(canonical) + '" />\n' +
    '    <meta property="og:type" content="website" />\n' +
    '    <meta property="og:title" content="' + esc(title) + '" />\n' +
    '    <meta property="og:description" content="' + esc(metaDesc) + '" />\n' +
    '    <meta property="og:url" content="' + esc(canonical) + '" />\n' +
    '    <meta property="og:site_name" content="HelpFinder" />\n' +
    '    <meta property="og:image" content="' + esc(SITE_URL) + '/og-image.png" />\n' +
    '    <meta property="og:image:width" content="1200" />\n' +
    '    <meta property="og:image:height" content="630" />\n' +
    '    <meta name="twitter:card" content="summary_large_image" />\n' +
    '    <meta name="twitter:title" content="' + esc(title) + '" />\n' +
    '    <meta name="twitter:description" content="' + esc(metaDesc) + '" />\n' +
    '    <meta name="twitter:image" content="' + esc(SITE_URL) + '/og-image.png" />\n' +
    jsonBlocks.map((b) => '    <script type="application/ld+json">\n' + jsonLDSafe(b) + '\n    </script>').join('\n') + '\n' +
    '    ' + bundleTags.links + '\n' +
    '    ' + bundleTags.scripts + '\n' +
    '    <style>' + SHARED_CSS + '</style>\n' +
    '  </head>\n'
  );
}

function generateIndexHTML(byCat, bundleTags) {
  const canonical = SITE_URL + urlPathForHelpIndex();
  const title = 'Find help now — Free programs in Rochester and Monroe County, NY | HelpFinder';
  const metaDesc = 'Free community programs in Rochester and Monroe County, New York — food, housing, health, jobs, crisis support, legal help, and more. Hundreds of programs, translated. No accounts, no tracking.';

  const catKeys = Object.keys(byCat)
    .filter((c) => CATEGORY_META[c])
    .sort((a, b) => CATEGORY_META[a].label.localeCompare(CATEGORY_META[b].label));

  const tilesHTML = catKeys.map((c) => {
    const m = CATEGORY_META[c];
    const count = byCat[c].length;
    return (
      '<a class="cat-tile" href="' + esc(urlPathForCategory(c)) + '">' +
        '<span class="cat-icon">' + m.icon + '</span>' +
        '<div><strong>' + esc(m.label) + '</strong>' +
        '<small>' + count + (count === 1 ? ' program' : ' programs') + '</small></div>' +
      '</a>'
    );
  }).join('');

  const jsonLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: metaDesc,
      url: canonical,
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', name: 'HelpFinder', url: SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Find help', item: canonical },
      ],
    },
  ];

  const head = buildHeadCommon(title, metaDesc, canonical, jsonLD, bundleTags);

  return head +
    '  <body>\n' +
    '    <div id="prerender-content">\n' +
    '      <main class="ssr-content">\n' +
    '        <nav class="breadcrumbs"><a href="/">Home</a> · Find help</nav>\n' +
    '        <h1>Free help in Rochester and Monroe County, New York</h1>\n' +
    '        <p class="lead">' + esc(metaDesc) + '</p>\n' +
    '        <h2>Browse by topic</h2>\n' +
    '        <div class="cat-grid">' + tilesHTML + '</div>\n' +
    '        <p style="font-size:14px;color:#555;">Prefer a guided walkthrough? <a href="/">Use the questionnaire on the home page</a> — it asks a few short questions and filters the list for you.</p>\n' +
    '        <p class="disclaimer">HelpFinder is an informational tool only. Program details may change without notice. Contact programs directly to confirm eligibility, hours, and availability. Not legal, medical, or financial advice.</p>\n' +
    '      </main>\n' +
    '    </div>\n' +
    '    <div id="root"></div>\n' +
    '  </body>\n' +
    '</html>\n';
}

function generateCategoryHTML(cat, programs, bundleTags) {
  const meta = CATEGORY_META[cat] || { label: cat, icon: '📌' };
  const canonical = SITE_URL + urlPathForCategory(cat);
  const title = meta.label + ' — Free programs in Monroe County, NY | HelpFinder';
  const metaDesc = programs.length + ' free programs for ' + meta.label.toLowerCase() + ' in Rochester and Monroe County, New York. Phone numbers, addresses, hours, and what to bring. Updated regularly. No accounts, no tracking.';

  const cardsHTML = programs.map(programCardHTML).join('\n        ');

  const jsonLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description: metaDesc,
      url: canonical,
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', name: 'HelpFinder', url: SITE_URL },
      hasPart: programs.map(programSchema),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Find help', item: SITE_URL + '/help' },
        { '@type': 'ListItem', position: 3, name: meta.label, item: canonical },
      ],
    },
  ];

  const head = buildHeadCommon(title, metaDesc, canonical, jsonLD, bundleTags);

  return head +
    '  <body>\n' +
    '    <div id="prerender-content">\n' +
    '      <main class="ssr-content">\n' +
    '        <nav class="breadcrumbs"><a href="/">Home</a> · <a href="/help">Find help</a> · ' + esc(meta.label) + '</nav>\n' +
    '        <h1>' + meta.icon + ' ' + esc(meta.label) + '</h1>\n' +
    '        <p class="lead">' + esc(metaDesc) + '</p>\n' +
    '        ' + cardsHTML + '\n' +
    '        <p class="disclaimer">HelpFinder is an informational tool only. Program details may change without notice. Contact programs directly to confirm eligibility, hours, and availability. Not legal, medical, or financial advice.</p>\n' +
    '      </main>\n' +
    '    </div>\n' +
    '    <div id="root"></div>\n' +
    '  </body>\n' +
    '</html>\n';
}

// ─── Main ─────────────────────────────────────────────────────────────
async function main() {
  console.log('Prerender HelpFinder (v1 — English, static category pages)...');

  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('ERROR: ' + indexPath + ' not found. Run "vite build" first.');
    process.exit(1);
  }
  const indexHTML = fs.readFileSync(indexPath, 'utf8');
  const bundleTags = extractBundleTags(indexHTML);
  if (!bundleTags.scripts) {
    console.error('ERROR: Could not extract bundle script tags from dist/index.html.');
    process.exit(1);
  }
  console.log('✓ Extracted bundle tags');

  const programs = await loadPrograms();
  console.log('✓ Loaded ' + programs.length + ' programs from src/data/programs.js');

  // Group by category
  const byCat = {};
  for (const p of programs) {
    if (!p || !p.c) continue;
    (byCat[p.c] = byCat[p.c] || []).push(p);
  }
  // Sort programs alphabetically inside each category.
  for (const c of Object.keys(byCat)) {
    byCat[c].sort((a, b) => String(a.n || '').localeCompare(String(b.n || '')));
  }
  const activeCats = Object.keys(byCat).sort();
  console.log('✓ ' + activeCats.length + ' active categories');

  let fileCount = 0;

  // 1. /help index
  {
    const html = generateIndexHTML(byCat, bundleTags);
    const outDir = path.join(DIST, 'help');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    fileCount++;
  }
  console.log('✓ Wrote /help index');

  // 2. /help/c/<cat> per category
  for (const cat of activeCats) {
    const html = generateCategoryHTML(cat, byCat[cat], bundleTags);
    const outDir = path.join(DIST, 'help', 'c', cat);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    fileCount++;
  }
  console.log('✓ Wrote ' + activeCats.length + ' category pages');

  console.log('\nTotal: ' + fileCount + ' pre-rendered HelpFinder HTML files');
  console.log('Done.');
}

main().catch((e) => { console.error('ERROR:', e); process.exit(1); });
