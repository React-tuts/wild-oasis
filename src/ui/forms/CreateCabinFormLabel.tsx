export const CreateCabinFormLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return (
    <label htmlFor={htmlFor} className="w-1/2 font-semibold text-slate-700">
      {children}
    </label>
  );
};
