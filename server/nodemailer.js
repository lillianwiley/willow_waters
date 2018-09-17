require('dotenv').config();
const nodemailer= require('nodemailer');
const session = require('express-session');
const { EMAIL_ADDRESS, EMAIL_PASSWORD} =  process.env


module.exports = {
    sendConfirmationEmail: (req, res) => {
        const {email} = req.session.user
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_ADDRESS, // generated ethereal user
                pass: EMAIL_PASSWORD // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Willow Waters Illustrations" <willlowwatersillustration@gmail.com>', // sender address
            to: `${email}`, // list of receivers
            subject: 'Order Confirmation from Willow Waters Illustration', // Subject line
            text: 'Thank you so much for your order!', // plain text body
            html: `<h3 style='color: #fc7eb9; font-size: 30px; text-align:center; font-family:Cambria, Cochin, Georgia;'>Your order is confirmed!<h3><br/><h5 style='color:#3d4450; font-size:16px;'>I'm so excited you chose Willow Waters Illustraions for you artistic needs. I can't wait to get to work on your order. </h5> <p style='color:#3d4450 font-style:normal; font-size: 15px;'> You will recieve a shipping confirmation email with a tracking number once your order has been shipped.</p>` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    }
};

