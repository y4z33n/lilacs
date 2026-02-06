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
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || 'Anonymous',
          message: message.trim(),
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setShowModal(false);
          setName('');
          setMessage('');
          setSubmitSuccess(false);
        }, 2000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f4ff 0%, #e6e0f5 50%, #f0ebff 100%)',
      padding: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Bento Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        width: '100%',
        height: '85vh',
        minHeight: '600px',
        maxHeight: '750px'
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
            gridColumn: '1',
            gridRow: '1 / 4'
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
                  tap to see the most beautiful person in the world
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
            gridColumn: '2 / 4',
            gridRow: '1'
          }}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            height: '100%',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f4ff 100%)',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: hoveredCard === 1 
              ? '0 12px 24px rgba(156, 136, 200, 0.2)' 
              : '0 4px 12px rgba(156, 136, 200, 0.1)',
            transform: hoveredCard === 1 ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-30%',
              right: '-10%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(220, 213, 240, 0.4) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            <h2 style={{
              fontSize: '32px',
              fontWeight: '300',
              color: '#4a4064',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.3',
              position: 'relative',
              zIndex: 1
            }}>
              film rolls.
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#6a5a84',
              fontSize: '14px',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>
              <span>Explore memories</span>
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
            gridColumn: '2',
            gridRow: '2'
          }}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            height: '100%',
            background: 'linear-gradient(135deg, #f8f4ff 0%, #e6e0f5 100%)',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: hoveredCard === 2 
              ? '0 12px 24px rgba(156, 136, 200, 0.25)' 
              : '0 4px 12px rgba(156, 136, 200, 0.12)',
            transform: hoveredCard === 2 ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20%',
              left: '-20%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            <h2 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: '#4a4064',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.3',
              position: 'relative',
              zIndex: 1
            }}>
              about you.
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#6a5a84',
              fontSize: '14px',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>              <span>View</span>
              <span style={{
                transform: hoveredCard === 2 ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </div>
          </div>
        </Link>

        {/* From Yours Card */}
        <Link 
          href="/birthday/letter"
          style={{ 
            textDecoration: 'none',
            gridColumn: '3',
            gridRow: '2 / 4'
          }}
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            height: '100%',
            background: 'linear-gradient(135deg, #dcd5f0 0%, #c4b5e8 50%, #d8cff5 100%)',
            borderRadius: '12px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: hoveredCard === 4 
              ? '0 16px 32px rgba(156, 136, 200, 0.35)' 
              : '0 8px 20px rgba(156, 136, 200, 0.25)',
            transform: hoveredCard === 4 ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              color: '#4a4064',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.3',
              textAlign: 'center',
              marginBottom: '16px',
              position: 'relative',
              zIndex: 1
            }}>
              from yours ❤
            </h2>

            

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#4a4064',
              fontSize: '14px',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>
              <span>Open</span>
              <span style={{
                transform: hoveredCard === 4 ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </div>
          </div>
        </Link>

        {/* Leave a Message Card */}
        <div
          onClick={() => setShowModal(true)}
          style={{ 
            gridColumn: '2',
            gridRow: '3',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            height: '100%',
            background: 'linear-gradient(135deg, #e6e0f5 0%, #d8cff5 100%)',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: hoveredCard === 3 
              ? '0 12px 24px rgba(156, 136, 200, 0.25)' 
              : '0 4px 12px rgba(156, 136, 200, 0.12)',
            transform: hoveredCard === 3 ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-30%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            <h2 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: '#4a4064',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.3',
              position: 'relative',
              zIndex: 1
            }}>
              got something to say?
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#6a5a84',
              fontSize: '14px',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>
              <span>Write</span>
              <span style={{
                transform: hoveredCard === 3 ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(74, 64, 100, 0.5)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => !isSubmitting && setShowModal(false)}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #faf8ff 100%)',
              borderRadius: '16px',
              padding: '50px 40px',
              maxWidth: '600px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(156, 136, 200, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(220, 213, 240, 0.4) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            {!submitSuccess ? (
              <form onSubmit={handleSendMessage} style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '300',
                  color: '#4a4064',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '10px',
                  textAlign: 'center'
                }}>
                  Leave a Message
                </h2>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontFamily: 'Georgia, serif',
                    color: '#5a4a74',
                    marginBottom: '8px'
                  }}>
                    Your Message *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    required
                    disabled={isSubmitting}
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      fontSize: '15px',
                      fontFamily: 'Georgia, serif',
                      border: '2px solid #e6e0f5',
                      borderRadius: '8px',
                      outline: 'none',
                      backgroundColor: '#fefeff',
                      color: '#4a4064',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(216, 207, 245, 0.2)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#c4b5e8';
                      e.target.style.boxShadow = '0 4px 12px rgba(196, 181, 232, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e6e0f5';
                      e.target.style.boxShadow = '0 2px 8px rgba(216, 207, 245, 0.2)';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    disabled={isSubmitting}
                    style={{
                      flex: 1,
                      padding: '14px 24px',
                      fontSize: '15px',
                      fontFamily: 'Georgia, serif',
                      color: '#7a6a94',
                      background: 'transparent',
                      border: '2px solid #d8cff5',
                      borderRadius: '8px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = '#f8f4ff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim()}
                    style={{
                      flex: 1,
                      padding: '14px 24px',
                      fontSize: '15px',
                      fontFamily: 'Georgia, serif',
                      fontWeight: 600,
                      color: '#ffffff',
                      background: isSubmitting || !message.trim()
                        ? 'linear-gradient(135deg, #d0c5e0 0%, #b8adc4 100%)'
                        : 'linear-gradient(135deg, #b8a8d8 0%, #9d8bc4 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: isSubmitting || !message.trim() ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 16px rgba(157, 139, 196, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting && message.trim()) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(157, 139, 196, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(157, 139, 196, 0.3)';
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '64px',
                  marginBottom: '20px'
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '300',
                  color: '#4a4064',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '12px'
                }}>
                  Message Sent!
                </h3>
                
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
