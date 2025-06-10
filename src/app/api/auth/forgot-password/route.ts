import { forgotPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  const result = await forgotPassword(email);
  return NextResponse.json(result);
}
