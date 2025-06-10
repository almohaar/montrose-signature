// lib/schemas/stepSchemas.ts
import { ZodType } from "zod";
import { datesSchema } from "./booking"; // your object-level refine schema
import { guestSchema, extrasSchema, reviewSchema } from "./booking";

export const stepSchemas: ZodType<any, any, any>[] = [
  datesSchema,
  guestSchema,
  extrasSchema,
  reviewSchema,
];
