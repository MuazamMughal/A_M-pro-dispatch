import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateName, validateEmail, validatePhone, validateMessage, escapeHtml } from '@/lib/validation';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, hp } = body;

    // Honeypot spam trap: if hidden field is filled, silently discard bot submission
    if (hp) {
      console.warn('🤖 Spam bot submission blocked by honeypot.');
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    // 1. Strict Input Validation
    const nameVal = validateName(name, 'Your Name');
    if (!nameVal.isValid) {
      return NextResponse.json({ error: nameVal.error }, { status: 400 });
    }

    const emailVal = validateEmail(email);
    if (!emailVal.isValid) {
      return NextResponse.json({ error: emailVal.error }, { status: 400 });
    }

    const phoneVal = validatePhone(phone);
    if (!phoneVal.isValid) {
      return NextResponse.json({ error: phoneVal.error }, { status: 400 });
    }

    const messageVal = validateMessage(message);
    if (!messageVal.isValid) {
      return NextResponse.json({ error: messageVal.error }, { status: 400 });
    }

    const cleanName = nameVal.cleanValue;
    const cleanEmail = emailVal.cleanValue;
    const formattedPhone = phoneVal.formatted;
    const cleanMessage = messageVal.cleanValue;

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.DISPATCH_EMAIL_TO || 'dispatchampro@gmail.com';
    const senderEmail = process.env.DISPATCH_EMAIL_FROM || 'A&M Pro Dispatch <onboarding@resend.dev>';

    // Fallback simulation mode for local dev without configured API key
    if (!apiKey || apiKey.includes('placeholder')) {
      console.warn('⚠️ RESEND_API_KEY is not configured. Simulating email dispatch for Contact Form:');
      console.log({ cleanName, cleanEmail, formattedPhone, cleanMessage });
      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Message received (Development Mode: Live Resend key required for production inbox delivery).',
      });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: cleanEmail,
      subject: `🚨 Contact Inquiry: ${cleanName} (${formattedPhone}) - A&M Pro Dispatch`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f8fafc; color: #0b0f17;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="background-color: #0b0f17; padding: 24px; text-align: center; border-bottom: 4px solid #dc2626;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px;">A&M PRO DISPATCH</h1>
              <p style="color: #dc2626; margin: 4px 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase;">Your Freight. Our Focus.</p>
            </div>
            <div style="padding: 24px;">
              <h2 style="font-size: 18px; color: #0b0f17; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">
                New Website Inquiry
              </h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Contact Name:</td>
                  <td style="padding: 8px 0; color: #0b0f17; font-weight: 600;">${escapeHtml(cleanName)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}" style="color: #dc2626; text-decoration: none;">${escapeHtml(cleanEmail)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phoneVal.cleanValue}" style="color: #0b0f17; font-weight: bold; text-decoration: none;">${escapeHtml(formattedPhone)}</a></td>
                </tr>
              </table>
              
              <div style="margin-top: 20px;">
                <h3 style="font-size: 14px; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Message / Note:</h3>
                <div style="padding: 16px; background-color: #f1f5f9; border-left: 4px solid #dc2626; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #1e293b;">
                  ${cleanMessage ? escapeHtml(cleanMessage) : '<em>No additional message was provided.</em>'}
                </div>
              </div>
            </div>
            <div style="background-color: #f8fafc; padding: 14px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
              Submitted via A&M Pro Dispatch Contact Form • <a href="https://amprodispatch.com" style="color: #64748b;">amprodispatch.com</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
