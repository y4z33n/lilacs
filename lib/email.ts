import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBirthdayCountdownEmail(daysRemaining: number) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Birthday Countdown <onboarding@resend.dev>',
      to: ['muhammedyazeen10@gmail.com', 'fousiyahameed2001@gmail.com'],
      subject: `${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} ✨`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Birthday Countdown</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); min-height: 100vh;">
            <table width="100%" cellpadding="0" cellspacing="0" style="min-height: 100vh;">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  
                  <!-- Floating Number -->
                  <div style="margin-bottom: 24px;">
                    <div style="display: inline-block; position: relative;">
                      <div style="font-size: 120px; font-weight: 300; color: #ffffff; line-height: 1; letter-spacing: -4px; text-shadow: 0 0 40px rgba(255,255,255,0.3);">
                        ${daysRemaining}
                      </div>
                    </div>
                  </div>
                  
                  <!-- Divider Line -->
                  <div style="width: 60px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent); margin: 32px auto;"></div>
                  
                  <!-- Text -->
                  <div style="margin-bottom: 8px;">
                    <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.7); letter-spacing: 3px; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                      ${daysRemaining === 1 ? 'day remains' : 'days remain'}
                    </p>
                  </div>
                  
                  <div>
                    <p style="margin: 0; font-size: 18px; color: rgba(255,255,255,0.9); font-style: italic;">
                      until February 7
                    </p>
                  </div>
                  
                  <!-- Bottom Accent -->
                  <div style="margin-top: 60px;">
                    <p style="margin: 0; font-size: 24px; color: rgba(255,255,255,0.4);">
                      ✦
                    </p>
                  </div>
                  
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
