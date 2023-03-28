import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Topbar from "./TopBar";
import { useSelector } from "react-redux";
import Menusvg from "../svg/MenuSvg";
import Cart from "./Cart/Cart";
// import Singleproforma from "./SingleProforma";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const showCart = useSelector((state) => state.ui.showCart);

  const showBar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex  h-screen bg-lightpurple bg-opacity-40 overflow-auto">
      <span
        onClick={showBar}
        className=" absolute cursor-pointer text-black  top-5 left-1 "
      >
        <Menusvg />
      </span>

      <Sidebar open={open} showBar={showBar} />
      {showCart && <Cart />}
      {/* {showSingleProforma && <Singleproforma />} */}
      <div className="w-screen h-screen  ">
        

        <Topbar />
      

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
