import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, message } = await request.json();

    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Fousi <messages@fousiloveslilacs.me>',
      to: ['muhammedyazeen10@gmail.com'],
      subject: 'Message from Fousi',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background: linear-gradient(135deg, #f8f4ff 0%, #e6e0f5 50%, #f0ebff 100%); min-height: 100vh;">
            <table width="100%" cellpadding="0" cellspacing="0" style="min-height: 100vh;">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  <table width="600" cellpadding="0" cellspacing="0" style="background: white; border-radius: 16px; box-shadow: 0 20px 60px rgba(156, 136, 200, 0.25); overflow: hidden;">
                   
                      <td style="padding: ${name ? '20px' : '30px'} 40px 40px 40px;">
                        <p style="margin: 0 0 12px 0; font-size: 14px; color: #7a6a94; text-transform: uppercase; letter-spacing: 1px;">Message:</p>
                        <div style="background: #f8f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #c4b5e8;">
                          <p style="margin: 0; font-size: 16px; color: #4a4064; line-height: 1.8; white-space: pre-wrap; font-family: 'Georgia', serif;">${message}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 0 40px 40px 40px;">
                        <p style="margin: 0; font-size: 13px; color: #9a8ab4; font-style: italic; text-align: center;">
                          Sent from your birthday experience
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in send-message route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
