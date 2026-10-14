import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("public/images", { recursive: true });
for (const [original, name] of [
  ["Costura Acolhedora no Atelier.png", "costura"],
  ["Orgulho no Atelier de Costura.png", "nice"],
  ["Ateliê de Uniformes Acolhedor.png", "uniformes"],
  ["Costureira no atelier a cortar tecido.png", "corte"],
]) {
  await sharp(`assets/originals/${original}`)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 83 })
    .toFile(`public/images/${name}.webp`);
  console.log(`Otimizada: ${name}.webp`);
}
