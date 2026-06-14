import type z from "zod";
import type { GuestSchema } from "./schemas/GuestSchema";

export type GuestType = z.infer<typeof GuestSchema>;
