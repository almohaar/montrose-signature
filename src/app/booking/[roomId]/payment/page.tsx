"use client";

import { PaymentWidget } from "@/components";

export default function PaymentPage() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Complete Your Payment</h1>
      <PaymentWidget />
    </div>
  );
}
