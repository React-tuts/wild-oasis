import type z from "zod";
import type { BookingSchema } from "../schemas/BookingSchema";

export type BookingType = z.infer<typeof BookingSchema>;
