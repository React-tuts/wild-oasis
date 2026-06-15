import { BookingsSchema } from "../../sharedTypes/schemas/BookingSchema";
import type { BookingType as Booking } from "../../sharedTypes/types/Booking.type";
import { apiClient } from "../apiClient/apiClient";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getBookings = async ({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<Booking[]> => {
  const response = await apiClient.get<Booking[]>(
    `${BASE_URL}/api/bookings`,
    signal,
  );
  if (!response) {
    throw new Error("No booking data received");
  }
  const parsed = await BookingsSchema.safeParseAsync(response);
  if (!parsed.success) {
    console.error("response", response);
    console.error("zod issues", parsed.error.issues);
    throw new Error(`Parsing failed - Bookings ${parsed.error.message}`);
  }
  return parsed.data;
};
