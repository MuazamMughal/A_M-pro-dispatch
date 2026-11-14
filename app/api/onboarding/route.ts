import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      companyName,
      contactName,
      phone,
      email,
      mcNumber,
      dotNumber,
      equipmentType,
      truckCount,
      factoringCompany,
      preferredLanes,
    } = body;

    if (!contactName || !phone || !email || !mcNumber) {
      return NextResponse.json(
        { error: 'Contact name, phone, email, and MC Number are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.DISPATCH_EMAIL_TO || 'Esmeralda@amprodispatch.com';
    const senderEmail = process.env.DISPATCH_EMAIL_FROM || 'A&M Pro Dispatch <onboarding@resend.dev>';

    // Fallback simulation mode for local dev without API key
    if (!apiKey || apiKey.includes('placeholder')) {
      console.warn('⚠️ RESEND_API_KEY is not configured. Simulating carrier onboarding email:');
      console.log(body);
      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Carrier onboarding packet received (Development Mode: Set RESEND_API_KEY for live delivery).',
      });
    }

    const resend = new Resend(apiKey);

    // 1. Send Alert to Internal Operations Team
    await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `🚛 NEW CARRIER ONBOARDING: ${companyName || contactName} (MC# ${mcNumber})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f8fafc; color: #0b0f17;">
          <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="background-color: #0b0f17; padding: 24px; text-align: center; border-bottom: 4px solid #dc2626;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">A&M PRO DISPATCH</h1>
              <p style="color: #dc2626; margin: 4px 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase;">New Carrier Profile Packet Request</p>
            </div>
            
            <div style="padding: 24px;">
              <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px 16px; margin-bottom: 20px;">
                <p style="margin: 0; color: #991b1b; font-weight: bold; font-size: 14px;">
                  ⚠️ Action Required: Verify authority on FMCSA SAFER & send Carrier Agreement.
                </p>
              </div>

              <h2 style="font-size: 16px; color: #0b0f17; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #0b0f17; padding-bottom: 6px; margin-top: 0;">
                Carrier Profile Information
              </h2>

              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 10px;">
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 160px;">Company Name:</td><td style="font-weight: bold; color: #0b0f17;">${companyName || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Contact Name:</td><td style="font-weight: bold; color: #0b0f17;">${contactName}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td><td><a href="tel:${phone}" style="color: #0b0f17; font-weight: bold; text-decoration: none;">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td><td><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td></tr>
                <tr style="background-color: #f8fafc;"><td style="padding: 8px 6px; color: #dc2626; font-weight: bold;">MC Number:</td><td style="padding: 8px 6px; color: #dc2626; font-weight: 800; font-size: 16px;">${mcNumber}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">DOT Number:</td><td>${dotNumber || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Equipment Type:</td><td><strong style="color: #0b0f17;">${equipmentType}</strong></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Truck Count:</td><td>${truckCount || '1'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Factoring Co:</td><td>${factoringCompany || 'None / QuickPay'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Preferred Lanes:</td><td>${preferredLanes || 'All 48 States'}</td></tr>
              </table>
            </div>

            <div style="background-color: #f8fafc; padding: 14px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
              A&M Pro Dispatch Internal Dispatch System • Confidential Carrier Data
            </div>
          </div>
        </div>
      `,
    });

    // 2. Send Automated Confirmation & Document Request to the Driver
    await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `Welcome to A&M Pro Dispatch! Getting MC# ${mcNumber} Rolling`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #0b0f17; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="border-bottom: 3px solid #dc2626; padding-bottom: 12px; margin-bottom: 20px;">
            <h1 style="color: #0b0f17; margin: 0; font-size: 20px;">A&M PRO DISPATCH</h1>
            <p style="color: #dc2626; margin: 2px 0 0; font-size: 12px; font-weight: bold;">YOUR FREIGHT. OUR FOCUS.</p>
          </div>

          <h2 style="font-size: 18px; color: #0b0f17;">Welcome, ${contactName}!</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Thank you for submitting your carrier profile for <strong>${companyName || 'your trucking company'}</strong> (MC# ${mcNumber}).
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Our dedicated dispatch team has received your equipment profile and is preparing your carrier onboarding packet.
          </p>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin: 24px 0;">
            <h3 style="font-size: 14px; color: #dc2626; margin-top: 0; text-transform: uppercase;">Required Documents to Begin Dispatching:</h3>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #1e293b; line-height: 1.8;">
              <li><strong>Certificate of Insurance (COI)</strong> - Minimum $1M Auto Liability & $100K Cargo</li>
              <li><strong>Copy of FMCSA Authority</strong> (MC / DOT certificate)</li>
              <li><strong>Signed W-9 Form</strong> (Current year)</li>
              <li><strong>Notice of Assignment (NOA)</strong> from your Factoring Company (if applicable)</li>
            </ul>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Simply reply directly to this email with your document attachments or call our dispatch desk:
          </p>

          <p style="text-align: center; margin: 28px 0;">
            <a href="tel:7706016344" style="background-color: #dc2626; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block;">
              Call or Text Operations: (770) 601-6344
            </a>
          </p>

          <p style="font-size: 13px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
            Safe travels and high revenues,<br>
            <strong>The Operations Team at A&M Pro Dispatch</strong><br>
            <a href="https://amprodispatch.com" style="color: #dc2626; text-decoration: none;">www.amprodispatch.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Onboarding API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
