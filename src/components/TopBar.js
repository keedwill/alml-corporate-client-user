import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSearch from "../hooks/use-Search";
import Avatar from "../svg/Avatar";
import Bell from "../svg/Bell";

import Settings from "../svg/Settings";
import checkIfValidUUID from "../util/checkUuid";
import Searchbar from "./SearchBar";

const isSearch = (value) => value.trim() !== "";

const Topbar = () => {
  const navigate = useNavigate();
  const {
    value: searchValue,
    isValid: searchIsValid,
    valueChangeHandler: searchChangeHandler,
    reset: resetSearch,
  } = useSearch(isSearch);

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchIsValid) {
      if (checkIfValidUUID(searchValue)) {
       
        // 3d2e52d4-2726-4d0f-aef6-f390332819e8
         navigate(`/proformas/${searchValue}`);
         resetSearch()
      }else{

        toast.error("Proforma Id Format Incorrect");
      }

    } else {
      toast.error("Search Field is invalid");
    }
  };
  return (
    <div className=" py-4 mx-10 flex border-x-0 border border-t-0  border-b-gray    pl-10  ">
      <div className=" w-3/5  ">
        <form className=" -ml-8 " onSubmit={searchHandler}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
            Search
          </label>
          <div className="relative flex items-center text-darkgrey focus-within:text-alml">
            {/* <div className="flex absolute  inset-y-0 left-0 items-center pl-3 pointer-events-none"> */}
            <svg
              className="w-7 ml-2 pointer-events-none absolute "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            {/* </div> */}
            <input
              type="search"
              value={searchValue}
              onChange={searchChangeHandler}
              className="block p-4 pl-10 w-full text-sm    border border-gray focus:outline-none md:placeholder:text-sm placeholder:text-xs"
              placeholder="Search Proforma By ID..."
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-alml  focus:ring-0 focus:scale-110 focus:outline-none  font-medium  md:text-sm text-xs md:px-2 px-1 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded  flex items-center justify-around ml-4 w-1/3">
        <span className=" cursor-pointer">
          <Bell />
        </span>

        <span className=" cursor-pointer ">
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
