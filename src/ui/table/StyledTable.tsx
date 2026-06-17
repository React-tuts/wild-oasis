import type React from "react";

export type StyledTableProps = {
  children: React.ReactNode;
};

export const StyledTable = ({ children }: StyledTableProps) => {
  return <table className="w-3/4 mx-auto my-7">{children}</table>;
};
