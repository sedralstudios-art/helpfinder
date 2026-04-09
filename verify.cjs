#!/usr/bin/env node
// ============================================
// HelpFinder Verification Bot
// Run on the 1st of each month from Git Bash:
//   cd ~/roc-help-finder && node verify.cjs
// ============================================
// Last patched: April 8, 2026
//   - Added 6 domains to BOT_BLOCKED_DOMAINS (known 403 false positives)
//   - Added '311' as valid shortcode (city services number)
//   - Added 'ext.XXX' phone extension parsing
// ============================================
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
// ─── CONFIG ─────────────────────────────────
const SITE_URL = 'https://helpfinder.help';
const SOURCE_FILE = path.join(__dirname, 'src', 'components', 'HelpFinder.jsx');
const REPORT_FILE = path.join(__dirname, 'verification-report.json');
const TIMEOUT_MS = 10000;
// Gov domains and known-good sites that block bots (403/503 is expected, treat as live)
const BOT_BLOCKED_DOMAINS = [
  // Government domains — were in the original list
  'otda.ny.gov', 'health.ny.gov', 'ssa.gov', 'nycourts.gov',
  'fcc.gov', 'nystateofhealth.ny.gov', 'ocfs.ny.gov',
  'childsupport.ny.gov', 'codes.findlaw.com', 'law.justia.com',
  'ww2.nycourts.gov', 'reentry.net', 'labor.ny.gov',
  'mybenefits.ny.gov', 'monroecounty.gov', 'affordableconnectivity.gov',
  // Added April 8, 2026 — known orgs that 403 on bot UA but are alive.
  // Each one was manually verified as an active organization whose site
  // works in a browser but blocks non-browser user agents via Cloudflare,
  // Akamai, or similar bot-protection services.
  'namiroc.org',           // NAMI Rochester — confirmed alive
  'brockport.edu',         // SUNY Brockport REOC — confirmed alive
  'rainn.org',             // RAINN (sexual assault hotline) — confirmed alive
  'cityofrochester.gov',   // City of Rochester — confirmed alive
  'lionsclubs.org',        // Lions Clubs International — confirmed alive
  'plannedparenthood.org', // Planned Parenthood — confirmed alive
];
// ─── HELPERS ────────────────────────────────
function extractURLs(source) {
  const urlRegex = /url:\s*["']?(https?:\/\/[^\s"',}]+)/g;
  const urls = new Set();
  let match;
  while ((match = urlRegex.exec(source)) !== null) {
    urls.add(match[1].replace(/["']/g, ''));
  }
  return [...urls];
}
function extractPhones(source) {
  const phoneRegex = /ph:\s*["']([^"']+)["']/g;
  const phones = [];
  let match;
  while ((match = phoneRegex.exec(source)) !== null) {
    phones.push(match[1]);
  }
  return phones;
}
function extractPrograms(source) {
  const programRegex = /\{\s*id:\s*["']([^"']+)["'][^}]*n:\s*["']([^"']+)["'][^}]*url:\s*["'](https?:\/\/[^"']+)["']/g;
  const programs = [];
  let match;
  while ((match = programRegex.exec(source)) !== null) {
    programs.push({ id: match[1], name: match[2], url: match[3] });
  }
  return programs;
}
function isDomainBotBlocked(url) {
  try {
    const hostname = new URL(url).hostname;
    return BOT_BLOCKED_DOMAINS.some(d => hostname.includes(d));
  } catch { return false; }
}
function checkURL(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const timeout = setTimeout(() => {
      resolve({ url, status: 'TIMEOUT', code: 0, note: 'Request timed out after 10s' });
    }, TIMEOUT_MS);
    try {
      const req = protocol.get(url, {
        headers: { 'User-Agent': 'HelpFinder-VerificationBot/1.0' },
        timeout: TIMEOUT_MS
      }, (res) => {
        clearTimeout(timeout);
        const code = res.statusCode;

        // Follow redirects
        if ([301, 302, 307, 308].includes(code) && res.headers.location) {
          clearTimeout(timeout);
          checkURL(res.headers.location).then(resolve);
          return;
        }

        if (code >= 200 && code < 400) {
          resolve({ url, status: 'LIVE', code });
        } else if ([403, 503].includes(code) && isDomainBotBlocked(url)) {
          resolve({ url, status: 'LIVE_BOT_BLOCKED', code, note: 'Gov domain — bot protection, assumed live' });
        } else {
          resolve({ url, status: 'DEAD', code, note: `HTTP ${code}` });
        }
      });

      req.on('error', (err) => {
        clearTimeout(timeout);
        if (isDomainBotBlocked(url)) {
          resolve({ url, status: 'LIVE_BOT_BLOCKED', code: 0, note: 'Gov domain — connection blocked, assumed live' });
        } else {
          resolve({ url, status: 'ERROR', code: 0, note: err.message });
        }
      });

      req.on('timeout', () => {
        req.destroy();
        clearTimeout(timeout);
        resolve({ url, status: 'TIMEOUT', code: 0, note: 'Connection timed out' });
      });
    } catch (err) {
      clearTimeout(timeout);
      resolve({ url, status: 'ERROR', code: 0, note: err.message });
    }
  });
}

function validatePhone(phone) {
  // Skip non-phone entries — city services shortcodes
  // Added April 8, 2026: 311 is the city services non-emergency number
  // (same category as 211/988/911 which were already whitelisted)
  if (['211', '311', '988', '911'].includes(phone)) return { phone, valid: true, type: 'shortcode' };
  if (phone.startsWith('Text ')) return { phone, valid: true, type: 'text_service' };

  // Handle phone extension format: "585-244-8400 ext.244" or "585-244-8400 ext 244"
  // Added April 8, 2026: extract the base number, validate it, preserve extension info
  const extMatch = phone.match(/^(.+?)\s*(ext\.?|extension|x)\s*\d+\s*$/i);
  if (extMatch) {
    const baseNumber = extMatch[1];
    const cleaned = baseNumber.replace(/[^0-9]/g, '');
    if (cleaned.length === 10 || cleaned.length === 11) {
      return { phone, valid: true, type: 'standard_with_extension' };
    }
  }

  // Standard US phone formats
  const cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.length === 10 || cleaned.length === 11) {
    return { phone, valid: true, type: 'standard' };
  }
  return { phone, valid: false, type: 'invalid_format', note: `Got ${cleaned.length} digits, expected 10 or 11` };
}

