import nodemailer from 'nodemailer';

const sendVerificationEmail = async (email, verificationUrl) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email address',
    html: `<p>Please click the link below to verify your email address:</p><p><a href="${verificationUrl}">Verify Email</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};

export default sendVerificationEmail;
