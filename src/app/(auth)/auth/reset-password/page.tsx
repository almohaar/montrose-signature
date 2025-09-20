// app/auth/reset-password/page.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

const resetSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof resetSchema>;

export default function ResetPasswordPage() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(resetSchema) });

  useEffect(() => {
    // If no code, redirect back to forgot-password
    const code = searchParams.get("code");
    if (!code) {
      router.replace("/auth/forgot-password");
      return;
    }
    // Supabase will automatically use the code to create a recovery session
    setReady(true);
  }, [searchParams, router]);

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (error) {
        toast.error(error.message || "Unable to update password");
        return;
      }

      toast.success("Password updated successfully. Please log in.");
      router.replace("/auth/login");
    } catch (e: any) {
      console.error("Reset password error:", e.message);
      toast.error("Something went wrong. Try again.");
    }
  };

  if (!ready) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Preparing reset…</p>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-2xl font-bold text-center text-montrose-red mb-6">Set a New Password</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div>
          <Label htmlFor="password">New Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter new password"
            {...register("password")}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-montrose-red text-white hover:bg-montrose-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating…" : "Update Password"}
        </Button>
      </form>
    </motion.div>
  );
}
