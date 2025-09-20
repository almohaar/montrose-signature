// app/auth/signup/page.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "../../../../lib/supabase";

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(8, "Phone number is required"),
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
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: FormData) => {
    // clear old toasts and show a loading toast
    toast.dismiss();
    // const toastId = toast.loading("Creating account...");

    try {
      // Use Supabase auth to create the user.
      // We send profile info in `options.data` (stored in auth.user.user_metadata).
      const supabase =  createClient()
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/login`, // confirmation redirect (adjust if you have a callback)
          data: { full_name: data.name, phone: data.phone },
        },
      });

      if (signUpError) {
        // Common cases: email already registered, weak password, etc.
        toast.error(signUpError.message);
        return;
      }

      // If Supabase returns a user object immediately (email confirm optional depending on settings)
      const supaUser = authData?.user ?? null;

      // If a user object exists (i.e. confirmed or instant session), create a profile row in your users/profiles table
      // Replace "profiles" below with your table name (e.g. "users") that you want to populate.
      if (supaUser?.id) {
        const profile = {
          id: supaUser.id, // make profile primary key the auth uid
          email: data.email,
          name: data.name,
          phone: data.phone,
          created_at: new Date().toISOString(),
        };

        const { error: insertError } = await supabase.from("profiles").insert(profile);

        if (insertError) {
          // Profile insert failed — log + notify, but still let the user proceed
          console.warn("Failed to create profile row:", insertError.message);
          toast.error("Account created but profile setup failed. Contact support.");
          // Still redirect to sign-in, profile can be completed later in account settings
          router.push("/auth/login");
          return;
        }
      }

      // Success path:
      // If email confirmation is required, Supabase often DOES NOT return user immediately.
      // So we show a friendly message directing them to check email.
      toast.success(
        supaUser
          ? "Account created successfully. You can sign in now."
          : "Check your email to confirm your account."
      );

      // Redirect to sign-in. If you want to keep them on the page to confirm email, you can skip immediate redirect.
      router.push("/auth/login");
    } catch (error: any) {
      console.error("Sign-up unexpected error:", error);
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.28 }}
    >
      <h3 className="text-2xl font-semibold text-center text-montrose-red mb-6">Create account</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name */}
        <div className="relative">
          <Label htmlFor="name">Full name</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <User size={18} className="text-gray-400" />
          </div>
          <Input
            id="name"
            aria-invalid={!!errors.name}
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className="pl-10"
            autoComplete="name"
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
            aria-invalid={!!errors.email}
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="pl-10"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="relative">
          <Label htmlFor="phone">Phone</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Phone size={18} className="text-gray-400" />
          </div>
          <Input
            id="phone"
            aria-invalid={!!errors.phone}
            {...register("phone")}
            type="tel"
            placeholder="+234 812 345 6789"
            className="pl-10"
            autoComplete="tel"
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
            aria-invalid={!!errors.password}
            {...register("password")}
            type={show ? "text" : "password"}
            placeholder="At least 6 characters"
            className="pl-10"
            autoComplete="new-password"
          />
          <button
            type="button"
            aria-label={show ? "Hide password" : "Show password"}
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

        {/* Confirm Password */}
        <div className="relative">
          <Label htmlFor="confirm">Confirm password</Label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Lock size={18} className="text-gray-400" />
          </div>
          <Input
            id="confirm"
            aria-invalid={!!errors.confirm}
            {...register("confirm")}
            type={show ? "text" : "password"}
            placeholder="Repeat password"
            className="pl-10"
            autoComplete="new-password"
          />
          {errors.confirm && <p className="mt-1 text-sm text-red-600">{errors.confirm.message}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-montrose-red text-white hover:bg-montrose-dark"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Creating account…" : "Create account"}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already a member?{" "}
        <a href="/auth/signin" className="text-montrose-red hover:underline">
          Sign in
        </a>
      </p>
    </motion.div>
  );
}
