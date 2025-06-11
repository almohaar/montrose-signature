// app/auth/signup/page.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useAuthStore } from "@/store/auth";

const signUpSchema = z
  .object({
    name: z.string().min(8, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(10, "Phone number is required"),
    password: z.string().min(6, "At least 6 characters"),
    confirm: z.string().min(1, "Confirm your password"),
  })
  .refine((d) => d.password === d.confirm, {
    path: ["confirm"],
    message: "Passwords must match",
  });

type FormData = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const router = useRouter();
  // const { signUp } = useAuthStore();
  const [err, setErr] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: FormData) => {
    try {
      // const success = await signUp(data.email, data.password, data.name, data.phone);

      if (true) {
        router.push("/dashboard");
      }
    } catch (e: any) {
      // toast handled in authStore, optionally log here
      console.error("Sign-up failed:", e.message);
    }
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-bold text-center text-montrose-red mb-4">Create Account</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Name */}
        <div className="relative">
          <Label htmlFor="name">Name</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Mail size={18} className="text-gray-400" />
          </div>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="pl-10"
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
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
        {/* Phone */}
        <div className="relative">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Mail size={18} className="text-gray-400" />
          </div>
          <Input
            id="phone"
            type="tel"
            placeholder="+234 123 4567 890"
            className="pl-10"
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
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

        {/* Confirm */}
        <div className="relative">
          <Label htmlFor="confirm">Confirm Password</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Lock size={18} className="text-gray-400" />
          </div>
          <Input
            id="confirm"
            type={show ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10"
            {...register("confirm")}
          />
          {errors.confirm && <p className="mt-1 text-sm text-red-600">{errors.confirm.message}</p>}
        </div>

        {err && <p className="text-center text-sm text-red-600">{err}</p>}

        <Button
          type="submit"
          className="w-full bg-montrose-red text-white hover:bg-montrose-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing Up…" : "Sign Up"}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already a member?{" "}
        <a href="/auth/sign-in" className="text-montrose-red hover:underline">
          Sign In
        </a>
      </p>
    </motion.div>
  );
}
