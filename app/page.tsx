'use client';

import { useState, useEffect } from 'react';
import Counter from './Counter';

export default function Home() {
  // Static zero timer
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Responsive check for mobile (optional)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

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
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '90%' : 'auto',
          maxWidth: '100%',
        }}
      >
        <div
          style={{
            display: isMobile ? 'grid' : 'flex',
            gridTemplateColumns: isMobile ? '1fr 1fr' : undefined,
            gap: isMobile ? '24px' : '48px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '8px' : '16px' }}>
              <Counter 
                value={timeLeft.days}
                fontSize={isMobile ? 48 : 120}
                textColor="#000000"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div
                style={{
                  fontSize: isMobile ? '12px' : '24px',
                  color: '#000000',
                  fontWeight: '500',
                  letterSpacing: isMobile ? '1px' : '2px',
                }}
              >
                DAYS
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '8px' : '16px' }}>
              <Counter 
                value={timeLeft.hours}
                fontSize={isMobile ? 48 : 120}
                textColor="#000000"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div
                style={{
                  fontSize: isMobile ? '12px' : '24px',
                  color: '#000000',
                  fontWeight: '500',
                  letterSpacing: isMobile ? '1px' : '2px',
                }}
              >
                HOURS
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '8px' : '16px' }}>
              <Counter 
                value={timeLeft.minutes}
                fontSize={isMobile ? 48 : 120}
                textColor="#000000"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div
                style={{
                  fontSize: isMobile ? '12px' : '24px',
                  color: '#000000',
                  fontWeight: '500',
                  letterSpacing: isMobile ? '1px' : '2px',
                }}
              >
                MINUTES
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '8px' : '16px' }}>
              <Counter 
                value={timeLeft.seconds}
                fontSize={isMobile ? 48 : 120}
                textColor="#000000"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div
                style={{
                  fontSize: isMobile ? '12px' : '24px',
                  color: '#000000',
                  fontWeight: '500',
                  letterSpacing: isMobile ? '1px' : '2px',
                }}
              >
                SECONDS
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
