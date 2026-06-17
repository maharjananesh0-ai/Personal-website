const Jimp = require('jimp');

async function removeBackground() {
  const images = ['public/logo.png', 'src/app/icon.png'];
  
  for (const imagePath of images) {
    console.log(`Processing ${imagePath}...`);
    const image = await Jimp.read(imagePath);
    
    // Tolerance for "white" background
    const tolerance = 200; 

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      // Get RGBA values
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is mostly white/light gray (background)
      if (red > tolerance && green > tolerance && blue > tolerance) {
        // Make it transparent
        this.bitmap.data[idx + 3] = 0; 
      }
    });

    await image.writeAsync(imagePath);
    console.log(`Saved transparent image to ${imagePath}`);
  }
}

removeBackground().catch(console.error);
