// app/auth/signin/page.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store";

const signInSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const router = useRouter();
  const { signIn, user } = useAuthStore();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (user !== null) router.push("/dashboard");
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(signInSchema) });

  const onSubmit = async (data: FormData) => {
    try {
      const success = await signIn(data.email, data.password);
      if (success) {
        router.push("/dashboard");
      }
    } catch (e: any) {
      console.error("Sign-in failed:", e.message);
    }
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-bold text-center text-montrose-red mb-4">Welcome Back</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Email */}
        <div className="relative">
          <Label htmlFor="email">Email</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Mail size={18} className="text-gray-400" />
          </div>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="pl-10"
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="relative">
          <Label htmlFor="password">Password</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Lock size={18} className="text-gray-400" />
          </div>
          <Input
            id="password"
            type={show ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
            tabIndex={-1}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* {err && <p className="text-center text-sm text-red-600">{err}</p>} */}

        <Button
          type="submit"
          className="w-full bg-montrose-red text-white hover:bg-montrose-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In…" : "Sign In"}
        </Button>
      </form>

      <div className="text-center text-sm text-gray-600 mt-4 space-y-1">
        <p>
          Forgot your password?{" "}
          <a href="/auth/forgot-password" className="text-montrose-red hover:underline">
            Reset
          </a>
        </p>
        <p>
          Don't have an account?{" "}
          <a href="/auth/sign-up" className="text-montrose-red hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </motion.div>
  );
}
