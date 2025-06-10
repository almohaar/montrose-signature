import { verifyToken } from "@/lib/auth/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get("token")?.value; // no need to await this

  if (!token) return NextResponse.json({ user: null });

  const decoded = verifyToken(token) as any;
  if (!decoded) return NextResponse.json({ user: null });

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    select: { id: true, name: true, email: true },
  });

  return NextResponse.json({ user });
}
