"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Calendar } from "@/components/ui";
import { Label } from "@/components/ui/label";

export function StepDates() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["start", "end"].map((name) => (
          <div key={name} className="space-y-1">
            <Label htmlFor={name}>{name === "start" ? "Check-in" : "Check-out"}</Label>
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <Calendar
                  id={name}
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  className="w-full border rounded"
                />
              )}
            />
            {errors[name] && (
              <p className="text-sm text-red-600">{errors[name].message?.toString()}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
