// types/next-auth.d.ts (or anywhere, just make sure it's included globally)
import NextAuth from "@auth/core";

declare module "@auth/core/types" {
  interface Session {
    user?: {
      id: string;
      email: string;
      role?: string;
      emailVerified?: Date | null;
    };
  }

  interface User {
    id: string;
    email: string;
    role?: string;
  }

  interface JWT {
    id?: string;
    email?: string;
    role?: string;
  }
}
