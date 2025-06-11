import { forgotPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const result = {
      success: "true",
      message: "If an account with that email exists, a reset link has been sent.",
    };
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return NextResponse.json({ message: "Failed to fetch rooms", error }, { status: 500 });
  }
}
