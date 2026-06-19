export const CreateCabinFormInput = ({ id }: { id: string }) => {
  return (
    <input
      type="text"
      id={id}
      className="w-1/2 border border-gray-500/50 rounded"
    />
  );
};
