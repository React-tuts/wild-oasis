import z from "zod";

export const GuestSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  createdAt: z.string(),
  email: z.string(),
  nationality: z.string(),
  countryFlag: z.string(),
  nationalId: z.string(),
});
