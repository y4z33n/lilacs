import cron from 'node-cron';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(process.cwd(), '.env.local') });

async function sendCountdownEmail() {
  try {
    console.log(`[${new Date().toISOString()}] Attempting to send countdown email...`);
    
    const response = await fetch('http://localhost:3000/api/send-countdown', {
      method: 'POST',
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log(`[${new Date().toISOString()}] ✅ Email sent successfully:`, data);
    } else {
      console.error(`[${new Date().toISOString()}] ❌ Failed to send email:`, data);
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ❌ Error sending email:`, error);
  }
}

// Schedule the job to run every day at 12:00 PM IST (6:30 AM UTC)
// Cron format: second minute hour day month weekday
// IST is UTC+5:30, so 12:00 PM IST = 6:30 AM UTC
const cronSchedule = '30 6 * * *'; // Runs at 06:30 UTC (12:00 PM IST)

console.log('🚀 Birthday Countdown Email Scheduler Started');
console.log(`📅 Scheduled to run daily at 12:00 PM IST (6:30 AM UTC)`);
console.log(`⏰ Target: February 7, 2026 at 12:00 AM IST`);
console.log(`📧 Recipients: muhammedyazeen10@gmail.com, fousiyahameed2001@gmail.com`);
console.log('---');

// Schedule the cron job
cron.schedule(cronSchedule, sendCountdownEmail, {
  timezone: 'UTC'
});

// Send an immediate test email on startup (optional - comment out if not needed)
console.log('Sending initial test email...');
sendCountdownEmail();

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down email scheduler...');
  process.exit(0);
});
