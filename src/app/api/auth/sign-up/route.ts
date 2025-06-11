import { NextResponse } from "next/server";
import { signUp } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const response = {
      success: false,
      message: "Invalid input",
      user: {
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
    };

    if (!response.success) {
      return NextResponse.json({ message: response.message }, { status: 400 });
    }

    return NextResponse.json({ user: response.user, message: "Account created successfully" });
  } catch (error: any) {
    console.error("Sign-up error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
