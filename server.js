require("dotenv").config();
console.log("cwd:", process.cwd());
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS set:", Boolean(process.env.EMAIL_PASS));

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const {
    name = "",
    email = "",
    subject = "Website inquiry",
    message = "",
    company = "",
    budget = "",
    projectType = "",
    otherProjectType = "",
  } = req.body || {};

  // validation
  if (!name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Full name is required.",
    });
  }

  if (!email.trim()) {
    return res.status(400).json({
      success: false,
      message: "A valid email address is required.",
    });
  }

  if (!budget.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please select your budget range.",
    });
  }

  if (!message.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please include project details in your message.",
    });
  }

  if (projectType === "Other" && !otherProjectType) {
    return res.status(400).json({
      success: false,
      message: "Please specify your project type when selecting 'Other'.",
    });
  }

  const displayType =
    projectType === "Other" ? `Custom — ${otherProjectType}` : projectType;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const textBody = `You have received a new inquiry from your website.
Name: ${name}
Email: ${email}
Company: ${company || "—"}
Project Type: ${displayType || "—"}
Budget: ${budget || "—"}
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
<p><strong>Budget:</strong> ${budget || "—"}</p>
<p><strong>Subject:</strong> ${subject}</p>
<hr>
<p><strong>Message:</strong></p>
<p>${(message || "").replace(/\n/g, "<br>")}</p>
`;

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: `${name} <${email}>`,
      to: process.env.EMAIL_USER,
      subject,
      text: textBody,
      html: htmlBody,
    });
    return res.json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res
      .status(500)
      .json({ success: false, message: "Email failed", error: err.message });
  }
});

app.listen(3000, () => console.log("API listening on http://localhost:3000"));
