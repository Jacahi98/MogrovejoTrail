#!/usr/bin/env node
// Importa las fotos de la edicion 2026 (carpeta de Drive "Mogrovejo 26", 76 JPG
// en calidad original, ~1,1 GB) y las convierte a WebP dentro de public/img/.
//
// Los JPG originales NO entran en el repo: se leen desde una carpeta externa que
// se pasa como argumento. Mismos parametros que scripts/optimize-images.mjs
// (1920 px de ancho, calidad 78) para que la galeria sea homogenea.
//
//   node scripts/import-mogrovejo-2026.mjs "<carpeta-con-los-jpg>"
import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = process.argv[2];
const OUT = new URL('../public/img/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const MAX_WIDTH = 1920;
const QUALITY = 78;

if (!SRC) {
  console.error('Falta la carpeta de origen con los JPG.');
  process.exit(1);
}

const files = (await readdir(SRC)).filter((f) => f.toLowerCase().endsWith('.jpg'));
// "Mogrovejo (7 de 76).jpg" -> 7, para conservar el orden del fotografo.
const num = (f) => parseInt((f.match(/\((\d+) de/) || [])[1] ?? '0', 10);
files.sort((a, b) => num(a) - num(b));

let srcTotal = 0;
let outTotal = 0;
for (const f of files) {
  const n = String(num(f)).padStart(2, '0');
  const target = join(OUT, `mogrovejo-2026-${n}.webp`);
  const s = await stat(join(SRC, f));
  const meta = await sharp(join(SRC, f))
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(target);
  const t = await stat(target);
  srcTotal += s.size;
  outTotal += t.size;
  console.log(`mogrovejo-2026-${n}.webp  ${(s.size / 1048576).toFixed(1)}MB -> ${(t.size / 1024).toFixed(0)}KB  ${meta.width}x${meta.height}`);
}
console.log(`\nTOTAL: ${files.length} fotos, ${(srcTotal / 1048576).toFixed(0)} MB -> ${(outTotal / 1048576).toFixed(1)} MB`);
