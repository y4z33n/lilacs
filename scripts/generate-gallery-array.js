const fs = require('fs');
const path = require('path');

const thumbsDir = path.join(__dirname, '../public/images/thumbs');
const imagesDir = path.join(__dirname, '../public/images');

// Get all webp thumbnails
const thumbnails = fs.readdirSync(thumbsDir)
  .filter(file => file.endsWith('.webp'))
  .sort();

console.log(`Found ${thumbnails.length} thumbnails`);

// Create image objects array
const imageObjects = thumbnails.map((thumb, index) => {
  // For source images, try to find original file
  const baseName = thumb.replace('.webp', '');
  let fullImagePath = thumb;
  
  // Check if original file exists (could be .jpeg, .jpg, .png, or .webp)
  const possibleExtensions = ['.webp', '.jpeg', '.jpg', '.png'];
  for (const ext of possibleExtensions) {
    const testPath = path.join(imagesDir, baseName + ext);
    if (fs.existsSync(testPath)) {
      fullImagePath = baseName + ext;
      break;
    }
  }
  
  return {
    src: `/images/thumbs/${thumb}`,
    fullSrc: `/images/${fullImagePath}`,
    alt: `Gallery image ${index + 1}`
  };
});

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const shuffledImages = shuffle(imageObjects);

// Generate the TypeScript array code
console.log('\n// Shuffled image array:');
console.log('const imageObjects = [');
shuffledImages.forEach((img, index) => {
  const comma = index < shuffledImages.length - 1 ? ',' : '';
  console.log(`    { src: '${img.src}', fullSrc: '${img.fullSrc}', alt: '${img.alt}' }${comma}`);
});
console.log('  ];');

console.log(`\n✓ Generated shuffled array with ${shuffledImages.length} images`);
