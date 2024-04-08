// lib/nodemailer.js

import nodemailer from 'nodemailer';

let transporter;

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;
/*
if (process.env.NODE_ENV === 'production') {
  // Configuración específica para producción
  console.log('Using production configuration');
  transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    auth: {
      user: email,
      pass: password,
    },
    port: 465,
    secure: true,
    debug: true,
  });

  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export { transporter };
} else {*/
  // Configuración para desarrollo
  console.log('Using development configuration');
  transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    auth: {
      user: email,
      pass: password,
    },
    port: 587,
    secure: false,
    debug: true,
  });


console.log('Transporter:', transporter);

export { transporter };
