import { mongooseConnect } from "@/lib/mongoose";
import { MessageAssistant } from "@/models/MessageAssistant";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await MessageAssistant.findOne({ _id: req.query.id }));
    } else {
      res.json(await MessageAssistant.find());
    }
  }
  if (method === "POST") {
    const { name, email, message } = req.body;
    const messageAssitantDoc = await MessageAssistant.create({
      name,
      email,
      message,
    });
    res.json(messageAssitantDoc);
  }
};
export default handle;
