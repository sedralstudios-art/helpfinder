#!/usr/bin/env node
/**
 * migrate-help-seo-59.cjs
 * ========================
 * Two SEO polish items bundled together:
 *
 *   1. generate-sitemap.cjs — add sitemap-help.xml sub-sitemap covering
 *      /help (index) and /help/c/<cat> (per-category program pages).
 *      These were prerendered by prerender-help.cjs but not yet in the
 *      sitemap.
 *
 *   2. prerender-landing.cjs — inject <meta name="robots" content="index,
 *      follow"> into prerendered landing pages (home, about, support,
 *      privacy, terms) which were missing the explicit directive.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITEMAP = path.join(ROOT, 'scripts/generate-sitemap.cjs');
const LANDING = path.join(ROOT, 'scripts/prerender-landing.cjs');

let sitemap = fs.readFileSync(SITEMAP, 'utf8');
let landing = fs.readFileSync(LANDING, 'utf8');
let failures = 0;
let successes = 0;

function makeReplacer(label, getter, setter) {
  return (oldStr, newStr, sub) => {
    const current = getter();
    if (!current.includes(oldStr)) {
      console.error('ABORT ' + label + ': ' + sub);
      console.error('  Expected: ' + JSON.stringify(oldStr).slice(0, 200));
      failures++;
      return;
    }
    setter(current.replace(oldStr, newStr));
    console.log('OK ' + label + ': ' + sub);
    successes++;
  };
}

const doReplaceSitemap = makeReplacer('SITEMAP', () => sitemap, (v) => { sitemap = v; });
const doReplaceLanding = makeReplacer('LANDING', () => landing, (v) => { landing = v; });

// ═══════════════════════════════════════════════
// 1. Sitemap — add help sub-sitemap after glossary
// ═══════════════════════════════════════════════
doReplaceSitemap(
  '  // 4. sitemap.xml — the INDEX pointing to all sub-sitemaps\n',
  '  // 3c. sitemap-help.xml — /help index + per-category program pages\n' +
  '  const helpDir = path.join(ROOT, \'dist\', \'help\');\n' +
  '  if (fs.existsSync(helpDir)) {\n' +
  '    let helpXml = \'\';\n' +
  '    helpXml += buildUrlBlock(SITE_URL + \'/help\', today, \'weekly\', \'0.9\', null);\n' +
  '    totalUrls++;\n' +
  '    const helpCatDir = path.join(helpDir, \'c\');\n' +
  '    if (fs.existsSync(helpCatDir)) {\n' +
  '      const cats = fs.readdirSync(helpCatDir).filter((f) => fs.statSync(path.join(helpCatDir, f)).isDirectory());\n' +
  '      for (const cat of cats.sort()) {\n' +
  '        helpXml += buildUrlBlock(SITE_URL + \'/help/c/\' + cat, today, \'weekly\', \'0.85\', null);\n' +
  '        totalUrls++;\n' +
  '      }\n' +
  '      console.log(\'\\u2713 Wrote sitemap-help.xml (\' + (1 + cats.length) + \' URLs)\');\n' +
  '    }\n' +
  '    writeSubsitemap(\'sitemap-help.xml\', helpXml);\n' +
  '    writtenFiles.push(\'sitemap-help.xml\');\n' +
  '  }\n\n' +
  '  // 4. sitemap.xml — the INDEX pointing to all sub-sitemaps\n',
  'Insert help sub-sitemap block'
);

// ═══════════════════════════════════════════════
// 2. Landing — add robots meta before </head>
// ═══════════════════════════════════════════════
doReplaceLanding(
  '  // Add hreflang links before </head>\n' +
  '  const hreflang = hreflangLinks(pageKey);\n' +
  '  html = html.replace(\'</head>\', hreflang + \'\\n  </head>\');\n',
  '  // Add robots meta\n' +
  '  if (!html.includes(\'name="robots"\')) {\n' +
  '    html = html.replace(\'</head>\', \'    <meta name="robots" content="index, follow" />\\n  </head>\');\n' +
  '  }\n' +
  '\n' +
  '  // Add hreflang links before </head>\n' +
  '  const hreflang = hreflangLinks(pageKey);\n' +
  '  html = html.replace(\'</head>\', hreflang + \'\\n  </head>\');\n',
  'Inject robots meta into landing pages'
);

if (failures === 0) {
  fs.writeFileSync(SITEMAP, sitemap, 'utf8');
  fs.writeFileSync(LANDING, landing, 'utf8');
}
console.log('\n' + successes + ' changes, ' + failures + ' failures.');
if (failures > 0) {
  console.error('\nABORT: no files written.');
  process.exit(1);
}
console.log('\nWrote: ' + path.relative(ROOT, SITEMAP));
console.log('Wrote: ' + path.relative(ROOT, LANDING));
