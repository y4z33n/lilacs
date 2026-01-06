'use client';

import Image from 'next/image';
import { useState } from 'react';

const layouts = [
  {
    images: [
      '/images/IMG-20260102-WA0019.webp',
      '/images/IMG-20260102-WA0059.webp',
      '/images/IMG-20260102-WA0034.webp',
      '/images/IMG-20260102-WA0044.webp'
    ],
    text: 'From the moment you meet someone, you make them feel like they\'ve known you forever with your genuine warmth and infectious energy. We come alive around you because you actually listen, remember details, and care deeply about our happiness. Forget about people being shy around you, your kindness has this magical way of bringing out the best in everyone.'
  },
  {
    images: [
      '/images/IMG-20260102-WA0016.jpg',
      '/images/IMG-20260102-WA0029.webp'
    ],
    text: 'Oh, I\'ve watched you say yes to adventures that terrify most people, whether it\'s a spontaneous road trip or planning your next big move. Opportunities don\'t scare you; they excite you because you see possibility where others see obstacles. You inspire everyone around you to stop playing small and start living bigger.'
  },
  {
    images: [
      '/images/WhatsApp Image 2026-01-06 at 2.38.11 AM (1).jpeg',
      '/images/WhatsApp Image 2025-12-17 at 14.58.27_3705d4d3.webp',
      '/images/IMG-20260102-WA0012.webp',
      '/images/WhatsApp Image 2026-01-06 at 2.38.10 AM (1).jpeg'
    ],
    text: 'Under all the ambition and drive, there\'s this unstoppable energy that never burns out or makes people feel inadequate around you. Uplifting is the best word for how you move through life, you lift us up with you, celebrating our wins like they\'re your own. '
  },
  {
    images: [
      '/images/IMG-20260102-WA0035.webp',
      '/images/IMG-20260102-WA0038.webp',
      '/images/IMG-20260102-WA0039.webp'
    ],
    text: 'Supporting the people you care about isn\'t just something you do; it\'s how you show up in the world, listening without judgment and speaking with honest compassion. Strong communicator that you are, people trust you with their vulnerabilities because you handle hearts with care.'
  },
  {
    images: [
      '/images/WhatsApp Image 2026-01-06 at 2.38.19 AM.jpeg',
    ],
    text: 'Inspiring people is something you do without even trying—just by living your truth unapologetically and refusing to dim your light for anyone. In the way you balance ambition with kindness, drive with presence, you show others what it actually looks like to be fully alive.'
  },
  {
    images: [
      '/images/slice1.jpg',
      '/images/slice2.jpg',
    ],
    text: 'Young at heart in a way that most people lose as they get older, you\'ve kept that spark of wonder and spontaneity alive. Years from now, I hope you remember this: that youthful energy, that hunger for more, that refusal to settle, never let the world convince you to lose it. Your joy is contagious, and the world needs more people who feel life this deeply.'
  },
  {
    images: [
      '/images/qerty.jpeg',
    ],
    text: 'All your ambitions aren\'t just dreams you talk about; they\'re blueprints you\'re actively building with intention and relentless action. Ahead of you are bigger dreams, wider horizons, and more of yourself to discover—and I can\'t wait to watch you become everything you\'re meant to be.'
  }
];

