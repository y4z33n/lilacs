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

  // Using thumbnails for faster loading - full images shown when clicked
  // Images are shuffled to spread new and old photos throughout the gallery
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
    // ... (rest of your image objects remain unchanged)
    { src: '/images/thumbs/IMG-20260102-WA0022.webp', fullSrc: '/images/IMG-20260102-WA0022.webp', alt: 'Gallery image 19' },
    { src: '/images/thumbs/qerty.webp', fullSrc: '/images/qerty.jpeg', alt: 'Gallery image 112' },
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
