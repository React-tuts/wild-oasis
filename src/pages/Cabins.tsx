import { useState } from "react";
import { CabinsList } from "../features/cabins/CabinsList";
import { LengthyButton } from "../ui/buttons/LengthyButton";
import { CreateCabinForm } from "../features/cabins/CreateCabinForm";

export const Cabins = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div className="w-3/4 m-auto">
      <CabinsList />
      <LengthyButton onClick={() => setShow(!show)}>
        Add New Cabin
      </LengthyButton>
      {show && <CreateCabinForm />}
    </div>
  );
};
