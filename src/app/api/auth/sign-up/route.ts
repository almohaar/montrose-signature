import { NextResponse } from "next/server";
import { signUp } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const response = await signUp(data);

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
