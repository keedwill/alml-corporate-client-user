import React from "react";
import { NavLink } from "react-router-dom";

import corporate from "./../assets/images/corporate.png";

import Closesvg from "../svg/CloseSvg";
import { useSelector } from "react-redux";

const Sidebar = ({ open, showBar }) => {
  const user = useSelector((state) => state.auth.user);
  const closeBar = () => {
    showBar();
  };

  return (
    <nav
      className={`
   
    w-60 md:left-0 ${
      open ? "" : "-left-60 duration-500"
    }   md:relative absolute  bg-white border border-r-gray border-y-0 h-full max-h-full  flex flex-col justify-between  duration-500 z-10 `}
    >
      <div className="  flex items-center justify-between  mx-2  py-4 pl-2">
        <img src={corporate} className="h-10 " alt="corporate" />
        <span
          onClick={closeBar}
          className=" visible md:invisible  cursor-pointer"
        >
          <Closesvg />
        </span>
      </div>

      <div className="   ">
        <ul className="space-y-2 ">
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? `flex items-center my-6 pl-4 text-sm font-black text-alml  border-l-4 border-alml transition-all`
                  : `flex items-center my-6 pl-4 text-sm font-bold text-darkgrey hover:text-alml  hover:border-l-4 border-alml transition-all`
              }
            >
              <svg
                strokeWidth="2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0ZM4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2ZM14 0C16.2091 0 18 1.79086 18 4C18 6.20914 16.2091 8 14 8C11.7909 8 10 6.20914 10 4C10 1.79086 11.7909 0 14 0ZM14 2C12.8954 2 12 2.89543 12 4C12 5.10457 12.8954 6 14 6C15.1046 6 16 5.10457 16 4C16 2.89543 15.1046 2 14 2ZM8 14C8 11.7909 6.20914 10 4 10C1.79086 10 0 11.7909 0 14C0 16.2091 1.79086 18 4 18C6.20914 18 8 16.2091 8 14ZM2 14C2 12.8954 2.89543 12 4 12C5.10457 12 6 12.8954 6 14C6 15.1046 5.10457 16 4 16C2.89543 16 2 15.1046 2 14ZM14 10C16.2091 10 18 11.7909 18 14C18 16.2091 16.2091 18 14 18C11.7909 18 10 16.2091 10 14C10 11.7909 11.7909 10 14 10ZM14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12Z"
                  fill="currentColor"
                />
              </svg>

              <span className="ml-3 ">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/proformas"}
              className={({ isActive }) =>
                isActive
                  ? `flex items-center my-6 pl-4 text-sm font-black text-alml  border-l-4 border-alml transition-all`
                  : `flex items-center my-6 pl-4 text-sm font-bold text-darkgrey hover:text-alml  hover:border-l-4 border-alml transition-all`
              }
            >
              <svg
                strokeWidth={"2"}
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0C6.4477 0 6 0.44772 6 1V6H1C0.4477 6 0 6.44772 0 7V15C0 15.5523 0.4477 16 1 16H7H13H19C19.5523 16 20 15.5523 20 15V5C20 4.44772 19.5523 4 19 4H14V1C14 0.44772 13.5523 0 13 0H7ZM6 14V8H2V14H6ZM8 14H12V5V2H8V7V14ZM18 14H14V6H18V14Z"
                />
              </svg>

              <span className="ml-3 ">Proformas</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contract"}
              className={({ isActive }) =>
                isActive
                  ? `flex items-center my-6 pl-4 text-sm font-black text-alml  border-l-4 border-alml transition-all`
                  : `flex items-center my-6 pl-4 text-sm font-bold text-darkgrey hover:text-alml  hover:border-l-4 border-alml transition-all`
              }
            >
              <svg
                fill="currentColor"
                strokeWidth="2"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 0C1.34315 0 0 1.34315 0 3V11C0 12.6569 1.34315 14 3 14H17C18.6569 14 20 12.6569 20 11V3C20 1.34315 18.6569 0 17 0H3ZM5 2H3C2.44772 2 2 2.44772 2 3V4H5V2ZM7 2V4H18V3C18 2.44771 17.5523 2 17 2H7ZM5 6H2V8H5V6ZM7 8V6H18V8H7ZM5 10H2V11C2 11.5523 2.44772 12 3 12H5V10ZM7 12V10H18V11C18 11.5523 17.5523 12 17 12H7Z"
                />
              </svg>

              {/* <img src={Contract} alt="n" /> */}
              <span className="ml-3 ">Contract</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/logout"}
              className={({ isActive }) =>
                isActive
                  ? `flex items-center my-6 pl-4 text-sm font-black text-alml  border-l-4 border-alml transition-all`
                  : `flex items-center my-6 pl-4 text-sm font-bold text-darkgrey hover:text-alml  hover:border-l-4 border-alml transition-all`
              }
            >
              <svg
                fill="currentColor"
                strokeWidth="2"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 0H3C1.34315 0 0 1.34315 0 3V19C0 20.6569 1.34315 22 3 22H19C20.6569 22 22 20.6569 22 19V3C22 1.34315 20.6569 0 19 0ZM7 20H3C2.44772 20 2 19.5523 2 19V17.82C2.32067 17.9364 2.65886 17.9973 3 18H7V20ZM7 16H3C2.44772 16 2 15.5523 2 15V13.82C2.32067 13.9364 2.65886 13.9973 3 14H7V16ZM7 12H3C2.44772 12 2 11.5523 2 11V3C2 2.44772 2.44772 2 3 2H7V12ZM13 20H9V14H13V20ZM13 12H9V2H13V12ZM20 19C20 19.5523 19.5523 20 19 20H15V18H19C19.3411 17.9973 19.6793 17.9364 20 17.82V19ZM20 15C20 15.5523 19.5523 16 19 16H15V14H19C19.3411 13.9973 19.6793 13.9364 20 13.82V15ZM20 11C20 11.5523 19.5523 12 19 12H15V2H19C19.5523 2 20 2.44772 20 3V11ZM17 6C16.4477 6 16 6.44772 16 7C16 7.55228 16.4477 8 17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6ZM5 8C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8Z"
                />
              </svg>

              <span className="ml-3 ">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className=" mb-4  ">
        <ul className="space-y-2">
          <li className="uppercase pl-4 my-6 text-black">HELP</li>

          <li>
            <NavLink
              to={"/support"}
              className={({ isActive }) =>
                isActive
                  ? `flex items-center my-6 pl-4 text-sm font-black text-alml  border-l-4 border-alml transition-all`
                  : `flex items-center my-6 pl-4 text-sm font-bold text-darkgrey hover:text-alml  hover:border-l-4 border-alml transition-all`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>

              <span className="ml-3 ">Support</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
