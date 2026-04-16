#!/usr/bin/env node
/**
 * migrate-glossary-crosslinks-62.cjs
 * ===================================
 * Second cross-linking pass: connects the remaining 15 orphaned glossary
 * terms to the 5 new legal entries (criminal-case-process-ny,
 * sentencing-options-ny, right-to-a-lawyer-ny, criminal-appeal-ny,
 * parole-community-supervision-ny).
 */

const fs = require('fs');
const path = require('path');

const G = path.join(__dirname, '..', 'src', 'data', 'legal', 'glossary');
let successes = 0;
let failures = 0;

function link(file, oldIds, newIds, label) {
  const fp = path.join(G, file);
  let content = fs.readFileSync(fp, 'utf8');
  const oldStr = 'legalEntryIds: ' + JSON.stringify(oldIds);
  const newStr = 'legalEntryIds: ' + JSON.stringify(newIds);
  if (!content.includes(oldStr)) {
    console.error('SKIP ' + file + ': expected ' + oldStr);
    failures++;
    return;
  }
  content = content.replace(oldStr, newStr);
  fs.writeFileSync(fp, content, 'utf8');
  console.log('OK ' + file + ': ' + label);
  successes++;
}

// Criminal procedure terms → criminal-case-process-ny
link('grand-jury.js', [], ['criminal-case-process-ny'], 'grand-jury → case process');
link('indictment.js', [], ['criminal-case-process-ny'], 'indictment → case process');
link('trial.js', [], ['criminal-case-process-ny'], 'trial → case process');
link('preliminary-hearing.js', [], ['criminal-case-process-ny'], 'preliminary-hearing → case process');
link('motion-to-dismiss.js', [], ['criminal-case-process-ny'], 'motion-to-dismiss → case process');
link('summons.js', [], ['criminal-case-process-ny'], 'summons → case process');

// Sentencing terms → sentencing-options-ny
link('fine.js', [], ['sentencing-options-ny'], 'fine → sentencing');
link('mandatory-surcharge.js', [], ['sentencing-options-ny'], 'surcharge → sentencing');
link('restitution.js', [], ['sentencing-options-ny'], 'restitution → sentencing');

// General disposition → case process + sentencing
link('disposition.js', [], ['criminal-case-process-ny', 'sentencing-options-ny'], 'disposition → process + sentencing');

// Public defender → right-to-a-lawyer
link('public-defender.js', [], ['right-to-a-lawyer-ny'], 'public-defender → right to a lawyer');

// Appeal → criminal-appeal
link('appeal.js', [], ['criminal-appeal-ny'], 'appeal → criminal appeal');

// Parole → parole entry
link('parole.js', [], ['parole-community-supervision-ny'], 'parole → parole entry');

// Family terms: article-10 and pins don't have matching entries yet
// but article-10 can link to custody-basics and order-of-protection
link('article-10.js', [], ['custody-basics-ny', 'order-of-protection-ny'], 'article-10 → custody + OP');
link('pins.js', [], ['custody-basics-ny'], 'pins → custody');

console.log('\n' + successes + ' linked, ' + failures + ' skipped.');
