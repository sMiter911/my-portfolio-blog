var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  // var transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.NODEMAILER_EMAIL,
  //     pass: process.env.NODEMAILER_PW,
  //   },
  // });
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: process.env.SMTP_PORT || 2525,
    auth: {
      user: process.env.SMTP_USERNAME || "4823f207d8dbbc",
      pass: process.env.SMTP_PASSWORD || "9a3b38bcef8e60",
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: otpText,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
