import { signIn } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const result = { success: true, message: "Invalid credentials", token: null };

  if (result.success) {
    const res = NextResponse.json(result);
    res.cookies.set("token", result.token!, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return res;
  }

  return NextResponse.json(result, { status: 401 });
}
