import { chromium } from 'playwright-core';
const base = process.argv[2] || 'http://localhost:8080/';
const list = (process.argv[3] || 'property,b1,studio,trading,admin').split(',');
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
for (const f of list) {
  const [fid, vw = '1280', vh = '800', extra = ''] = f.split(':');
  const page = await browser.newPage({ viewport: { width: +vw, height: +vh } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  await page.goto(`${base}?floor=${fid === 'all' ? '' : fid}`, { waitUntil: 'load' });
  await page.waitForTimeout(8000);
  if (extra === 'pres') { await page.evaluate(() => { const y = 3 * 7.6; window.office.view([5.4, y + 4.4, 1.2], [13.6, y + 1.3, 2.2]); }); await page.waitForTimeout(2500); }
  if (extra === 'screens') { await page.evaluate(() => window.office.overlays.openScreens()); await page.waitForTimeout(1500); }
  const out = `/tmp/f-${fid}${extra ? '-' + extra : ''}-${vw}.png`;
  await page.screenshot({ path: out });
  console.log(out, errors.slice(0, 5).join(' | ') || 'ok');
  await page.close();
}
await browser.close();
