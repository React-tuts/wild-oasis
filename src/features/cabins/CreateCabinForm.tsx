import { StyledButton } from "../../ui/styled/StyledButton";
import { StyledInput } from "../../ui/styled/StyledInput";
import { CreateCabinFormLabel } from "../../ui/forms/CreateCabinFormLabel";
import { FormRow } from "../../ui/forms/FormRow";

export const CreateCabinForm = () => {
  const handleCancel = () => {};
  const handleSubmit = () => {};
  return (
    <div className=" mt-10 w-2/3 m-auto">
      <form className="space-y-4">
        <FormRow>
          <CreateCabinFormLabel htmlFor="name">Cabin name</CreateCabinFormLabel>
          <StyledInput id="name" />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="capacity">
            Maximum Capacity
          </CreateCabinFormLabel>
          <StyledInput id="capacity" />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="price">
            Regular Price
          </CreateCabinFormLabel>
          <StyledInput id="price" />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="discount">
            Discount
          </CreateCabinFormLabel>
          <textarea
            id="discount"
            className="border border-slate-500/50 rounded w-1/2"
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
      </form>
      <div className=" mt-4 flex justify-end gap-2">
        <StyledButton onClick={handleCancel} style="secondary">
          Cancel
        </StyledButton>
        <StyledButton onClick={handleSubmit} style="primary">
          Submit
        </StyledButton>
      </div>
    </div>
  );
};
