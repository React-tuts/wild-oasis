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
            ? "bg-gray-700/40 text-slate-900 font-semibold"
            : "text-slate-700 hover:bg-gray-500/10"
        }`
      }
    >
      {children}
    </NavLink>
  );
};
