import { config } from 'dotenv';
import { resolve } from 'path';
import { sendBirthdayCountdownEmail } from '../lib/email';

// Load environment variables
config({ path: resolve(process.cwd(), '.env.local') });

async function testEmail() {
  console.log('🧪 Testing birthday countdown email...');
  console.log('📧 Recipient: muhammedyazeen10@gmail.com');
  console.log('---');

  // Calculate actual days remaining
  const targetDate = new Date('2026-02-06T18:30:00Z');
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));

  console.log(`📅 Days remaining: ${daysRemaining}`);
  console.log('Sending test email...\n');

  const result = await sendBirthdayCountdownEmail(daysRemaining);

  if (result.success) {
    console.log('✅ Test email sent successfully!');
    console.log('📬 Check muhammedyazeen10@gmail.com for the email');
  } else {
    console.error('❌ Failed to send test email:');
    console.error(result.error);
  }

  process.exit(0);
}

testEmail();
