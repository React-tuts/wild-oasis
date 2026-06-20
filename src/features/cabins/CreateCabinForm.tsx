import { StyledButton } from "../../ui/styled/StyledButton";
import { StyledInput } from "../../ui/styled/StyledInput";
import { CreateCabinFormLabel } from "../../ui/forms/CreateCabinFormLabel";
import { FormRow } from "../../ui/forms/FormRow";
import { useForm } from "react-hook-form";

type CreateCabinFormData = {
  cabinName: string;
  maximumCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  photo: string;
};

export const CreateCabinForm = () => {
  const { register, handleSubmit } = useForm<CreateCabinFormData>();
  const handleFormSubmit = (data: CreateCabinFormData) => {
    console.log("handleFormSubmit");
    console.log(data);
  };
  return (
    <div className=" mt-10 w-2/3 m-auto">
      <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow>
          <CreateCabinFormLabel htmlFor="cabinName">
            Cabin name
          </CreateCabinFormLabel>
          <StyledInput id="cabinName" {...register("cabinName")} />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="maximumCapacity">
            Maximum Capacity
          </CreateCabinFormLabel>
          <StyledInput
            type="number"
            id="maximumCapacity"
            {...register("maximumCapacity", { valueAsNumber: true })}
          />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="regularPrice">
            Regular Price
          </CreateCabinFormLabel>
          <StyledInput
            type="number"
            id="regularPrice"
            {...register("regularPrice", { valueAsNumber: true })}
          />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="discount">
            Discount
          </CreateCabinFormLabel>
          <StyledInput
            id="discount"
            type="number"
            {...register("discount", { valueAsNumber: true })}
          />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="description">
            Description for website
          </CreateCabinFormLabel>
          <textarea
            id="description"
            className="border border-slate-500/50 rounded w-1/2"
            {...register("description")}
          ></textarea>
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="photo">Photo </CreateCabinFormLabel>
          <input
            type="file"
            id="photo"
            accept="image/*"
            className="w-1/2 text-sm"
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
