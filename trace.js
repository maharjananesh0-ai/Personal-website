const fs = require('fs');
const jpeg = require('jpeg-js');
const ImageTracer = require('imagetracerjs');

console.log('Reading public/logo.png (as JPEG)...');
const jpegData = fs.readFileSync('public/logo.png');

try {
  const rawImageData = jpeg.decode(jpegData, {useTArray: true}); // returns {width, height, data}
  console.log('Image decoded, tracing to SVG...');

  // Convert Uint8Array to normal array if imagetracerjs complains, but usually it's fine.
  // Actually, let's just pass it directly.
  const imagedata = { width: rawImageData.width, height: rawImageData.height, data: rawImageData.data };
  
  const options = { 
    ltres: 0.5, // High precision
    qtres: 0.5, 
    pathomit: 8, 
    colorsampling: 2, 
    numberofcolors: 3, // keep it simple: white background, light noise, blue logo
    mincolorratio: 0, 
    colorquantcycles: 3,
    scale: 1,
  };

  let svgstr = ImageTracer.imagedataToSVG(imagedata, options);
  
  console.log('Removing white background paths...');
  let cleanedSvg = svgstr;
  
  // A much faster regex approach for removing any color close to white
  cleanedSvg = cleanedSvg.replace(/<path[^>]*fill="rgb\((2[4-5][0-9]),(2[4-5][0-9]),(2[4-5][0-9])\)"[^>]*\/>/g, '');
  cleanedSvg = cleanedSvg.replace(/<rect[^>]*fill="rgb\((2[4-5][0-9]),(2[4-5][0-9]),(2[4-5][0-9])\)"[^>]*\/>/g, '');
  
  fs.writeFileSync('public/logo.svg', cleanedSvg);
  console.log('Done! Saved to public/logo.svg');
} catch (e) {
  console.error('Error processing:', e);
}
