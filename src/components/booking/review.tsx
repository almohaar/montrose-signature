"use client";
import { useBookingStore } from "@/store";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

export function StepReview() {
  // const { dates, guest, extras } = useBookingStore();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      {/* review info... */}
      <Controller
        name="confirm"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <label className="flex items-center space-x-2">
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            <span>I confirm and agree to terms</span>
          </label>
        )}
      />
      {typeof errors.confirm?.message === "string" && (
        <p className="text-sm mt-1 text-red-600">{errors.confirm.message}</p>
      )}
    </div>
  );
}
