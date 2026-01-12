'use client';

import { useState, useEffect } from 'react';
import Counter from './Counter';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Target: February 7, 2026, 12:00 AM IST (IST = UTC+5:30)
    const targetDate = new Date('2026-02-06T18:30:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setCountdownFinished(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setCountdownFinished(true);
        // Navigate to birthday wish page after countdown
        setTimeout(() => {
          window.location.href = '/birthday/wish';
        }, 500);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
