import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "wandumuzi.m@sysinfo.co.za",
      from: "wandumuzi.m@sysinfo.co.za",
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is: ✉️ ${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">CONTACT US FORM LEAD</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://my-portfolio-blog-omega.vercel.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://my-portfolio-blog-omega.vercel.app/blog" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="https://github.com/sMiter911" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://www.instagram.com/smiter911/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://www.linkedin.com/in/wandumuzi-mathunjwa/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com/smiter911" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ message: "success" });
}

export default sendEmail;
