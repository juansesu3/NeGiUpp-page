// lib/nodemailer.js

import nodemailer from 'nodemailer';

let transporter;

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (process.env.NODE_ENV === 'production') {
  // Configuración específica para producción
  transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    auth: {
      user: email,
      pass: pass,
    },
    port: 587,
    secure: false,
  });
} else {
  // Configuración para desarrollo
  transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    auth: {
      user: email,
      pass: pass,
    },
    port: 587,
    secure: false,
  });
}

export { transporter };
