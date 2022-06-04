import React from "react";
import Avatar from "../svg/Avatar";
import Bell from "../svg/Bell";
import Settings from "../svg/Settings";
import Searchbar from "./SearchBar";

const Topbar = () => {
  return (
    <div className=" py-4 mx-10 flex border-x-0 border border-t-0  border-b-gray    pl-10  ">
      <div className=" w-3/5 ">
        <Searchbar />
      </div>
      <div className="bg-white rounded  flex items-center justify-around ml-4 w-1/3">
        <span className=" cursor-pointer">
          <Bell />
        </span>

        <span className=" cursor-pointer">
          <Settings />
        </span>
        <span className=" cursor-pointer">
          <Avatar />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
