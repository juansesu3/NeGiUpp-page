const { mongooseConnect } = require("@/lib/mongoose");
const { Profile } = require("@/models/Profile");

const handle = async (req, res) => {
  await mongooseConnect();
  const { method } = req;

  if (method === "GET") {
    res.json(await Profile.find());
  }
};
export default handle;
