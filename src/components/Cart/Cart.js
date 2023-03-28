import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../../redux/features/uiSlice";

import Plussvg from "../../svg/PlusSvg";
import Cartitem from "./CartItem";
import formatMoney from "../../util/formatMoney";
import Wrapper from "../Wrapper";
import { cartSliceActions } from "../../redux/features/cartSlice";
import useInput from "../../hooks/use-input";
import ErrorSvg from "../../svg/ErrorSvg";
import { useNavigate } from "react-router-dom";
import createProforma from "../../redux/actions/createProforma";
import { toast } from "react-toastify";
import Spinnersvg from "../../svg/SpinnerSvg";

const isBookingEmail = (value) => value.includes("@") && value.trim() !== "";

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);

  const { loading, error } = useSelector((state) => state.proforma);
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    value: bookingEmailValue,
    isValid: bookingEmailIsValid,
    hasError: bookingEmailHasError,
    valueChangeHandler: bookingEmailChangeHandler,
    inputBlurHandler: bookingEmailBlurHandler,
    reset: resetbookingEmail,
  } = useInput(isBookingEmail);

  const deleteItem = (id) => {
    dispatch(cartSliceActions.deleteItem(id));
  };
  const reduceItem = (id) => {
    dispatch(cartSliceActions.removeItemFromCart(id));
  };

  const increaseItem = (item) => {
    dispatch(cartSliceActions.increaseItem(item));
  };
  const closeCartHandler = () => {
    dispatch(showCart());
  };

  let cartIsValid = false;
  let data = {};
  if (bookingEmailIsValid && items.length > 0) {
    cartIsValid = true;
  }
  const clearCartHandler = () => {
    dispatch(cartSliceActions.clearCart());
  };

  const createProformaHandler = () => {
    if (!cartIsValid) {
      return;
    }

    data = {
      bookingEmail: bookingEmailValue,
      items,
    };

    dispatch(createProforma({ navigate, data, toast }));

    resetbookingEmail();
    closeCartHandler();
    dispatch(cartSliceActions.clearCart())
  };
  return (
    <Wrapper>
      {items.length < 1 && (
        <div className="flex flex-col  items-center justify-center transition-all   h-fit bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md md:w-3/4 w-11/12  ">
          <h1 className=" md:text-2xl text-sm  font-extrabold">
            Cart is Currently Empty
          </h1>

          <span
            onClick={closeCartHandler}
            className="flex  items-center justify-center mx-2  cursor-pointer"
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <h6 className=" text-lightpurple md:text-lg text-sm m-2">
              Start Shopping
            </h6>
          </span>
        </div>
      )}
      {items.length > 0 && (
        <div className="flex flex-col   h-fit bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md md:w-3/5 w-11/12  overflow-auto">
          <div className=" flex justify-between py-2">
            <h1 className="text-alml md:text-2xl text-sm  font-extrabold">
              Proforma Cart
            </h1>

            <button
              onClick={clearCartHandler}
              className="bg-gold bg-opacity-40 p-2 hover:scale-105 duration-300"
            >
              Clear Cart
            </button>
          </div>
          {items &&
            items.map((item) => (
              <Cartitem
                key={item.id}
                item={item}
                increaseItem={increaseItem.bind(null, item)}
                reduceItem={reduceItem.bind(null, item.id)}
                deleteItem={deleteItem.bind(null, item.id)}
              />
            ))}

          <div className=" mt-2 flex justify-between">
            <span
              onClick={closeCartHandler}
              className="flex  items-center justify-center mx-2  cursor-pointer"
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <h6 className=" text-lightpurple md:text-lg text-sm m-2">
                Continue Shopping
              </h6>
            </span>
            <span className="flex ">
              <h1 className="font-bold m-2 md:text-lg text-sm">Subtotal</h1>
              <h1 className="m-2 md:text-lg text-sm">
                {formatMoney(totalAmount)} NGN
              </h1>
            </span>
          </div>

          <div className=" mt-2 flex justify-between">
            <div className="">
              <input
                type="email"
                className=" border border-gray  text-xs  focus:outline-none block w-full p-2.5 focus:border-alml "
                placeholder="Enter Booking Email"
                onChange={bookingEmailChangeHandler}
                value={bookingEmailValue}
                onBlur={bookingEmailBlurHandler}
                required
              />
              {bookingEmailHasError && (
                <ErrorSvg message={"Booking Email is invalid"} />
              )}
            </div>
            <span className=" ">
              <button
                onClick={createProformaHandler}
                className={` ${
                  !cartIsValid
                    ? "bg-gray cursor-not-allowed text-darkgrey"
                    : "bg-lightgreen "
                }  flex justify-center items-center  bg-opacity-40 rounded-lg  md:text-sm text-xs p-2 font-bold text-green`}
              >
                <span>
                  {loading && <Spinnersvg />}
                  {!loading && (
                    <Plussvg
                      stroke={`${
                        !cartIsValid ? "stroke-darkgrey" : "stroke-green "
                      } `}
                    />
                  )}
                </span>
                Create Proforma
              </button>
            </span>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;
