export type StyledTableBodyProps = {
  children: React.ReactNode;
};

export const StyledTableBody = ({ children }: StyledTableBodyProps) => {
  return <tbody className="divide-y divide-gray-700 ">{children}</tbody>;
};
