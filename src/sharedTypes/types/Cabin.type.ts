import type z from "zod";
import type { CabinSchema } from "../schemas/CabinSchema";

export type CabinType = z.infer<typeof CabinSchema>;
