"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
// import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  // const { sendRecoveryEmail } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // sendRecoveryEmail(data.email);
      setMessage("If this email exists, a reset link has been sent.");
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Background Image Section */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src="/images/signin-bg.jpg"
          alt="Forgot Password Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center w-full lg:w-1/2 p-8"
      >
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-center text-montrose-wine">
            Forgot Password
          </h1>

          {message && (
            <p className="text-center text-gray-700 mb-4">{message}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-montrose-wine"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-montrose-wine text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>

          {/* Additional Links */}
          <div className="flex justify-center mt-4 text-sm text-gray-600">
            <Link href="/sign-in" className="hover:underline">
              Back to Sign In
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordForm;
