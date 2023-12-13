const nodemailer = require("nodemailer");

const sendEmail = async (options) => {

     const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'leone19@ethereal.email',
              pass: 'vhyXDyDZ4FPzt2qSFu'
          },
      });

     const mailOptions = {
          from: process.env.SMPT_EMAIL,
          to: options.email,
          subject: options.subject,
          html: options.html,
     };

     await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;