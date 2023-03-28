import React, { useEffect, useState } from "react";
import cart from ".././svg/add to cart.svg";

import { useDispatch, useSelector } from "react-redux";
import getContractedServices from "../redux/actions/getContractedSevices";
import Category from "./Category";
import { showCart } from "../redux/features/uiSlice";
import { cartSliceActions } from "../redux/features/cartSlice";
import { toast } from "react-toastify";
import Spinnersvg from "../svg/SpinnerSvg";
import { setServiceError } from "../redux/features/serviceSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { contractedServices, loading, error } = useSelector(
    (state) => state.service
  );
  

  const { items, totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getContractedServices(items));
  }, [dispatch, items]);

  error && toast.error(error);
  // console.log(contractedServices);
  const showCartHandler = () => {
    dispatch(showCart());
  };

  const addToCartPropFunction = (serviceId) => {
    let item = {};
    let singleService = contractedServices.find(
      (service) => service.id === serviceId
    );
    item = { ...singleService, quantity: 1, checked: true };

    showCartHandler();
    dispatch(cartSliceActions.addItemToCart(item));
  };

  function refreshPage() {
    //  window.location.reload(false);
    dispatch(getContractedServices(items));
    dispatch(setServiceError());
  }

    


  return (
    <div className="mx-10 rounded mt-6 p-2 flex md:flex-nowrap  flex-wrap  bg-white ">
      <div className=" w-full   h-screen">
        <div className=" ">
          <h1 className="text-alml font-bold md:text-3xl">Generate Proforma</h1>

          <h6 className="text-xs  text-darkgrey font-bold mt-2">
            Select Services
          </h6>
        </div>

        {loading && (
          <div className="mt-4  flex justify-center items-center">
            <Spinnersvg w={"w-10"} h={"h-10"} text={"text-gray"} />
          </div>
        )}

        {error && !loading && (
          <div className="mt-4  flex justify-center items-center">
            <button
              className="bg-alml flex text-white p-2"
              onClick={refreshPage}
            >
              <h1 className="mr-2">Click to Refresh Services</h1>
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        )}

        {!loading && !error && contractedServices.length > 0 && (
          <div className=" mt-4  flex justify-between relative  ">
            <div className="flex ">
              {contractedServices.map((service) => {
                if (service.Category.name === "Airport Transfer")
                  return (
                    <Category
                      key={service.id}
                      serviceId={service.id}
                      CategoryName={service.Category.name}
                      image={service.Category.image}
                      serviceName={service.name}
                      checked={service.checked}
                      fee={service.Contract_Service.agreedFee}
                      addToCartPropFunction={addToCartPropFunction}
                    />
                  );
                if (service.Category.name === "Oasis Lounge")
                  return (
                    <Category
                      key={service.id}
                      serviceId={service.id}
                      CategoryName={service.Category.name}
                      image={service.Category.image}
                      serviceName={service.name}
                      checked={service.checked}
                      fee={service.Contract_Service.agreedFee}
                      addToCartPropFunction={addToCartPropFunction}
                    />
                  );
                return "";
              })}
            </div>

            <div className="p-2">
              <span className=" cursor-pointer" onClick={showCartHandler}>
                <span className="w-7 h-7 rounded-full flex justify-center items-center font-bold bg-lightpurple text-white ">
                  {totalQuantity}
                </span>
                <img className="md:w-8 w-6" src={cart} alt="cart" />
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="block p-6 md:w-2/5 w-full  bg-white border border-r-0 border-y-0 border-gray  m-2  "></div>
    </div>

    // <div className="mx-10 border mt-8 p-2 flex">
    //   <div className="border border-red w-3/5 bg-white rounded ">
    //     <div className="border border-alml">
    //       <h1 className="text-alml font-bold md:text-3xl">Generate Proforma</h1>
    //       <h6 className="text-xs  text-darkgrey font-bold">Select Services</h6>
    //     </div>
    //     <div className="border border-alml">
    //       <h1 className="text-alml font-bold md:text-3xl">Daily Orders</h1>
    //     </div>
    //   </div>
    //   <div className="border border-green w-1/4">second div</div>
    // </div>
  );
};

export default Dashboard;
