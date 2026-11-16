import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMCNumber,
  validateDOTNumber,
  sanitizeText,
  escapeHtml,
} from '@/lib/validation';

const ALLOWED_EQUIPMENT = [
  'Dry Van (53ft)',
  'Reefer (53ft)',
  'Flatbed / Stepdeck',
  'Box Truck (24-26ft)',
  'Power Only',
  'Hotshot (40ft)',
];

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
      hp,
    } = body;

    // Honeypot spam trap
    if (hp) {
      console.warn('🤖 Spam bot submission blocked by honeypot on onboarding.');
      return NextResponse.json({ success: true, message: 'Onboarding packet received.' });
    }

    // 1. Strict Validation
    const companyVal = validateName(companyName || contactName, 'Company / Carrier Name');
    if (!companyVal.isValid) {
      return NextResponse.json({ error: companyVal.error }, { status: 400 });
    }

    const contactVal = validateName(contactName, 'Contact Person Name');
    if (!contactVal.isValid) {
      return NextResponse.json({ error: contactVal.error }, { status: 400 });
    }

    const emailVal = validateEmail(email);
    if (!emailVal.isValid) {
      return NextResponse.json({ error: emailVal.error }, { status: 400 });
    }

    const phoneVal = validatePhone(phone);
    if (!phoneVal.isValid) {
      return NextResponse.json({ error: phoneVal.error }, { status: 400 });
    }

    const mcVal = validateMCNumber(mcNumber);
    if (!mcVal.isValid) {
      return NextResponse.json({ error: mcVal.error }, { status: 400 });
    }

    const dotVal = validateDOTNumber(dotNumber);
    if (!dotVal.isValid) {
      return NextResponse.json({ error: dotVal.error }, { status: 400 });
    }

    const cleanEquipment = ALLOWED_EQUIPMENT.includes(equipmentType) ? equipmentType : 'Dry Van (53ft)';
    const cleanCompany = companyVal.cleanValue;
    const cleanContact = contactVal.cleanValue;
    const cleanEmail = emailVal.cleanValue;
    const formattedPhone = phoneVal.formatted;
    const formattedMC = mcVal.formatted;
    const formattedDOT = dotVal.formatted || 'Not Provided';
    const cleanTruckCount = sanitizeText(truckCount) || '1 Truck (Owner Operator)';
    const cleanFactoring = sanitizeText(factoringCompany) || 'Not Provided / Direct Billing';
    const cleanLanes = sanitizeText(preferredLanes) || 'Midwest & Southeast (Flexible)';

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.DISPATCH_EMAIL_TO || 'dispatchampro@gmail.com';
    const senderEmail = process.env.DISPATCH_EMAIL_FROM || 'A&M Pro Dispatch <onboarding@resend.dev>';

    // Fallback simulation mode for local dev without API key
    if (!apiKey || apiKey.includes('placeholder')) {
      console.warn('⚠️ RESEND_API_KEY is not configured. Simulating carrier onboarding email:');
      console.log({
        cleanCompany,
        cleanContact,
        cleanEmail,
        formattedPhone,
        formattedMC,
        formattedDOT,
        cleanEquipment,
      });
      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Carrier onboarding packet received (Development Mode: Live Resend key required for inbox delivery).',
      });
    }

    const resend = new Resend(apiKey);

    // 1. Send Alert to Internal Operations Team (dispatchampro@gmail.com)
    await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: cleanEmail,
      subject: `🚛 NEW CARRIER ONBOARDING: ${cleanCompany} (${formattedMC})`,
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
                  Action Required: A new carrier submitted their profile and is waiting for onboarding documents.
                </p>
              </div>

              <h2 style="font-size: 16px; color: #0b0f17; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                Carrier &amp; Authority Details
              </h2>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569; width: 170px;">Carrier Company:</td>
                  <td style="padding: 6px 0; color: #0b0f17; font-weight: 600;">${escapeHtml(cleanCompany)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">Contact Person:</td>
                  <td style="padding: 6px 0; color: #0b0f17; font-weight: 600;">${escapeHtml(cleanContact)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">MC Number:</td>
                  <td style="padding: 6px 0; color: #dc2626; font-weight: bold; font-size: 15px;">${escapeHtml(formattedMC)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">USDOT Number:</td>
                  <td style="padding: 6px 0; color: #0b0f17;">${escapeHtml(formattedDOT)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">Direct Phone:</td>
                  <td style="padding: 6px 0;"><a href="tel:${phoneVal.cleanValue}" style="color: #0b0f17; font-weight: bold; text-decoration: none;">${escapeHtml(formattedPhone)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">Email Address:</td>
                  <td style="padding: 6px 0;"><a href="mailto:${cleanEmail}" style="color: #dc2626; text-decoration: none;">${escapeHtml(cleanEmail)}</a></td>
                </tr>
              </table>

              <h2 style="font-size: 16px; color: #0b0f17; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px;">
                Equipment &amp; Operational Capacity
              </h2>

              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569; width: 170px;">Primary Equipment:</td>
                  <td style="padding: 6px 0; color: #0b0f17; font-weight: 600;">${escapeHtml(cleanEquipment)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">Fleet Size:</td>
                  <td style="padding: 6px 0; color: #0b0f17;">${escapeHtml(cleanTruckCount)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">Factoring Partner:</td>
                  <td style="padding: 6px 0; color: #0b0f17;">${escapeHtml(cleanFactoring)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #475569;">Preferred Lanes:</td>
                  <td style="padding: 6px 0; color: #0b0f17;">${escapeHtml(cleanLanes)}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #f8fafc; padding: 14px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
              Submitted via A&M Pro Dispatch Onboarding Portal • <a href="https://amprodispatch.com" style="color: #64748b;">amprodispatch.com</a>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Send Automated Confirmation & Document Request to the Driver (if permitted by sender domain)
    try {
      if (!senderEmail.includes('resend.dev') || cleanEmail.toLowerCase() === recipientEmail.toLowerCase()) {
        await resend.emails.send({
          from: senderEmail,
          to: [cleanEmail],
          subject: `Welcome to A&M Pro Dispatch! Getting ${escapeHtml(formattedMC)} Rolling`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; color: #0b0f17; max-width: 600px; margin: 0 auto; background: #ffffff;">
              <div style="border-bottom: 3px solid #dc2626; padding-bottom: 12px; margin-bottom: 20px;">
                <h1 style="color: #0b0f17; margin: 0; font-size: 20px;">A&M PRO DISPATCH</h1>
                <p style="color: #dc2626; margin: 2px 0 0; font-size: 12px; font-weight: bold;">YOUR FREIGHT. OUR FOCUS.</p>
              </div>

              <h2 style="font-size: 18px; color: #0b0f17;">Welcome, ${escapeHtml(cleanContact)}!</h2>
              <p style="font-size: 14px; line-height: 1.6; color: #334155;">
                Thank you for submitting your carrier profile for <strong>${escapeHtml(cleanCompany)}</strong> (${escapeHtml(formattedMC)}).
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
      }
    } catch (autoResponderErr) {
      console.warn('Driver autoresponder skipped (Note: resend.dev test domain only sends to account owner):', autoResponderErr);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Onboarding API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
