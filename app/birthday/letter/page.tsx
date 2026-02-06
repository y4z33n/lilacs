'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LetterPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [showClue, setShowClue] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'hope') {
      setIsUnlocked(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 2000);
    }
  };

  if (!isUnlocked) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f4ff 0%, #e6e0f5 50%, #f0ebff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        position: 'relative'
      }}>
        <style jsx global>{`
          @font-face {
            font-family: 'Canela Thin Italic';
            src: url('/fonts/Canela Family/Canela-ThinItalic-Trial.otf') format('opentype');
            font-weight: 100;
            font-style: italic;
          }
          @font-face {
            font-family: 'Canela Bold Italic';
            src: url('/fonts/Canela Family/Canela-BoldItalic-Trial.otf') format('opentype');
            font-weight: 700;
            font-style: italic;
          }
          @font-face {
            font-family: 'Canela Regular';
            src: url('/fonts/Canela Family/Canela-Regular-Trial.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
          }
        `}</style>

        <div style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f4ff 100%)',
            padding: '60px 50px',
            borderRadius: '16px',
            boxShadow: '0 15px 50px rgba(156, 136, 200, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(220, 213, 240, 0.4) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            <h1 style={{
              fontSize: '48px',
              fontFamily: 'Canela Bold Italic, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#4a4064',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 1
            }}>
              from yours.
            </h1>

            

            <form onSubmit={handleSubmit} style={{
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                marginBottom: '30px',
                textAlign: 'left'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontFamily: 'serif',
                  color: '#5a4a74',
                  marginBottom: '12px',
                  fontStyle: 'italic',
                  lineHeight: '1.5'
                }}>
                  What is the one thing you told me not to put faith on but I kept anyway?
                </label>
                
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your answer..."
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    fontSize: '16px',
                    fontFamily: 'serif',
                    border: isWrong ? '2px solid #c67b7b' : '2px solid #d8cff5',
                    borderRadius: '8px',
                    outline: 'none',
                    backgroundColor: '#fefeff',
                    color: '#4a4064',
                    transition: 'all 0.3s ease',
                    boxShadow: isWrong 
                      ? '0 4px 12px rgba(198, 123, 123, 0.2)' 
                      : '0 4px 12px rgba(216, 207, 245, 0.3)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#c4b5e8';
                    e.target.style.boxShadow = '0 4px 16px rgba(196, 181, 232, 0.4)';
                  }}
                  onBlur={(e) => {
                    if (!isWrong) {
                      e.target.style.borderColor = '#d8cff5';
                      e.target.style.boxShadow = '0 4px 12px rgba(216, 207, 245, 0.3)';
                    }
                  }}
                />
                
                {isWrong && (
                  <p style={{
                    color: '#c67b7b',
                    fontSize: '14px',
                    marginTop: '8px',
                    fontFamily: 'serif',
                    fontStyle: 'italic'
                  }}>
                    Not quite right. Try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontFamily: 'serif',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #b8a8d8 0%, #9d8bc4 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(157, 139, 196, 0.3)',
                  marginBottom: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(157, 139, 196, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(157, 139, 196, 0.3)';
                }}
              >
                Unlock Letter
              </button>

              

              
            </form>
          </div>

          <button
            onClick={() => router.back()}
            style={{
              marginTop: '30px',
              padding: '12px 24px',
              fontSize: '14px',
              fontFamily: 'serif',
              fontStyle: 'italic',
              color: '#7a6a94',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Letter content after unlocking
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f4ff 0%, #e6e0f5 50%, #f0ebff 100%)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '60px 40px',
        position: 'relative',
        width: '100vw',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        // Only allow vertical scroll if content is taller than viewport
        // This keeps the page scrollable, not the letter box
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
          font-family: 'Canela Bold Italic';
          src: url('/fonts/Canela Family/Canela-BoldItalic-Trial.otf') format('opentype');
          font-weight: 700;
          font-style: italic;
        }
        @font-face {
          font-family: 'Canela Regular';
          src: url('/fonts/Canela Family/Canela-Regular-Trial.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
        }
      `}</style>

      <div style={{
        maxWidth: '800px',
        width: '100%'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #faf8ff 50%, #f5f2ff 100%)',
          padding: '80px 70px',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(156, 136, 200, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30%',
            left: '-20%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(220, 213, 240, 0.3) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{
            position: 'absolute',
            bottom: '-40%',
            right: '-30%',
            width: '70%',
            height: '70%',
            background: 'radial-gradient(circle, rgba(196, 181, 232, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <h1 style={{
            fontSize: '46px',
            fontFamily: 'Canela Bold Italic, serif',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#4a4064',
            marginBottom: '40px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            from yours.
          </h1>

          <div style={{
            position: 'relative',
            zIndex: 1
          }}>
            

            <div style={{
              padding: '40px',
              background: 'linear-gradient(135deg, rgba(248, 244, 255, 0.5) 0%, rgba(240, 235, 255, 0.5) 100%)',
              borderRadius: '12px',
              marginBottom: '30px'
            }}>
              <p style={{
                fontSize: '16px',
                fontFamily: 'serif',
                color: '#6a5a84',
                lineHeight: '2',
                marginBottom: '20px'
              }}>
                hey love,
              </p>

              <p style={{
                fontSize: '16px',
                fontFamily: 'serif',
                color: '#6a5a84',
                lineHeight: '2',
                marginBottom: '20px'
              }}>
                First of all, happy birthday! I hope this day brings you as much joy and love you deserve. You know how much I love you and how grateful I am to have you in my life. You deserve all the happiness in the world, and I wish I could give you everything you want. You are the most beautiful person I know, inside and out. Your kindness, your smile, your laugh, your heart... everything about you is perfect to me. I hope this letter can express even a fraction of how much I care about you and how much you mean to me. You make me feel special. You make me feel loved. You make me feel alive. I am so lucky to have you as my girlfriend, and I promise to always cherish and support you in everything you do. 
              </p>

              <p style={{
                fontSize: '16px',
                fontFamily: 'serif',
                color: '#6a5a84',
                lineHeight: '2',
                marginBottom: '20px'
              }}>
                Last few days have been rough. We had our differences. I just want to apologize for anything I may have done wrong. I was a little bit confused with the whole situation, but I wanted to understand you. I'm learning new things about you every day. Do you know what's my heart saying even though we are facing this situation? "All thing will pass and we will live together forever." I believe in us, and I believe in our love. No matter what happens, I will always be here for you, supporting you, loving you, and cherishing you. You are my everything, and I can't imagine my life without you.
              </p>

                <p style={{
                fontSize: '16px',
                fontFamily: 'serif',
                color: '#6a5a84',
                lineHeight: '2',
                marginBottom: '20px'
              }}>
                I hope you find all your answers in me. I hope you find your happiness in me. I hope you find your home in me. I hope you find your future in me. I hope you find your everything in me. Please don't ever forget that I love you more than anything in this world, and I will always be here for you, no matter what. Everything will be alright. I promise. I love you, and I will always love you, no matter what happens. You are my forever, and I will always be yours.
              </p>

              <p style={{
                fontSize: '16px',
                fontFamily: 'serif',
                color: '#6a5a84',
                lineHeight: '2',
                marginTop: '40px'
              }}>
                from yours,<br />
                Lilac
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '50px',
            position: 'relative',
            zIndex: 1
          }}>
            
          </div>
        </div>
      </div>
    </div>
  );
}
