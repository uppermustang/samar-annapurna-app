import nodemailer from 'nodemailer';

const allowCors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

export default async function handler(req, res) {
  allowCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      adults,
      children,
      roomType,
      rooms,
      specialRequests,
    } = body;

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.RECEIVER_EMAIL;

    if (!user || !pass || !to) {
      console.error('Missing SMTP_USER, SMTP_PASS, or RECEIVER_EMAIL');
      return res.status(500).json({ success: false, error: 'Email not configured' });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const html = `
      <h2>New Reservation Request – Samar Annapurna Hotel</h2>
      <p><strong>Name:</strong> ${name ?? '-'}</p>
      <p><strong>Email:</strong> ${email ?? '-'}</p>
      <p><strong>Phone / WhatsApp:</strong> ${phone ?? '-'}</p>
      <p><strong>Check-in:</strong> ${checkIn ?? '-'}</p>
      <p><strong>Check-out:</strong> ${checkOut ?? '-'}</p>
      <p><strong>Adults:</strong> ${adults ?? '-'}</p>
      <p><strong>Children:</strong> ${children ?? '-'}</p>
      <p><strong>Room type:</strong> ${roomType ?? '-'}</p>
      <p><strong>Rooms needed:</strong> ${rooms ?? '-'}</p>
      <p><strong>Special requests:</strong> ${specialRequests ?? '-'}</p>
    `;

    await transporter.sendMail({
      from: user,
      to,
      subject: 'New Reservation Request – Samar Annapurna Hotel',
      html,
      text: html.replace(/<[^>]*>/g, ' '),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Reserve API error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to send' });
  }
}
