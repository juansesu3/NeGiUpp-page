const { transporter, mailOptions } = require("@/lib/nodemailer");
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {

    const { method } = req;

    const handleSendConfirmationEmail = async (email, userId) => {

        console.log(userId)
       // const token = jwt.sign({ userId }, process.env.NEXT_PUBLIC_SECRET , { expiresIn: '1h' }); // Ajusta el secreto y el tiempo de expiración según tus necesidades

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "This Week In Negiupp - Confirm Your Subscription",
                html: `
                    <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
                        <h1 style="color: #00365c;">Thanks for signing up!</h1>
                        <p style="font-size: 16px;">Please click the button below to confirm your subscription 🤗</p>
                        <a href="http://localhost:3000/confirm-subscription/token=${userId}" style="background-color: #00365c; text-decoration:none; color: #fff; padding: 10px; border: none; border-radius: 5px; cursor: pointer;">             
                                I confirm my subscription!
                        </a>
                        <p>You can also use this link: ${process.env.BASE_URL}/api/confirm-subscription?token=${userId}</p>
                    </div>
                `,
            });
        } catch (error) {
            console.error('Error sending confirmation email:', error);
        }
    };

    if (method === "POST") {
        const { email, subject, message, userId } = req.body;
        handleSendConfirmationEmail(email, userId);
        res.status(200).json({ success: true });
    }

    

}

export default handler