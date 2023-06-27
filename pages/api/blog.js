const { Article } = require("@/models/Article");

const handle = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    res.json(await Article.find());
  }
};
export default handle;
