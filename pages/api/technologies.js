const { mongooseConnect } = require("@/lib/mongoose");
const { Technology } = require("@/models/Technology");

const handle = async (req, res) => {
  await mongooseConnect();

  const { method } = req;

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Technology.findOne({ _id: req.query.id }));
    } else {
      res.json(await Technology.find());
    }
  }
};
export default handle;
