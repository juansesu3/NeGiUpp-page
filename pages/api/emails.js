import { Email } from "@/models/Email";

const { mongooseConnect } = require("@/lib/mongoose");

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { name, email, subject, message } = req.body;
    const emailDoc = await Email.create({ name, email, subject, message });
    res.json(emailDoc);
  }
};

export default handle;
