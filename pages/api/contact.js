export default function (req, res) {

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.sysinfo.co.za",
    auth: {
      user: "contact@sysinfo.co.za",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });


  const mailData = {
    from: "syscontactform@gmail.com",
    to: "wandumuzi.m@sysinfo.co.za",
    subject: `Message From ${req.body.name}`,
    text: req.body.project + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
