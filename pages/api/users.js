const { mongooseConnect } = require("@/lib/mongoose");
const { Users } = require("@/models/user");

const handle = async (req, res) => {
  await mongooseConnect();

  const { method } = req;

  if (method === "GET") {
    try {
      if (req.query?.email) {
        const user = await Users.findOne({ email: req.query.email });
        res.json(user);
      } else if (req.query?.id) {
        const user = await Users.findById(req.query.id);
        res.json(user);
      } else {
        const users = await Users.find();
        res.json(users);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handle;
