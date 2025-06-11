// import { prisma } from "@/lib/prisma";
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
    // return await prisma.user.findUnique({ where: { id: decoded.id } });
    return {
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
  } catch {
    return null;
  }
}

export { getUserFromToken };
