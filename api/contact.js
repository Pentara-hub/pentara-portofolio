// Vercel Serverless Function: /api/contact
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const {
    name = "",
    email = "",
    subject = "Website inquiry",
    message = "",
    company = "",
    projectType = "",
    otherProjectType = "",
  } = req.body || {};

  // ---- validation (same as your server.js) ----
  if (!name.trim())
    return res
      .status(400)
      .json({ success: false, message: "Full name is required." });
  if (!email.trim())
    return res
      .status(400)
      .json({ success: false, message: "A valid email address is required." });
  if (!message.trim())
    return res.status(400).json({
      success: false,
      message: "Please include project details in your message.",
    });
  if (projectType === "Other" && !otherProjectType) {
    return res.status(400).json({
      success: false,
      message: "Please specify your project type when selecting 'Other'.",
    });
  }

  const displayType =
    projectType === "Other" ? `Custom — ${otherProjectType}` : projectType;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_PORT || "465") === "465", // true if 465
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const textBody = `You have received a new inquiry from your website.
Name: ${name}
Email: ${email}
Company: ${company || "—"}
Project Type: ${displayType || "—"}
Subject: ${subject}

Message:
${message}
`;

    const htmlBody = `
<h2>New Inquiry from Your Website 📩</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || "—"}</p>
<p><strong>Project Type:</strong> ${displayType || "—"}</p>
<p><strong>Subject:</strong> ${subject}</p>
<hr>
<p><strong>Message:</strong></p>
<p>${(message || "").replace(/\n/g, "<br>")}</p>
`;

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail will send from your account with the sender's name
      replyTo: `${name} <${email}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res
      .status(500)
      .json({ success: false, message: "Email failed", error: err.message });
  }
};
