"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
const ALL_EXTRAS = ["Breakfast", "Airport Transfer", "Extra Bed"] as const;

export function StepExtras() {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      {ALL_EXTRAS.map((ex) => (
        <Controller
          key={ex}
          name="extras"
          control={control}
          defaultValue={[]}
          render={({ field }) => {
            const arr = Array.isArray(field.value) ? field.value : [];
            const checked = arr.includes(ex);
            return (
              <label className="flex items-center space-x-2">
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) => {
                    field.onChange(v ? [...arr, ex] : arr.filter((x) => x !== ex));
                  }}
                />
                <span>{ex}</span>
              </label>
            );
          }}
        />
      ))}
    </div>
  );
}
