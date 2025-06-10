"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../../store";

const forgotSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

type FormData = z.infer<typeof forgotSchema>;

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const { forgotPassword } = useAuthStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(forgotSchema) });

  const onSubmit = async (data: FormData) => {
    try {
      const success = await forgotPassword(data.email);
      if (success) {
        router.push("/auth/reset-password");
        setSubmitted(true);
      }
    } catch (e: any) {
      console.error("Forgot-Password failed:", e.message);
    }
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-bold text-center text-montrose-red">
        {submitted ? "Check Your Email" : "Reset Password"}
      </h3>

      {submitted ? (
        <p className="text-center text-gray-700">
          If that email exists, you’ll receive a reset link shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
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

          <Button
            type="submit"
            className="w-full bg-montrose-red text-white hover:bg-montrose-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send Reset Link"}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
