import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name || body.name.trim().length < 2) return 'Name must be at least 2 characters.';
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return 'A valid email address is required.';
  if (!body.message || body.message.trim().length < 10)
    return 'Please include a message of at least 10 characters.';
  return null;
}

export async function POST(request: Request) {
  try {
    const body: Partial<ContactPayload> = await request.json();

    const validationError = validate(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = 'binduta33@gmail.com';

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      // Dev mode: log and simulate success
      console.log('[/api/contact] ⚠️  No SMTP env vars set. Simulating success.');
      console.log('  From:', body.email);
      console.log('  Name:', body.name);
      console.log('  Phone:', body.phone || '—');
      console.log('  Message:', body.message);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Email to studio
    await transporter.sendMail({
      from: `"Aashraya Website" <${SMTP_USER}>`,
      replyTo: `"${body.name}" <${body.email}>`,
      to: TO_EMAIL,
      subject: `New Enquiry from ${body.name} — Aashraya`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0b0b0b;">
          <div style="background: #0b0b0b; padding: 24px 32px;">
            <h1 style="color: white; font-size: 20px; letter-spacing: 4px; text-transform: uppercase; margin: 0; font-weight: 400;">
              Aashraya
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-family: sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin: 6px 0 0;">
              New website enquiry
            </p>
          </div>
          <div style="padding: 32px; background: #f4f4f2; border: 1px solid #e2e2e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e2e0; font-family: sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #8a8a8a; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e2e0;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e2e0; font-family: sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #8a8a8a;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e2e0;">
                  <a href="mailto:${body.email}" style="color: #0b0b0b;">${body.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e2e0; font-family: sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #8a8a8a;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e2e0;">
                  ${body.phone ? `<a href="tel:${body.phone}" style="color: #0b0b0b;">${body.phone}</a>` : '<span style="color: #8a8a8a;">—</span>'}
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="font-family: sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #8a8a8a; margin-bottom: 12px;">Message</p>
              <div style="background: white; border: 1px solid #e2e2e0; padding: 20px; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${body.message}</div>
            </div>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e2e0;">
              <a href="mailto:${body.email}" style="display: inline-block; background: #0b0b0b; color: white; font-family: sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; text-decoration: none; padding: 12px 24px;">
                Reply to ${body.name} →
              </a>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #0b0b0b;">
            <p style="color: rgba(255,255,255,0.3); font-family: sans-serif; font-size: 11px; margin: 0;">
              Aashraya · 171, Papareddipalya, Annapurneshwari Nagar, Bengaluru 560072
            </p>
          </div>
        </div>
      `,
      text: `
New enquiry from Aashraya website

Name:    ${body.name}
Email:   ${body.email}
Phone:   ${body.phone || '—'}

Message:
${body.message}

---
Reply directly to: ${body.email}
      `.trim(),
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Aashraya" <${SMTP_USER}>`,
      to: body.email,
      subject: 'Thank you for your enquiry — Aashraya',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0b0b0b;">
          <div style="background: #0b0b0b; padding: 24px 32px;">
            <h1 style="color: white; font-size: 20px; letter-spacing: 4px; text-transform: uppercase; margin: 0; font-weight: 400;">
              Aashraya
            </h1>
          </div>
          <div style="padding: 40px 32px; background: #f4f4f2; border: 1px solid #e2e2e0; border-top: none;">
            <p style="font-size: 18px; margin-top: 0;">Dear ${body.name},</p>
            <p style="font-size: 15px; line-height: 1.8; color: #555;">
              Thank you for reaching out to Aashraya. We have received your enquiry and Ashok will
              be in touch with you within two working days.
            </p>
            <p style="font-size: 15px; line-height: 1.8; color: #555;">
              In the meantime, feel free to call us directly at
              <a href="tel:+919901815989" style="color: #0b0b0b;">+91 99018 15989</a>.
            </p>
            <p style="font-size: 15px; line-height: 1.8; color: #555; margin-bottom: 0;">
              With regards,<br />
              <strong>Ashok T K</strong><br />
              Architect &amp; Founder, Aashraya<br />
              Bengaluru
            </p>
          </div>
          <div style="padding: 16px 32px; background: #0b0b0b;">
            <p style="color: rgba(255,255,255,0.3); font-family: sans-serif; font-size: 11px; margin: 0;">
              171, Papareddipalya, Annapurneshwari Nagar, Bengaluru 560072
            </p>
          </div>
        </div>
      `,
      text: `Dear ${body.name},\n\nThank you for reaching out to Aashraya. Ashok will be in touch within two working days.\n\nYou can also reach us at +91 99018 15989.\n\nWith regards,\nAshok T K\nAashraya, Bengaluru`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[/api/contact] Error:', err);
    return NextResponse.json({ error: 'Internal server error. Please try again or call us directly.' }, { status: 500 });
  }
}
