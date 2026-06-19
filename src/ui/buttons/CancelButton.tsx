import type React from "react";

export const CancelButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className="border rounded py-1 px-2 mt-2 text-sm border-slate-300 text-slate-600 text-shaow-sm"
    >
      {children}
    </button>
  );
};
