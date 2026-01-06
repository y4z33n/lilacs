'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  value: number;
  isDark: boolean;
}

export default function SimpleCounter({ value, isDark }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const formattedValue = displayValue.toString().padStart(2, '0');

  return (
    <div
      style={{
        fontSize: '120px',
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
