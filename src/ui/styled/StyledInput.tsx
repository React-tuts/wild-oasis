type StyledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  style?: "primary";
};

export const StyledInput = ({ style, ...props }: StyledInputProps) => {
  const styles = {
    primary: "w-1/2 border border-gray-500/50 rounded p-1 text-sm",
  };
  return <input {...props} className={styles[style ?? "primary"]} />;
};
