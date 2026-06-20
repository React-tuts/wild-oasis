import { useState } from "react";
import { CabinsList } from "../features/cabins/CabinsList";
import { CreateCabinForm } from "../features/cabins/CreateCabinForm";
import { StyledButton } from "../ui/buttons/StyledButton";

export const Cabins = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div className="w-3/4 m-auto">
      <CabinsList />
      <StyledButton onClick={() => setShow(!show)} style="lengthyPrimary">
        Add New Cabin
      </StyledButton>
      {show && <CreateCabinForm />}
    </div>
  );
};
