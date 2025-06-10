"use client";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StepGuest() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-4">
      {["name", "email", "phone"].map((field) => (
        <div key={field} className="space-y-1">
          <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
          <Input id={field} {...register(field)} className="w-full" />
          {errors[field] && (
            <p className="text-sm text-red-600">{errors[field].message?.toString()}</p>
          )}
        </div>
      ))}
    </div>
  );
}
