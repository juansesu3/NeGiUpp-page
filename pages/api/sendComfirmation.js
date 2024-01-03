const { transporter, mailOptions } = require("@/lib/nodemailer");

const handler = async (req, res) => {


    const { method } = req;

    if (method === "POST") {
        const data = req.body;
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "This Week In Negiupp - Confirm Your Subscription",
                text: 'Thanks for signing up!',
                html: `
                <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
                    <h1 style="color: #00365c;">Thanks for signing up!</h1>
                    <p style="font-size: 16px;">Please click the button below to confirm your subscription 🤗</p>
                    <button style="background-color: #00365c; cursor:pointer: color: #fff; padding: 10px; border: none; border-radius: 5px; cursor: pointer;">
                        I confirm my subscription!
                    </button>
                </div>
            `,
            });
            return res.status(200).json({ success: true })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.meessage
            })

        }
    }

}

export default handler