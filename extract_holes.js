const fs = require('fs');

const content = fs.readFileSync('public/logo.svg', 'utf8');

const path1Match = content.match(/<path[^>]*d="(.*?)"/);
if (!path1Match) {
    console.log("No path found");
    process.exit();
}

const path1 = path1Match[1];
const subpaths = path1.replace(/Z M/g, 'Z|M').split('|').map(s => s.trim());

console.log(`Total subpaths in path 1: ${subpaths.length}`);

let outHtml = "<html><body><svg viewBox='70 180 900 620' style='width:900px; height:620px; border:1px solid black;'>\n";
outHtml += `  <path fill='#3D3D3D' d='${subpaths[0]}' />\n`;

for (let i = 1; i < subpaths.length; i++) {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    outHtml += `  <path id='hole_${i}' fill='${color}' d='${subpaths[i]}' onclick='alert(this.id)' />\n`;
}

outHtml += "</svg></body></html>";

fs.writeFileSync('public/holes_viewer.html', outHtml);
console.log("Created public/holes_viewer.html");
