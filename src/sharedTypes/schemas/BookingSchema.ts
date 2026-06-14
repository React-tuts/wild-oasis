import z from "zod";
import { CabinSchema } from "./CabinSchema";
import { GuestSchema } from "./GuestSchema";

export const BookingSchema = z.object({
  bookingId: z.number(),
  createdAt: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  numOfNights: z.number(),
  numOfGuests: z.number(),
  cabinPrice: z.number(),
  extrasPrice: z.number(),
  totalPrice: z.number(),
  status: z.string(),
  hasBreakFast: z.boolean(),
  isPaid: z.boolean(),
  observations: z.string(),
  cabin: CabinSchema,
  guest: GuestSchema,
});

export const BookingsSchema = z.array(BookingSchema);
