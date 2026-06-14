import z from "zod";

export const SettingSchema = z.object({
  id: z.string,
  minBookingLength: z.number,
  maxBookingLength: z.number,
  maxNumberOfGuestsPerBooking: z.number,
  breakfastPrice: z.number,
});
