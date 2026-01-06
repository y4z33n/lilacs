'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const targetDate = new Date('2026-02-07T00:00:00').getTime();
    const now = new Date().getTime();
    if (now < targetDate) {
      router.push('/');
      return;
    }

    const timer = setTimeout(() => {
      router.push('/birthday/next');
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleClick = () => {
    router.push('/birthday/next');
  };

  return (
    <div 
      onClick={handleClick}
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#F6F7F1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        cursor: 'pointer'
      }}
    >
      <h1 style={{ 
        fontSize: '56px',
        fontWeight: '300',
        letterSpacing: '0.02em',
        color: '#1a1a1a',
        fontFamily: 'Georgia, serif',
        textAlign: 'center',
        lineHeight: '1.4',
        maxWidth: '900px',
        animation: 'fadeIn 1.5s ease-in-out'
      }}>
        Thank you for being a part of my life
      </h1>

      <p style={{
        fontSize: '15px',
        color: '#666',
        marginTop: '40px',
        textAlign: 'center',
        opacity: 0.6
      }}>
        Click anywhere or wait to continue...
      </p>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