// ─── MAIN ───────────────────────────────────
async function main() {
  console.log('');
  console.log('============================================');
  console.log('  HelpFinder Verification Bot');
  console.log('  ' + new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
  console.log('============================================');
  console.log('');

  // Step 1: Check if site is up
  console.log('[1/5] Checking helpfinder.help is live...');
  const siteCheck = await checkURL(SITE_URL);
  if (siteCheck.status === 'LIVE') {
    console.log('  ✅ Site is live');
  } else {
    console.log('  ❌ SITE IS DOWN — ' + (siteCheck.note || siteCheck.status));
  }

  // Step 2: Read source file
  console.log('[2/5] Reading source file...');
  let source;
  // Try the path with src/ first, then root
  const possiblePaths = [
    SOURCE_FILE,
    path.join(__dirname, 'HelpFinder.jsx'),
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      source = fs.readFileSync(p, 'utf-8');
      console.log('  Found: ' + p);
      break;
    }
  }
  if (!source) {
    console.log('  ❌ Cannot find HelpFinder.jsx');
    console.log('  Looked in: ' + possiblePaths.join(', '));
    process.exit(1);
  }

  const urls = extractURLs(source);
  const phones = extractPhones(source);
  const programs = extractPrograms(source);
  console.log('  Found: ' + urls.length + ' unique URLs, ' + phones.length + ' phone numbers, ' + programs.length + ' programs');

  // Step 3: Check all URLs
  console.log('[3/5] Checking ' + urls.length + ' URLs (this takes about 1 minute)...');
  const urlResults = [];
  // Run in batches of 10 to avoid overwhelming
  for (let i = 0; i < urls.length; i += 10) {
    const batch = urls.slice(i, i + 10);
    const results = await Promise.all(batch.map(checkURL));
    urlResults.push(...results);
    process.stdout.write('  Checked ' + urlResults.length + '/' + urls.length + '\r');
  }
  console.log('');

  const live = urlResults.filter(r => r.status === 'LIVE');
  const botBlocked = urlResults.filter(r => r.status === 'LIVE_BOT_BLOCKED');
  const dead = urlResults.filter(r => r.status === 'DEAD');
  const errors = urlResults.filter(r => r.status === 'ERROR' || r.status === 'TIMEOUT');

  console.log('  ✅ Live: ' + live.length);
  console.log('  ✅ Bot-blocked (assumed live): ' + botBlocked.length);
  if (dead.length > 0) console.log('  ❌ Dead: ' + dead.length);
  if (errors.length > 0) console.log('  ⚠️  Errors/Timeouts: ' + errors.length);

  // Step 4: Validate phone numbers
  console.log('[4/5] Validating ' + phones.length + ' phone numbers...');
  const phoneResults = phones.map(validatePhone);
  const validPhones = phoneResults.filter(r => r.valid);
  const invalidPhones = phoneResults.filter(r => !r.valid);

  console.log('  ✅ Valid format: ' + validPhones.length);
  if (invalidPhones.length > 0) console.log('  ❌ Invalid format: ' + invalidPhones.length);

  // Step 5: Known dead programs check
  console.log('[5/5] Checking for known dead programs...');
  const deadPrograms = [];
  const acpEntry = programs.find(p => p.id === 'affordableconn');
  if (acpEntry) {
    deadPrograms.push({
      id: 'affordableconn',
      name: 'Affordable Connectivity Program',
      reason: 'ACP ended June 1, 2024. Congress did not renew funding.',
      action: 'Remove or replace with FCC Lifeline, NY Affordable Broadband Act, Comcast Internet Essentials, AT&T Access'
    });
    console.log('  ❌ affordableconn — Dead program still on site');
  } else {
    console.log('  ✅ No known dead programs found');
  }

  // ─── BUILD REPORT ───────────────────────────
  const now = new Date();
  const report = {
    generated: now.toISOString(),
    month: now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    site: {
      url: SITE_URL,
      status: siteCheck.status,
    },
    summary: {
      total_urls: urls.length,
      live: live.length,
      bot_blocked_assumed_live: botBlocked.length,
      dead: dead.length,
      errors: errors.length,
      total_phones: phones.length,
      valid_phones: validPhones.length,
      invalid_phones: invalidPhones.length,
      dead_programs: deadPrograms.length,
      pass: dead.length === 0 && invalidPhones.length === 0 && deadPrograms.length === 0,
    },
    dead_urls: dead.map(r => ({ url: r.url, code: r.code, note: r.note })),
    error_urls: errors.map(r => ({ url: r.url, note: r.note })),
    invalid_phones: invalidPhones,
    dead_programs: deadPrograms,
    all_urls: urlResults.map(r => ({ url: r.url, status: r.status, code: r.code })),
  };

  // Save report
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  // ─── PRINT SUMMARY ─────────────────────────
  console.log('');
  console.log('============================================');
  if (report.summary.pass) {
    console.log('  ✅ VERIFICATION PASSED');
    console.log('  Verified: ' + report.month);
  } else {
    console.log('  ❌ VERIFICATION FAILED — issues found');
    console.log('  Month: ' + report.month);
  }
  console.log('============================================');

  if (dead.length > 0) {
    console.log('');
    console.log('DEAD URLs:');
    dead.forEach(r => console.log('  ❌ ' + r.url + ' — ' + r.note));
  }

  if (invalidPhones.length > 0) {
    console.log('');
    console.log('INVALID PHONE FORMATS:');
    invalidPhones.forEach(r => console.log('  ❌ ' + r.phone + ' — ' + r.note));
  }

  if (deadPrograms.length > 0) {
    console.log('');
    console.log('DEAD PROGRAMS:');
    deadPrograms.forEach(r => console.log('  ❌ ' + r.name + ' — ' + r.reason));
  }

  console.log('');
  console.log('Report saved: ' + REPORT_FILE);
  console.log('');
}

main().catch(err => {
  console.error('Bot crashed:', err);
  process.exit(1);
});
