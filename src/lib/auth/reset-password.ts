import { prisma } from "@/lib/prisma";
import {hash} from "argon2";
import { verifyToken } from "./jwt";

 async function resetPassword(token: string, newPassword: string) {
  const decoded = verifyToken(token) as any;
  if (!decoded?.id) return { success: false, message: "Invalid token" };

  const hashed = await hash(newPassword);
  await prisma.user.update({ where: { id: decoded.id }, data: { password: hashed } });

  return { success: true, message: "Password updated successfully" };
}

export { resetPassword };
