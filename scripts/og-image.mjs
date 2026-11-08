// Génère public/og-image.png (1200×630) et public/apple-touch-icon.png.
// Usage : npm run og
import sharp from 'sharp';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#111418"/>
  <rect x="0" y="0" width="12" height="630" fill="#7ab8ff"/>
  <g font-family="Helvetica Neue, Arial, sans-serif">
    <rect x="96" y="96" width="72" height="72" rx="16" fill="#0b5cad"/>
    <text x="132" y="148" text-anchor="middle" font-size="44" font-weight="700" fill="#fff">G</text>
    <text x="190" y="146" font-size="40" font-weight="700" fill="#e7e9ec">Gats Dev</text>
    <text x="96" y="320" font-size="76" font-weight="700" fill="#ffffff">Gaëtan Barbaria</text>
    <text x="96" y="392" font-size="40" fill="#a6aeb9">Lead tech full stack freelance · Aix-Marseille</text>
    <text x="96" y="520" font-size="30" fill="#7ab8ff">Java / Quarkus · Angular · Hexagonal &amp; DDD</text>
    <text x="1104" y="520" text-anchor="end" font-size="30" fill="#a6aeb9">gatsdev.fr</text>
  </g>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#0b5cad"/>
  <text x="90" y="124" text-anchor="middle" font-family="Helvetica Neue, Arial, sans-serif" font-size="104" font-weight="700" fill="#fff">G</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-image.png');
await sharp(Buffer.from(icon)).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
console.log('OK : public/og-image.png, public/apple-touch-icon.png');
