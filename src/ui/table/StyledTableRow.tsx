export type StyledTableRowProps = {
  children: React.ReactNode;
};
export const StyledTableRow = ({ children }: StyledTableRowProps) => {
  return <tr className="space-y-4">{children}</tr>;
};
