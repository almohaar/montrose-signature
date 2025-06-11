// import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Assuming you have a function to delete the user
    const users = [
      {
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
      },
    ];
    if (!users) {
      return NextResponse.json({ message: "Users not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User fetched successfully", users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting user" }, { status: 500 });
  }
}
