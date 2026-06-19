export const LengthyButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 p-2 w-full rounded-2xl font-semibold text-slate-200"
    >
      {children}
    </button>
  );
};
