export type StyledTableHeaderProps = {
  children: React.ReactNode;
};

export const StyledTableHeader = ({ children }: StyledTableHeaderProps) => {
  return <thead className="border-b border-gray-700">{children}</thead>;
};
