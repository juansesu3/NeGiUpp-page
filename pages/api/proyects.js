import { mongooseConnect } from "@/lib/mongoose";
import { Proyect } from "@/models/Proyect";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Proyect.find());
  }
};
export default handle;
