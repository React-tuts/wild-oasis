export type StyledTableHeadProps = {
  children: React.ReactNode;
};
export const StyledTableHead = ({ children }: StyledTableHeadProps) => {
  return <th className="text-left py-4">{children}</th>;
};
