'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
// Dynamically import TextType to avoid SSR issues
const TextType = dynamic(() => import('../../../components/TextType'), { ssr: false });
import Image from 'next/image';

export default function BirthdayWishPage() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    // Show quote first
    setTimeout(() => setShowQuote(true), 300);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleArrowClick = () => {
    setShowCard(true);
    setTimeout(() => setAnimateCard(true), 50);
  };

  const handleCardClick = () => {
    window.location.href = '/birthday/collage';
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#fafafa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style jsx global>{`
        @font-face {
          font-family: 'Lavonia';
          src: url('/fonts/ed-lavonia-regular.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Helvetica Bold';
          src: url('/fonts/Helvetica-Bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
        }
        @font-face {
          font-family: 'Hatton Bold';
          src: url('/fonts/PP Hatton Bold 700.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: 'Canela Thin';
          src: url('/fonts/Canela Family/Canela-ThinItalic.otf') format('opentype');
          font-weight: 100;
          font-style: italic;
        }
      `}</style>

      {/* Quote Section */}
      {!showCard && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '40px' : '80px',
            zIndex: 10,
            opacity: showQuote ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        >
          <blockquote
            style={{
              fontFamily: 'Canela Thin, serif',
              fontSize: isMobile ? '24px' : '24px',
              fontWeight: 100,
              fontStyle: 'italic',
              color: '#2c2c2c',
              textAlign: 'center',
              lineHeight: 1.2,
              maxWidth: '900px',
              margin: 0,
              opacity: showQuote ? 1 : 0,
              transform: showQuote ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
            }}
          >
            <span style={{ display: 'inline' }}>
              When he looked into her dark eyes, and saw that her lips were poised between a laugh and
              silence, he learned the most important part of the language that all the world spoke—the
              language that everyone on earth was capable of understanding in their heart. It was <b style={{fontWeight:600, fontFamily:'Canela Thin, serif'}}>love</b>.
            </span>
          </blockquote>
          <p
            style={{
              fontFamily: 'Canela Thin, serif',
              fontSize: isMobile ? '16px' : '15px',
              fontWeight: 100,
              fontStyle: 'italic',
              color: '#666',
              marginTop: '30px',
              opacity: showQuote ? 1 : 0,
              transform: showQuote ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s',
            }}
          >
            — The Alchemist, Paulo Coelho
          </p>
          {/* Arrow Button - bottom right */}
          <button
            onClick={handleArrowClick}
            style={{
              position: 'absolute',
              bottom: isMobile ? '40px' : '60px',
              right: isMobile ? '40px' : '60px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              opacity: showQuote ? 1 : 0,
              pointerEvents: showQuote ? 'auto' : 'none',
              transform: showQuote ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
              transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s, transform 0.3s ease',
              zIndex: 20,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <div
              style={{
                width: isMobile ? '50px' : '70px',
                height: isMobile ? '50px' : '70px',
                position: 'relative',
              }}
            >
              <Image
                src="/pngs/arrow.png"
                alt="Continue"
                fill
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(0) saturate(100%)',
                }}
              />
            </div>
          </button>
        </div>
      )}

      {/* Big Card */}
      {showCard && (
        <div
          onClick={handleCardClick}
          style={{
            position: 'relative',
            width: isMobile ? '95vw' : '85vw',
            maxWidth: '1400px',
            height: isMobile ? '85vh' : '90vh',
            maxHeight: '900px',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.2)',
            opacity: animateCard ? 1 : 0,
            transform: animateCard ? 'scale(1) rotateY(0deg)' : 'scale(0.8) rotateY(-15deg)',
            transition: 'all 5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            cursor: 'pointer',
            backgroundColor: '#fff',
          }}
        >
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: animateCard ? 1 : 0,
          transform: animateCard ? 'scale(1)' : 'scale(1.1)',
          transition: 'opacity 2.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}>
          <Image
            src="/happy/bday.png"
            alt="Birthday"
            fill
            style={{ 
              objectFit: 'cover',
            }}
            priority
          />
          {/* Gradient overlay for text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
          }} />
        </div>

        {/* Wish Text Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: isMobile ? '100px' : '150px',
            left: 0,
            right: 0,
            textAlign: 'center',
            padding: '0 40px',
            opacity: animateCard ? 1 : 0,
            transform: animateCard ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '30px' : '70px',
              fontFamily: 'Lavonia, serif',
              color: '#ffffff',
              margin: 0,
              marginBottom: isMobile ? '8px' : '10px',
              fontWeight: 'normal',
              letterSpacing: '0.03em',
              textShadow: '0 6px 30px rgba(0, 0, 0, 0.6), 0 3px 12px rgba(0, 0, 0, 0.4)',
              lineHeight: 1.1,
              opacity: animateCard ? 1 : 0,
              transform: animateCard ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s',
            }}
          >
            Happy Birthday
          </h1>
          <h2
            style={{
              fontSize: isMobile ? '60px' : '130px',
              fontFamily: 'Hatton Bold, serif',
              color: '#ffffff',
              margin: 0,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textShadow: '0 6px 30px rgba(0, 0, 0, 0.6), 0 3px 12px rgba(0, 0, 0, 0.4)',
              lineHeight: 1,
              opacity: animateCard ? 1 : 0,
              transform: animateCard ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s',
            }}
          >
            FOUSI
          </h2>
        </div>

        {/* Arrow at Bottom Right */}
        <div
          style={{
            position: 'absolute',
            bottom: isMobile ? '30px' : '40px',
            right: isMobile ? '30px' : '40px',
            width: isMobile ? '60px' : '80px',
            height: isMobile ? '60px' : '80px',
            opacity: animateCard ? 1 : 0,
            transform: animateCard ? 'translate(0, 0) scale(1)' : 'translate(20px, 20px) scale(0.8)',
            transition: 'all 5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s',
            zIndex: 3,
          }}
        >
          <Image
            src="/pngs/arrow.png"
            alt="Arrow"
            fill
            style={{
              objectFit: 'contain',
              filter: 'invert(1) sepia(1) hue-rotate(240deg) saturate(2) brightness(1.2)',
            }}
          />
        </div>
      </div>
      )}
    </div>
  );
}
