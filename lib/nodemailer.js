let transporter;

if (typeof window === 'undefined') {
  // Server-side rendering
  const nodemailer = require('nodemailer');
  const email = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: pass,
    },
    port: 587,
    secure: false,
  });
}

export { transporter };
