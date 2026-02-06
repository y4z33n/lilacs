'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ThankYouPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setShowMessage(true), 300);
    setTimeout(() => setShowSubtext(true), 1200);
    
    const timer = setTimeout(() => {
      router.push('/birthday/next');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleClick = () => {
    router.push('/birthday/next');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div 
      onClick={handleClick}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: '40px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8f4ff 0%, #e6e0f5 30%, #f0ebff 70%, #fef7ff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      <style jsx global>{`
        @font-face {
          font-family: 'Canela Thin Italic';
          src: url('/fonts/Canela Family/Canela-ThinItalic-Trial.otf') format('opentype');
          font-weight: 100;
          font-style: italic;
        }
        @font-face {
          font-family: 'Canela Regular';
          src: url('/fonts/Canela Family/Canela-Regular-Trial.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Canela Bold';
          src: url('/fonts/Canela Family/Canela-Bold-Trial.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
        }
      `}</style>

      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(220, 213, 240, 0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(196, 181, 232, 0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite 2s'
      }}></div>

      {/* Main content */}
      <div style={{
        maxWidth: '1000px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{ 
          fontSize: 'clamp(36px, 7vw, 72px)',
          fontFamily: 'Canela Thin Italic, serif',
          fontWeight: 100,
          fontStyle: 'italic',
          letterSpacing: '0.01em',
          color: '#4a4064',
          textAlign: 'center',
          lineHeight: '1.3',
          marginBottom: '30px',
          opacity: showMessage ? 1 : 0,
          transform: showMessage ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          Thank you for being
          <br />
          <span style={{
            fontFamily: 'Canela Bold, serif',
            fontWeight: 700,
            fontStyle: 'normal',
            color: '#9d8bc4'
          }}>
            a part of my life
          </span>
        </h1>

        <div style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #c4b5e8 50%, transparent 100%)',
          margin: '0 auto 30px',
          opacity: showSubtext ? 1 : 0,
          transition: 'opacity 1s ease-in-out 0.3s'
        }}></div>

        <p style={{
          fontSize: 'clamp(14px, 2vw, 17px)',
          fontFamily: 'Canela Regular, serif',
          color: '#6b5a7e',
          textAlign: 'center',
          lineHeight: '1.8',
          maxWidth: '700px',
          margin: '0 auto 40px',
          opacity: showSubtext ? 0.75 : 0,
          transform: showSubtext ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
        }}>
          
          and thank you for the memories.
        </p>

        <p style={{
          fontSize: '13px',
          fontFamily: 'serif',
          fontStyle: 'italic',
          color: '#9d8bc4',
          marginTop: '50px',
          textAlign: 'center',
          opacity: showSubtext ? 0.5 : 0,
          transition: 'opacity 1s ease-in-out 1s'
        }}>
          Click anywhere or wait to continue...
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
