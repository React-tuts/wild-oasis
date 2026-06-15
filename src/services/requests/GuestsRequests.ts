import { GuestsSchema } from "../../sharedTypes/schemas/GuestSchema";
import type { GuestType as Guest } from "../../sharedTypes/types/Guest.types";
import { apiClient } from "../apiClient/apiClient";

const BASE_URL = import.meta.env.BASE_URL;
export const getGuests = async ({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<Guest[]> => {
  const response = await apiClient.get<Guest[]>(
    `${BASE_URL}/api/guests`,
    signal,
  );
  if (!response) {
    throw new Error("No response received for guests");
  }
  const parsed = await GuestsSchema.safeParseAsync(response);
  if (!parsed.success) {
    console.error(`guests parse failed ${parsed.error.issues}`);
    console.error(`zod error ${parsed.error.message}`);
    throw new Error(parsed.error.message);
  }
  return parsed.data;
};
