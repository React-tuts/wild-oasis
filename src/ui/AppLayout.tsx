import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export const AppLayout = () => {
  return (
    <div className="grid grid-cols-[145px_1fr] md:grid-cols-[185px_1fr] min-h-svh">
      <SideBar />
      <div className=" grid grid-rows-[50px_1fr_25px] h-screen">
        <Header />
        <main className="overflow-y-scroll px-3 m-3 ">
          <Outlet />
        </main>
        <footer className="bg-blue-500 px-5">I am a footer</footer>
      </div>
    </div>
  );
};
