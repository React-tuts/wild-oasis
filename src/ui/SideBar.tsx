import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { StyledNavLink } from "./StyledNavLink";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
} from "react-icons/hi2";

export const SideBar = () => {
  return (
    <aside className=" px-3 py-5">
      <div className="mx-1 md:mx-5">
        <img src="images/logo.png" />
      </div>
      <h5 className="my-7 text uppercase tracking-wider mx-2 text-center text-slate-500 font-semibold ">
        The Wild Oasis
      </h5>

      <ul className="my-2 ">
        <li className="my-3">
          <StyledNavLink to={"dashboard"}>
            <HiOutlineHome />
            Home
          </StyledNavLink>
        </li>
        <li className="my-3">
          <StyledNavLink to={"bookings"}>
            <HiOutlineCalendarDays />
            Bookings
          </StyledNavLink>
        </li>
        <li className="my-3">
          <StyledNavLink to={"cabins"}>
            <HiOutlineHomeModern />
            Cabins
          </StyledNavLink>
        </li>
        <li className="my-3">
          <StyledNavLink to={"users"}>
            <HiOutlineUsers />
            Users
          </StyledNavLink>
        </li>
        <li className="my-3">
          <StyledNavLink to={"settings"}>
            <HiOutlineCog6Tooth />
            Settings
          </StyledNavLink>
        </li>
      </ul>
    </aside>
  );
};
