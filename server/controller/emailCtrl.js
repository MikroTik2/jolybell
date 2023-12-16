const nodemailer = require("nodemailer");

const sendEmail = async (options) => {

     const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: process.env.USER_GMAIL,
              pass: process.env.USER_PASS,
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