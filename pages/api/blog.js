const { Article } = require("@/models/Article");

const handle = async (req, res) => {
  const { method } = req;
 

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Article.findOne({ _id: req.query.id }));
    } else {
      res.json(await Article.find());
    }
  }
};
export default handle;
