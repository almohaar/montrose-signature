import { verifyToken } from "@/lib/auth/jwt";
// import { User } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get("token")?.value; // no need to await this

  if (!token) return NextResponse.json({ user: null });

  const decoded = verifyToken(token) as any;
  if (!decoded) return NextResponse.json({ user: null });

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

  return NextResponse.json({ user });
}
