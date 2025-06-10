import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function DELETE(req: Request) {
    const data = await req.json()

    const { userId } = data

    if (!userId) {
        return NextResponse.json({ message: "User ID is required" }, { status: 400 })
    }

    try {
        // Assuming you have a function to delete the user
        const userExists = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })
        if (!userExists) {
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }
        const user = await prisma.user.delete({
            where: {
                id: userExists.id,
            },
        })


        return NextResponse.json({ message: "User deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error deleting user" }, { status: 500 })
    }
}
