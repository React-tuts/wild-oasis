import type React from "react";
import { NavLink } from "react-router-dom";

export const StyledNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={`${to}`}
      className={({ isActive }) =>
        `flex items-center gap-2 px-2 py-1
        ${
          isActive
            ? "bg-gray-50/40 text-white font-bold"
            : "text-slate-200 hover:bg-gray-50/10"
        }`
      }
    >
      {children}
    </NavLink>
  );
};
