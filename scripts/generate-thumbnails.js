const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const thumbsDir = path.join(imagesDir, 'thumbs');

// Create thumbs directory if it doesn't exist
if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

// Get all image files (.webp, .jpg, .jpeg, .png)
const files = fs.readdirSync(imagesDir).filter(file => {
  const ext = file.toLowerCase();
  return ext.endsWith('.webp') || ext.endsWith('.jpg') || ext.endsWith('.jpeg') || ext.endsWith('.png');
});

console.log(`Found ${files.length} images. Generating thumbnails...`);

let processed = 0;

files.forEach(async (file) => {
  const inputPath = path.join(imagesDir, file);
  // Convert all thumbnails to .webp format
  const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(thumbsDir, outputFileName);
  
  try {
    await sharp(inputPath)
      .resize(400, null, { // 400px width, maintain aspect ratio
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 70 }) // Lower quality for smaller file size
      .toFile(outputPath);
    
    processed++;
    console.log(`[${processed}/${files.length}] Generated: ${file} -> ${outputFileName}`);
    
    if (processed === files.length) {
      console.log('\n✓ All thumbnails generated successfully!');
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
});
