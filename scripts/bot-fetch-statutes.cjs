#!/usr/bin/env node
/*
 * scripts/bot-fetch-statutes.cjs
 * ============================================================================
 * One-time pre-fetcher that downloads every primary statute URL for the
 * entries in the retrofit queue, extracts the rendered statute text plus key
 * factual signals (section numbers, dollar amounts, dates, last-revision
 * date), and caches everything to dist/statute-cache.json.
 *
 * Separately fetches a secondary source URL per entry when available (the
 * second nysenate.gov URL, or the first non-nysenate source), so retrofit
 * has both primary statute text and enforcement/guide context pre-loaded.
 *
 * The point: eliminate per-entry HTTP round trips and manual parsing during
 * retrofit. A rewrite reads facts from the cache instead of my memory.
 *
 * Two fetch layers:
 *   1. Raw node https — fast, used first.
 *   2. Playwright headless Chromium (opt-in with --playwright) — fallback
 *      for URLs that return non-200 from https. Handles TLS-fingerprint
 *      blocking, JS-rendered pages, and 3xx redirect chains that node's
 *      https module doesn't follow. Browser launches once per run and is
 *      reused across all fallback fetches.
 *
 * Usage:
 *   node scripts/bot-fetch-statutes.cjs                    # full queue, https only
 *   node scripts/bot-fetch-statutes.cjs --playwright       # https + browser fallback
 *   node scripts/bot-fetch-statutes.cjs --limit=10         # partial
 *   node scripts/bot-fetch-statutes.cjs --throttle=800     # ms between reqs
 *   node scripts/bot-fetch-statutes.cjs --queue=path       # alt queue file
 *   node scripts/bot-fetch-statutes.cjs --retry-failed     # only re-fetch
 *                                                           entries whose
 *                                                           previous fetch
 *                                                           was non-200
 *
 * Reads:  dist/retrofit-queue.json (created by bot-preflight-scan + helper)
 * Writes: dist/statute-cache.json
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');
const DIST = path.join(ROOT, 'dist');
const QUEUE = path.join(DIST, 'retrofit-queue.json');
const CACHE = path.join(DIST, 'statute-cache.json');

const args = process.argv.slice(2).reduce((a, x) => {
  const m = x.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) a[m[1]] = m[2] === undefined ? true : m[2];
  return a;
}, {});
const LIMIT = parseInt(args.limit, 10) || 0;
const THROTTLE_MS = parseInt(args.throttle, 10) || 800;
const TIMEOUT_MS = 15000;
const PW_TIMEOUT_MS = 30000;
const QUEUE_FILE = args.queue || QUEUE;
const USE_PLAYWRIGHT = !!args.playwright;
const RETRY_FAILED = !!args['retry-failed'];

const REAL_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function fetchHtml(url) {
  return new Promise((resolve) => {
    let finished = false;
    const done = (res) => {
      if (finished) return;
      finished = true;
      resolve(res);
    };
    try {
      const u = new URL(url);
      const lib = u.protocol === 'https:' ? https : http;
      const req = lib.request(
        {
          method: 'GET',
          hostname: u.hostname,
          port: u.port || (u.protocol === 'https:' ? 443 : 80),
          path: u.pathname + u.search,
          headers: {
            'User-Agent': 'HelpFinderStatuteFetch/1.0 (+https://helpfinder.help)',
            Accept: 'text/html',
          },
          timeout: TIMEOUT_MS,
        },
        (res) => {
          let body = '';
          res.setEncoding('utf8');
          res.on('data', (c) => {
            body += c;
            if (body.length > 3_000_000) {
              req.destroy();
              done({ status: res.statusCode, body: body.slice(0, 3_000_000) });
            }
          });
          res.on('end', () => done({ status: res.statusCode, body }));
        },
      );
      req.on('error', (e) => done({ status: 0, error: e.code || e.message }));
      req.on('timeout', () => {
        req.destroy();
        done({ status: 0, error: 'TIMEOUT' });
      });
      req.end();
    } catch (e) {
      done({ status: 0, error: e.message });
    }
  });
}

// ── Cornell / FindLaw mirror URL rewriter ───────────────────────────────────
// When a nysenate.gov URL gets a CDN 403 even through Playwright, FindLaw's
// NY consolidated laws mirror usually still works (no aggressive bot defense).
// Map NY code abbreviation -> FindLaw path slug.
const NY_CODE_TO_FINDLAW_SLUG = {
  ABC: 'alcoholic-beverage-control-law',
  ACA: 'abandoned-property-law',
  AGM: 'agriculture-and-markets-law',
  ARS: 'arts-and-cultural-affairs-law',
  BNK: 'banking-law',
  BSC: 'business-corporation-law',
  BVO: 'benevolent-orders-law',
  CAL: 'canal-law',
  CCA: 'civil-court-act',
  CNT: 'county-law',
  COM: 'commerce-law',
  CPA: 'civil-practice-act',
  CPL: 'criminal-procedure-law',
  CPLR: 'civil-practice-laws-and-rules',
  CRC: 'civil-rights-law',
  CRS: 'correction-law',
  CSL: 'civil-service-law',
  CVP: 'civil-practice-laws-and-rules',
  CVR: 'civil-rights-law',
  DCD: 'debtor-and-creditor-law',
  DOM: 'domestic-relations-law',
  EDN: 'education-law',
  ELD: 'elder-law',
  ELN: 'election-law',
  EMP: 'employers-liability-law',
  ENV: 'environmental-conservation-law',
  EPT: 'estates-powers-and-trusts-law',
  EXC: 'executive-law',
  FCT: 'family-court-act',
  GBS: 'general-business-law',
  GCT: 'general-city-law',
  GMU: 'general-municipal-law',
  GOB: 'general-obligations-law',
  HAY: 'highway-law',
  IND: 'indian-law',
  INS: 'insurance-law',
  JCT: 'joint-legislative-committee',
  JUD: 'judiciary-law',
  LAB: 'labor-law',
  LEG: 'legislative-law',
  LFN: 'local-finance-law',
  LIE: 'lien-law',
  LLC: 'limited-liability-company-law',
  LTL: 'limited-liability-company-law',
  MHY: 'mental-hygiene-law',
  MIL: 'military-law',
  MRE: 'multiple-residence-law',
  MUN: 'multiple-dwelling-law',
  NAV: 'navigation-law',
  NPC: 'not-for-profit-corporation-law',
  PAR: 'parks-recreation-and-historic-preservation-law',
  PBA: 'public-authorities-law',
  PBB: 'public-buildings-law',
  PBH: 'public-health-law',
  PBO: 'public-officers-law',
  PEF: 'partnership-law',
  PEL: 'penal-law',
  PEN: 'penal-law',
  PEP: 'personal-property-law',
  PML: 'pari-mutuel-revenue-law',
  POA: 'public-authorities-law',
  PPH: 'public-housing-law',
  PRL: 'partnership-law',
  PSL: 'public-service-law',
  PUB: 'public-lands-law',
  PVH: 'private-housing-finance-law',
  RAI: 'railroad-law',
  RCO: 'rural-electric-cooperative-law',
  REL: 'religious-corporations-law',
  RPA: 'real-property-actions-and-proceedings-law',
  RPL: 'real-property-law',
  RPP: 'real-property-law',
  RPT: 'real-property-tax-law',
  RSS: 'retirement-and-social-security-law',
  SCA: 'surrogates-court-procedure-act',
  SCP: 'surrogates-court-procedure-act',
  SLS: 'state-law',
  SOS: 'social-services-law',
  STL: 'state-law',
  STT: 'state-technology-law',
  TAX: 'tax-law',
  TOW: 'town-law',
  TRA: 'transportation-law',
  UCA: 'uniform-city-court-act',
  UCC: 'uniform-commercial-code',
  UDC: 'uniform-district-court-act',
  UJC: 'uniform-justice-court-act',
  VAT: 'vehicle-and-traffic-law',
  VIL: 'village-law',
  VTL: 'vehicle-and-traffic-law',
  WKC: 'workers-compensation-law',
};

function findlawUrlFromNysenate(nysenateUrl) {
  if (!nysenateUrl) return null;
  const m = nysenateUrl.match(/nysenate\.gov\/legislation\/laws\/([A-Z]+)\/([A-Z0-9.\-]+)/i);
  if (!m) return null;
  const code = m[1].toUpperCase();
  const section = m[2].toLowerCase();
  const slug = NY_CODE_TO_FINDLAW_SLUG[code];
  if (!slug) return null;
  // FindLaw path pattern: codes.findlaw.com/ny/{law-slug}/{code-lower}-sect-{section-lower}/
  return `https://codes.findlaw.com/ny/${slug}/${code.toLowerCase()}-sect-${section}/`;
}

// ── Playwright fallback ─────────────────────────────────────────────────────
// Lazy-loaded so runs without --playwright don't spin up a browser or even
// require the module.
let _browser = null;
let _context = null;

async function ensureBrowser() {
  if (_browser) return _browser;
  let pw;
  try {
    pw = require('playwright');
  } catch (e) {
    console.error('\n[playwright] module not installed. Run: npm install --save-dev playwright && npx playwright install chromium');
    throw e;
  }
  _browser = await pw.chromium.launch({ headless: true });
  _context = await _browser.newContext({
    userAgent: REAL_UA,
    viewport: { width: 1280, height: 800 },
    locale: 'en-US',
    timezoneId: 'America/New_York',
  });
  return _browser;
}

async function closeBrowser() {
  try {
    if (_context) await _context.close();
  } catch (_) {}
  try {
    if (_browser) await _browser.close();
  } catch (_) {}
  _browser = null;
  _context = null;
}

async function fetchHtmlPlaywright(url) {
  try {
    await ensureBrowser();
    const page = await _context.newPage();
    try {
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: PW_TIMEOUT_MS });
      try {
        await page.waitForLoadState('networkidle', { timeout: 5000 });
      } catch (_) {
        // networkidle is best-effort; some gov pages keep long-poll connections open
      }
      const status = resp ? resp.status() : 0;
      const body = await page.content();
      return { status, body };
    } finally {
      await page.close();
    }
  } catch (e) {
    return { status: 0, error: e.message || String(e) };
  }
}

function extractStatuteBody(html) {
  if (!html) return '';
  // nysenate.gov renders statute body inside <div class="nys-openleg-result-text">
  // or <div class="panel-body">. Strip everything else.
  let body = html;
  // Pull the main panel if present
  const m = body.match(/<div class="panel panel-default"[\s\S]{0,20}<div class="panel-body"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/);
  if (m) body = m[1];
  // Strip script + style + header nav + footer
  body = body.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  body = body.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  body = body.replace(/<nav[\s\S]*?<\/nav>/gi, ' ');
  body = body.replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  // Remove all tags
  body = body.replace(/<[^>]+>/g, ' ');
  // Decode common entities
  body = body
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&sect;/g, '§');
  // Collapse whitespace
  body = body.replace(/\s+/g, ' ').trim();
  return body;
}

function extractLastRevision(html) {
  if (!html) return null;
  const m = html.match(/nys-openleg-history-published[^>]*>[^<]*?from\s+(\d{4}-\d{2}-\d{2})/i);
  return m ? m[1] : null;
}

function extractSectionNumbers(text) {
  if (!text) return [];
  const out = new Set();
  const re = /§\s*(\d+(?:[\-.]\w+)*)/g;
  let m;
  while ((m = re.exec(text)) !== null) out.add(m[1]);
  return [...out].slice(0, 40);
}

function extractDollarAmounts(text) {
  if (!text) return [];
  const out = new Set();
  const re = /\$[\d,]+(?:\.\d+)?|\b\d{1,3}(?:,\d{3})*\s+dollars?\b/g;
  let m;
  while ((m = re.exec(text)) !== null) out.add(m[0]);
  return [...out].slice(0, 50);
}

function extractDates(text) {
  if (!text) return [];
  const out = new Set();
  const iso = /\b(19|20)\d{2}-\d{2}-\d{2}\b/g;
  let m;
  while ((m = iso.exec(text)) !== null) out.add(m[0]);
  const monthly = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+(19|20)\d{2}\b/g;
  while ((m = monthly.exec(text)) !== null) out.add(m[0]);
  const year = /\b(effective|enacted|amended|added|repealed)[^\n]{0,30}(19|20)\d{2}\b/gi;
  while ((m = year.exec(text)) !== null) out.add(m[0]);
  return [...out].slice(0, 30);
}

function pickPrimaryUrl(entry) {
  if (!Array.isArray(entry.sources)) return null;
  for (const u of entry.sources) {
    if (typeof u === 'string' && /nysenate\.gov\/legislation\/laws/i.test(u)) return u;
  }
  return entry.sources[0] || null;
}

function pickSecondaryUrl(entry, primary) {
  if (!Array.isArray(entry.sources)) return null;
  for (const u of entry.sources) {
    if (typeof u === 'string' && u !== primary) return u;
  }
  return null;
}

async function main() {
  if (!fs.existsSync(QUEUE_FILE)) {
    console.error('Queue not found at', QUEUE_FILE, '— run bot-preflight-scan first.');
    process.exit(1);
  }
  const queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));
  // Load entry objects for each queue item to get sources.
  const { pathToFileURL } = require('url');
  const queueWithSources = [];
  for (const q of queue) {
    const abs = path.join(ENTRIES_DIR, q.file);
    if (!fs.existsSync(abs)) continue;
    const mod = await import(pathToFileURL(abs).href);
    const e = Object.values(mod)[0];
    if (!e) continue;
    const primary = pickPrimaryUrl(e);
    const secondary = pickSecondaryUrl(e, primary);
    queueWithSources.push({ ...q, primaryUrl: primary, secondaryUrl: secondary });
  }
  const N = LIMIT > 0 ? Math.min(LIMIT, queueWithSources.length) : queueWithSources.length;

  console.log('HelpFinder statute pre-fetcher');
  console.log('===============================');
  console.log('Queue entries     :', queueWithSources.length);
  console.log('Fetching          :', N);
  console.log('Throttle          :', THROTTLE_MS, 'ms');
  console.log('Playwright fallbk :', USE_PLAYWRIGHT ? 'on' : 'off');
  console.log('Retry-failed mode :', RETRY_FAILED ? 'on (skip entries with prior 200)' : 'off');
  console.log('Output            :', CACHE);

  // Load existing cache for resume support
  let cache = { version: 1, fetchedAt: null, entries: {} };
  if (fs.existsSync(CACHE)) {
    try {
      cache = JSON.parse(fs.readFileSync(CACHE, 'utf8'));
    } catch (e) {
      console.log('Existing cache unreadable, starting fresh.');
    }
  }

  let done = 0;
  let pwPrimaryRescued = 0;
  let pwSecondaryRescued = 0;
  let findlawPrimaryRescued = 0;
  for (let i = 0; i < N; i++) {
    const q = queueWithSources[i];
    process.stdout.write(`\r[${i + 1}/${N}] ${q.file}`.padEnd(90));

    const cached = cache.entries[q.file];
    if (cached && cached.primaryFetchStatus === 200 && !args.force && !RETRY_FAILED) {
      done++;
      continue;
    }
    if (RETRY_FAILED && cached && cached.primaryFetchStatus === 200) {
      // --retry-failed: skip entries already at 200
      done++;
      continue;
    }

    const entry = cached
      ? { ...cached }
      : { file: q.file, id: q.id, primaryUrl: q.primaryUrl, secondaryUrl: q.secondaryUrl };
    entry.file = q.file;
    entry.id = q.id;
    entry.primaryUrl = q.primaryUrl;
    entry.secondaryUrl = q.secondaryUrl;

    if (q.primaryUrl) {
      const needFetch = !(cached && cached.primaryFetchStatus === 200);
      if (needFetch) {
        let r = await fetchHtml(q.primaryUrl);
        let method = 'https';
        let finalUrl = q.primaryUrl;
        if (r.status !== 200 && USE_PLAYWRIGHT) {
          const pw = await fetchHtmlPlaywright(q.primaryUrl);
          if (pw.status === 200) {
            r = pw;
            method = 'playwright';
            pwPrimaryRescued++;
          }
        }
        // FindLaw NY mirror — third tier when nysenate is fully blocked
        if (r.status !== 200) {
          const mirror = findlawUrlFromNysenate(q.primaryUrl);
          if (mirror) {
            const mr = await fetchHtml(mirror);
            if (mr.status === 200) {
              r = mr;
              method = 'findlaw-mirror';
              finalUrl = mirror;
              findlawPrimaryRescued++;
            } else if (USE_PLAYWRIGHT) {
              const mpw = await fetchHtmlPlaywright(mirror);
              if (mpw.status === 200) {
                r = mpw;
                method = 'findlaw-mirror-pw';
                finalUrl = mirror;
                findlawPrimaryRescued++;
              }
            }
          }
        }
        entry.primaryFetchStatus = r.status;
        entry.primaryError = r.error || null;
        entry.primaryFetchMethod = method;
        entry.primaryFetchedUrl = finalUrl;
        if (r.status === 200) {
          const text = extractStatuteBody(r.body);
          entry.primaryText = text;
          entry.primaryTextLength = text.length;
          entry.primaryLastRevision = extractLastRevision(r.body);
          entry.primarySectionNumbers = extractSectionNumbers(text);
          entry.primaryDollarAmounts = extractDollarAmounts(text);
          entry.primaryDates = extractDates(text);
        }
        await sleep(THROTTLE_MS);
      }
    }

    if (q.secondaryUrl) {
      const needFetch = !(cached && cached.secondaryFetchStatus === 200);
      if (needFetch) {
        let r = await fetchHtml(q.secondaryUrl);
        let method = 'https';
        if (r.status !== 200 && USE_PLAYWRIGHT) {
          const pw = await fetchHtmlPlaywright(q.secondaryUrl);
          if (pw.status === 200) {
            r = pw;
            method = 'playwright';
            pwSecondaryRescued++;
          }
        }
        entry.secondaryFetchStatus = r.status;
        entry.secondaryError = r.error || null;
        entry.secondaryFetchMethod = method;
        if (r.status === 200) {
          const text = extractStatuteBody(r.body);
          entry.secondaryText = text.slice(0, 30_000);
          entry.secondaryTextLength = text.length;
        }
        await sleep(THROTTLE_MS);
      }
    }

    cache.entries[q.file] = entry;
    cache.fetchedAt = new Date().toISOString();
    if ((i + 1) % 10 === 0 || i + 1 === N) {
      fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2));
    }
    done++;
  }
  process.stdout.write('\n');

  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2));
  await closeBrowser();

  const all = Object.values(cache.entries);
  const primaryOk = all.filter((e) => e.primaryFetchStatus === 200).length;
  const secondaryOk = all.filter((e) => e.secondaryFetchStatus === 200).length;
  const pwPrimaryTotal = all.filter((e) => e.primaryFetchMethod === 'playwright' && e.primaryFetchStatus === 200).length;
  const pwSecondaryTotal = all.filter((e) => e.secondaryFetchMethod === 'playwright' && e.secondaryFetchStatus === 200).length;
  console.log('Cache summary:');
  console.log('  Entries in cache     :', all.length);
  console.log('  Primary OK fetches   :', primaryOk);
  console.log('  Secondary OK         :', secondaryOk);
  if (USE_PLAYWRIGHT) {
    console.log('  Rescued this run     : pw-primary', pwPrimaryRescued, '/ pw-secondary', pwSecondaryRescued, '/ findlaw', findlawPrimaryRescued);
  } else {
    console.log('  Rescued this run     : findlaw', findlawPrimaryRescued);
  }
  console.log('  Playwright-sourced   : primary', pwPrimaryTotal, '/ secondary', pwSecondaryTotal);
  const findlawTotal = all.filter((e) => (e.primaryFetchMethod === 'findlaw-mirror' || e.primaryFetchMethod === 'findlaw-mirror-pw') && e.primaryFetchStatus === 200).length;
  console.log('  FindLaw-mirrored     : primary', findlawTotal);
}

main()
  .catch((e) => {
    console.error('ERROR:', e);
    process.exitCode = 1;
  })
  .finally(() => {
    closeBrowser();
  });
