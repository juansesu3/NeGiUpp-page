const { Article } = require("@/models/Article");

const handle = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Article.findOne({ _id: req.query.id }));
    } else {
      // Modificar la consulta para ordenar por fecha de creación (createdAt) en orden descendente
      res.json(await Article.find().sort({ createdAt: -1 }));
    }
  }
};

export default handle;
