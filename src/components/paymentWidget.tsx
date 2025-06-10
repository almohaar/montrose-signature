"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export function PaymentWidget() {
  const params = useSearchParams();
  const bookingId = params.get("bookingId")!;
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/payments/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId }),
    })
      .then((r) => r.json())
      .then(setData);
  }, [bookingId]);

  const pay = () => {
    if (!data) return;
    const h = window.PaystackPop.setup({
      key: data.publicKey,
      ref: data.accessCode,
      amount: data.amount * 100,
      email: "", // mock
      callback: async (res: any) => {
        const v = await fetch("/api/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookingId, reference: res.reference }),
        });
        if (v.ok) router.push(`/booking/${bookingId}/confirmation`);
        else alert("Verification failed");
      },
    });
    h.openIframe();
  };

  if (!data) return <p>Loading payment…</p>;
  return (
    <>
      <Script src="https://js.paystack.co/v2/inline.js" strategy="lazyOnload" />
      <div className="text-center space-y-4">
        <p>
          Pay <strong>₦{data.amount.toLocaleString()}</strong>
        </p>
        <Button onClick={pay}>Pay with Paystack</Button>
      </div>
    </>
  );
}
