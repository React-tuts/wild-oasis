export const StyledErrorMessage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-red-500 m-1 text-sm tracking-wide">{children}</p>;
};
