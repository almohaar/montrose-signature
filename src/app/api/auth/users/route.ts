import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {


    try {
        // Assuming you have a function to delete the user
        const users = await prisma.user.findMany({

        })
        if (!users) {
            return NextResponse.json({ message: "Users not found" }, { status: 404 })
        }

        return NextResponse.json({ message: "User fetched successfully", users }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error deleting user" }, { status: 500 })
    }
}
