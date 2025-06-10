import { prisma } from "@/lib/prisma";
import { signToken } from "./jwt";
import { sendEmail } from "./sendEmail";


 async function forgotPassword(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { success: true }; // don't reveal existence

  const token = signToken({ id: user.id }, "15m");
  const link = `${process.env.APP_URL}/reset-password?token=${token}`;

  await sendEmail(
    email,
    "Reset Your Password",
    `<p>Click to reset: <a href="${link}">Reset Password</a></p>`
  );

  return { success: true, message: "Reset email sent" };
}

export { forgotPassword };
