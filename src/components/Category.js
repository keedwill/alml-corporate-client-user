import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import formatMoney from "../util/formatMoney";

const Category = ({
  CategoryName,
  image,
  serviceName,
  checked,
  fee,
  serviceId,
  addToCartPropFunction,
}) => {
  const addToCartHandler = () => {
    addToCartPropFunction(serviceId);
  };

  return (
    <div className="   w-28  m-2  ">
      <div
        // onClick={ClickTransportHandler}
        className={`hover:scale-110 transform transition duration-500 shadow-md   flex flex-col items-center justify-center  ${
          CategoryName === "Airport Transfer" ? "bg-green" : ""
        }  
        ${CategoryName === "Oasis Lounge" ? "bg-brown" : ""}
        
        md:w-28 w-20 md:h-28 h-20 bg-opacity-10 rounded-xl cursor-pointer`}
      >
        <img className="h-6 w-6 rounded-md" src={image} alt="" />
        <h5 className="font-bold md:text-xs text-[9px]   ">{CategoryName}</h5>
      </div>

      <div
        className={`  duration-700  `}
        // className={`absolute  duration-700  ${
        //   !openCategory && "scale-0 origin-top   "
        // } `}
      >
        <ul className="p-2 md:text-sm text-xs ">
          <div className="flex items-center mr-2 ">
            <input
              id="green-checkbox"
              type="checkbox"
              value=""
              className={`w-4 h-4 ${
                CategoryName === "Oasis Lounge" ? "text-brown" : ""
              }
              ${
                CategoryName === "Airport Transfer" ? "text-green" : ""
              } cursor-pointer appearance-none border p-1  `}
            />
            <FontAwesomeIcon
              onClick={() => addToCartHandler()}
              icon={faCheck}
              className={`${CategoryName === "Oasis Lounge" ? "text-brown" : ""}
              ${CategoryName === "Airport Transfer" ? "text-green" : ""}

              text-base absolute p-0.5  w-3 transition duration-500 ease-in-out transform cursor-pointer ${
                checked ? "opacity-100" : "opacity-0"
              }     `}
            />

            <div className="ml-2">
              <h5
                className={` font-bold ${
                  CategoryName === "Airport Transfer" ? "text-green" : ""
                }

              ${CategoryName === "Oasis Lounge" ? "text-brown" : ""}
              md:text-sm text-xs font-bold `}
              >
                {serviceName}
              </h5>
              <h6 className="text-xs text-darkgrey"> ₦{formatMoney(fee)}</h6>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Category;