export default function CollageExperience() {
  const [currentLayout, setCurrentLayout] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    
    // If on last slide, navigate to the next page
    if (currentLayout === layouts.length - 1) {
      window.location.href = '/birthday/thank-you';
      return;
    }
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentLayout((prev) => (prev + 1) % layouts.length);
      setIsTransitioning(false);
    }, 400);
  };

  const current = layouts[currentLayout];
  
  const renderText = () => {
    const firstLetter = current.text.charAt(0);
    const restOfText = current.text.slice(1);
    
    return (
      <p style={{ 
        fontSize: '16px',
        color: '#4a4a4a',
        lineHeight: '1.6',
        fontFamily: 'var(--font-lora), serif'
      }}>
        <span style={{ 
          fontSize: '28px',
          fontFamily: 'var(--font-playfair), serif',
          fontWeight: '600',
          letterSpacing: '0.01em',
          lineHeight: '1',
          verticalAlign: 'baseline'
        }}>
          {firstLetter}
        </span>
        {restOfText}
      </p>
    );
  };

  const renderLayout = () => {
    // Layout 0: Original layout with left photo grid
    if (currentLayout === 0) {
      return (
        <div style={{ 
          maxWidth: '900px', 
          width: '100%',
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.4s ease'
        }}>
          {/* Left side - Photo Grid */}
          <div style={{ 
            width: '340px', 
            flexShrink: 0 
          }}>
            {/* Large portrait photo */}
            <div style={{ 
              width: '100%', 
              height: '420px', 
              backgroundColor: '#e5e5e5',
              marginBottom: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                key={`img1-${currentLayout}`}
                src={current.images[0]}
                alt="Portrait"
                fill
                style={{ 
                  objectFit: 'cover'
                }}
                sizes="340px"
                priority
              />
            </div>
            
            {/* Two smaller photos side by side */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '16px' 
            }}>
              <div style={{ 
                width: '100%', 
                height: '160px', 
                backgroundColor: '#e5e5e5',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Image
                  key={`img2-${currentLayout}`}
                  src={current.images[1]}
                  alt="Photo 2"
                  fill
                  style={{ 
                    objectFit: 'cover'
                  }}
                  sizes="160px"
                />
              </div>
              <div style={{ 
                width: '100%', 
                height: '160px', 
                backgroundColor: '#e5e5e5',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Image
                  key={`img3-${currentLayout}`}
                  src={current.images[2]}
                  alt="Photo 3"
                  fill
                  style={{ 
                    objectFit: 'cover'
                  }}
                  sizes="160px"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div style={{ 
            flex: 1,
            paddingTop: '120px'
          }}>
            {renderText()}
            
            {/* Landscape image below text */}
            <div style={{ 
              width: '100%', 
              height: '200px', 
              backgroundColor: '#e5e5e5',
              position: 'relative',
              overflow: 'hidden',
              marginTop: '32px'
            }}>
              <Image
                key={`img4-${currentLayout}`}
                src={current.images[3]}
                alt="Landscape"
                fill
                style={{ 
                  objectFit: 'cover'
                }}
                sizes="500px"
              />
            </div>
          </div>
        </div>
      );
    }

    // Layout 1: Top landscape + bottom text with side portrait
    if (currentLayout === 1) {
      return (
        <div style={{ 
          maxWidth: '800px', 
          width: '100%',
          position: 'relative',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.4s ease'
        }}>
          {/* Top landscape photo */}
          <div style={{ 
            width: '100%', 
            height: '240px', 
            backgroundColor: '#e5e5e5',
            marginBottom: '30px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Image
              key={`img1-${currentLayout}`}
              src={current.images[0]}
              alt="Landscape"
              fill
              style={{ 
                objectFit: 'cover'
              }}
              sizes="800px"
              priority
            />
          </div>

          {/* Bottom section with text and portrait */}
          <div style={{ 
            display: 'flex',
            gap: '40px',
            alignItems: 'flex-start'
          }}>
            {/* Text section */}
            <div style={{ flex: 1 }}>
              {renderText()}
            </div>

            {/* Right portrait photo */}
            <div style={{ 
              width: '220px', 
              height: '260px', 
              backgroundColor: '#e5e5e5',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0
            }}>
              <Image
                key={`img2-${currentLayout}`}
                src={current.images[1]}
                alt="Portrait"
                fill
                style={{ 
                  objectFit: 'cover'
                }}
                sizes="220px"
              />
            </div>
          </div>
        </div>
      );
    }

    // Layout 2: Grid of 4 photos with centered title
    if (currentLayout === 2) {
      return (
        <div style={{ 
          maxWidth: '700px', 
          width: '100%',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.4s ease'
        }}>
          <div style={{ textAlign: 'left' }}>
            {renderText()}
          </div>

          {/* Grid of 4 photos */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '16px',
            marginTop: '30px',
            marginBottom: '30px'
          }}>
            {current.images.map((img, idx) => (
              <div 
                key={`img${idx}-${currentLayout}`}
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  backgroundColor: '#e5e5e5',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src={img}
                  alt={`Detail ${idx + 1}`}
                  fill
                  style={{ 
                    objectFit: 'cover'
                  }}
                  sizes="340px"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Layout 3: Staggered photos with side text (inspired by "beauty" reference)
    if (currentLayout === 3) {
      return (
        <div style={{ 
          maxWidth: '750px', 
          width: '100%',
          position: 'relative',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.4s ease'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '60px'
          }}>
            {/* Left side - Staggered photos */}
            <div style={{ 
              width: '400px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ 
                width: '280px', 
                height: '130px', 
                backgroundColor: '#e5e5e5',
                position: 'relative',
                overflow: 'hidden',
                marginLeft: '40px'
              }}>
                <Image
                  key={`img1-${currentLayout}`}
                  src={current.images[0]}
                  alt="Photo 1"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="280px"
                  priority
                />
              </div>
              
              <div style={{ 
                width: '350px', 
                height: '150px', 
                backgroundColor: '#e5e5e5',
                position: 'relative',
                overflow: 'hidden',
                marginLeft: '10px'
              }}>
                <Image
                  key={`img2-${currentLayout}`}
                  src={current.images[1]}
                  alt="Photo 2"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="350px"
                />
              </div>
              
              <div style={{ 
                width: '300px', 
                height: '140px', 
                backgroundColor: '#e5e5e5',
                position: 'relative',
                overflow: 'hidden',
                marginLeft: '60px'
              }}>
                <Image
                  key={`img3-${currentLayout}`}
                  src={current.images[2]}
                  alt="Photo 3"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="300px"
                />
              </div>
            </div>

            {/* Right side - Text */}
            <div style={{ 
              flex: 1,
              flexShrink: 0,
              textAlign: 'left'
            }}>
              {renderText()}
            </div>
          </div>
        </div>
      );
    }

    // Layout 4: Single horizontal image with text above and below
    if (currentLayout === 4) {
      return (
        <div style={{ 
          maxWidth: '900px', 
          width: '100%',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {renderText()}

          {/* Long horizontal image */}
          <div style={{ 
            width: '100%', 
            height: '180px', 
            backgroundColor: '#e5e5e5',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '40px',
            marginBottom: '40px'
          }}>
            <Image
              key={`img1-${currentLayout}`}
              src={current.images[0]}
              alt="Horizontal"
              fill
              style={{ objectFit: 'cover' }}
              sizes="900px"
              priority
            />
          </div>
        </div>
      );
    }

    // Layout 5: Two horizontal photos with text
    if (currentLayout === 5) {
      return (
        <div style={{ 
          maxWidth: '850px', 
          width: '100%',
          position: 'relative',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.4s ease'
        }}>
          {renderText()}

          {/* Two photos side by side */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginTop: '30px'
          }}>
            <div style={{ 
              width: '100%', 
              height: '280px', 
              backgroundColor: '#e5e5e5',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                key={`img1-${currentLayout}`}
                src={current.images[0]}
                alt="Photo 1"
                fill
                style={{ objectFit: 'cover' }}
                sizes="415px"
                priority
              />
            </div>
            <div style={{ 
              width: '100%', 
              height: '280px', 
              backgroundColor: '#e5e5e5',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                key={`img2-${currentLayout}`}
                src={current.images[1]}
                alt="Photo 2"
                fill
                style={{ objectFit: 'cover' }}
                sizes="415px"
              />
            </div>
          </div>
        </div>
      );
    }

    // Layout 6: Minimalist single portrait with text below
    return (
      <div style={{ 
        maxWidth: '600px', 
        width: '100%',
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 0.4s ease'
      }}>
        {/* Large portrait */}
        <div style={{ 
          width: '100%', 
          height: '400px', 
          backgroundColor: '#e5e5e5',
          marginBottom: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Image
            key={`img1-${currentLayout}`}
            src={current.images[0]}
            alt="Portrait"
            fill
            style={{ objectFit: 'cover' }}
            sizes="600px"
            priority
          />
        </div>

        <div style={{ textAlign: 'left' }}>
          {renderText()}
        </div>
      </div>
    );
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F6F7F1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      position: 'relative'
    }}>
      {renderLayout()}

      {/* Arrow Button - Bottom Right */}
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#1a1a1a',
          border: 'none',
          cursor: isTransitioning ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          transform: isTransitioning ? 'scale(0.9)' : 'scale(1)',
          opacity: isTransitioning ? 0.5 : 1
        }}
        onMouseEnter={(e) => {
          if (!isTransitioning) {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = '#2a2a2a';
          }
        }}
        onMouseLeave={(e) => {
          if (!isTransitioning) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#1a1a1a';
          }
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}
