// lib/schemas/booking.ts
import { z } from "zod";

export const datesSchema = z
  .object({
    start: z.date().min(new Date(), { message: "Start must be in the future" }),
    end: z.date(),
  })
  .refine((d) => d.end > d.start, {
    message: "End date must be after start date",
    path: ["end"],
  });

export const guestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone must be at least 7 digits"),
});

export const extrasSchema = z.object({
  extras: z.array(z.string().optional()),
});

export const reviewSchema = z.object({
  confirm: z.literal(true, {
    errorMap: () => ({ message: "Please confirm to proceed." }),
  }),
});
