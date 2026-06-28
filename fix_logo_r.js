const fs = require('fs');

function translatePath(pathStr, dx, dy) {
    const parts = pathStr.split(/([MLQZ])/);
    const newParts = [];
    
    for (let i = 0; i < parts.length; i++) {
        const token = parts[i].trim();
        if (!token) continue;
        
        if (['M', 'L', 'Q', 'Z'].includes(token)) {
            const cmd = token;
            newParts.push(cmd);
            if (cmd === 'Z') continue;
            
            i++;
            if (i < parts.length) {
                const coordsStr = parts[i].trim();
                const coordsMatches = coordsStr.match(/[-+]?\d*\.\d+|\d+/g) || [];
                const coords = coordsMatches.map(Number);
                const newCoords = [];
                
                for (let idx = 0; idx < coords.length; idx++) {
                    const val = coords[idx];
                    if (idx % 2 === 0) {
                        newCoords.push(val + dx);
                    } else {
                        newCoords.push(val + dy);
                    }
                }
                
                const formattedCoords = newCoords.map(val => {
                    return Number.isInteger(val) ? val.toString() : val.toFixed(1);
                });
                
                newParts.push(formattedCoords.join(' '));
            }
        } else {
            newParts.push(token);
        }
    }
    return newParts.join(' ');
}

try {
    const svgContent = fs.readFileSync('public/logo_manual.svg', 'utf8');
    
    // Find the brown paths (fill="#3D2010")
    // Let's use regex to extract the path d values of all brown paths
    const pathRegex = /<path[^>]*fill="#3D2010"[^>]*d="([^"]*)"/g;
    const brownPaths = [];
    let match;
    while ((match = pathRegex.exec(svgContent)) !== null) {
        brownPaths.push(match[1]);
    }
    
    if (brownPaths.length < 2) {
        console.error("Error: Could not find at least 2 brown paths in the SVG (need the R in GRIHA)");
        process.exit(1);
    }
    
    // The R in GRIHA is the second path (index 1)
    const grihaRPath = brownPaths[1];
    console.log("Found GRIHA R path:", grihaRPath.substring(0, 100) + "...");
    
    // Translate the R path by dx = 346, dy = 158
    const translatedRPath = translatePath(grihaRPath, 346, 158);
    console.log("Translated R path:", translatedRPath.substring(0, 100) + "...");
    
    // Now construct the new completed R path element
    const newRElement = `<path fill="#1A6B7A" stroke="#1A6B7A" stroke-width="1" opacity="1" d="${translatedRPath}" />`;
    
    // Find the cut-off teal path. It starts with "M 892.5 572" (the R in SANSAR)
    // We will replace it.
    const cutoffTealRegex = /<path[^>]*fill="#1A6B7A"[^>]*d="[^"]*M 892\.5 572[^"]*"[^>]*\/>/;
    let updatedSvg = svgContent;
    
    if (cutoffTealRegex.test(svgContent)) {
        updatedSvg = svgContent.replace(cutoffTealRegex, newRElement);
    } else {
        // Fallback: Replace the last teal path
        const tealRegex = /<path[^>]*fill="#1A6B7A"[^>]*d="([^"]*)"[^>]*\/>/g;
        const tealMatches = [];
        let tMatch;
        while ((tMatch = tealRegex.exec(svgContent)) !== null) {
            tealMatches.push(tMatch[0]);
        }
        if (tealMatches.length > 0) {
            const lastTealElement = tealMatches[tealMatches.length - 1];
            updatedSvg = svgContent.replace(lastTealElement, newRElement);
        } else {
            console.error("Error: Could not find cut-off R path in SANSAR");
            process.exit(1);
        }
    }
    
    fs.writeFileSync('public/logo.svg', updatedSvg, 'utf8');
    fs.writeFileSync('public/logo_manual.svg', updatedSvg, 'utf8');
    console.log("Successfully updated logo.svg and logo_manual.svg with the completed R!");
} catch (e) {
    console.error("An error occurred:", e);
}
