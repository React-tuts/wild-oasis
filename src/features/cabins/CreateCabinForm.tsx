import { StyledButton } from "../../ui/styled/StyledButton";
import { StyledInput } from "../../ui/styled/StyledInput";
import { StyledLabel } from "../../ui/styled/StyledLabel";
import { FormRow } from "../../ui/forms/FormRow";
import { useForm } from "react-hook-form";
import { StyledErrorMessage } from "../../ui/styled/StyledErrorMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/requests/CabinsRequests";
import toast from "react-hot-toast";
import type { CabinType as Cabin } from "../../sharedTypes/types/Cabin.type";
export type CreateCabinFormData = {
  cabinName: string;
  maximumCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: FileList;
};

export const CreateCabinForm = ({ cabin }: { cabin?: Cabin | null }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => toast.success("Cabin creataed successfully"),
    onError: () => toast.error("Cabin creation failed"),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
  });
  const { register, handleSubmit, getValues, formState } =
    useForm<CreateCabinFormData>();
  const { errors } = formState;
  console.log(errors);
  const controller = new AbortController();
  const handleFormSubmit = (data: CreateCabinFormData) => {
    console.log("handleFormSubmit");
    console.log(data);
    mutate({ cabin: data, signal: controller.signal });
  };

  const onError = (err) => {
    console.log(err);
  };
  return (
    <div className=" mt-10 w-2/3 m-auto">
      <form
        className="space-y-4"
        onSubmit={handleSubmit(handleFormSubmit, onError)}
      >
        <FormRow>
          <StyledLabel htmlFor="cabinName">Cabin name</StyledLabel>
          <div>
            <StyledInput
              id="cabinName"
              defaultValue={cabin?.name}
              {...register("cabinName", { required: "This field is required" })}
            />
            {errors.cabinName?.message && (
              <StyledErrorMessage>
                {errors.cabinName.message}
              </StyledErrorMessage>
            )}
          </div>
        </FormRow>
        <FormRow>
          <StyledLabel htmlFor="maximumCapacity">Maximum Capacity</StyledLabel>
          <div>
            <StyledInput
              type="number"
              id="maximumCapacity"
              defaultValue={cabin?.maxCapacity}
              {...register("maximumCapacity", {
                valueAsNumber: true,
                required: "This field is required",
              })}
            />
            {errors.maximumCapacity?.message && (
              <StyledErrorMessage>
                {errors.maximumCapacity.message}
              </StyledErrorMessage>
            )}
          </div>
        </FormRow>
        <FormRow>
          <StyledLabel htmlFor="regularPrice">Regular Price</StyledLabel>
          <div>
            <StyledInput
              type="number"
              id="regularPrice"
              defaultValue={cabin?.regularPrice}
              {...register("regularPrice", {
                valueAsNumber: true,
                min: { value: 1, message: "Price should be greater than 1" },
              })}
            />
            {errors.regularPrice?.message && (
              <StyledErrorMessage>
                {errors.regularPrice.message}
              </StyledErrorMessage>
            )}
          </div>
        </FormRow>
        <FormRow>
          <StyledLabel htmlFor="discount">Discount</StyledLabel>
          <div>
            <StyledInput
              id="discount"
              type="number"
              defaultValue={cabin?.discount}
              {...register("discount", {
                valueAsNumber: true,
                validate: (value) =>
                  value < getValues().regularPrice ||
                  "Discount should be less than the price",
              })}
            />
            {errors.discount?.message && (
              <StyledErrorMessage>{errors.discount.message}</StyledErrorMessage>
            )}
          </div>
        </FormRow>
        <FormRow>
          <StyledLabel htmlFor="description">
            Description for website
          </StyledLabel>
          <textarea
            id="description"
            defaultValue={cabin?.description}
            className="border border-slate-500/50 rounded w-full"
            {...register("description")}
          ></textarea>
        </FormRow>
        <FormRow>
          <StyledLabel htmlFor="image">Photo </StyledLabel>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="text-sm w-full cursor-pointer bg-blue-700 p-2 rounded text-center text-white"
            {...register("image")}
          />
        </FormRow>
        <div className=" mt-4 flex justify-end gap-2">
          <StyledButton variant="secondary" type="reset">
            Clear
          </StyledButton>
          <StyledButton variant="primary" type="submit">
            Submit
          </StyledButton>
        </div>
      </form>
    </div>
  );
};
