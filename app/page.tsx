'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // For testing: set to 5 seconds from now
    const targetDate = new Date(Date.now() + 5000).getTime();

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
        setTheme('light');
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenClick = () => {
    window.location.href = '/birthday/collage';
  };

  const isDark = theme === 'dark';

  return (
    <main className={`relative w-screen h-screen overflow-hidden transition-colors duration-1000 ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-lilac-50 to-white'
    }`}>
      <div className="absolute inset-0">
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

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          {!countdownFinished ? (
            <div className="flex gap-8 md:gap-12">
              <div className="flex flex-col items-center">
                <Counter
                  value={timeLeft.days}
                  fontSize={120}
                  textColor={isDark ? "#ffffff" : "#6b46c1"}
                  fontWeight="bold"
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <div className={`text-xl md:text-2xl mt-4 ${isDark ? 'text-white/70' : 'text-purple-600'}`}>DAYS</div>
              </div>
              <div className="flex flex-col items-center">
                <Counter
                  value={timeLeft.hours}
                  fontSize={120}
                  textColor={isDark ? "#ffffff" : "#6b46c1"}
                  fontWeight="bold"
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <div className={`text-xl md:text-2xl mt-4 ${isDark ? 'text-white/70' : 'text-purple-600'}`}>HOURS</div>
              </div>
              <div className="flex flex-col items-center">
                <Counter
                  value={timeLeft.minutes}
                  fontSize={120}
                  textColor={isDark ? "#ffffff" : "#6b46c1"}
                  fontWeight="bold"
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <div className={`text-xl md:text-2xl mt-4 ${isDark ? 'text-white/70' : 'text-purple-600'}`}>MINUTES</div>
              </div>
              <div className="flex flex-col items-center">
                <Counter
                  value={timeLeft.seconds}
                  fontSize={120}
                  textColor={isDark ? "#ffffff" : "#6b46c1"}
                  fontWeight="bold"
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <div className={`text-xl md:text-2xl mt-4 ${isDark ? 'text-white/70' : 'text-purple-600'}`}>SECONDS</div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-purple-800'}`}
              >
                Happy Birthday!
              </motion.h1>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenClick}
                className={`px-8 py-4 text-xl font-semibold rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                } shadow-lg hover:shadow-xl`}
              >
                Open Your Present 🎁
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
