import React from "react";

import Minussvg from "../../svg/MinusSvg";
import Plussvg from "../../svg/PlusSvg";
import formatMoney from "../../util/formatMoney";

const Cartitem = ({ item, increaseItem, deleteItem, reduceItem }) => {


  return (
    <>
      <div className="flex flex-row  justify-evenly p-4">
        <div
          className={` ${
            item.category === "Airport Transfer" ? "bg-green" : ""
          } ${
            item.category === "Oasis Lounge" ? "bg-brown" : ""
          } p-2  flex flex-col items-center justify-center bg-opacity-10 rounded-xl   md:w-28 w-20 md:h-28 h-20 `}
        >
          <img className="h-6 w-6 rounded-md" src={item.image} alt="" />
          <h5 className="font-bold md:text-xs text-[9px]   ">
            {item.category}{" "}
          </h5>
        </div>
        <div className="p-2 flex flex-col items-center justify-center  w-40  ">
          <h5 className="font-bold md:text-xs text-[9px] "> {item.name}</h5>

          <h5 className="text-darkgrey font-thin text-xs  text-center  ">
            {item.description}
          </h5>
        </div>

        <div className="p-4 flex flex-row items-center  ">
          <button onClick={increaseItem}>
            <Plussvg h={"h-4"} w={"w-4"} stroke={"stroke-green"} />
          </button>
          <input
            className="border p-1 text-xs text-darkgrey border-gray focus:outline-none w-4 m-2"
            type={"text"}
            readOnly
            value={item.quantity}
          />
          <button onClick={reduceItem}>
            <Minussvg />
          </button>
        </div>
        <div
          className="
        p-4 flex flex-col items-center justify-center 
        "
        >
          {/* <h5 className="text-sm font-semibold">{item.price} NGN</h5> */}
          <h5 className="text-sm font-semibold">
            {formatMoney(item.price)} NGN
          </h5>
        </div>
        <div
          className="
        p-4 flex flex-col items-center justify-center 
        "
        >
          {/* <h5 className="text-sm font-semibold">{item.price} NGN</h5> */}
          <h5 className="text-sm font-semibold">
            {formatMoney(item.totalPrice)} NGN
          </h5>
        </div>

        <div className=" p-4 flex flex-col items-center justify-center ">
          <button className="" onClick={deleteItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-red"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
      <hr className=" border-gray border" />
    </>
  );
};

export default Cartitem;
