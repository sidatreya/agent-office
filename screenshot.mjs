import { chromium } from 'playwright-core';
const url = process.argv[2] || 'http://localhost:8080/';
const out = process.argv[3] || 'preview.png';
const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(Number(process.argv[4] || 6000));
if (process.argv[5] && process.argv[5] !== '-') { await page.evaluate((id) => window.office.focusAgent(id), process.argv[5]); await page.waitForTimeout(2500); }
await page.screenshot({ path: out });
console.log('console issues:', errors.length ? errors.join('\n') : 'none');
await browser.close();
