const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const thumbsDir = path.join(imagesDir, 'thumbs');

// Create thumbs directory if it doesn't exist
if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

// Get all .webp files
const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.webp'));

console.log(`Found ${files.length} images. Generating thumbnails...`);

let processed = 0;

files.forEach(async (file) => {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(thumbsDir, file);
  
  try {
    await sharp(inputPath)
      .resize(400, null, { // 400px width, maintain aspect ratio
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 70 }) // Lower quality for smaller file size
      .toFile(outputPath);
    
    processed++;
    console.log(`[${processed}/${files.length}] Generated: ${file}`);
    
    if (processed === files.length) {
      console.log('\n✓ All thumbnails generated successfully!');
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
});
