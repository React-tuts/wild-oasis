export type StyledButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  variant: "roundedDelete" | "lengthyPrimary" | "secondary" | "primary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyle = "uppercase text-sm font-semibold";

const styles = {
  roundedDelete: `bg-red-400 p-2 rounded-full text-sm transition-transform duration-150 hover:scale-120 hover:shadow-2xl ${baseStyle}`,
  lengthyPrimary: `bg-blue-700 p-2 w-full rounded-2xl  text-slate-200 ${baseStyle} hover:bg-blue-800`,
  secondary: `border rounded py-1 px-3 mt-2 text-sm border-slate-300 text-slate-600  ${baseStyle} hover:bg-gray-200`,
  primary: `bg-blue-700 py-0 px-3 mt-2 rounded  text-slate-200 ${baseStyle} border hover:bg-blue-800`,
};
export const StyledButton = ({
  children,
  disabled,
  variant,
  ...props
}: StyledButtonProps) => {
  return (
    <button
      className={styles[variant]}
      disabled={disabled ? disabled : false}
      {...props}
    >
      {children}
    </button>
  );
};
