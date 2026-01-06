'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  value: number;
  isDark: boolean;
}

export default function SimpleCounter({ value, isDark }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [fontSize, setFontSize] = useState(120);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  useEffect(() => {
    const updateFontSize = () => {
      setFontSize(window.innerWidth < 768 ? 48 : 120);
    };
    
    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  const formattedValue = displayValue.toString().padStart(2, '0');

  return (
    <div
      style={{
        fontSize: `${fontSize}px`,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      {formattedValue}
    </div>
  );
}
