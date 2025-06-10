"use client";
import { useAuthStore } from "@/store";
import { useEffect } from "react";


const AuthHydrator = ({ children }: { children: React.ReactNode }) => {
  const {fetchUser} = useAuthStore();

  useEffect(() => {
    fetchUser(); // load user once on mount
  }, [fetchUser]);

  return <>{children}</>;
}

export { AuthHydrator };
