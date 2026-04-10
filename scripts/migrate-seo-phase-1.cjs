#!/usr/bin/env node
/**
 * scripts/migrate-seo-phase-1.cjs
 *
 * Phase 1 of SEO arc — minor cleanups on top of existing prerender +
 * sitemap infrastructure that already does 1,080 prerendered HTML files
 * and 1,085-URL sitemap on every build.
 *
 * Three patches:
 *   1. generate-sitemap.cjs: add /help (priority 0.9, weekly) to
 *      STATIC_PAGES so HelpFinder is in the sitemap. Currently missing.
 *   2. index.html: remove stale google-site-verification meta tag (token
 *      B, XlvtHlKMNfbyngHrDQz6SUSGE6Iuf4y3euRKe5N7Oxg). Token A (SIEGs...)
 *      stays as the live verification for helpfinder.help.
 *   3. index.html + public/manifest.json: update the three "225+ programs"
 *      strings to "Hundreds of free programs" so copy doesn't go stale
 *      again until the catalog hits thousands.
 *
 * Idempotent — aborts cleanly if any anchor not found.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITEMAP_GEN = path.join(ROOT, 'scripts', 'generate-sitemap.cjs');
const INDEX_HTML = path.join(ROOT, 'index.html');
const MANIFEST = path.join(ROOT, 'public', 'manifest.json');

let applied = 0;
let skipped = 0;

function abort(msg) {
  console.error('FATAL:', msg);
  process.exit(1);
}

// ─────────────────────────────────────────────
// PATCH 1: Add /help to generate-sitemap.cjs STATIC_PAGES
// ─────────────────────────────────────────────
console.log('━━ 1. generate-sitemap.cjs — add /help to STATIC_PAGES ━━');
{
  let src = fs.readFileSync(SITEMAP_GEN, 'utf8');
  const hadCRLF = src.includes('\r\n');
  src = src.replace(/\r\n/g, '\n');

  const oldStr = "const STATIC_PAGES = [\n  { path: '/', priority: '1.0', changefreq: 'weekly' },\n  { path: '/about', priority: '0.6', changefreq: 'monthly' },";
  const newStr = "const STATIC_PAGES = [\n  { path: '/', priority: '1.0', changefreq: 'weekly' },\n  { path: '/help', priority: '0.9', changefreq: 'weekly' },\n  { path: '/about', priority: '0.6', changefreq: 'monthly' },";

  if (src.includes("{ path: '/help', priority: '0.9'")) {
    console.log('  /help already in STATIC_PAGES, skipping');
    skipped++;
  } else if (src.includes(oldStr)) {
    src = src.replace(oldStr, newStr);
    if (hadCRLF) src = src.replace(/\n/g, '\r\n');
    fs.writeFileSync(SITEMAP_GEN, src);
    console.log('  /help added to STATIC_PAGES: applied');
    applied++;
  } else {
    abort('STATIC_PAGES anchor not found in generate-sitemap.cjs');
  }
}

// ─────────────────────────────────────────────
// PATCH 2+3: index.html — remove stale verification, update descriptions
// ─────────────────────────────────────────────
console.log('');
console.log('━━ 2-3. index.html — stale verification + description updates ━━');
{
  let html = fs.readFileSync(INDEX_HTML, 'utf8');
  const orig = html;
  const hadCRLF = html.includes('\r\n');
  html = html.replace(/\r\n/g, '\n');

  // 2. Stale token B verification meta
  const staleVerif = '    <meta name="google-site-verification" content="XlvtHlKMNfbyngHrDQz6SUSGE6Iuf4y3euRKe5N7Oxg" />\n';
  if (html.includes(staleVerif)) {
    html = html.replace(staleVerif, '');
    console.log('  stale verification meta removed: applied');
    applied++;
  } else {
    console.log('  stale verification meta: already gone, skipping');
    skipped++;
  }

  // 3a. main description
  const oldDesc = '<meta name="description" content="HelpFinder — Free help, everywhere. Food, housing, health, jobs, crisis support. 225+ programs in 8 languages. No data collected. No accounts. Just help." />';
  const newDesc = '<meta name="description" content="HelpFinder — Free help, everywhere. Food, housing, health, jobs, crisis support. Hundreds of free programs in 8 languages. No data collected. No accounts. Just help." />';
  if (html.includes(newDesc)) {
    console.log('  main description: already applied, skipping');
    skipped++;
  } else if (html.includes(oldDesc)) {
    html = html.replace(oldDesc, newDesc);
    console.log('  main description: applied');
    applied++;
  } else {
    abort('main description anchor not found');
  }

  // 3b. og:description
  const oldOg = '<meta property="og:description" content="225+ free programs. 8 languages. No data collected. No accounts. Just help." />';
  const newOg = '<meta property="og:description" content="Hundreds of free programs. 8 languages. No data collected. No accounts. Just help." />';
  if (html.includes(newOg)) {
    console.log('  og:description: already applied, skipping');
    skipped++;
  } else if (html.includes(oldOg)) {
    html = html.replace(oldOg, newOg);
    console.log('  og:description: applied');
    applied++;
  } else {
    abort('og:description anchor not found');
  }

  // 3c. twitter:description
  const oldTw = '<meta name="twitter:description" content="225+ programs. 8 languages. No data collected. Just help." />';
  const newTw = '<meta name="twitter:description" content="Hundreds of free programs. 8 languages. No data collected. Just help." />';
  if (html.includes(newTw)) {
    console.log('  twitter:description: already applied, skipping');
    skipped++;
  } else if (html.includes(oldTw)) {
    html = html.replace(oldTw, newTw);
    console.log('  twitter:description: applied');
    applied++;
  } else {
    abort('twitter:description anchor not found');
  }

  if (html !== orig) {
    if (hadCRLF) html = html.replace(/\n/g, '\r\n');
    fs.writeFileSync(INDEX_HTML, html);
  }
}

// ─────────────────────────────────────────────
// PATCH 4: manifest.json description
// ─────────────────────────────────────────────
console.log('');
console.log('━━ 4. public/manifest.json — description update ━━');
{
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const newDesc = 'Free help in Rochester, NY. Hundreds of programs, 8 languages.';
  if (manifest.description === newDesc) {
    console.log('  description: already applied, skipping');
    skipped++;
  } else {
    manifest.description = newDesc;
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
    console.log('  description: applied');
    applied++;
  }
}

console.log('');
console.log(`Patches applied: ${applied}, skipped: ${skipped}`);
