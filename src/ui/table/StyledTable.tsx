import type React from "react";

export type StyledTableProps = {
  children: React.ReactNode;
};

export const StyledTable = ({ children }: StyledTableProps) => {
  return <table className="mx-auto my-7 w-full">{children}</table>;
};
