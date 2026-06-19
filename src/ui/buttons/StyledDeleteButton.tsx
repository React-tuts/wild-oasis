export type StyledDeleteButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
};
export const StyledDeleteButton = ({
  children,
  onClick,
  disabled,
}: StyledDeleteButtonProps) => {
  return (
    <button
      className="bg-red-400 p-2 rounded-full text-sm transition-transform duration-150 hover:scale-120 hover:shadow-2xl"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
