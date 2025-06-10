import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

/** Returns the user or `null` if the token is missing/invalid */
async function getUserFromToken(): Promise<User | null> {
  // cookie read works both in API routes and middleware
  const token = (await cookies()).get("token")?.value; // no need to await this

  if (!token) return null;

  try {
    const decoded = verifyToken(token) as { id: string };
    if (!decoded?.id) return null;
    return await prisma.user.findUnique({ where: { id: decoded.id } });
  } catch {
    return null;
  }
}

export { getUserFromToken };
