import type React from "react";

export const StyledLabel = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props} className="font-semibold text-slate-700 w-full">
      {children}
    </label>
  );
};
