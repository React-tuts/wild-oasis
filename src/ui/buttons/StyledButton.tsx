export type StyledButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  style: "roundedDelete" | "lengthyPrimary" | "secondary";
};

const baseStyle = "uppercase text-sm";

const styles = {
  roundedDelete: `bg-red-400 p-2 rounded-full text-sm transition-transform duration-150 hover:scale-120 hover:shadow-2xl ${baseStyle}`,
  lengthyPrimary: `bg-blue-700 p-2 w-full rounded-2xl font-semibold text-slate-200 ${baseStyle}`,
  secondary: `border rounded py-1 px-3 mt-2 text-sm border-slate-300 text-slate-600 text-shaow-sm ${baseStyle} hover:bg-gray-200`,
};
export const StyledButton = ({
  children,
  onClick,
  disabled,
  style,
}: StyledButtonProps) => {
  return (
    <button
      className={styles[style]}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  );
};
