const nodemailer = require("nodemailer");

export default function (req, res) {
  let transporter = nodemailer.createTransport({
    host: "mail.sysinfo.co.za",
    port: 465,
    secure: true,
    auth: {
      user: "contact@sysinfo.co.za",
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: "contact@sysinfo.co.za",
    to: "wandumuzi.m@sysinfo.co.za",
    subject: `Message From ${req.body.name}`,
    text: req.body.project + " | Sent from: " + req.body.email,
    html: `<div>
    <h3>Potential Client: ${req.body.name}</h3>
    <h4>Enquiry: ${req.body.project}</h4>
    <h4>Details are as follows:</h4></div>
    <p>${req.body.message}</p>
    <p>Sent from: ${req.body.email}</p>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.error(err);
    else console.log("sent");
  });

  res.send("success");

}
