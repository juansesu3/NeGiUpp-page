import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass,
    },
    port: 587, // Puerto TLS
    secure: false, // Habilita la conexión segura (TLS)
});


export const mailOptions = {
    from: email,
    to: "juanseu3@hotmail.com"

}