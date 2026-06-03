import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: process.env.SMTP_USER ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  } : undefined
});

export async function sendLeadNotification({ to, subject, html, replyTo }) {
  if (!process.env.SMTP_HOST) {
    console.warn('SMTP not configured; skipping sending email.');
    return;
  }
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@rivicq.de',
      to: to || process.env.NOTIFY_EMAIL || 'hello@rivicq.de',
      subject,
      html,
      replyTo
    });
    console.log('Lead notification sent:', info.messageId || info.response || '(no id)');
  } catch (e) {
    console.error('Error sending lead notification:', e.message);
  }
}
