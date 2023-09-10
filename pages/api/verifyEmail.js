// En pages/api/verifyEmail.js
import dns from "dns";

const verifyEmail = async (req, res) => {
  const email = req.body.email;

  // Verificar formato de correo electrónico
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Extraer dominio de correo electrónico
  const domain = email.split("@")[1];

  // Verificar existencia de dominio
  try {
    await dns.promises.resolveMx(domain);
  } catch (error) {
    return res.status(400).json({ error: "Domain does not exist" });
  }

  // Aquí podrías hacer una verificación de SMTP, pero es más complicado
  // ...

  return res.status(200).json({ message: "Email is valid and domain exists" });
};
export default verifyEmail;
