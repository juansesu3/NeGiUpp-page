import { mongooseConnect } from "@/lib/mongoose";
import { UsersBlog } from "@/models/UsersBlog";

const handle = async (req, res) => {

    await mongooseConnect();
    const { method } = req;
    if (method === "POST") {
        try {
            const { email, verified } = req.body;
            const UserBlogDoc = await UsersBlog.create({ email, verified });
            res.json(UserBlogDoc);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
    
};

export default handle