import { NextResponse } from 'next/server';
import { sendBirthdayCountdownEmail } from '@/lib/email';

export async function POST() {
  try {
    // Target date: February 7, 2026 at 12:00 AM IST
    const targetDate = new Date('2026-02-06T18:30:00Z');
    const now = new Date();
    
    // Calculate days remaining
    const difference = targetDate.getTime() - now.getTime();
    const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    // Don't send if the date has passed or is today
    if (daysRemaining <= 0) {
      return NextResponse.json(
        { message: 'Birthday has arrived! No countdown email needed.' },
        { status: 200 }
      );
    }
    
    // Send the email
    const result = await sendBirthdayCountdownEmail(daysRemaining);
    
    if (result.success) {
      return NextResponse.json(
        { message: 'Countdown email sent successfully', daysRemaining },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to send email', error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in send-countdown API:', error);
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Allow GET requests for testing
  return POST();
}
