
import { NextResponse } from "next/server";
import { resetPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const { token, password } = await req.json();
  const result = await resetPassword(token, password);
  return NextResponse.json(result);
}
