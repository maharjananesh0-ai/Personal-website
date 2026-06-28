const fs = require('fs');

const content = fs.readFileSync('public/logo_previous.svg', 'utf8');

const colors = [
    '#3D3D3D', // 0: Framework (Charcoal)
    '#3D2010', // 1: G (Dark Brown)
    '#3D2010', // 2: R
    '#3D2010', // 3: I
    '#3D2010', // 4: H
    '#3D2010', // 5: A
    '#808080', // 6: Window square 1 (Grey)
    '#808080', // 7: Window square 2
    '#808080', // 8: Window square 3
    '#808080', // 9: Window square 4
    '#1A6B7A', // 10: S (Teal)
    '#1A6B7A', // 11: A
    '#1A6B7A', // 12: N
    '#1A6B7A', // 13: S
    '#1A6B7A', // 14: A
    '#1A6B7A'  // 15: R
];

const paths = [];
const regex = /<path[^>]*d="(.*?)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    paths.push(match[1]);
}

if (paths.length < 16) {
    console.error("Could not find all paths");
    process.exit(1);
}

let out = '<svg viewBox="70 180 900 620" version="1.1" xmlns="http://www.w3.org/2000/svg">\n';

// 1. Charcoal Framework
out += `  <path fill="${colors[0]}" stroke="none" opacity="1" d="${paths[0]}" />\n`;

// 2. Orange rectangles and roof
out += '  <rect x="157" y="190.5" width="48" height="541.5" fill="#F7921C" />\n';
out += '  <rect x="209" y="679" width="180" height="49" fill="#F7921C" />\n';
out += '  <path fill="#F7921C" d="M 333 305 L 332 307 L 421 399 L 426 403 L 491 403 Q 492 400 490 401 L 412 320 L 399 306 L 337 306 L 335 305 Q 334 307 333 305 Z M 209 306 L 210 346 L 248 307 L 209 306 Z M 324 307 L 253 380 Q 254 382 251 381 L 251 383 L 232 402 L 233 403 L 324 403 L 324 307 Z M 328 309 L 328 403 L 419 403 L 419 402 L 401 383 L 396 377 L 394 377 L 394 376 Q 364 347 336 316 L 330 309 L 328 309 Z" />\n';

// 3. The letters
for (let i = 1; i < 16; i++) {
    out += `  <path fill="${colors[i]}" stroke="${colors[i]}" stroke-width="1" opacity="1" d="${paths[i]}" />\n`;
}

out += '</svg>\n';

fs.writeFileSync('public/logo.svg', out, 'utf8');
console.log("Updated logo.svg successfully!");
