import { hash } from "argon2";
import { prisma } from "@/lib/prisma";

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

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { success: false, message: "Email is already registered" };
  }

  const hashedPassword = await hash(password);

  const user = await prisma.user.create({
    data: { email, name, password: hashedPassword, phone },
  });

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
