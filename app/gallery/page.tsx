'use client';

import DomeGallery from '../Gallery';

export default function GalleryPage() {


  // All images from the public/images folder
  const imageObjects = [
    { src: '/images/fous1.jpg', alt: 'Gallery image 1' },
    { src: '/images/fous2.jpg', alt: 'Gallery image 2' },
    { src: '/images/IMG-20251224-WA0021.jpg', alt: 'Gallery image 3' },
    { src: '/images/IMG-20251224-WA0026.jpg', alt: 'Gallery image 4' },
    { src: '/images/IMG-20260102-WA0006.jpg', alt: 'Gallery image 5' },
    { src: '/images/IMG-20260102-WA0007.jpg', alt: 'Gallery image 6' },
    { src: '/images/IMG-20260102-WA0008.jpg', alt: 'Gallery image 7' },
    { src: '/images/IMG-20260102-WA0009.jpg', alt: 'Gallery image 8' },
    { src: '/images/IMG-20260102-WA0010.jpg', alt: 'Gallery image 9' },
    { src: '/images/IMG-20260102-WA0011.jpg', alt: 'Gallery image 10' },
    { src: '/images/IMG-20260102-WA0012.jpg', alt: 'Gallery image 11' },
    { src: '/images/IMG-20260102-WA0013.jpg', alt: 'Gallery image 12' },
    { src: '/images/IMG-20260102-WA0014.jpg', alt: 'Gallery image 13' },
    { src: '/images/IMG-20260102-WA0015.jpg', alt: 'Gallery image 14' },
    { src: '/images/IMG-20260102-WA0016.jpg', alt: 'Gallery image 15' },
    { src: '/images/IMG-20260102-WA0017.jpg', alt: 'Gallery image 16' },
    { src: '/images/IMG-20260102-WA0018.jpg', alt: 'Gallery image 17' },
    { src: '/images/IMG-20260102-WA0019.jpg', alt: 'Gallery image 18' },
    { src: '/images/IMG-20260102-WA0020.jpg', alt: 'Gallery image 19' },
    { src: '/images/IMG-20260102-WA0021.jpg', alt: 'Gallery image 20' },
    { src: '/images/IMG-20260102-WA0022.jpg', alt: 'Gallery image 21' },
    { src: '/images/IMG-20260102-WA0023.jpg', alt: 'Gallery image 22' },
    { src: '/images/IMG-20260102-WA0024.jpg', alt: 'Gallery image 23' },
    { src: '/images/IMG-20260102-WA0025.jpg', alt: 'Gallery image 24' },
    { src: '/images/IMG-20260102-WA0026.jpg', alt: 'Gallery image 25' },
    { src: '/images/IMG-20260102-WA0027.jpg', alt: 'Gallery image 26' },
    { src: '/images/IMG-20260102-WA0028.jpg', alt: 'Gallery image 27' },
    { src: '/images/IMG-20260102-WA0029.jpg', alt: 'Gallery image 28' },
    { src: '/images/IMG-20260102-WA0030.jpg', alt: 'Gallery image 29' },
    { src: '/images/IMG-20260102-WA0031.jpg', alt: 'Gallery image 30' },
    { src: '/images/IMG-20260102-WA0032.jpg', alt: 'Gallery image 31' },
    { src: '/images/IMG-20260102-WA0033.jpg', alt: 'Gallery image 32' },
    { src: '/images/IMG-20260102-WA0034.jpg', alt: 'Gallery image 33' },
    { src: '/images/IMG-20260102-WA0035.jpg', alt: 'Gallery image 34' },
    { src: '/images/IMG-20260102-WA0036.jpg', alt: 'Gallery image 35' },
    { src: '/images/IMG-20260102-WA0037.jpg', alt: 'Gallery image 36' },
    { src: '/images/IMG-20260102-WA0038.jpg', alt: 'Gallery image 37' },
    { src: '/images/IMG-20260102-WA0039.jpg', alt: 'Gallery image 38' },
    { src: '/images/IMG-20260102-WA0040.jpg', alt: 'Gallery image 39' },
    { src: '/images/IMG-20260102-WA0041.jpg', alt: 'Gallery image 40' },
    { src: '/images/IMG-20260102-WA0042.jpg', alt: 'Gallery image 41' },
    { src: '/images/IMG-20260102-WA0043.jpg', alt: 'Gallery image 42' },
    { src: '/images/IMG-20260102-WA0044.jpg', alt: 'Gallery image 43' },
    { src: '/images/IMG-20260102-WA0045.jpg', alt: 'Gallery image 44' },
    { src: '/images/IMG-20260102-WA0046.jpg', alt: 'Gallery image 45' },
    { src: '/images/IMG-20260102-WA0047.jpg', alt: 'Gallery image 46' },
    { src: '/images/IMG-20260102-WA0048.jpg', alt: 'Gallery image 47' },
    { src: '/images/IMG-20260102-WA0049.jpg', alt: 'Gallery image 48' },
    { src: '/images/IMG-20260102-WA0050.jpg', alt: 'Gallery image 49' },
    { src: '/images/IMG-20260102-WA0051.jpg', alt: 'Gallery image 50' },
    { src: '/images/IMG-20260102-WA0052.jpg', alt: 'Gallery image 51' },
    { src: '/images/IMG-20260102-WA0053.jpg', alt: 'Gallery image 52' },
    { src: '/images/IMG-20260102-WA0054.jpg', alt: 'Gallery image 53' },
    { src: '/images/IMG-20260102-WA0055.jpg', alt: 'Gallery image 54' },
    { src: '/images/IMG-20260102-WA0056.jpg', alt: 'Gallery image 55' },
    { src: '/images/IMG-20260102-WA0057.jpg', alt: 'Gallery image 56' },
    { src: '/images/IMG-20260102-WA0058.jpg', alt: 'Gallery image 57' },
    { src: '/images/IMG-20260102-WA0059.jpg', alt: 'Gallery image 58' },
    { src: '/images/IMG-20260102-WA0060.jpg', alt: 'Gallery image 59' },
    { src: '/images/IMG-20260102-WA0061.jpg', alt: 'Gallery image 60' },
    { src: '/images/WhatsApp Image 2025-12-17 at 14.42.29_a2d931e1.jpg', alt: 'Gallery image 61' },
    { src: '/images/WhatsApp Image 2025-12-17 at 14.58.27_3705d4d3.jpg', alt: 'Gallery image 62' },
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#060010' }}>
      {/* Use imageUrls or imageObjects */}
      <DomeGallery 
        images={imageObjects}
        fit={2}
        fitBasis="height"
        minRadius={800}
        maxRadius={2000}
        segments={35}
        grayscale={false}
        dragSensitivity={20}
        maxVerticalRotationDeg={5}
        overlayBlurColor="#060010"
        imageBorderRadius="30px"
        openedImageBorderRadius="30px"
        openedImageWidth="80vw"
        openedImageHeight="80vh"
      />
    </div>
  );
}
