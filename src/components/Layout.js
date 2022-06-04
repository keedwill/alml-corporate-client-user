import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Topbar from "./TopBar";
import { useSelector } from "react-redux";
import Menusvg from "../svg/MenuSvg";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const showBar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex  h-screen bg-lightpurple bg-opacity-40 ">
      <span
        onClick={showBar}
        className=" absolute cursor-pointer text-black  top-5 left-1 "
      >
        <Menusvg />
      </span>

      <Sidebar open={open} showBar={showBar} />
      <div className="w-screen h-screen ">
        <Topbar />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
