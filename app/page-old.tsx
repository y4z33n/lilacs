'use client';

import { useState, useEffect } from 'react';
import LightRays from './Background';
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

  useEffect(() => {
    setMounted(true);
    // Target date: February 7, 2026 at 12:00 AM UTC
    const targetDate = new Date('2026-02-07T00:00:00Z').getTime();

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
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenClick = () => {
    window.location.href = '/birthday/collage';
  };

  const isDark = !countdownFinished;

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
        backgroundColor: isDark ? '#000000' : '#fef7ff',
        transition: 'background-color 1s ease',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? "#ffffff" : "#c8a2c8"}
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        {!countdownFinished ? (
          <div
            style={{
              display: 'flex',
              gap: '48px',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Counter value={timeLeft.days} isDark={isDark} />
              <div
                style={{
                  fontSize: '24px',
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#6b46c1',
                  fontWeight: '500',
                  letterSpacing: '2px',
                }}
              >
                DAYS
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Counter value={timeLeft.hours} isDark={isDark} />
              <div
                style={{
                  fontSize: '24px',
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#6b46c1',
                  fontWeight: '500',
                  letterSpacing: '2px',
                }}
              >
                HOURS
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Counter value={timeLeft.minutes} isDark={isDark} />
              <div
                style={{
                  fontSize: '24px',
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#6b46c1',
                  fontWeight: '500',
                  letterSpacing: '2px',
                }}
              >
                MINUTES
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Counter value={timeLeft.seconds} isDark={isDark} />
              <div
                style={{
                  fontSize: '24px',
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#6b46c1',
                  fontWeight: '500',
                  letterSpacing: '2px',
                }}
              >
                SECONDS
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
              animation: 'fadeIn 0.8s ease-out',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#6b46c1',
                margin: 0,
              }}
            >
              Happy Birthday!
            </h1>
            <button
              onClick={handleOpenClick}
              style={{
                padding: '16px 32px',
                fontSize: '20px',
                fontWeight: '600',
                borderRadius: '9999px',
                backgroundColor: '#9333ea',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundColor = '#7c3aed';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#9333ea';
              }}
            >
              Open Your Present 🎁
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
