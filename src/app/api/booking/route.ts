import { NextResponse } from "next/server";
import { getUserFromToken } from "@/lib/auth";
import { createBooking } from "@/lib/booking";

export async function POST(req: Request) {
  try {
    const user = await getUserFromToken(req);
    if (!user)
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const result = await createBooking(user.id, body);

    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
