#!/usr/bin/env node
/*
 * scripts/prerender-glossary.cjs
 * ==============================
 * Generates static HTML for the legal glossary:
 *   - 1 page per glossary term at /glossary/<id>/
 *   - 1 page per active category at /glossary/category/<cat>/
 *   - 1 glossary index page at /glossary/
 *
 * English only for v1. When translations land, mirror the language-expansion
 * pattern in prerender-legal.cjs (LEGAL_LANGS loop + hreflang tags).
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const SITE_URL = 'https://helpfinder.help';
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const GLOSSARY_DIR = path.join(ROOT, 'src', 'data', 'legal', 'glossary');

// Category metadata — keep in sync with GLOSSARY_CATEGORY_META in Glossary.jsx.
const CATEGORY_META = {
  criminal: { icon: '⚖️', label: 'Court & Arrests', desc: 'Words you hear at arraignment, hearings, and in criminal cases.' },
  housing: { icon: '🏠', label: 'Housing & Rent', desc: 'Words landlords, tenants, and housing court use.' },
  family: { icon: '👨‍👩‍👧', label: 'Family Court', desc: 'Words from custody, support, and family court cases.' },
  benefits: { icon: '💰', label: 'Benefits & Hearings', desc: 'Words used in SNAP, Medicaid, and fair hearing notices.' },
  consumer: { icon: '🛒', label: 'Debt & Collections', desc: 'Words debt collectors and small claims court use.' },
  employment: { icon: '💼', label: 'Work & Pay', desc: 'Words from workplace complaints and wage cases.' },
  vehicle: { icon: '🚗', label: 'Driving & Tickets', desc: 'Words from traffic court and the DMV.' },
  immigration: { icon: '🌎', label: 'Immigration', desc: 'Words used at immigration court and on government forms.' },
  general: { icon: '📖', label: 'General Court Words', desc: 'Everyday court words that come up everywhere.' },
};

function esc(s) {
  if (s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function pick(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field.en || '';
}

function pickArr(field) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field.en || [];
}

function urlPathForTerm(id) { return '/glossary/' + id; }
function urlPathForGlossaryCategory(cat) { return '/glossary/category/' + cat; }
function urlPathForGlossaryIndex() { return '/glossary'; }

async function loadTerms() {
  if (!fs.existsSync(GLOSSARY_DIR)) return [];
  const files = fs.readdirSync(GLOSSARY_DIR).filter((f) => f.endsWith('.js'));
  const terms = [];
  for (const f of files) {
    const abs = path.join(GLOSSARY_DIR, f);
    const mod = await import(pathToFileURL(abs).href);
    const val = Object.values(mod)[0];
    if (val && val.id) terms.push(val);
  }
  terms.sort((a, b) => ((a.term && a.term.en) || '').localeCompare((b.term && b.term.en) || ''));
  return terms;
}

function extractBundleTags(indexHTML) {
  const scripts = (indexHTML.match(/<script\b[^>]*>\s*<\/script>|<script\b[^>]*\/>/g) || []).join('\n    ');
  const links = (indexHTML.match(/<link\b[^>]*(?:stylesheet|modulepreload|preload)[^>]*>/g) || []).join('\n    ');
  return { scripts, links };
}

function jsonLDSafe(obj) {
  return JSON.stringify(obj, null, 2).replace(/<\//g, '<\\/');
}

const SHARED_CSS = `
      body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #1a1a1a; background: #fafaf7; }
      .ssr-content { max-width: 720px; margin: 0 auto; padding: 20px; line-height: 1.6; }
      .ssr-content h1 { font-size: 30px; font-weight: 400; margin: 10px 0 6px; font-family: 'DM Serif Display', Georgia, serif; }
      .ssr-content h2 { font-size: 18px; font-weight: 700; margin: 22px 0 8px; color: #1a1a1a; }
      .ssr-content .aka { font-size: 15px; color: #767676; margin-bottom: 18px; }
      .ssr-content .cat-chip { display: inline-block; background: #ede7f6; color: #4527a0; border: 1px solid #5e35b1; border-radius: 999px; padding: 3px 10px; font-size: 12px; margin-bottom: 8px; text-decoration: none; }
      .ssr-content p { font-size: 16px; line-height: 1.6; color: #1a1a1a; }
      .ssr-content .ask { background: #fff; border: 1px solid #e8e4dc; border-radius: 10px; padding: 14px 18px; }
      .ssr-content .ask ul { margin: 6px 0 0; padding-inline-start: 22px; }
      .ssr-content .ask li { margin-bottom: 6px; font-size: 15px; }
      .ssr-content .related { display: flex; flex-wrap: wrap; gap: 8px; }
      .ssr-content .related a { background: #ede7f6; border: 1px solid #5e35b1; color: #4527a0; border-radius: 999px; padding: 5px 12px; font-size: 13px; text-decoration: none; }
      .ssr-content .source-box { background: #f5f0e8; border: 1px solid #e8e4dc; border-radius: 10px; padding: 12px 16px; margin-top: 24px; font-size: 13px; }
      .ssr-content .source-box .label { font-size: 12px; font-weight: 600; color: #555; margin-bottom: 4px; }
      .ssr-content .source-box a { color: #5e35b1; }
      .ssr-content .disclaimer { background: #f5f0e8; border: 1px solid #e8e4dc; border-radius: 10px; padding: 12px 16px; margin-top: 20px; font-size: 12px; color: #555; }
      .ssr-content .term-list { list-style: none; padding: 0; margin: 0; background: #fff; border: 1px solid #e8e4dc; border-radius: 10px; }
      .ssr-content .term-list li { border-bottom: 1px solid #e8e4dc; }
      .ssr-content .term-list li:last-child { border-bottom: none; }
      .ssr-content .term-list a { display: block; padding: 12px 16px; text-decoration: none; color: #1a1a1a; }
      .ssr-content .term-list a strong { font-size: 15px; font-weight: 600; display: block; }
      .ssr-content .term-list a span { font-size: 13px; color: #555; }
      .ssr-content .cat-tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; }
      .ssr-content .cat-tile { display: flex; gap: 12px; align-items: center; background: #ede7f6; border: 1px solid #5e35b1; border-radius: 14px; padding: 14px 16px; text-decoration: none; color: #1a1a1a; }
      .ssr-content .cat-tile .cat-icon { font-size: 26px; }
      .ssr-content .cat-tile .cat-label { font-weight: 700; font-size: 14px; }
      .ssr-content .cat-tile .cat-count { font-size: 11px; color: #555; }
`;

function generateTermHTML(term, bundleTags) {
  const canonical = SITE_URL + urlPathForTerm(term.id);
  const name = pick(term.term);
  const plain = pick(term.plainEnglish);
  const ctx = pick(term.context);
  const aka = Array.isArray(term.aka) ? term.aka : [];
  const ask = pickArr(term.whatToAsk);
  const meta = CATEGORY_META[term.category] || { icon: '📖', label: term.category || 'General' };

  const pageTitle = name + (aka.length ? ' (' + aka.join(', ') + ')' : '') + ' — What it means | HelpFinder';
  const metaDesc = plain.length > 160 ? plain.slice(0, 157) + '...' : plain;

  const jsonLD = jsonLDSafe({
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: name,
    alternateName: aka,
    description: plain,
    inDefinedTermSet: 'HelpFinder Legal Glossary',
    url: canonical,
    publisher: { '@type': 'Organization', name: 'HelpFinder', url: SITE_URL },
  });

  const askHTML = ask.length
    ? '<h2>What to ask</h2><div class="ask"><ul>' + ask.map((q) => '<li>' + esc(q) + '</li>').join('') + '</ul></div>'
    : '';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(pageTitle)}</title>
    <meta name="description" content="${esc(metaDesc)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(pageTitle)}" />
    <meta property="og:description" content="${esc(metaDesc)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:site_name" content="HelpFinder" />
    <meta property="og:image" content="${esc(SITE_URL)}/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(pageTitle)}" />
    <meta name="twitter:description" content="${esc(metaDesc)}" />
    <meta name="twitter:image" content="${esc(SITE_URL)}/og-image.png" />
    <script type="application/ld+json">
${jsonLD}
    </script>
    ${bundleTags.links}
    ${bundleTags.scripts}
    <style>${SHARED_CSS}</style>
  </head>
  <body>
    <div id="root">
      <article class="ssr-content">
        <a class="cat-chip" href="${esc(urlPathForGlossaryCategory(term.category || 'general'))}">${meta.icon} ${esc(meta.label)}</a>
        <h1>${esc(name)}</h1>
        ${aka.length ? '<div class="aka">Also called: ' + aka.map(esc).join(', ') + '</div>' : ''}
        <h2>What it means</h2>
        <p>${esc(plain)}</p>
        ${ctx ? '<h2>When you might hear this</h2><p>' + esc(ctx) + '</p>' : ''}
        ${askHTML}
        ${term.citation || term.sourceUrl ? (
          '<div class="source-box">' +
          '<div class="label">Source</div>' +
          esc(term.citation || '') +
          (term.sourceUrl ? ' — <a href="' + esc(term.sourceUrl) + '" target="_blank" rel="noopener noreferrer">Read the law</a>' : '') +
          (term.lastVerified ? '<div style="font-size:11px;color:#767676;margin-top:6px;">Checked: ' + esc(term.lastVerified) + '</div>' : '') +
          '</div>'
        ) : ''}
        <div class="disclaimer">This is for understanding only. It is not legal advice. If you are in a case, talk to a lawyer.</div>
      </article>
    </div>
  </body>
</html>`;
}

function generateCategoryHTML(cat, termsInCat, bundleTags) {
  const canonical = SITE_URL + urlPathForGlossaryCategory(cat);
  const meta = CATEGORY_META[cat] || { icon: '📖', label: cat, desc: '' };
  const pageTitle = meta.label + ' — Legal Glossary | HelpFinder';
  const metaDesc = meta.desc + ' ' + termsInCat.length + ' words explained.';

  const listHTML = termsInCat.map((t) => {
    const name = pick(t.term);
    const aka = (t.aka || []).length ? ' (' + t.aka.join(', ') + ')' : '';
    const plain = pick(t.plainEnglish);
    return '<li><a href="' + esc(urlPathForTerm(t.id)) + '">' +
      '<strong>' + esc(name) + aka + '</strong>' +
      '<span>' + esc(plain.slice(0, 160)) + (plain.length > 160 ? '…' : '') + '</span>' +
      '</a></li>';
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(pageTitle)}</title>
    <meta name="description" content="${esc(metaDesc)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${esc(pageTitle)}" />
    <meta property="og:description" content="${esc(metaDesc)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:site_name" content="HelpFinder" />
    <meta property="og:image" content="${esc(SITE_URL)}/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(pageTitle)}" />
    <meta name="twitter:description" content="${esc(metaDesc)}" />
    <meta name="twitter:image" content="${esc(SITE_URL)}/og-image.png" />
    ${bundleTags.links}
    ${bundleTags.scripts}
    <style>${SHARED_CSS}</style>
  </head>
  <body>
    <div id="root">
      <article class="ssr-content">
        <h1>${meta.icon} ${esc(meta.label)}</h1>
        <p>${esc(meta.desc)}</p>
        <ul class="term-list">${listHTML}</ul>
      </article>
    </div>
  </body>
</html>`;
}

function generateIndexHTML(allTerms, termsByCategory, bundleTags) {
  const canonical = SITE_URL + urlPathForGlossaryIndex();
  const pageTitle = 'Legal Glossary — Plain-English Court Words | HelpFinder';
  const metaDesc = 'Plain-English meanings for legal and court words you hear in New York. ACD, arraignment, eviction, fair hearing, and more. Written for regular people. Every word is checked against the law.';

  const tilesHTML = Object.keys(CATEGORY_META)
    .filter((c) => (termsByCategory[c] || []).length > 0)
    .map((c) => {
      const m = CATEGORY_META[c];
      const count = termsByCategory[c].length;
      return '<a class="cat-tile" href="' + esc(urlPathForGlossaryCategory(c)) + '">' +
        '<div class="cat-icon">' + m.icon + '</div>' +
        '<div><div class="cat-label">' + esc(m.label) + '</div>' +
        '<div class="cat-count">' + count + ' ' + (count === 1 ? 'word' : 'words') + '</div></div>' +
        '</a>';
    }).join('');

  const azHTML = allTerms.map((t) => {
    const name = pick(t.term);
    const aka = (t.aka || []).length ? ' (' + t.aka.join(', ') + ')' : '';
    return '<li><a href="' + esc(urlPathForTerm(t.id)) + '"><strong>' + esc(name) + aka + '</strong></a></li>';
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(pageTitle)}</title>
    <meta name="description" content="${esc(metaDesc)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${esc(pageTitle)}" />
    <meta property="og:description" content="${esc(metaDesc)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:site_name" content="HelpFinder" />
    <meta property="og:image" content="${esc(SITE_URL)}/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(pageTitle)}" />
    <meta name="twitter:description" content="${esc(metaDesc)}" />
    <meta name="twitter:image" content="${esc(SITE_URL)}/og-image.png" />
    ${bundleTags.links}
    ${bundleTags.scripts}
    <style>${SHARED_CSS}</style>
  </head>
  <body>
    <div id="root">
      <article class="ssr-content">
        <h1>Legal Glossary</h1>
        <p>Plain-English words for what you hear in court, on notices, and from lawyers. Written for regular people. Every word is checked against the law.</p>
        <h2>Browse by topic</h2>
        <div class="cat-tiles">${tilesHTML}</div>
        <h2>All words (A–Z)</h2>
        <ul class="term-list">${azHTML}</ul>
        <div class="disclaimer">This glossary is for understanding only. It is not legal advice. If you are in a case, talk to a lawyer.</div>
      </article>
    </div>
  </body>
</html>`;
}

async function main() {
  console.log('Prerender legal glossary (v1 — English only)...');

  const distIndexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(distIndexPath)) {
    console.error('ERROR: ' + distIndexPath + ' not found. Run "vite build" first.');
    process.exit(1);
  }
  const indexHTML = fs.readFileSync(distIndexPath, 'utf8');
  const bundleTags = extractBundleTags(indexHTML);

  const terms = await loadTerms();
  console.log('✓ Loaded ' + terms.length + ' glossary terms');
  if (terms.length === 0) {
    console.log('ℹ No terms yet — wrote glossary index only.');
  }

  const termsByCategory = {};
  for (const t of terms) {
    const c = t.category || 'general';
    (termsByCategory[c] = termsByCategory[c] || []).push(t);
  }
  const activeCats = Object.keys(CATEGORY_META).filter((c) => (termsByCategory[c] || []).length > 0);
  console.log('✓ ' + activeCats.length + ' active categories');

  let fileCount = 0;

  for (const term of terms) {
    const html = generateTermHTML(term, bundleTags);
    const outDir = path.join(DIST, urlPathForTerm(term.id).replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    fileCount++;
  }
  console.log('✓ Wrote ' + terms.length + ' term pages');

  for (const cat of activeCats) {
    const html = generateCategoryHTML(cat, termsByCategory[cat], bundleTags);
    const outDir = path.join(DIST, urlPathForGlossaryCategory(cat).replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    fileCount++;
  }
  console.log('✓ Wrote ' + activeCats.length + ' category pages');

  const idxHTML = generateIndexHTML(terms, termsByCategory, bundleTags);
  const idxDir = path.join(DIST, urlPathForGlossaryIndex().replace(/^\//, ''));
  fs.mkdirSync(idxDir, { recursive: true });
  fs.writeFileSync(path.join(idxDir, 'index.html'), idxHTML);
  fileCount++;
  console.log('✓ Wrote glossary index page');

  console.log('\nTotal: ' + fileCount + ' pre-rendered glossary HTML files');
  console.log('Done.');
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
