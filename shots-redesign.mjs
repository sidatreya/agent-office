// Screenshots for the Sidatreya Designs redesign → shots-redesign/
import { chromium } from 'playwright-core';
const base = process.argv[2] || 'http://localhost:8091/';
const out = process.argv[3] || 'shots-redesign';
const only = process.argv[4] ? process.argv[4].split(',') : null;
const shots = [
  { name: '01-exterior-logo-billboard-banner', floor: '', wait: 14000 },
  { name: '02-exterior-hero', floor: '', view: [[40, 12, 46], [4, 16, 2]], wait: 14000 },
  { name: '03-trading-floor-bull', floor: 'trading', view: [[-0.3, 2.5, 10.6], [1.3, 1.4, 4.4]] },
  { name: '04-zen-garden-studio', floor: 'studio', view: [[7.0, 15.2 + 5.2, 13.8], [0.8, 15.2 + 0.9, 5.4]] },
  { name: '05-admin-interior-lighting-rangoli-staff', floor: 'admin', view: [[8.6, 7.6 + 3.8, 9.9], [-1.2, 7.6 + 0.9, 3.4]] },
  { name: '06-rooftop-zen-terrace', floor: '', view: [[-1.5, 36, 12], [-6.5, 31, 3.8]], wait: 12000 },
  { name: '07-trading-floor-overview', floor: 'trading' },
  { name: '08-studio-overview', floor: 'studio' },
  { name: '09-billboard-logo-closeup', floor: '', view: [[36, 18, 25], [26.5, 15.2, 3.5]], wait: 14000 },
  { name: '13-logo-closeup', floor: '', view: [[2, 38, 46], [-2, 32, 9]], wait: 14000 },
  { name: '10-property-rangoli-diyas', floor: 'property' },
  { name: '11-b1-rangoli-diyas', floor: 'b1' },
  { name: '12-exterior-sea-side-swoosh', floor: '', view: [[-52, 26, -48], [0, 14, 0]], wait: 12000 },
];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
for (const s of shots) {
  if (only && !only.some((o) => s.name.startsWith(o))) continue;
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/tradingview|Failed to load resource|Fetch:/i.test(m.text())) errors.push(m.text()); });
  await page.goto(`${base}?floor=${s.floor}`, { waitUntil: 'load' });
  await page.waitForTimeout(s.wait || 8000);
  if (s.view) { await page.evaluate(([p, t]) => window.office.view(p, t, 10), s.view); await page.waitForTimeout(2500); }
  const file = `${out}/${s.name}.png`;
  await page.screenshot({ path: file });
  console.log(file, errors.slice(0, 3).join(' | ') || 'ok');
  await page.close();
}
await browser.close();
