import { mongooseConnect } from "@/lib/mongoose";
import { transporter } from "@/lib/nodemailer";
import { UsersBlog } from "@/models/UsersBlog";

const handler = async (req, res) => {
    const { method } = req;
    await mongooseConnect();
    const emailFrom = process.env.EMAIL;
    const {emailTo} = req.body

    console.log('Email to',emailTo)

    const handleSendConfirmationEmail = async () => {
        //const token = jwt.sign({ userId }, process.env.NEXT_PUBLIC_SECRET , { expiresIn: '1h' }); // Ajusta el secreto y el tiempo de expiración según tus necesidades
        try {
          await transporter.sendMail({
            from: emailFrom,
            to: 'juan.se.suarez.ra@gmail.com',
            subject: "⚛️ This Week In Negiupp - Thank you for subscribing 🤗",
            html: `
                    <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
                        <h1 style="color: #00365c;">Thanks for subscribing 🤗</h1>
                    </div>
                `,
          });
        } catch (error) {
          console.error('Error sending confirmation email:', error);
        }
      };

    if (method === "GET") {
        if (req.query?._id) {
            res.json(await UsersBlog.findOne({ _id: req.query._id }));
        } else {
            res.json(await UsersBlog.find());
        }
    }

    if (method === "PUT") {
        const {
            verified,
            _id,
        } = req.body;
       
        await UsersBlog.updateOne(
            { _id },
            {
                verified,
            }
        );
        res.json(true);
    }
};

export default handler;