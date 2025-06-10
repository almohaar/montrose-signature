"use client";

import { useState } from "react";
import { DatePickerWithRange } from "./datePickerWithRange";
import { Input, Button } from "@/components/ui";
import { useForm } from "react-hook-form";
import { DateRange } from "react-day-picker";

export const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<DateRange | undefined>();
  const { register, handleSubmit } = useForm();

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const onSubmit = (data: any) => {
    console.log({ ...data, date });
    // Submit to API here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Choose Your Dates</h2>
          <DatePickerWithRange date={date} setDate={setDate} />
          <Button onClick={handleNext} type="button">
            Next
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your Info</h2>
          <Input placeholder="Full Name" {...register("name", { required: true })} />
          <Input type="email" placeholder="Email" {...register("email", { required: true })} />
          <div className="flex gap-4">
            <Button type="button" onClick={handleBack} variant="outline">
              Back
            </Button>
            <Button type="submit">Confirm Booking</Button>
          </div>
        </div>
      )}
    </form>
  );
};
