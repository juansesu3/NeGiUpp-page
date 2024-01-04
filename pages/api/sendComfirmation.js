const { transporter, mailOptions } = require("@/lib/nodemailer");
const jwt = require('jsonwebtoken');
const handler = async (req, res) => {


    const { method } = req;


    const handleSendConfirmationEmail = async (email, userId) => {
        const token = jwt.sign({ userId }, 'tu_secreto_secreto', { expiresIn: '1h' }); // Ajusta el secreto y el tiempo de expiración según tus necesidades
    
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "This Week In Negiupp - Confirm Your Subscription",
                html: `
                    <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
                        <h1 style="color: #00365c;">Thanks for signing up!</h1>
                        <p style="font-size: 16px;">Please click the button below to confirm your subscription 🤗</p>
                        <a href="${process.env.BASE_URL}/api/confirm-subscription?token=${token}">
                            <button style="background-color: #00365c; color: #fff; padding: 10px; border: none; border-radius: 5px; cursor: pointer;">
                                I confirm my subscription!
                            </button>
                        </a>
                    </div>
                `,
            });
        } catch (error) {
            console.error('Error sending confirmation email:', error);
        }
    };

    if (method === "POST") {
        const data = req.body;
        handleSendConfirmationEmail()
    }

}

export default handler