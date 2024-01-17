// lib/nodemailer.js

import nodemailer from 'nodemailer';

let transporter;

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (process.env.NODE_ENV === 'production') {
  // Configuración específica para producción
  console.log('Using production configuration');
  transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    auth: {
      user: email,
      pass: pass,
    },
    port: 465,
    secure: true,
  });
} else {
  // Configuración para desarrollo
  console.log('Using development configuration');
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

console.log('Transporter:', transporter);

export { transporter };
