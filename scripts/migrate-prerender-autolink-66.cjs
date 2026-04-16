#!/usr/bin/env node
/**
 * migrate-prerender-autolink-66.cjs
 * ===================================
 * Dual-render companion: auto-links glossary terms in prerendered legal
 * entry HTML as <a href="/glossary/<id>"> tags. This is the server-side
 * equivalent of the client-side GlossaryText tooltips. Googlebot and
 * no-JS visitors see the linked terms; internal link density increases.
 *
 * Adds:
 *   1. A buildGlossaryRegex() function that creates a term-matching regex
 *      from the loaded glossary terms (longest first, case-insensitive).
 *   2. An autoLinkGlossary(text) function that replaces the first
 *      occurrence of each matched term with an <a> tag.
 *   3. Applies autoLinkGlossary to whatItMeans, rights, options, and
 *      example HTML in generateEntryHTML.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PL = path.join(ROOT, 'scripts/prerender-legal.cjs');
let pl = fs.readFileSync(PL, 'utf8');
let failures = 0;
let successes = 0;

function doReplace(oldStr, newStr, label) {
  if (!pl.includes(oldStr)) {
    console.error('ABORT: ' + label);
    console.error('  Expected: ' + JSON.stringify(oldStr).slice(0, 200));
    failures++;
    return;
  }
  pl = pl.replace(oldStr, newStr);
  console.log('OK: ' + label);
  successes++;
}

// 1. Add autoLinkGlossary infrastructure after the glossary loading in main()
doReplace(
  "  console.log('\u2713 Loaded ' + glossaryTerms.length + ' glossary terms for cross-linking');\n",
  "  console.log('\\u2713 Loaded ' + glossaryTerms.length + ' glossary terms for cross-linking');\n\n" +
  "  // Build alias map + regex for auto-linking terms in entry HTML\n" +
  "  const aliasMap = {};\n" +
  "  for (const t of glossaryTerms) {\n" +
  "    const full = (t.term && t.term.en) || '';\n" +
  "    if (full) aliasMap[full.toLowerCase()] = t.id;\n" +
  "    for (const a of (t.aka || [])) {\n" +
  "      if (a) aliasMap[String(a).toLowerCase()] = t.id;\n" +
  "    }\n" +
  "  }\n" +
  "  const aliasKeys = Object.keys(aliasMap).sort((a, b) => b.length - a.length);\n" +
  "  const glossaryRegex = aliasKeys.length > 0\n" +
  "    ? new RegExp('\\\\b(' + aliasKeys.map(k => k.replace(/[.*+?^${}()|[\\\\]\\\\\\\\]/g, '\\\\\\\\$&')).join('|') + ')\\\\b', 'gi')\n" +
  "    : null;\n" +
  "  globalThis.GLOSSARY_ALIAS_MAP = aliasMap;\n" +
  "  globalThis.GLOSSARY_REGEX = glossaryRegex;\n",
  'Build glossary alias map + regex in main()'
);

// 2. Add autoLinkGlossary function near the top helper functions
doReplace(
  'function generateEntryHTML(entry, langMeta, bundleTags) {\n',
  'function autoLinkGlossary(text) {\n' +
  '  const regex = globalThis.GLOSSARY_REGEX;\n' +
  '  const map = globalThis.GLOSSARY_ALIAS_MAP || {};\n' +
  '  if (!regex || !text) return esc(text);\n' +
  '  const escaped = esc(text);\n' +
  '  const seen = new Set();\n' +
  '  return escaped.replace(regex, (match) => {\n' +
  '    const id = map[match.toLowerCase()];\n' +
  '    if (!id || seen.has(id)) return match;\n' +
  '    seen.add(id);\n' +
  '    return \'<a href="/glossary/\' + id + \'" style="color:#5e35b1;text-decoration:underline dotted #5e35b1;text-underline-offset:2px;">\' + match + \'</a>\';\n' +
  '  });\n' +
  '}\n\n' +
  'function generateEntryHTML(entry, langMeta, bundleTags) {\n',
  'Add autoLinkGlossary function'
);

// 3. Apply to whatItMeans
doReplace(
  "  const whatItMeansHTML = whatItMeans ? '<h2>What it means</h2><p>' + esc(whatItMeans) + '</p>' : '';\n",
  "  const whatItMeansHTML = whatItMeans ? '<h2>What it means</h2><p>' + autoLinkGlossary(whatItMeans) + '</p>' : '';\n",
  'autoLink whatItMeans'
);

// 4. Apply to rights
doReplace(
  "    ? '<section class=\"rights-box\"><h2>Your rights</h2><ul>' + rights.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul></section>'\n",
  "    ? '<section class=\"rights-box\"><h2>Your rights</h2><ul>' + rights.map((i) => '<li>' + autoLinkGlossary(i) + '</li>').join('') + '</ul></section>'\n",
  'autoLink rights items'
);

// 5. Apply to options
doReplace(
  "    ? '<h2>Legal options</h2><ul>' + options.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>'\n",
  "    ? '<h2>Legal options</h2><ul>' + options.map((i) => '<li>' + autoLinkGlossary(i) + '</li>').join('') + '</ul>'\n",
  'autoLink options items'
);

// 6. Apply to example
doReplace(
  "  const exampleHTML = example ? '<h2>Example</h2><p><em>' + esc(example) + '</em></p>' : '';\n",
  "  const exampleHTML = example ? '<h2>Example</h2><p><em>' + autoLinkGlossary(example) + '</em></p>' : '';\n",
  'autoLink example'
);

if (failures === 0) {
  fs.writeFileSync(PL, pl, 'utf8');
}
console.log('\n' + successes + ' changes, ' + failures + ' failures.');
if (failures > 0) {
  console.error('\nABORT: file NOT written.');
  process.exit(1);
}
console.log('\nWrote: ' + path.relative(ROOT, PL));
