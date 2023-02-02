import sendgrid from "@sendgrid/mail";
require("dotenv").config();

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log(
    req,
    process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
    process.env.NEXT_PUBLIC_EMAIL_FROM
  );
  try {
    const { email } = req.body;
    console.log(email);
    await sendgrid.send({
      to: `${process.env.NEXT_PUBLIC_EMAIL_FROM}`,
      from: email,
      subject: `${req.body.subject}`,
      html: `<p>Message de :${req.body.name}</p><p>Téléphone:${req.body.phone}</p><p>${req.body.message}</p>`,
    });
    await sendgrid.send({
      to: email,
      from: `${process.env.NEXT_PUBLIC_EMAIL_FROM}`,
      subject: " Cédric PIERSON - Confirmation",
      template_id: "d-7cf03f23a9974807a2f30152e85f3d71",
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
