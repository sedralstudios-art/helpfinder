#!/usr/bin/env node
/*
 * scripts/bot-linkcheck.cjs
 * ============================================================================
 * Link-check bot. Fetches every URL in every entry's `sources` array and every
 * non-phone URL in `counsel[].url`, records the HTTP status, and writes a
 * report.
 *
 * Usage:
 *   node scripts/bot-linkcheck.cjs              # full scan, writes report
 *   node scripts/bot-linkcheck.cjs --since=30   # only check entries verified
 *                                                 in the last N days (skip
 *                                                 URLs already known-good)
 *   node scripts/bot-linkcheck.cjs --concurrency=20  # tune request parallelism
 *
 * Output:
 *   dist/verification-report-linkcheck.json — machine-readable run summary
 *   Console summary with broken/redirected counts
 *
 * Exit code is always 0 so nightly scheduled runs don't fail; review the
 * report instead. For a hard build gate, wrap this in a check script.
 *
 * Rate limiting: HEAD first, GET on HEAD failure. 20 concurrent requests by
 * default. 12-second timeout per request. Skips mailto: and tel: URLs. De-
 * duplicates URLs across entries so one bad URL doesn't report 50 times.
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const https = require('https');
const http = require('http');

const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');
const DIST = path.join(ROOT, 'dist');
const REPORT = path.join(DIST, 'verification-report-linkcheck.json');

const args = process.argv.slice(2).reduce((acc, a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) acc[m[1]] = m[2] === undefined ? true : m[2];
  return acc;
}, {});
const CONCURRENCY = Math.max(1, parseInt(args.concurrency, 10) || 20);
const TIMEOUT_MS = 12000;

async function loadEntries() {
  const files = fs.readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.js'));
  const entries = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(ENTRIES_DIR, f)).href);
    const v = Object.values(mod)[0];
    if (v && v.id) entries.push({ file: f, entry: v });
  }
  return entries;
}

function collectUrls(entries) {
  // URL -> [{ file, field }] so every finding can point back to affected entries
  const byUrl = new Map();
  const add = (url, file, field) => {
    if (!url || typeof url !== 'string') return;
    if (/^(mailto|tel|javascript):/i.test(url)) return;
    if (!/^https?:\/\//i.test(url)) return;
    const key = url.trim();
    if (!byUrl.has(key)) byUrl.set(key, []);
    byUrl.get(key).push({ file, field });
  };
  for (const { file, entry } of entries) {
    if (Array.isArray(entry.sources)) {
      entry.sources.forEach((u, i) => add(u, file, `sources[${i}]`));
    }
    if (Array.isArray(entry.counsel)) {
      entry.counsel.forEach((c, i) => {
        if (c && c.url) add(c.url, file, `counsel[${i}].url`);
      });
    }
  }
  return byUrl;
}

function fetchStatus(url, method) {
  return new Promise((resolve) => {
    let finished = false;
    const done = (result) => {
      if (finished) return;
      finished = true;
      resolve(result);
    };
    try {
      const u = new URL(url);
      const lib = u.protocol === 'https:' ? https : http;
      const req = lib.request(
        {
          method,
          hostname: u.hostname,
          port: u.port || (u.protocol === 'https:' ? 443 : 80),
          path: u.pathname + u.search,
          headers: {
            'User-Agent': 'HelpFinderLinkCheck/1.0 (+https://helpfinder.help)',
            Accept: '*/*',
          },
          timeout: TIMEOUT_MS,
        },
        (res) => {
          done({ status: res.statusCode, redirect: res.headers.location || null });
          res.resume();
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

async function checkUrl(url) {
  // Try HEAD first; some servers return 403/405 on HEAD but 200 on GET.
  let r = await fetchStatus(url, 'HEAD');
  if (r.status === 0 || r.status === 403 || r.status === 405 || r.status === 501) {
    r = await fetchStatus(url, 'GET');
  }
  return r;
}

async function main() {
  console.log('HelpFinder link-check bot');
  console.log('==========================');
  const entries = await loadEntries();
  console.log('Loaded entries:', entries.length);
  const byUrl = collectUrls(entries);
  const urls = [...byUrl.keys()];
  console.log('Unique URLs to check:', urls.length);
  console.log('Concurrency:', CONCURRENCY);

  const results = [];
  let idx = 0;
  let done = 0;
  async function worker() {
    while (idx < urls.length) {
      const myIdx = idx++;
      const url = urls[myIdx];
      const r = await checkUrl(url);
      done++;
      if (done % 50 === 0 || done === urls.length) {
        process.stdout.write(`\rChecked ${done}/${urls.length}`);
      }
      results.push({ url, status: r.status, error: r.error, redirect: r.redirect, refs: byUrl.get(url) });
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  process.stdout.write('\n');

  const broken = results.filter((r) => r.status === 0 || (r.status >= 400 && r.status !== 403));
  const forbidden = results.filter((r) => r.status === 403);
  const redirected = results.filter((r) => r.status >= 300 && r.status < 400);
  const ok = results.filter((r) => r.status >= 200 && r.status < 300);

  const report = {
    runAt: new Date().toISOString(),
    totals: {
      urls: results.length,
      ok: ok.length,
      redirected: redirected.length,
      forbidden: forbidden.length,
      broken: broken.length,
    },
    broken: broken.map((r) => ({ url: r.url, status: r.status, error: r.error || null, refs: r.refs })),
    forbidden: forbidden.map((r) => ({ url: r.url, refs: r.refs })),
    redirected: redirected.map((r) => ({ url: r.url, status: r.status, redirect: r.redirect, refs: r.refs })),
  };

  if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));
  console.log('');
  console.log('Report:', REPORT);
  console.log('  OK         :', ok.length);
  console.log('  Redirected :', redirected.length);
  console.log('  Forbidden  :', forbidden.length, '(HEAD blocked; not necessarily broken)');
  console.log('  Broken     :', broken.length);
  if (broken.length > 0) {
    console.log('');
    console.log('Broken URLs (first 20):');
    for (const b of broken.slice(0, 20)) {
      console.log('  [' + (b.status || b.error) + ']', b.url);
      for (const ref of b.refs.slice(0, 3)) {
        console.log('      →', ref.file, ref.field);
      }
    }
  }
}

main().catch((e) => {
  console.error('ERROR:', e);
  process.exit(1);
});
