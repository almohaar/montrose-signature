import nodemailer from "nodemailer";

async function sendEmail(to: string, subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER!,
      pass: process.env.MAILTRAP_PASS!,
    },
  });

  await transporter.sendMail({
    from: '"Montrose Hotel" <noreply@montrose.com>',
    to,
    subject,
    html,
  });
}

export { sendEmail };
