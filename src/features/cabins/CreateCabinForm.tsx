import { CancelButton } from "../../ui/buttons/CancelButton";
import { CreateCabinFormInput } from "../../ui/forms/CreateCabinFormInput";
import { CreateCabinFormLabel } from "../../ui/forms/CreateCabinFormLabel";
import { FormRow } from "../../ui/forms/FormRow";

export const CreateCabinForm = () => {
  const handleCancel = () => {};
  return (
    <div className=" mt-10 w-2/3 m-auto">
      <form className="space-y-4">
        <FormRow>
          <CreateCabinFormLabel htmlFor="name">Cabin name</CreateCabinFormLabel>
          <CreateCabinFormInput id="name" />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="capacity">
            Maximum Capacity
          </CreateCabinFormLabel>
          <CreateCabinFormInput id="capacity" />
        </FormRow>
        <FormRow>
          <CreateCabinFormLabel htmlFor="price">
            Regular Price
          </CreateCabinFormLabel>
          <CreateCabinFormInput id="price" />
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
      <div className="space-y-4 flex justify-end">
        <CancelButton handleClick={handleCancel}>Cancel</CancelButton>
      </div>
    </div>
  );
};
