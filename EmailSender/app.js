require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail= async(mailDetails) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        },
        tls:{
            rejectUnauthorized: false
        },
        //forcing faster timeout
        connectionTimeout:10000,
        greetingTimeout:10000,
        socketTimeout:10000,
    });
   
    try {
        console.log("Sending your email...");
        await transporter.sendMail(mailDetails);
        console.log(`Email sent successfuly to ${mailDetails.to}`)
    } catch (error){
        console.log("Failed to send email:", error)
    }
};
(async () => {
    try {
        await sendEmail({
            from: `"Hiflex's App" <${process.env.EMAIL_USER}>`,
            to: "brightchim81@gmail.com",
            subject: "You've gotten a mail from Hiflex",
            text:"plain text callback",
            html: `
            <h2>Hey there</h2>
            <p>This is <strong>Real</strong> email from NodeJs</p>
            <p> sent on ${new Date().toLocaleString("en-MW")}</p>
            <hr>
            <small> Feeling like a developer today 😎</small>

            `
        });
    } catch(err) {
        console.error("Email test failed",err)
    }
})();