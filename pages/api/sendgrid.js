import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "wandumuzi.m@sysinfo.co.za",
      from: "wandumuzi.m@sysinfo.co.za",
      subject: `${req.body.subject}`,
      html: `<div>
      <h3>Potential Client: ${req.body.name}</h3>
      <h4>Enquiry: ${req.body.subject}</h4>
      <h4>Details are as follows:</h4></div>
      <p>${req.body.message}</p>
      <p>Sent from: ${req.body.email}</p>
      `,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ message: "success" });
}

export default sendEmail;
