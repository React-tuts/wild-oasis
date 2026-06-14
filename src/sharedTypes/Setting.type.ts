import type z from "zod";
import type { SettingSchema } from "./schemas/SettingSchema";

export type SettingType = z.infer<typeof SettingSchema>;
