// app/api/rooms/[id]/route.ts
import { mockRooms } from "@/lib/mock-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = mockRooms.find((r) => slug === slug);
  if (!room) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(room);
}
