"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store";
import toast from "react-hot-toast";

const resetSchema = z
  .object({
    password: z.string().min(6, "Min 6 characters"),
    confirm: z.string().min(1, "Confirm your password"),
  })
  .refine((d) => d.password === d.confirm, {
    path: ["confirm"],
    message: "Passwords must match",
  });

type FormData = z.infer<typeof resetSchema>;

export default function ResetPasswordPage() {
  // const params = useSearchParams();
  // const token = params.get("token");
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);


  const [token, setToken] = useState<string | null>(null);
  const { resetPassword, loading } = useAuthStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const t = searchParams.get("token");
    if (!t) {
      toast.error("Missing token");
      router.push("/forgot-password");
    } else {
      setToken(t);
    }
  }, [searchParams, router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(resetSchema) });

  const onSubmit = async (data: FormData) => {
    try {
      if (!data.password || !data.confirm) {
        return toast.error("All fields are required");
      }

      if (data.password !== data.confirm) {
        return toast.error("Passwords do not match");
      }

      if (!token) {
        return toast.error("Invalid or missing token");
      }

      const success = await resetPassword(token, data.password);
      if (success) {
        router.push("/sign-in");
      }
    } catch (e: any) {
      console.error("Reset-Password failed:", e.message);
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
        {submitted ? "Reset Successful" : "Set New Password"}
      </h3>

      {submitted ? (
        <p className="text-center text-gray-700">Redirecting to sign in…</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="relative">
            <Label htmlFor="password">New Password</Label>
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
            {errors.confirm && (
              <p className="mt-1 text-sm text-red-600">{errors.confirm.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-montrose-red text-white hover:bg-montrose-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Resetting…" : "Reset Password"}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
