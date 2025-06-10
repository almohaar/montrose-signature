// lib/auth.tsx
"use client";
import { User } from "@prisma/client";
import React, { createContext, useContext } from "react";
import { useAuthStore } from "../store";

type AuthContext = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, name: string, phone: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  fetchUser: () => Promise<void>;
};

const AuthCtx = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { signIn, user, signOut, loading, error, signUp, fetchUser } = useAuthStore();

  return (
    <AuthCtx.Provider value={{ user, signIn, signOut, loading, error, signUp, fetchUser }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("Missing AuthProvider");
  return ctx;
}
