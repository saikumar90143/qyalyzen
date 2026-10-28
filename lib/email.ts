import nodemailer from "nodemailer";
import type { ContactFormData } from "@/lib/schemas";
import { SERVICE_LABELS } from "@/lib/schemas";

// ---------------------------------------------------------------------------
// Transporter — Gmail SMTP via App Password
// Set SMTP_USER, SMTP_PASS, and CONTACT_RECEIVER in .env.local
// ---------------------------------------------------------------------------
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function serviceLabel(value: string | undefined): string {
  if (!value) return "Not specified";
  return SERVICE_LABELS[value] ?? value;
}

function or(value: string | undefined | null, fallback = "Not provided"): string {
  return value?.trim() || fallback;
}

// ---------------------------------------------------------------------------
// Business notification email (sent to CONTACT_RECEIVER)
// ---------------------------------------------------------------------------
function notificationHtml(data: ContactFormData, receivedAt: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Enquiry – Qualyzen</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f2a4a 0%,#1a4a7a 100%);padding:32px 40px;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                📨 New Contact Enquiry
              </p>
              <p style="margin:6px 0 0;font-size:13px;color:#a0b8d4;">Qualyzen Website · ${receivedAt}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Row helper macro implemented inline -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${row("Full Name", or(data.fullName))}
                ${row("Company", or(data.company))}
                ${row("Email", `<a href="mailto:${data.email}" style="color:#1a6bb0;">${data.email}</a>`)}
                ${row("Phone", or(data.phone))}
                ${row("Service Interest", serviceLabel(data.service))}
              </table>

              <!-- Message -->
              <div style="margin-top:28px;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:18px 20px;font-size:14px;line-height:1.7;color:#334155;white-space:pre-wrap;">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                This notification was generated automatically by the Qualyzen website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;width:160px;vertical-align:top;">
      <span style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;">${label}</span>
    </td>
    <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f1f5f9;vertical-align:top;">
      <span style="font-size:14px;color:#1e293b;font-weight:500;">${value}</span>
    </td>
  </tr>`;
}

// ---------------------------------------------------------------------------
// Auto-reply email (sent to the visitor)
// ---------------------------------------------------------------------------
function autoReplyHtml(name: string): string {
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your enquiry – Qualyzen</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f2a4a 0%,#1a4a7a 100%);padding:40px;text-align:center;">
              <p style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Qualyzen</p>
              <p style="margin:6px 0 0;font-size:13px;color:#a0b8d4;">Pharmaceutical Validation Consulting</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 16px;font-size:20px;font-weight:700;color:#0f2a4a;">
                Thank you, ${firstName}!
              </p>
              <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#475569;">
                We've received your enquiry and a member of our validation team will review your message and follow up within <strong>one business day</strong>.
              </p>
              <p style="margin:0 0 28px;font-size:14px;line-height:1.7;color:#475569;">
                In the meantime, if your matter is urgent, you're welcome to call us directly at <a href="tel:+919666656361" style="color:#1a6bb0;font-weight:600;">+91 9666656361</a>.
              </p>

              <div style="background:#f0f7ff;border-left:4px solid #1a6bb0;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
                <p style="margin:0;font-size:13px;color:#1e40af;font-weight:600;">What happens next?</p>
                <ul style="margin:8px 0 0;padding-left:18px;font-size:13px;color:#334155;line-height:1.8;">
                  <li>Our team reviews your enquiry</li>
                  <li>A validation specialist is assigned to your query</li>
                  <li>We respond with relevant guidance or next steps</li>
                </ul>
              </div>

              <p style="margin:0;font-size:13px;color:#94a3b8;">
                Please do not reply to this email — it is sent automatically. Use <a href="mailto:qualyzen26@gmail.com" style="color:#1a6bb0;">qualyzen26@gmail.com</a> to reach us directly.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © ${new Date().getFullYear()} Qualyzen · Hyderabad, India
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();
  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const receiver = process.env.CONTACT_RECEIVER ?? process.env.SMTP_USER ?? "";

  await Promise.all([
    // 1. Notification to business inbox
    transporter.sendMail({
      from: `"Qualyzen Website" <${process.env.SMTP_USER}>`,
      to: receiver,
      replyTo: data.email,
      subject: `New Enquiry from ${data.fullName}${data.company ? ` (${data.company})` : ""}`,
      html: notificationHtml(data, receivedAt),
    }),

    // 2. Auto-reply to the visitor
    transporter.sendMail({
      from: `"Qualyzen" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "We received your enquiry – Qualyzen",
      html: autoReplyHtml(data.fullName),
    }),
  ]);
}
