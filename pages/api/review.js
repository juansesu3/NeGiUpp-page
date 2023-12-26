import { mongooseConnect } from "@/lib/mongoose";
import { Review } from "@/models/Review";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (req.method === "GET") {
    const { article } = req.query;
    //console.log(req.query)
    //console.log(article)
    try {
      const reviews = await Review.find({ article }, null, { sort: { createdAt: -1 } });
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  if (method === "POST") {
    const { user,
      article,
      stars,
      title,
      content,} = req.body;
    const ReviewDoc = await Review.create({
      user,
      article,
      stars,
      title,
      content,
    });
    res.json(ReviewDoc);
  }
};
export default handle;
