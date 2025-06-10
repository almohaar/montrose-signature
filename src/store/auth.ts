import { User } from "@prisma/client";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, name: string, phone: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  fetchUser: () => Promise<void>;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (token: string, password: string) => Promise<boolean>;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      loading: false,
      error: null,

      fetchUser: async () => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("/api/auth/me");
          if (!res.ok) throw new Error("Failed to fetch user");
          const data = await res.json();
          set({ user: data.user, loading: false });
        } catch (error: any) {
          set({ user: null, loading: false, error: error.message });
        }
      },

      signIn: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();
          if (!res.ok) {
            toast.error(data.message || "Failed to sign in");
            set({ user: null, loading: false, error: data.message });
            return false;
          }

          toast.success("Signed in successfully");
          set({ user: data.user, loading: false });
          return true;
        } catch (error: any) {
          toast.error("Something went wrong");
          set({ user: null, loading: false, error: error.message });
          return false;
        }
      },

      signUp: async (email, password, name, phone) => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("/api/auth/sign-up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, name, phone }),
          });

          const data = await res.json();
          if (!res.ok) {
            toast.error(data.message || "Failed to sign up");
            set({ user: null, loading: false, error: data.message });
            return false;
          }

          toast.success("Account created successfully");
          set({ user: data.user, loading: false });
          return true;
        } catch (error: any) {
          toast.error("Something went wrong");
          set({ user: null, loading: false, error: error.message });
          return false;
        }
      },

      signOut: async () => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("/api/auth/sign-out", { method: "POST" });
          if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || "Failed to sign out");
          }
          set({ user: null, loading: false });
        } catch (error: any) {
          set({ loading: false, error: error.message });
        }
      },

      forgotPassword: async (email: string) => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("/api/auth/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          const data = await res.json();
          if (!res.ok) {
            toast.error(data.message || "Failed to send reset email");
            set({ loading: false, error: data.message });
            return false;
          }

          toast.success("Password reset link sent if account exists");
          set({ loading: false });
          return true;
        } catch (error: any) {
          toast.error("Something went wrong");
          set({ loading: false, error: error.message });
          return false;
        }
      },

      resetPassword: async (token: string, password: string) => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("/api/auth/reset-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, password }),
          });

          const data = await res.json();
          if (!res.ok || !data.success) {
            toast.error(data.message || "Failed to reset password");
            set({ loading: false, error: data.message });
            return false;
          }

          toast.success("Password reset successfully");
          set({ loading: false });
          return true;
        } catch (error: any) {
          toast.error("Something went wrong");
          set({ loading: false, error: error.message });
          return false;
        }
      },
    }),
    {
      name: "auth-store",
      partialize: (state): Partial<AuthState> => ({
        user: state.user,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);


export { useAuthStore };
