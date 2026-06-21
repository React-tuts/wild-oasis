import {
  CreateCabinForm,
  type CreateCabinFormData,
} from "../../features/cabins/CreateCabinForm";
import {
  CabinSchema,
  CabinsSchema,
} from "../../sharedTypes/schemas/CabinSchema";
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

export const DeleteCabin = async ({
  cabinId,
  signal,
}: {
  cabinId: string;
  signal?: AbortSignal;
}) => {
  if (cabinId === null) {
    throw new Error(`Delete Cabin - cabin is null`);
  }
  await apiClient.delete(`${BASE_URL}/api/cabins/${cabinId}`, signal);
};
export const createCabin = async ({
  cabin,
  signal,
}: {
  cabin: CreateCabinFormData;
  signal?: AbortSignal;
}) => {
  if (cabin === null) {
    throw new Error("Invalid cabin data");
  }
  console.log("before form data");
  console.log(cabin);

  const formData = new FormData();
  formData.append("name", cabin.cabinName);
  formData.append("maxCapacity", cabin.maximumCapacity.toString());
  formData.append("regularPrice", cabin.regularPrice.toString());
  formData.append("discount", cabin.discount.toString());
  formData.append("description", cabin.description);
  formData.append("image", cabin.image[0]);
  console.log(formData);
  console.log([...formData.entries()]);

  const response = await apiClient.multipartPost(
    `${BASE_URL}/api/cabins`,
    formData,
    signal,
  );
  console.log(formData);
  console.log([...formData.entries()]);
  const parsed = await CabinSchema.safeParseAsync(response);
  if (!parsed.success) {
    console.log("cabin parsing failed", parsed.error.issues);
    console.error("zod error", parsed.error.message);
  }
  return parsed.data;
};
