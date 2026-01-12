'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NextPage() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      setStream(mediaStream);
      setShowCamera(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Unable to access camera. Please grant camera permissions.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F6F7F1',
      padding: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Bento Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '20px',
        maxWidth: '1100px',
        width: '100%',
        height: '80vh',
        maxHeight: '600px'
      }}>
        {/* Camera Card - Polaroid Style */}
        <div
          onClick={showCamera ? stopCamera : startCamera}
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            gridColumn: 'span 1',
            gridRow: 'span 2'
          }}
        >
          <div style={{
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: showCamera ? '16px 16px 60px 16px' : '32px 24px 60px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: showCamera ? 'flex-start' : 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            position: 'relative'
          }}>
            {!showCamera ? (
              <>
                <div style={{
                  width: '100%',
                  height: '70%',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e0e0e0'
                }}>
                  <span style={{
                    fontSize: '48px',
                    opacity: 0.3
                  }}>📷</span>
                </div>
                <h2 style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#1a1a1a',
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1.4',
                  textAlign: 'center'
                }}>
                  Tap to see the most beautiful person in the world
                </h2>
              </>
            ) : (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  style={{
                    width: '100%',
                    height: 'calc(100% - 44px)',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    transform: 'scaleX(-1)',
                    border: '1px solid #e0e0e0'
                  }}
                />
              </>
            )}
            
            {/* Polaroid bottom text area */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '12px',
              color: '#666',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
              {showCamera ? 'See, I told you.' : ''}
            </div>
          </div>
        </div>

        {/* View Gallery Card */}
        <Link 
          href="/gallery"
          style={{ 
            textDecoration: 'none',
            gridColumn: 'span 2',
            gridRow: 'span 1'
          }}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: hoveredCard === 1 
              ? '0 12px 24px rgba(0,0,0,0.1)' 
              : '0 2px 8px rgba(0,0,0,0.06)',
            transform: hoveredCard === 1 ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: '#1a1a1a',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.3'
            }}>
              View Gallery
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#1a1a1a',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <span>Explore</span>
              <span style={{
                transform: hoveredCard === 1 ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </div>
          </div>
        </Link>

        {/* Collage Card */}
        <Link 
          href="/birthday/collage"
          style={{ 
            textDecoration: 'none',
            gridColumn: 'span 1',
            gridRow: 'span 1'
          }}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: hoveredCard === 2 
              ? '0 12px 24px rgba(0,0,0,0.1)' 
              : '0 2px 8px rgba(0,0,0,0.06)',
            transform: hoveredCard === 2 ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: '#1a1a1a',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.3'
            }}>
              Collage
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#1a1a1a',
              fontSize: '14px',
              fontWeight: '500'
            }}>              <span>View</span>
              <div style={{
                width: '20px',
                height: '20px',
                position: 'relative',
                transform: hoveredCard === 2 ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease'
              }}>
                <Image
                  src="/pngs/arrow.png"
                  alt="Arrow"
                  width={20}
                  height={20}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </Link>

        {/* Leave a Message Card */}
        <Link 
          href="/birthday/message"
          style={{ 
            textDecoration: 'none',
            gridColumn: 'span 1',
            gridRow: 'span 1'
          }}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: hoveredCard === 3 
              ? '0 12px 24px rgba(0,0,0,0.1)' 
              : '0 2px 8px rgba(0,0,0,0.06)',
            transform: hoveredCard === 3 ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: '#1a1a1a',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.3'
            }}>
              Leave a Message
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#1a1a1a',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <span>Write</span>
              <div style={{
                width: '20px',
                height: '20px',
                position: 'relative',
                transform: hoveredCard === 3 ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease'
              }}>
                <Image
                  src="/pngs/arrow.png"
                  alt="Arrow"
                  width={20}
                  height={20}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
