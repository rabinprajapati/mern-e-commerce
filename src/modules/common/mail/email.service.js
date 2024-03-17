const nodemailer = require("nodemailer");

class EmailService {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "3342445031131b",
        pass: "bf8dcc4106bada",
      },
    });
  }

  sendEmail = async (to, sub, message) => {
    try {
      await this.transporter.sendMail({
        from: "no-reply@ecommerce.com ", // sender address
        to: to, // list of receivers
        subject: sub, // Subject line
        text: "Hello world?", // plain text body
        html: message, // html body
      });
    } catch (error) {
      console.log("sendEmail:", error);
      throw error;
    }
  };
}
module.exports = EmailService;
