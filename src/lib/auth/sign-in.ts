import { verify } from 'argon2';
import { signToken } from './jwt';
export { prisma } from '@/lib/prisma';
export { hash } from 'argon2';

const signIn = async ({
  email,
  password,

}: {
  email: string;
  password: string;

}) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await verify(user.password, password))) {
    return { success: false, message: "Invalid email or password" };
  }

  await prisma.user.update({ where: { id: user.id }, data: { lastLogin: new Date() } });


  const token = signToken({ id: user.id, email: user.email });

  return {
    success: true,
    token,
    user: { id: user.id, email: user.email, name: user.name },
  };
}

export { signIn };

