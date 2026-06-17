export type StyledTableDataProps = {
  children: React.ReactNode;
};

export const StyledTableData = ({ children }: StyledTableDataProps) => {
  return <td className="py-4 max-w-30">{children}</td>;
};
