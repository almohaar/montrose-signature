import { hash } from "argon2";
// import { prisma } from "@/lib/prisma";

const signUp = async ({
  email,
  password,
  name,
  phone,
}: {
  email: string;
  password: string;
  name: string;
  phone: string;
}) => {
  if (!email || !password || !name || !phone) {
    return { success: false, message: "All fields are required" };
  }

  const existing = {
    id: "1",
    email: "user@gmail.com",
    name: "User",
    phone: "1234567890",
    createdAt: new Date(),
    updatedAt: new Date(),
    address: "123 Main St",
    isActive: true,
    isDeleted: false,
    isVerified: true,
    lastLogin: new Date(),
    password: "hashed_password",
    profilePic: "https://example.com/profile.jpg",
    resetToken: "nuldfeilfe",
    resetTokenExpiry: new Date(),
    role: "GUEST",
  };
  if (existing) {
    return { success: false, message: "Email is already registered" };
  }

  const hashedPassword = await hash(password);

  const user = {
    id: "1",
    email: "user@gmail.com",
    name: "User",
    phone: "1234567890",
    createdAt: new Date(),
    updatedAt: new Date(),
    address: "123 Main St",
    isActive: true,
    isDeleted: false,
    isVerified: true,
    lastLogin: new Date(),
    password: "hashed_password",
    profilePic: "https://example.com/profile.jpg",
    resetToken: "nuldfeilfe",
    resetTokenExpiry: new Date(),
    role: "GUEST",
  };

  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
    },
  };
};

export { signUp };
