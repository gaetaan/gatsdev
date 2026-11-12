// Génère public/og-image.png (1200×630) et public/apple-touch-icon.png.
// Usage : npm run og
import sharp from 'sharp';

const ink = '#0f1a2a';
const paper = '#e6ecf3';
const slate = '#a5b3c5';
const cobalt = '#8ebef5';

// Hexagone « pointe en haut » de centre (cx, cy) et de rayon r.
const hex = (cx, cy, r) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = ((-90 + 60 * k) * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${ink}"/>
  <g font-family="IBM Plex Sans, Helvetica Neue, Arial, sans-serif">
    <polygon points="${hex(116, 112, 22)}" fill="none" stroke="${cobalt}" stroke-width="4" stroke-linejoin="round"/>
    <polygon points="${hex(116, 112, 9.5)}" fill="${cobalt}"/>
    <text x="152" y="124" font-size="34" font-weight="600" fill="${paper}">Gats Dev</text>
    <text x="96" y="300" font-size="72" font-weight="600" fill="#ffffff" letter-spacing="-2">Gaëtan Barbaria</text>
    <text x="96" y="364" font-size="34" fill="${slate}">Lead tech full stack Java / Angular</text>
    <text x="96" y="410" font-size="34" fill="${slate}">Freelance, Aix-Marseille</text>
    <circle cx="106" cy="510" r="8" fill="#5cc27a"/>
    <text x="126" y="520" font-size="28" fill="${paper}">Disponible le 18 janvier 2027</text>
    <text x="96" y="572" font-size="26" fill="${cobalt}">gatsdev.fr</text>
  </g>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${ink}"/>
  <polygon points="${hex(90, 90, 62)}" fill="none" stroke="${cobalt}" stroke-width="10" stroke-linejoin="round"/>
  <polygon points="${hex(90, 90, 27)}" fill="${cobalt}"/>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-image.png');
await sharp(Buffer.from(icon)).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
console.log('OK : public/og-image.png, public/apple-touch-icon.png');
