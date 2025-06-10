"use client";

import { Button } from "@/components/ui/button";
import { stepSchemas } from "@/lib/schemas";
import { useAuthStore, useBookingStore } from "@/store"; // adjust import paths
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { StepDates, StepExtras, StepGuest, StepReview } from "./booking";
import { Room } from "@prisma/client";

const STEPS = [StepDates, StepGuest, StepExtras, StepReview] as const;

export function BookingForm({ room }: { room: Room }) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    resolver: zodResolver(stepSchemas[step]),
    mode: "onTouched",
    defaultValues: { extras: [], confirm: false },
  });
  const { trigger, getValues } = methods;
  const { setDates, setGuest, setExtras, reset } = useBookingStore();
  const router = useRouter();
  const StepComponent = STEPS[step];
  const { user } = useAuthStore();

  // ⭐ gate-keep bookings for signed-in GUEST role
  useEffect(() => {
    if (user === null) {
      toast.error("Please sign in to book");
      router.push("/auth/sign-in");
    } else if (user.role !== "GUEST") {
      toast.error("Only guests can make bookings");
      router.push("/dashboard");
    }
  }, [user, router]);

  const next = async () => {
    if (!(await trigger())) return toast.error("Fix the errors first");
    const d = getValues();

    if (step === 0) setDates({ start: d.start, end: d.end });
    if (step === 1) setGuest(user!);
    if (step === 2) setExtras(d.extras);

    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const confirm = async () => {
    if (!(await trigger())) return toast.error("Please confirm the details");
    setLoading(true);

    try {
      const { dates, extras } = useBookingStore.getState();
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomId: room.id,
          dates: {
            start: dates!.start.toISOString(),
            end: dates!.end.toISOString(),
          },
          extras,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);

      toast.success("Booking created!");
      reset();
      router.push(`/booking/${room.id}/confirmation?bookingId=${data.booking.id}`);
    } catch (err: any) {
      toast.error(err.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          step < STEPS.length - 1 ? next() : confirm();
        }}
      >
        <StepComponent />

        <div className="flex justify-between mt-6">
          {step > 0 && (
            <Button type="button" onClick={back} disabled={loading}>
              Back
            </Button>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? "…" : step < STEPS.length - 1 ? "Next" : "Confirm Booking"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
