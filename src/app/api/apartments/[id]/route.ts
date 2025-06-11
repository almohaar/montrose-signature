import { mockRooms } from "@/lib/mock-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const room = mockRooms.find((r) => slug === slug);
    if (!room) return NextResponse.json({ error: "Room not found" }, { status: 404 });
    return NextResponse.json(room, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return NextResponse.json({ message: "Failed to fetch room", error }, { status: 500 });
  }
}
