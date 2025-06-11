import { NextResponse } from "next/server";
import { mockRooms } from "@/lib/mock-db";

export const GET = async () => {
  try {
    // Fetch rooms from the database
    const rooms = mockRooms;
    return NextResponse.json(rooms, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return NextResponse.json({ message: "Failed to fetch rooms", error }, { status: 500 });
  }
};

// Define schema for validation
// const CreateRoomSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   images: z.array(z.string()),
//   price: z.number().int().positive("Price must be a positive integer"),
//   type: z.enum(["DELUXE", "EXECUTIVE", "JUNIOR_SUITES", "EXECUTIVE_SUITES"], {
//     errorMap: () => ({ message: "Invalid room type" }),
//   }),
//   amenities: z.array(z.string()),
//   description: z.string().min(1, "Description is required"),
// });

// export const POST = async (request: NextRequest) => {
//   try {
//     const body = await request.json();
//     console.log("Request body:", body);

//     const data = CreateRoomSchema.parse(body);

//     const newRoom = await prisma.room.create({
//       data: {
//         name: data.name,
//         description: data.description,
//         images: data.images,
//         price: data.price,
//         type: data.type,
//         amenities: data.amenities,
//         rating: 4.5,
//         reviews: 0,
//       }
//     });

//     return NextResponse.json(
//       { message: "Room created successfully", room: newRoom },
//       { status: 201 }
//     );
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ message: "Invalid input", errors: error.errors }, { status: 400 });
//     }

//     console.error("Room creation failed:", error);
//     return NextResponse.json(
//       { message: "Something went wrong while creating the room. ,", error },
//       { status: 500 }
//     );
//   }
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const body = await request.json();
//     console.log("Request body:", body);

//     const data = CreateRoomSchema.parse(body);

//     const newRoom = await prisma.room.create({
//       data: {
//         name: data.name,
//         description: data.description,
//         images: data.images,
//         price: data.price,
//         type: data.type,
//         amenities: data.amenities,
//         rating: 4.5,
//         reviews: 0,
//       },
//     });

//     return NextResponse.json(
//       { message: "Room created successfully", room: newRoom },
//       { status: 201 }
//     );
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ message: "Invalid input", errors: error.errors }, { status: 400 });
//     }

//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       // Handle specific Prisma errors (e.g., unique constraint violations)
//       return NextResponse.json(
//         { message: "Database error", error: error.message },
//         { status: 400 }
//       );
//     }

//     if (error instanceof Prisma.PrismaClientInitializationError) {
//       // Handle database connection issues
//       console.error("Database connection failed:", error);
//       return NextResponse.json({ message: "Failed to connect to the database" }, { status: 500 });
//     }

//     // Log the full error for debugging
//     console.error("Room creation failed:", error);
//     return NextResponse.json(
//       { message: "Something went wrong while creating the room" },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect(); // Ensure Prisma client disconnects
//   }
// };
