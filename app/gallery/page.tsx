'use client';

import DomeGallery from '../Gallery';

export default function GalleryPage() {


  // Example 2: Array with objects including alt text
  const imageObjects = [
    { src: '/images/fous1.jpeg', alt: 'Abstract art 1' },
    { src: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800', alt: 'Abstract art 2' },
    { src: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800', alt: 'Abstract art 3' },
    { src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800', alt: 'Abstract art 4' },
    { src: 'https://images.unsplash.com/photo-1618005198915-d3d4b5a92ead?w=800', alt: 'Abstract art 5' },
    { src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800', alt: 'Modern design' },
    { src: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800', alt: 'Digital art' },
    { src: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800', alt: 'Contemporary' },
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
        grayscale={true}
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
