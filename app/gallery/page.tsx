'use client';

import { useState, useEffect } from 'react';
import DomeGallery from '../Gallery';

export default function GalleryPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  // Set theme to light when component mounts (since we're coming from the interactive page)
  useEffect(() => {
    setTheme('light');
  }, []);

  // Function to handle theme change when image is clicked
  const handleImageOpen = () => {
    setTheme('light');
  };

  // Images for the gallery
  const imageObjects = [
    { src: '/images/thumbs/IMG-20260102-WA0015.webp', fullSrc: '/images/IMG-20260102-WA0015.webp', alt: 'Gallery image 12' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.53 PM.webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.53 PM.jpeg', alt: 'Gallery image 99' },
    { src: '/images/thumbs/IMG-20260102-WA0010.webp', fullSrc: '/images/IMG-20260102-WA0010.webp', alt: 'Gallery image 7' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.13 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.13 AM (2).jpeg', alt: 'Gallery image 73' },
    { src: '/images/thumbs/IMG-20260102-WA0031.webp', fullSrc: '/images/IMG-20260102-WA0031.webp', alt: 'Gallery image 28' },
    { src: '/images/thumbs/IMG-20260102-WA0024.webp', fullSrc: '/images/IMG-20260102-WA0024.webp', alt: 'Gallery image 21' },
    { src: '/images/thumbs/fous2.webp', fullSrc: '/images/fous2.webp', alt: 'Gallery image 111' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.14 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.14 AM (1).jpeg', alt: 'Gallery image 75' },
    { src: '/images/thumbs/IMG-20260102-WA0029.webp', fullSrc: '/images/IMG-20260102-WA0029.webp', alt: 'Gallery image 26' },
    { src: '/images/thumbs/IMG-20260102-WA0020.webp', fullSrc: '/images/IMG-20260102-WA0020.webp', alt: 'Gallery image 17' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.14 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.14 AM (2).jpeg', alt: 'Gallery image 76' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.10 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.10 AM.jpeg', alt: 'Gallery image 65' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.16 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.16 AM (2).jpeg', alt: 'Gallery image 82' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.15 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.15 AM.jpeg', alt: 'Gallery image 80' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-12 at 2.25.16 PM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-12 at 2.25.16 PM (2).jpeg', alt: 'Gallery image 93' },
    { src: '/images/thumbs/flower.webp', fullSrc: '/images/flower.png', alt: 'Gallery image 109' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.18 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.18 AM (1).jpeg', alt: 'Gallery image 87' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.09 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.09 AM.jpeg', alt: 'Gallery image 62' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.13 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.13 AM (1).jpeg', alt: 'Gallery image 72' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.14 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.14 AM.jpeg', alt: 'Gallery image 77' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.55 PM.webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.55 PM.jpeg', alt: 'Gallery image 102' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.54 PM (1).webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.54 PM (1).jpeg', alt: 'Gallery image 100' },
    { src: '/images/thumbs/IMG-20260102-WA0023.webp', fullSrc: '/images/IMG-20260102-WA0023.webp', alt: 'Gallery image 20' },
    { src: '/images/thumbs/IMG-20260102-WA0037.webp', fullSrc: '/images/IMG-20260102-WA0037.webp', alt: 'Gallery image 34' },
    { src: '/images/thumbs/fous1.webp', fullSrc: '/images/fous1.webp', alt: 'Gallery image 110' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.16 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.16 AM.jpeg', alt: 'Gallery image 83' },
    { src: '/images/thumbs/IMG-20251224-WA0021.webp', fullSrc: '/images/IMG-20251224-WA0021.webp', alt: 'Gallery image 1' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.17 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.17 AM (1).jpeg', alt: 'Gallery image 84' },
    { src: '/images/thumbs/IMG-20260102-WA0045.webp', fullSrc: '/images/IMG-20260102-WA0045.webp', alt: 'Gallery image 42' },
    { src: '/images/thumbs/IMG-20260102-WA0046.webp', fullSrc: '/images/IMG-20260102-WA0046.webp', alt: 'Gallery image 43' },
    { src: '/images/thumbs/IMG-20260102-WA0047.webp', fullSrc: '/images/IMG-20260102-WA0047.webp', alt: 'Gallery image 44' },
    { src: '/images/thumbs/IMG-20260102-WA0030.webp', fullSrc: '/images/IMG-20260102-WA0030.webp', alt: 'Gallery image 27' },
    { src: '/images/thumbs/IMG-20260102-WA0035.webp', fullSrc: '/images/IMG-20260102-WA0035.webp', alt: 'Gallery image 32' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.11 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.11 AM (1).jpeg', alt: 'Gallery image 66' },
    { src: '/images/thumbs/IMG-20260102-WA0040.webp', fullSrc: '/images/IMG-20260102-WA0040.webp', alt: 'Gallery image 37' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.56 PM (1).webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.56 PM (1).jpeg', alt: 'Gallery image 103' },
    { src: '/images/thumbs/IMG-20260102-WA0011.webp', fullSrc: '/images/IMG-20260102-WA0011.webp', alt: 'Gallery image 8' },
    { src: '/images/thumbs/IMG-20260102-WA0057.webp', fullSrc: '/images/IMG-20260102-WA0057.webp', alt: 'Gallery image 54' },
    { src: '/images/thumbs/slice1.webp', fullSrc: '/images/slice1.jpg', alt: 'Gallery image 113' },
    { src: '/images/thumbs/IMG-20260102-WA0008.webp', fullSrc: '/images/IMG-20260102-WA0008.webp', alt: 'Gallery image 5' },
    { src: '/images/thumbs/IMG-20260102-WA0055.webp', fullSrc: '/images/IMG-20260102-WA0055.webp', alt: 'Gallery image 52' },
    { src: '/images/thumbs/IMG-20260102-WA0044.webp', fullSrc: '/images/IMG-20260102-WA0044.webp', alt: 'Gallery image 41' },
    { src: '/images/thumbs/IMG-20260102-WA0007.webp', fullSrc: '/images/IMG-20260102-WA0007.webp', alt: 'Gallery image 4' },
    { src: '/images/thumbs/IMG-20260102-WA0013.webp', fullSrc: '/images/IMG-20260102-WA0013.webp', alt: 'Gallery image 10' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.10 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.10 AM (1).jpeg', alt: 'Gallery image 63' },
    { src: '/images/thumbs/slice2.webp', fullSrc: '/images/slice2.jpg', alt: 'Gallery image 114' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.17 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.17 AM.jpeg', alt: 'Gallery image 86' },
    { src: '/images/thumbs/IMG-20260102-WA0006.webp', fullSrc: '/images/IMG-20260102-WA0006.webp', alt: 'Gallery image 3' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.12 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.12 AM.jpeg', alt: 'Gallery image 71' },
    { src: '/images/thumbs/IMG-20260102-WA0028.webp', fullSrc: '/images/IMG-20260102-WA0028.webp', alt: 'Gallery image 25' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.11 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.11 AM.jpeg', alt: 'Gallery image 69' },
    { src: '/images/thumbs/IMG-20260102-WA0033.webp', fullSrc: '/images/IMG-20260102-WA0033.webp', alt: 'Gallery image 30' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.55 PM (2).webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.55 PM (2).jpeg', alt: 'Gallery image 101' },
    { src: '/images/thumbs/IMG-20260102-WA0054.webp', fullSrc: '/images/IMG-20260102-WA0054.webp', alt: 'Gallery image 51' },
    { src: '/images/thumbs/WhatsApp Image 2025-12-17 at 14.58.27_3705d4d3.webp', fullSrc: '/images/WhatsApp Image 2025-12-17 at 14.58.27_3705d4d3.webp', alt: 'Gallery image 60' },
    { src: '/images/thumbs/IMG-20260102-WA0043.webp', fullSrc: '/images/IMG-20260102-WA0043.webp', alt: 'Gallery image 40' },
    { src: '/images/thumbs/IMG-20260102-WA0060.webp', fullSrc: '/images/IMG-20260102-WA0060.webp', alt: 'Gallery image 57' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.16 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.16 AM (1).jpeg', alt: 'Gallery image 81' },
    { src: '/images/thumbs/WhatsApp Image 2025-12-17 at 14.42.29_a2d931e1.webp', fullSrc: '/images/WhatsApp Image 2025-12-17 at 14.42.29_a2d931e1.webp', alt: 'Gallery image 59' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-12 at 2.25.17 PM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-12 at 2.25.17 PM (1).jpeg', alt: 'Gallery image 95' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.18 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.18 AM (2).jpeg', alt: 'Gallery image 88' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.15 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.15 AM (1).jpeg', alt: 'Gallery image 78' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-12 at 2.25.16 PM.webp', fullSrc: '/images/WhatsApp Image 2026-01-12 at 2.25.16 PM.jpeg', alt: 'Gallery image 94' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.18 AM (3).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.18 AM (3).jpeg', alt: 'Gallery image 89' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-12 at 2.25.17 PM.webp', fullSrc: '/images/WhatsApp Image 2026-01-12 at 2.25.17 PM.jpeg', alt: 'Gallery image 97' },
    { src: '/images/thumbs/IMG-20260102-WA0041.webp', fullSrc: '/images/IMG-20260102-WA0041.webp', alt: 'Gallery image 38' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.53 PM (1).webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.53 PM (1).jpeg', alt: 'Gallery image 98' },
    { src: '/images/thumbs/IMG-20260102-WA0053.webp', fullSrc: '/images/IMG-20260102-WA0053.webp', alt: 'Gallery image 50' },
    { src: '/images/thumbs/IMG-20260102-WA0056.webp', fullSrc: '/images/IMG-20260102-WA0056.webp', alt: 'Gallery image 53' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.19 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.19 AM.jpeg', alt: 'Gallery image 91' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.18 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.18 AM.jpeg', alt: 'Gallery image 90' },
    { src: '/images/thumbs/IMG-20260102-WA0048.webp', fullSrc: '/images/IMG-20260102-WA0048.webp', alt: 'Gallery image 45' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.17 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.17 AM (2).jpeg', alt: 'Gallery image 85' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.13 AM.webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.13 AM.jpeg', alt: 'Gallery image 74' },
    { src: '/images/thumbs/IMG-20260102-WA0038.webp', fullSrc: '/images/IMG-20260102-WA0038.webp', alt: 'Gallery image 35' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.10 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.10 AM (2).jpeg', alt: 'Gallery image 64' },
    { src: '/images/thumbs/IMG-20260102-WA0027.webp', fullSrc: '/images/IMG-20260102-WA0027.webp', alt: 'Gallery image 24' },
    { src: '/images/thumbs/IMG-20260102-WA0052.webp', fullSrc: '/images/IMG-20260102-WA0052.webp', alt: 'Gallery image 49' },
    { src: '/images/thumbs/IMG-20260102-WA0059.webp', fullSrc: '/images/IMG-20260102-WA0059.webp', alt: 'Gallery image 56' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.56 PM.webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.56 PM.jpeg', alt: 'Gallery image 104' },
    { src: '/images/thumbs/IMG-20260102-WA0019.webp', fullSrc: '/images/IMG-20260102-WA0019.webp', alt: 'Gallery image 16' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.11 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.11 AM (2).jpeg', alt: 'Gallery image 67' },
    { src: '/images/thumbs/IMG-20260102-WA0034.webp', fullSrc: '/images/IMG-20260102-WA0034.webp', alt: 'Gallery image 31' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.57 PM (1).webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.57 PM (1).jpeg', alt: 'Gallery image 105' },
    { src: '/images/thumbs/IMG-20260102-WA0025.webp', fullSrc: '/images/IMG-20260102-WA0025.webp', alt: 'Gallery image 22' },
    { src: '/images/thumbs/IMG-20260102-WA0021.webp', fullSrc: '/images/IMG-20260102-WA0021.webp', alt: 'Gallery image 18' },
    { src: '/images/thumbs/IMG-20260102-WA0009.webp', fullSrc: '/images/IMG-20260102-WA0009.webp', alt: 'Gallery image 6' },
    { src: '/images/thumbs/IMG-20260102-WA0036.webp', fullSrc: '/images/IMG-20260102-WA0036.webp', alt: 'Gallery image 33' },
    { src: '/images/thumbs/IMG-20260102-WA0017.webp', fullSrc: '/images/IMG-20260102-WA0017.webp', alt: 'Gallery image 14' },
    { src: '/images/thumbs/IMG-20260102-WA0012.webp', fullSrc: '/images/IMG-20260102-WA0012.webp', alt: 'Gallery image 9' },
    { src: '/images/thumbs/IMG-20260102-WA0032.webp', fullSrc: '/images/IMG-20260102-WA0032.webp', alt: 'Gallery image 29' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-12 at 2.25.17 PM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-12 at 2.25.17 PM (2).jpeg', alt: 'Gallery image 96' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-04 at 2.56.23 PM.webp', fullSrc: '/images/WhatsApp Image 2026-01-04 at 2.56.23 PM.jpeg', alt: 'Gallery image 61' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.11 AM (3).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.11 AM (3).jpeg', alt: 'Gallery image 68' },
    { src: '/images/thumbs/IMG-20260102-WA0016.webp', fullSrc: '/images/IMG-20260102-WA0016.webp', alt: 'Gallery image 13' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-12 at 2.25.16 PM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-12 at 2.25.16 PM (1).jpeg', alt: 'Gallery image 92' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.57 PM (2).webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.57 PM (2).jpeg', alt: 'Gallery image 106' },
    { src: '/images/thumbs/IMG-20260102-WA0061.webp', fullSrc: '/images/IMG-20260102-WA0061.webp', alt: 'Gallery image 58' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.57 PM.webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.57 PM.jpeg', alt: 'Gallery image 107' },
    { src: '/images/thumbs/IMG-20260102-WA0039.webp', fullSrc: '/images/IMG-20260102-WA0039.webp', alt: 'Gallery image 36' },
    { src: '/images/thumbs/IMG-20260102-WA0050.webp', fullSrc: '/images/IMG-20260102-WA0050.webp', alt: 'Gallery image 47' },
    { src: '/images/thumbs/IMG-20260102-WA0049.webp', fullSrc: '/images/IMG-20260102-WA0049.webp', alt: 'Gallery image 46' },
    { src: '/images/thumbs/IMG-20260102-WA0058.webp', fullSrc: '/images/IMG-20260102-WA0058.webp', alt: 'Gallery image 55' },
    { src: '/images/thumbs/IMG-20260102-WA0042.webp', fullSrc: '/images/IMG-20260102-WA0042.webp', alt: 'Gallery image 39' },
    { src: '/images/thumbs/IMG-20260102-WA0018.webp', fullSrc: '/images/IMG-20260102-WA0018.webp', alt: 'Gallery image 15' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.12 AM (1).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.12 AM (1).jpeg', alt: 'Gallery image 70' },
    { src: '/images/thumbs/IMG-20251224-WA0026.webp', fullSrc: '/images/IMG-20251224-WA0026.webp', alt: 'Gallery image 2' },
    { src: '/images/thumbs/IMG-20260102-WA0014.webp', fullSrc: '/images/IMG-20260102-WA0014.webp', alt: 'Gallery image 11' },
    { src: '/images/thumbs/IMG-20260102-WA0051.webp', fullSrc: '/images/IMG-20260102-WA0051.webp', alt: 'Gallery image 48' },
    { src: '/images/thumbs/WhatsApp Image 2026-02-06 at 4.12.58 PM (1).webp', fullSrc: '/images/WhatsApp Image 2026-02-06 at 4.12.58 PM (1).jpeg', alt: 'Gallery image 108' },
    { src: '/images/thumbs/IMG-20260102-WA0026.webp', fullSrc: '/images/IMG-20260102-WA0026.webp', alt: 'Gallery image 23' },
    { src: '/images/thumbs/WhatsApp Image 2026-01-06 at 2.38.15 AM (2).webp', fullSrc: '/images/WhatsApp Image 2026-01-06 at 2.38.15 AM (2).jpeg', alt: 'Gallery image 79' },
    { src: '/images/thumbs/IMG-20260102-WA0022.webp', fullSrc: '/images/IMG-20260102-WA0022.webp', alt: 'Gallery image 19' },
    { src: '/images/thumbs/qerty.webp', fullSrc: '/images/qerty.jpeg', alt: 'Gallery image 112' }
  ];

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#F6F7F1',
        transition: 'background-color 1s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DomeGallery
        images={imageObjects}
        fit={3}
        fitBasis="height"
        minRadius={1200}
        maxRadius={3000}
        segments={35}
        grayscale={false}
        dragSensitivity={20}
        maxVerticalRotationDeg={10}
        overlayBlurColor={theme === 'dark' ? "#060010" : "#fef7ff"}
        imageBorderRadius="30px"
        openedImageBorderRadius="30px"
        openedImageWidth="80vw"
        openedImageHeight="80vh"
        onImageOpen={handleImageOpen}
        theme={theme}
      />
    </div>
  );
}
