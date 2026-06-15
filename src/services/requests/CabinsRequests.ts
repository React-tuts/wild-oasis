import { CabinsSchema } from "../../sharedTypes/schemas/CabinSchema";
import type { CabinType as Cabin } from "../../sharedTypes/types/Cabin.type";
import { apiClient } from "../apiClient/apiClient";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCabins = async ({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<Cabin[]> => {
  const response = await apiClient.get<Cabin[]>(
    `${BASE_URL}/api/cabins`,
    signal,
  );
  if (!response) {
    throw new Error("no cabins response received");
  }
  const parsed = await CabinsSchema.safeParseAsync(response);
  if (!parsed.success) {
    console.error("cabin parsing failed", parsed.error.issues);
    console.error("zod error", parsed.error.message);
    throw new Error(parsed.error.message);
  }
  return parsed.data;
};
