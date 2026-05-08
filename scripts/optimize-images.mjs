#!/usr/bin/env node
import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const IMG_DIR = new URL('../public/img/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png']);
const MIN_BYTES = 500 * 1024;
const MAX_WIDTH = 1920;
const QUALITY = 78;

const formatKB = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function main() {
  let entries;
  try {
    entries = await readdir(IMG_DIR);
  } catch (err) {
    console.error(`No se pudo leer ${IMG_DIR}:`, err.message);
    process.exit(1);
  }

  const candidates = entries.filter((name) => SOURCE_EXT.has(extname(name).toLowerCase()));
  if (candidates.length === 0) {
    console.log('No hay imágenes JPG/PNG en public/img/.');
    return;
  }

  let processed = 0;
  let skipped = 0;
  let totalSavedBytes = 0;

  for (const name of candidates) {
    const sourcePath = join(IMG_DIR, name);
    const stats = await stat(sourcePath);

    if (stats.size < MIN_BYTES) {
      skipped++;
      continue;
    }

    const targetPath = join(IMG_DIR, `${basename(name, extname(name))}.webp`);
    if (existsSync(targetPath)) {
      skipped++;
      continue;
    }

    try {
      await sharp(sourcePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(targetPath);

      const targetStats = await stat(targetPath);
      const saved = stats.size - targetStats.size;
      totalSavedBytes += saved;
      processed++;
      console.log(`  ${name.padEnd(28)} ${formatKB(stats.size).padStart(10)} → ${formatKB(targetStats.size).padStart(10)} WebP`);
    } catch (err) {
      console.error(`  ${name}: ERROR ${err.message}`);
    }
  }

  console.log(`\n${processed} optimizadas, ${skipped} omitidas. Ahorro total: ${formatKB(totalSavedBytes)}.`);
}

main().catch((err) => {
  console.error('Fallo en optimize-images:', err);
  process.exit(1);
});
