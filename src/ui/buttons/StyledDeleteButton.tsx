export type StyledDeleteButtonProps = {
  children: React.ReactNode;
};
export const StyledDeleteButton = ({ children }: StyledDeleteButtonProps) => {
  return (
    <button className="bg-red-400 p-2 rounded-full text-sm transition-transform duration-150 hover:scale-120 hover:shadow-2xl">
      {children}
    </button>
  );
};
