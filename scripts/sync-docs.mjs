import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const docs = join(root, 'docs');
const skip = new Set(['wrangler.json', '.assetsignore']);

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const name of readdirSync(src)) {
    if (skip.has(name)) continue;
    const from = join(src, name);
    const to = join(dest, name);
    if (statSync(from).isDirectory()) copyDir(from, to);
    else cpSync(from, to);
  }
}

if (!existsSync(dist)) {
  console.error('Run npm run build:github first.');
  process.exit(1);
}

if (existsSync(docs)) rmSync(docs, { recursive: true, force: true });
copyDir(dist, docs);
console.log('docs/ synced from dist (GitHub Pages build).');
