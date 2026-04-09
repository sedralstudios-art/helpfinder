#!/usr/bin/env node
/*
 * scripts/update-helpfinder-urls.cjs
 * ==================================
 * One-shot URL migration script for HelpFinder.jsx
 * Written: April 8, 2026
 *
 * Updates 10 verified URL migrations found in the April 8 verify.cjs run.
 * Each replacement was manually verified by web search against the live
 * organization websites.
 *
 * Safe to run multiple times. If a URL has already been updated, the
 * script will report "0 replacements" for that entry and continue.
 *
 * Does NOT touch:
 *   - URLs that were bot-blocked false positives (handled by verify.cjs
 *     BOT_BLOCKED_DOMAINS whitelist patch instead)
 *   - URLs where the organization is genuinely dead (needs human review
 *     before removing content)
 *   - URLs where the migration target is unclear (flagged for manual
 *     research in triage memo)
 *
 * Usage: node scripts/update-helpfinder-urls.cjs
 */

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(
  __dirname,
  '..',
  'src',
  'components',
  'HelpFinder.jsx'
);

// Confirmed URL migrations — each verified via live web search April 8, 2026.
// Order matters: most specific URLs first to avoid partial matches.
const MIGRATIONS = [
  {
    from: 'https://www.rcsdk12.org/nutrition',
    to: 'https://www.rcsdk12.org/departments/food-services',
    reason: 'RCSD reorganized food services under /departments/food-services',
  },
  {
    from: 'https://www.lifespan-roch.org/meals-on-wheels',
    to: 'https://www.urmc.rochester.edu/home-care/meals-on-wheels',
    reason: 'Meals on Wheels is run by URMC Home Care, not Lifespan. Original URL was wrong org.',
  },
  {
    from: 'https://www.auw.org/freetaxprep',
    to: 'https://empirejustice.org/cash/',
    reason: 'CASH program migrated from United Way to Empire Justice Center',
  },
  {
    from: 'https://www.racf.org/rmapi',
    to: 'https://rmapiny.org/',
    reason: 'RMAPI spun out of RACF onto its own domain',
  },
  {
    from: 'https://www.urmc.rochester.edu/dental',
    to: 'https://www.urmc.rochester.edu/dentistry',
    reason: 'URMC path change: /dental → /dentistry (Eastman Institute for Oral Health)',
  },
  {
    from: 'https://www.urmc.rochester.edu/mental-health-wellness/addiction',
    to: 'https://www.urmc.rochester.edu/conditions-and-treatments/addiction',
    reason: 'URMC reorganized addiction services under /conditions-and-treatments/',
  },
  {
    from: 'https://www.lifespan-roch.org/hiicap',
    to: 'https://www.lifespan-roch.org/medicare',
    reason: 'Lifespan renamed HIICAP landing page to /medicare',
  },
  {
    from: 'https://www.nyssbdc.org/centers/centers-details.aspx?centid=15',
    to: 'https://www.sbdcbrockport.org/',
    reason: 'Monroe County SBDC is hosted by SUNY Brockport; old aspx URL dead',
  },
  {
    from: 'https://www.monroecounty.gov/hs-earlyintervention',
    to: 'https://www.monroecounty.gov/hdchild-ei',
    reason: 'Monroe County moved EI under health department (/hdchild-ei)',
  },
  {
    from: 'https://www.monroecounty.gov/hs-preschoolspecialed',
    to: 'https://www.monroecounty.gov/hdchild-pse',
    reason: 'Monroe County moved preschool special ed under health department (/hdchild-pse)',
  },
];

function main() {
  if (!fs.existsSync(SOURCE_FILE)) {
    console.error('ERROR: ' + SOURCE_FILE + ' not found.');
    process.exit(1);
  }

  let source = fs.readFileSync(SOURCE_FILE, 'utf8');
  const originalLength = source.length;
  let totalReplacements = 0;

  console.log('Updating URLs in HelpFinder.jsx...\n');

  for (const m of MIGRATIONS) {
    // Escape regex special chars in the source URL
    const escaped = m.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'g');
    const matches = source.match(regex);
    const count = matches ? matches.length : 0;

    if (count === 0) {
      console.log('  ⊘ ' + m.from);
      console.log('    → ' + m.to);
      console.log('    (not found in source — may already be updated)');
    } else {
      source = source.replace(regex, m.to);
      totalReplacements += count;
      console.log('  ✓ ' + m.from);
      console.log('    → ' + m.to);
      console.log('    (' + count + ' replacement' + (count === 1 ? '' : 's') + ')');
      console.log('    reason: ' + m.reason);
    }
    console.log('');
  }

  if (totalReplacements === 0) {
    console.log('No changes made. All URLs either already updated or not present.');
    return;
  }

  fs.writeFileSync(SOURCE_FILE, source, 'utf8');
  console.log('─────────────────────────────────────────────');
  console.log('Total replacements: ' + totalReplacements);
  console.log('File size: ' + originalLength + ' → ' + source.length + ' bytes');
  console.log('Wrote: ' + SOURCE_FILE);
  console.log('');
  console.log('Next: review with  git diff src/components/HelpFinder.jsx');
}

main();
