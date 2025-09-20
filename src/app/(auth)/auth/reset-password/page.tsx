// app/auth/reset-password/page.tsx
"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-context";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-600">Loading reset page…</p>
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
