#!/usr/bin/env node
// Downscale an image to a web JPEG for an agent's live work screen.
//   node scripts/shot.mjs <agent-id> <image-path>
// Writes dist/shots/<id>.jpg and public/shots/<id>.jpg (max 1280px, ~150 KB) atomically and prints
// the relative URL to store in status.json, e.g. "shots/grok-bot.jpg?v=1760000000".
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { AGENTS } = await import(path.join(ROOT, 'src', 'data', 'agents.js'));
const [id, src] = process.argv.slice(2);
const die = (m) => { console.error(`shot: ${m}`); process.exit(1); };
if (!id || !src) die('usage: node scripts/shot.mjs <agent-id> <image-path>');
if (!AGENTS.find((a) => a.id === id)) die(`unknown agent id ${id}`);
if (!fs.existsSync(src)) die(`no such file: ${src}`);

const MAX_BYTES = 150 * 1024;
let buf;
for (const [size, q] of [[1280, 78], [1280, 66], [1280, 55], [1024, 55], [880, 50], [720, 45]]) {
  buf = await sharp(src, { failOn: 'none' }).rotate().resize(size, size, { fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#0b0b1e' }).jpeg({ quality: q, mozjpeg: true }).toBuffer();
  if (buf.length <= MAX_BYTES) break;
}
for (const dir of ['dist', 'public']) {
  const out = path.join(ROOT, dir, 'shots');
  fs.mkdirSync(out, { recursive: true });
  const tmp = path.join(out, `.${id}.${process.pid}.tmp`);
  fs.writeFileSync(tmp, buf);
  fs.renameSync(tmp, path.join(out, `${id}.jpg`));
}
console.log(`shots/${id}.jpg?v=${Math.floor(Date.now() / 1000)}`);
console.error(`shot: ${id} ← ${src} (${Math.round(buf.length / 1024)} KB)`);
