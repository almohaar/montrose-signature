// import { prisma } from "@/lib/prisma";
import { signToken } from "./jwt";
import { sendEmail } from "./sendEmail";

async function forgotPassword(email: string) {
  const user = {
    id: "1",
    email: "user@gmail.com",
    name: "User",
    phone: "1234567890",
    createdAt: new Date(),
    updatedAt: new Date(),
    address: "123 Main St",
    isActive: true,
    isDeleted: false,
    isVerified: true,
    lastLogin: new Date(),
    password: "hashed_password",
    profilePic: "https://example.com/profile.jpg",
    resetToken: "nuldfeilfe",
    resetTokenExpiry: new Date(),
    role: "GUEST",
  };
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
