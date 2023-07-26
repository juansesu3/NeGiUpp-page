import { mongooseConnect } from "@/lib/mongoose";
import { Proyect } from "@/models/Proyect";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
   
    if (req.query?.id) {
      res.json(await Proyect.findOne({ _id: req.query.id }));
    } else {
      res.json(await Proyect.find());
    }
  }
};
export default handle;
