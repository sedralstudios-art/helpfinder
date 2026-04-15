#!/usr/bin/env node
/*
 * scripts/prerender-legal.cjs  (v2 — category-first)
 * ==================================================
 * Generates static HTML for:
 *   - 46 entries × 20 languages = 920 entry pages
 *   - 7 categories × 20 languages = 140 category list pages
 *   - 20 library index pages (category overview, one per language)
 *   = 1,080 files total
 *
 * All URL tiers have:
 *   - Per-language <html lang> + dir
 *   - Unique <title>, meta description, canonical
 *   - hreflang linking all 20 language versions of THIS page
 *   - JSON-LD structured data
 *   - Real body content inside #root (Google crawls this directly)
 *   - React bundle tags for client hydration
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const SITE_URL = 'https://helpfinder.help';
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');

const LEGAL_LANGS = [
  { code: 'en', label: 'English', dir: 'ltr', htmlLang: 'en' },
  { code: 'es', label: 'Español', dir: 'ltr', htmlLang: 'es' },
  { code: 'zh', label: '中文', dir: 'ltr', htmlLang: 'zh-Hans' },
  { code: 'vi', label: 'Tiếng Việt', dir: 'ltr', htmlLang: 'vi' },
  { code: 'ko', label: '한국어', dir: 'ltr', htmlLang: 'ko' },
  { code: 'tl', label: 'Tagalog', dir: 'ltr', htmlLang: 'tl' },
  { code: 'ar', label: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  { code: 'ru', label: 'Русский', dir: 'ltr', htmlLang: 'ru' },
  { code: 'ht', label: 'Kreyòl Ayisyen', dir: 'ltr', htmlLang: 'ht' },
  { code: 'pt', label: 'Português', dir: 'ltr', htmlLang: 'pt-BR' },
  { code: 'fr', label: 'Français', dir: 'ltr', htmlLang: 'fr' },
  { code: 'hi', label: 'हिन्दी', dir: 'ltr', htmlLang: 'hi' },
  { code: 'ur', label: 'اردو', dir: 'rtl', htmlLang: 'ur' },
  { code: 'fa', label: 'فارسی', dir: 'rtl', htmlLang: 'fa' },
  { code: 'ps', label: 'پښتو', dir: 'rtl', htmlLang: 'ps' },
  { code: 'uk', label: 'Українська', dir: 'ltr', htmlLang: 'uk' },
  { code: 'ne', label: 'नेपाली', dir: 'ltr', htmlLang: 'ne' },
  { code: 'my', label: 'မြန်မာ', dir: 'ltr', htmlLang: 'my' },
  { code: 'so', label: 'Soomaali', dir: 'ltr', htmlLang: 'so' },
  { code: 'sw', label: 'Kiswahili', dir: 'ltr', htmlLang: 'sw' },
];

// Category metadata — match LegalLibrary.jsx CATEGORY_META
const CATEGORY_META = {
  benefits: {
    icon: '💰',
    label: 'Money & Benefits',
    desc: 'SNAP, Medicaid, Medicare, cash help, disability, fair hearings, appeals — your rights under New York public benefits law.',
    seoKeywords: 'SNAP NY, Medicaid New York, Medicare savings program, cash assistance, fair hearing, public benefits rights, benefits appeal',
  },
  consumer: {
    icon: '🛒',
    label: 'Debt & Money Problems',
    desc: 'Debt collection, scams, contracts, refunds, unfair charges — how to fight back.',
    seoKeywords: 'debt collection NY, consumer rights, scam protection, unfair practices, refund rights',
  },
  housing: {
    icon: '🏠',
    label: 'Housing & Rent',
    desc: 'Landlord disputes, eviction, security deposits, housing discrimination — know your housing rights.',
    seoKeywords: 'eviction defense NY, landlord tenant, security deposit, housing discrimination, rent stabilization',
  },
  family: {
    icon: '👨‍👩‍👧',
    label: 'Family Decisions',
    desc: 'Child care, custody, planning ahead with Power of Attorney or Health Care Proxy, guardianship alternatives.',
    seoKeywords: 'child care assistance NY, custody, power of attorney, health care proxy, guardianship alternatives, family support',
  },
  employment: {
    icon: '💼',
    label: 'Work & Pay',
    desc: 'Wage theft, unpaid wages, overtime, wrongful firing, workplace rights — how New York protects workers.',
    seoKeywords: 'wage theft NY, unpaid wages, overtime rights, wrongful termination, workplace protections, worker rights',
  },
  vehicle: {
    icon: '🚗',
    label: 'Driving & Tickets',
    desc: "Driver's license, suspensions, registration, tickets, DWI — traffic matters in New York.",
    seoKeywords: "driver's license NY, license suspension, traffic ticket rights, DWI, vehicle registration",
  },
  criminal: {
    icon: '⚖️',
    label: 'Arrests & Records',
    desc: 'Rights when arrested, drug charges, Good Samaritan Law, sealing or expunging a record — NY Clean Slate Act and related laws.',
    seoKeywords: 'NY Clean Slate Act, sealing criminal record, certificate of relief, expungement New York, rights when arrested, Good Samaritan Law',
  },
  trades: {
    icon: '🔨',
    label: 'Home Projects & Permits',
    desc: 'Building permits, contractor rules, and local ordinances for roofing, plumbing, electrical, and HVAC work — what the rules are where you are.',
    seoKeywords: 'building permit NY, contractor requirements, roofing permit, plumbing permit, electrical permit, HVAC permit, town ordinance, Monroe County permits',
  },
};

// ── Helpers ──
function esc(s) {
  if (s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function pick(field, lang) {
  if (!field || typeof field !== 'object') return '';
  return field[lang] || field.en || '';
}

function pickArr(field, lang) {
  if (!field || typeof field !== 'object') return [];
  const v = field[lang] || field.en || [];
  return Array.isArray(v) ? v : [];
}

function urlPathForEntry(lang, entryId) {
  if (lang === 'en') return `/know-your-rights/${entryId}`;
  return `/${lang}/know-your-rights/${entryId}`;
}

function urlPathForCategory(lang, cat) {
  if (lang === 'en') return `/know-your-rights/topic/${cat}`;
  return `/${lang}/know-your-rights/topic/${cat}`;
}

function urlPathForLibrary(lang) {
  if (lang === 'en') return '/know-your-rights';
  return `/${lang}/know-your-rights`;
}

async function loadTranslations() {
  const dir = path.join(ROOT, 'src', 'data', 'legal', 'translations');
  if (!fs.existsSync(dir)) return {};
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.js'));
  const out = {};
  for (const f of files) {
    const lang = path.basename(f, '.js');
    const abs = path.join(dir, f);
    const mod = await import(pathToFileURL(abs).href);
    out[lang] = (mod && mod.default) || mod || {};
  }
  return out;
}

function applyTranslations(entries, translations) {
  const STRING_FIELDS = ['title', 'summary', 'whatItMeans', 'example'];
  const ARRAY_FIELDS = ['whoQualifies', 'yourRights', 'legalOptions'];
  for (const entry of entries) {
    if (!entry || !entry.id) continue;
    for (const lang of Object.keys(translations)) {
      const t = translations[lang] && translations[lang][entry.id];
      if (!t) continue;
      for (const f of STRING_FIELDS) {
        if (t[f] && entry[f] && typeof entry[f] === 'object') {
          entry[f][lang] = t[f];
        }
      }
      for (const f of ARRAY_FIELDS) {
        if (Array.isArray(t[f]) && entry[f] && typeof entry[f] === 'object') {
          entry[f][lang] = t[f];
        }
      }
    }
  }
}

async function loadEntries() {
  const files = fs.readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.js'));
  const entries = [];
  for (const f of files) {
    const abs = path.join(ENTRIES_DIR, f);
    const mod = await import(pathToFileURL(abs).href);
    const val = Object.values(mod)[0];
    if (val && val.id) entries.push(val);
  }
  entries.sort((a, b) => {
    const c = (a.category || '').localeCompare(b.category || '');
    if (c !== 0) return c;
    return (a.title?.en || '').localeCompare(b.title?.en || '');
  });
  return entries;
}

function extractBundleTags(indexHTML) {
  const scripts = (indexHTML.match(/<script\b[^>]*>\s*<\/script>|<script\b[^>]*\/>/g) || []).join('\n    ');
  const links = (indexHTML.match(/<link\b[^>]*(?:stylesheet|modulepreload|preload)[^>]*>/g) || []).join('\n    ');
  return { scripts, links };
}

function buildHreflang(pathFn, arg) {
  const lines = LEGAL_LANGS.map((l) => {
    const href = SITE_URL + pathFn(l.code, arg);
    return `    <link rel="alternate" hreflang="${l.htmlLang}" href="${esc(href)}" />`;
  });
  lines.push(`    <link rel="alternate" hreflang="x-default" href="${esc(SITE_URL + pathFn('en', arg))}" />`);
  return lines.join('\n');
}

function jsonLDSafe(obj) {
  return JSON.stringify(obj, null, 2).replace(/<\//g, '<\\/');
}

function translationBanner(lang) {
  if (lang === 'en') return '';
  return '<div class="translation-banner">' +
    '<div style="font-size:14px;font-weight:600;color:#5d4037;margin-bottom:6px;">📖 Full translation in progress.</div>' +
    '<div style="font-size:13px;color:#5d4037;line-height:1.5;margin-bottom:8px;">Legal words like <em>may</em>, <em>shall</em>, <em>right</em>, and <em>petition</em> have precise meanings that everyday translation tools (like Google Translate) often miss — and a wrong word can change your rights.</div>' +
    '<div style="font-size:13px;color:#5d4037;line-height:1.5;"><strong>If you need help in your language right now:</strong> call <a href="tel:211" style="color:#1565c0;font-weight:600;">211</a> for a free interpreter, or <a href="tel:5852955700" style="color:#1565c0;font-weight:600;">LawNY at 585-295-5700</a> which has interpreters on staff.</div>' +
    '<div style="font-size:13px;color:#5d4037;line-height:1.5;">If you need help right now in your language, call <strong>211</strong> (free, 24/7, 200+ languages) or <strong>LawNY at 585-295-5700</strong> (free legal aid, interpreters available). The free legal aid organizations listed at the bottom of this page also speak many languages directly.</div>' +
    '</div>';
}

// ── Shared CSS block ──
const SHARED_CSS = `
      body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #1a1a1a; background: #fafaf7; }
      .ssr-content { max-width: 920px; margin: 0 auto; padding: 20px; line-height: 1.6; }
      .ssr-content h1 { font-size: 32px; font-weight: 400; margin: 14px 0 10px; color: #1a1a1a; line-height: 1.25; }
      .ssr-content h2 { font-size: 20px; font-weight: 400; margin: 24px 0 10px; color: #1a1a1a; }
      .ssr-content .lead { font-size: 16px; color: #555; margin-bottom: 20px; font-weight: 500; }
      .ssr-content ul { padding-inline-start: 22px; margin: 8px 0 16px; }
      .ssr-content li { margin-bottom: 8px; font-size: 14px; }
      .ssr-content .rights-box { background: #e8f5e9; border: 1px solid #c8e6c9; border-radius: 12px; padding: 16px 20px; margin: 20px 0; }
      .ssr-content .rights-box h2 { color: #2e7d32; margin-top: 0; }
      .ssr-content .tier-badge { display: inline-block; background: #e8f5e9; color: #2e7d32; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
      .ssr-content .disclaimer { background: #fdf6ec; border: 1px solid #f0dab0; border-radius: 10px; padding: 12px 16px; margin: 20px 0; font-size: 12px; color: #555; }
      .ssr-content .translation-banner { background: #fdf6ec; border: 1px solid #f0dab0; border-radius: 10px; padding: 12px 16px; margin-bottom: 20px; font-size: 13px; color: #555; }
      .ssr-content .counsel { padding: 0; list-style: none; }
      .ssr-content .counsel li { background: #fff; border: 1px solid #e8e4dc; border-radius: 10px; padding: 10px 14px; list-style: none; margin-bottom: 10px; }
      .ssr-content .counsel .focus { font-size: 12px; color: #767676; }
      .ssr-content .sources li { font-size: 11px; color: #767676; }
      .ssr-content .sources a { color: #767676; word-break: break-all; }
      .ssr-content .entry-list { list-style: none; padding: 0; display: grid; gap: 10px; margin: 0; }
      .ssr-content .entry-list li a { display: block; padding: 12px 16px; background: #fff; border: 1px solid #e8e4dc; border-radius: 10px; text-decoration: none; color: #1a1a1a; }
      .ssr-content .entry-list li a strong { font-size: 15px; font-weight: 600; display: block; margin-bottom: 4px; }
      .ssr-content .entry-list li a span { font-size: 13px; color: #555; }
      .ssr-content .cat-tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; margin-top: 8px; }
      .ssr-content .cat-tile { background: #fff; border: 1px solid #e8e4dc; border-radius: 16px; padding: 18px 20px; text-decoration: none; color: #1a1a1a; display: flex; flex-direction: column; gap: 8px; min-height: 140px; }
      .ssr-content .cat-tile .cat-icon { font-size: 36px; line-height: 1; }
      .ssr-content .cat-tile .cat-label { font-size: 18px; font-weight: 700; color: #1a1a1a; font-family: 'DM Serif Display', Georgia, serif; }
      .ssr-content .cat-tile .cat-desc { font-size: 13px; color: #555; line-height: 1.5; flex: 1; }
      .ssr-content .cat-tile .cat-count { font-size: 12px; font-weight: 600; color: #2e7d32; margin-top: 4px; }
      .ssr-content .reviewed-by { background: #e8f5e9; border: 1px solid #c8e6c9; border-radius: 12px; padding: 14px 18px; margin: 0 0 24px; font-size: 13px; line-height: 1.55; }
      .ssr-content .reviewed-by .reviewed-name { color: #2e7d32; font-weight: 600; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
      .ssr-content .reviewed-by .reviewed-check { font-size: 14px; }
      .ssr-content .reviewed-by .reviewed-disclaimer { color: #555; font-style: italic; }
`;

// ── Entry page ──
function generateEntryHTML(entry, langMeta, bundleTags) {
  const lang = langMeta.code;
  const canonical = SITE_URL + urlPathForEntry(lang, entry.id);
  const title = pick(entry.title, lang);
  const summary = pick(entry.summary, lang);
  const whoQual = pickArr(entry.whoQualifies, lang);
  const whatItMeans = pick(entry.whatItMeans, lang);
  const rights = pickArr(entry.yourRights, lang);
  const options = pickArr(entry.legalOptions, lang);
  const example = pick(entry.example, lang);
  const counsel = Array.isArray(entry.counsel) ? entry.counsel : [];
  const sources = Array.isArray(entry.sources) ? entry.sources : [];
  const tags = Array.isArray(entry.tags) ? entry.tags : [];

  const pageTitle = title + ' | HelpFinder';
  const metaDesc = summary.length > 160 ? summary.slice(0, 157) + '...' : summary;

  // Reviewed-by callout (optional field — only renders when an outside expert
  // has reviewed the entry and consented to being named). Paired with a
  // non-legal-advice notice so trust signal and UPL disclaimer stay together.
  const reviewedByHTML = entry.reviewedBy
    ? '<div class="reviewed-by">' +
      '<div class="reviewed-name"><span class="reviewed-check">✓</span><span>Reviewed by ' + esc(entry.reviewedBy) + '</span></div>' +
      '<div class="reviewed-disclaimer">This guide is general legal information, not legal advice for your specific situation.</div>' +
      '</div>'
    : '';

  const whoQualHTML = whoQual.length
    ? '<h2>Who qualifies</h2><ul>' + whoQual.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>'
    : '';
  const whatItMeansHTML = whatItMeans ? '<h2>What it means</h2><p>' + esc(whatItMeans) + '</p>' : '';
  const rightsHTML = rights.length
    ? '<section class="rights-box"><h2>Your rights</h2><ul>' + rights.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul></section>'
    : '';
  const optionsHTML = options.length
    ? '<h2>Legal options</h2><ul>' + options.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>'
    : '';
  const exampleHTML = example ? '<h2>Example</h2><p><em>' + esc(example) + '</em></p>' : '';
  const counselHTML = counsel.length
    ? '<h2>Get free legal help</h2><ul class="counsel">' +
      counsel
        .map((c) => {
          let h = '<li><strong>' + esc(c.name || '') + '</strong>';
          if (c.phone) h += ' — <a href="tel:' + esc(c.phone.replace(/[^0-9+]/g, '')) + '">' + esc(c.phone) + '</a>';
          if (c.url) h += ' — <a href="' + esc(c.url) + '" rel="noopener">website</a>';
          if (c.focus) h += '<br><span class="focus">' + esc(c.focus) + '</span>';
          return h + '</li>';
        })
        .join('') +
      '</ul>'
    : '';
  const sourcesHTML = sources.length
    ? '<h2>Sources</h2><ul class="sources">' +
      sources.map((s) => '<li><a href="' + esc(s) + '" rel="noopener">' + esc(s) + '</a></li>').join('') +
      '</ul>'
    : '';

  const jsonLD = jsonLDSafe({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: summary,
    inLanguage: langMeta.htmlLang,
    datePublished: entry.lastVerified || entry.lastAudited || '2026-04-04',
    dateModified: entry.lastVerified || entry.lastAudited || '2026-04-04',
    author: { '@type': 'Organization', name: 'HelpFinder', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'HelpFinder', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    keywords: tags.join(', '),
    about: { '@type': 'Thing', name: (CATEGORY_META[entry.category] && CATEGORY_META[entry.category].label) || entry.category || 'Legal rights' },
  });

  // BreadcrumbList: Home → Know Your Rights → [Category] → [Entry]
  const categoryLabel = (CATEGORY_META[entry.category] && CATEGORY_META[entry.category].label) || entry.category || 'Legal';
  const breadcrumbJsonLD = jsonLDSafe({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + (lang === 'en' ? '/' : '/' + lang + '/') },
      { '@type': 'ListItem', position: 2, name: 'Know Your Rights', item: SITE_URL + urlPathForLibrary(lang) },
      { '@type': 'ListItem', position: 3, name: categoryLabel, item: SITE_URL + urlPathForCategory(lang, entry.category || 'other') },
      { '@type': 'ListItem', position: 4, name: title, item: canonical },
    ],
  });

  return `<!DOCTYPE html>
<html lang="${esc(langMeta.htmlLang)}" dir="${langMeta.dir}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(pageTitle)}</title>
    <meta name="description" content="${esc(metaDesc)}" />
    <meta name="keywords" content="${esc(tags.join(', '))}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(metaDesc)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:site_name" content="HelpFinder" />
    <meta property="og:locale" content="${esc(langMeta.htmlLang.replace('-', '_'))}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(metaDesc)}" />
${buildHreflang(urlPathForEntry, entry.id)}
    <script type="application/ld+json">
${jsonLD}
    </script>
    <script type="application/ld+json">
${breadcrumbJsonLD}
    </script>
    ${bundleTags.links}
    ${bundleTags.scripts}
    <style>${SHARED_CSS}</style>
  </head>
  <body>
    <div id="root">
      <article class="ssr-content">
        ${translationBanner(lang)}
        <div>
          <span class="tier-badge">${esc(entry.tier || '')}</span>
          ${entry.jurisdiction ? '<span style="margin-left:8px;font-size:11px;color:#767676;text-transform:uppercase;">' + esc(entry.jurisdiction) + '</span>' : ''}
        </div>
        <h1>${esc(title)}</h1>
        <p class="lead">${esc(summary)}</p>
        ${reviewedByHTML}
        ${whoQualHTML}
        ${whatItMeansHTML}
        ${rightsHTML}
        ${optionsHTML}
        ${exampleHTML}
        ${counselHTML}
        ${sourcesHTML}
        <div class="disclaimer">⚠️ <strong>Not legal advice.</strong> This guide explains your general rights under New York and federal law. Laws change. For your specific situation, contact one of the free legal aid organizations listed above.</div>
      </article>
    </div>
  </body>
</html>`;
}

// ── Category page (list of entries in one category) ──
function generateCategoryHTML(cat, entriesInCat, langMeta, bundleTags) {
  const lang = langMeta.code;
  const meta = CATEGORY_META[cat] || { icon: '📄', label: cat, desc: '', seoKeywords: '' };
  const canonical = SITE_URL + urlPathForCategory(lang, cat);
  const pageTitle = meta.label + ' — Your Rights in New York | HelpFinder';
  const metaDesc = meta.desc + ' ' + entriesInCat.length + ' free guides with free legal aid phone numbers.';

  const itemsHTML = entriesInCat
    .map((e) => {
      const t = pick(e.title, lang);
      const s = pick(e.summary, lang);
      const href = urlPathForEntry(lang, e.id);
      return '<li><a href="' + esc(href) + '"><strong>' + esc(t) + '</strong><span>' + esc(s) + '</span></a></li>';
    })
    .join('');

  const jsonLD = jsonLDSafe({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: metaDesc,
    inLanguage: langMeta.htmlLang,
    url: canonical,
    publisher: { '@type': 'Organization', name: 'HelpFinder', url: SITE_URL },
    about: { '@type': 'Thing', name: meta.label },
    hasPart: entriesInCat.map((e) => ({
      '@type': 'Article',
      headline: pick(e.title, lang),
      url: SITE_URL + urlPathForEntry(lang, e.id),
    })),
  });

  return `<!DOCTYPE html>
<html lang="${esc(langMeta.htmlLang)}" dir="${langMeta.dir}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(pageTitle)}</title>
    <meta name="description" content="${esc(metaDesc)}" />
    <meta name="keywords" content="${esc(meta.seoKeywords)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${esc(pageTitle)}" />
    <meta property="og:description" content="${esc(metaDesc)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:site_name" content="HelpFinder" />
    <meta property="og:locale" content="${esc(langMeta.htmlLang.replace('-', '_'))}" />
${buildHreflang(urlPathForCategory, cat)}
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
        ${translationBanner(lang)}
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:8px;">
          <div style="font-size:40px;line-height:1;">${meta.icon}</div>
          <h1 style="margin:0;">${esc(meta.label)}</h1>
        </div>
        <p class="lead">${esc(meta.desc)}</p>
        <p style="font-size:12px;color:#767676;">${entriesInCat.length} guide${entriesInCat.length === 1 ? '' : 's'}</p>
        <ul class="entry-list">
          ${itemsHTML}
        </ul>
        <div class="disclaimer">⚠️ <strong>Not legal advice.</strong> These guides explain your general rights under New York and federal law. Laws change. For your specific situation, use the free legal aid resources listed in each guide.</div>
      </article>
    </div>
  </body>
</html>`;
}

// ── Library index (7-tile category overview) ──
function generateLibraryHTML(entries, entriesByCategory, langMeta, bundleTags) {
  const lang = langMeta.code;
  const canonical = SITE_URL + urlPathForLibrary(lang);
  const pageTitle = 'Know Your Rights — Free Legal Guides for New York | HelpFinder';
  const metaDesc = entries.length + ' free legal guides for New York covering benefits, housing, employment, consumer rights, family, vehicle, and criminal record. Plain language, verified, with free legal aid phone numbers.';

  const tileHTML = Object.keys(CATEGORY_META)
    .filter((cat) => (entriesByCategory[cat] || []).length > 0)
    .map((cat) => {
      const m = CATEGORY_META[cat];
      const count = (entriesByCategory[cat] || []).length;
      const href = urlPathForCategory(lang, cat);
      return (
        '<a class="cat-tile" href="' + esc(href) + '">' +
        '<div class="cat-icon">' + m.icon + '</div>' +
        '<div class="cat-label">' + esc(m.label) + '</div>' +
        '<div class="cat-desc">' + esc(m.desc) + '</div>' +
        '<div class="cat-count">' + count + ' guide' + (count === 1 ? '' : 's') + ' →</div>' +
        '</a>'
      );
    })
    .join('');

  const jsonLD = jsonLDSafe({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: metaDesc,
    inLanguage: langMeta.htmlLang,
    url: canonical,
    publisher: { '@type': 'Organization', name: 'HelpFinder', url: SITE_URL },
    hasPart: Object.keys(CATEGORY_META)
      .filter((cat) => (entriesByCategory[cat] || []).length > 0)
      .map((cat) => ({
        '@type': 'CollectionPage',
        name: CATEGORY_META[cat].label,
        url: SITE_URL + urlPathForCategory(lang, cat),
      })),
  });

  return `<!DOCTYPE html>
<html lang="${esc(langMeta.htmlLang)}" dir="${langMeta.dir}">
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
    <meta property="og:locale" content="${esc(langMeta.htmlLang.replace('-', '_'))}" />
${buildHreflang(urlPathForLibrary)}
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
        ${translationBanner(lang)}
        <h1>Know Your Rights</h1>
        <p class="lead">${esc(metaDesc)}</p>
        <p style="font-size:13px;color:#767676;">Pick a topic below to see the guides.</p>
        <div class="cat-tiles">
          ${tileHTML}
        </div>
        <div class="disclaimer">⚠️ <strong>Not legal advice.</strong> These guides explain your general rights under New York and federal law. Laws change. For your specific situation, use the free legal aid resources listed in each guide.</div>
      </article>
    </div>
  </body>
</html>`;
}

// ── Main ──
async function main() {
  console.log('Prerender legal library (v2 category-first)...');

  const distIndexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(distIndexPath)) {
    console.error('ERROR: ' + distIndexPath + ' not found. Run "vite build" first.');
    process.exit(1);
  }
  const indexHTML = fs.readFileSync(distIndexPath, 'utf8');
  const bundleTags = extractBundleTags(indexHTML);
  if (!bundleTags.scripts) {
    console.error('ERROR: Could not extract bundle script tags from dist/index.html.');
    process.exit(1);
  }
  console.log('✓ Extracted bundle tags');

  const entries = await loadEntries();
  console.log('✓ Loaded ' + entries.length + ' entries');

  const translations = await loadTranslations();
  const translatedLangs = Object.keys(translations);
  if (translatedLangs.length > 0) {
    applyTranslations(entries, translations);
    console.log('✓ Merged translations for: ' + translatedLangs.join(', '));
  } else {
    console.log('ℹ No translation files yet — all languages fall back to English');
  }

  // Group by category
  const entriesByCategory = {};
  for (const e of entries) {
    const cat = e.category || 'other';
    (entriesByCategory[cat] = entriesByCategory[cat] || []).push(e);
  }
  const activeCategories = Object.keys(CATEGORY_META).filter((c) => (entriesByCategory[c] || []).length > 0);
  console.log('✓ ' + activeCategories.length + ' active categories: ' + activeCategories.join(', '));

  let fileCount = 0;

  // 1. Entry pages
  for (const langMeta of LEGAL_LANGS) {
    for (const entry of entries) {
      const html = generateEntryHTML(entry, langMeta, bundleTags);
      const outDir = path.join(DIST, urlPathForEntry(langMeta.code, entry.id).replace(/^\//, ''));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      fileCount++;
    }
  }
  console.log('✓ Wrote ' + (entries.length * LEGAL_LANGS.length) + ' entry pages');

  // 2. Category list pages
  for (const langMeta of LEGAL_LANGS) {
    for (const cat of activeCategories) {
      const html = generateCategoryHTML(cat, entriesByCategory[cat], langMeta, bundleTags);
      const outDir = path.join(DIST, urlPathForCategory(langMeta.code, cat).replace(/^\//, ''));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      fileCount++;
    }
  }
  console.log('✓ Wrote ' + (activeCategories.length * LEGAL_LANGS.length) + ' category pages');

  // 3. Library index pages (7-tile overview)
  for (const langMeta of LEGAL_LANGS) {
    const html = generateLibraryHTML(entries, entriesByCategory, langMeta, bundleTags);
    const outDir = path.join(DIST, urlPathForLibrary(langMeta.code).replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    fileCount++;
  }
  console.log('✓ Wrote ' + LEGAL_LANGS.length + ' library index pages');

  console.log('');
  console.log('Total: ' + fileCount + ' pre-rendered HTML files');
  console.log('Done.');
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
