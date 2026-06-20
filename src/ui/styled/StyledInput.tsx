type StyledInputProps = {
  id: string;
  style?: "primary";
};

export const StyledInput = ({ id, style }: StyledInputProps) => {
  const styles = {
    primary: "w-1/2 border border-gray-500/50 rounded p-1 text-sm",
  };
  return <input type="text" id={id} className={styles[style ?? "primary"]} />;
};
