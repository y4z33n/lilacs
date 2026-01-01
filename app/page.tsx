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

  useEffect(() => {
    const targetDate = new Date('2026-02-07T00:00:00').getTime();

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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
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
          <div className="flex gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <Counter
                value={timeLeft.days}
                fontSize={120}
                textColor="#ffffff"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div className="text-xl md:text-2xl text-white/70 mt-4">DAYS</div>
            </div>
            <div className="flex flex-col items-center">
              <Counter
                value={timeLeft.hours}
                fontSize={120}
                textColor="#ffffff"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div className="text-xl md:text-2xl text-white/70 mt-4">HOURS</div>
            </div>
            <div className="flex flex-col items-center">
              <Counter
                value={timeLeft.minutes}
                fontSize={120}
                textColor="#ffffff"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div className="text-xl md:text-2xl text-white/70 mt-4">MINUTES</div>
            </div>
            <div className="flex flex-col items-center">
              <Counter
                value={timeLeft.seconds}
                fontSize={120}
                textColor="#ffffff"
                fontWeight="bold"
                gradientFrom="transparent"
                gradientTo="transparent"
              />
              <div className="text-xl md:text-2xl text-white/70 mt-4">SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
