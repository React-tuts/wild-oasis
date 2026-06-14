import z from "zod";

export const CabinSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  maxCapacity: z.number(),
  regularPrice: z.number(),
  discount: z.number(),
  description: z.string(),
  image: z.string(),
});
