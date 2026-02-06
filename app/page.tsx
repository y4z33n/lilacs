'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the birthday page immediately on mount
    router.replace('/birthday/wish');
  }, [router]);

  // Optionally, render nothing while redirecting
  return null;
}
