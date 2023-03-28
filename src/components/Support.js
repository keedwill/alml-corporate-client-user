import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useInput from "../hooks/use-input";
import support from "../redux/actions/support";
import Arrowleftsvg from "../svg/ArrowLeftSvg";
import Emailsvg from "../svg/EmailSvg";
import ErrorSvg from "../svg/ErrorSvg";
import Locationsvg from "../svg/LocationSvg";
import Phonesvg from "../svg/PhoneSvg";
import Spinnersvg from "../svg/SpinnerSvg";

const isFullname = (value) => value.trim() !== "";
const isPhone = (value) => value.trim() !== "";
const isNote = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.trim() !== "";

const Support = () => {
  const dispatch = useDispatch();
  const { loading,  } = useSelector((state) => state.support);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: noteValue,
    isValid: noteIsValid,
    hasError: noteHasError,
    valueChangeHandler: noteChangeHandler,
    inputBlurHandler: noteBlurHandler,
    reset: resetNote,
  } = useInput(isNote);

  const {
    value: fullnameValue,
    isValid: fullnameIsValid,
    hasError: fullnameHasError,
    valueChangeHandler: fullnameChangeHandler,
    inputBlurHandler: fullnameBlurHandler,
    reset: resetFullname,
  } = useInput(isFullname);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isPhone);

  let formIsValid = false;
  if (emailIsValid && noteIsValid && phoneIsValid && fullnameIsValid) {
    formIsValid = true;
  }



  const formSubmitHandler = () => {
    if (!formIsValid) {
      return;
    }
    dispatch(
      support({ emailValue, noteValue, phoneValue, toast, fullnameValue })
    );

    resetEmail();
    resetFullname();
    resetNote();
    resetPhone();
  };

  return (
    <div className="mx-10 rounded  p-2 flex md:flex-nowrap  flex-wrap  bg-white ">
      <div className="w-full">
        <div className="  w-full mb-2">
          <Arrowleftsvg />
        </div>
        <div className="flex flex-col p-2 justify-center items-center  bg-gray bg-opacity-30  ">
          <h1 className="text-alml md:text-lg text-sm text-center font-extrabold">
            Need Help?
          </h1>
          <h6 className="text-darkgrey md:text-sm text-xs">
            We Are Always Available To Support You
          </h6>

          <div className="flex justify-center items-center md:flex-nowrap flex-wrap  p-4 md:w-4/5 w-11/12">
            <span className="flex justify-center items-center text-darkgrey m-2">
              <Locationsvg />
              <h1 className="md:text-sm text-xs m-2">
                63 Adekunle Fajuyi Way
                <br />
                Ikeja GRA lagos
              </h1>
            </span>
            <span className="flex justify-center items-center text-darkgrey m-2">
              <Phonesvg />
              <h1 className="md:text-sm text-xs m-2">01 2167894</h1>
            </span>
            <span className="flex justify-center items-center text-darkgrey m-2">
              <Emailsvg />
              <h1 className="md:text-sm text-xs m-2">info@almlgroup.com</h1>
            </span>
          </div>
        </div>
        {/* support form */}
        {/* md:flex-row flex-col */}
        <div className="  md:flex-row flex-col    mt-4 flex  p-4">
          <div className="md:w-1/2 w-full m-auto ">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-bold "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border focus:border-lightpurple border-gray focus:outline-none  text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="Your Name"
                  required
                  value={fullnameValue}
                  onChange={fullnameChangeHandler}
                  onBlur={fullnameBlurHandler}
                />
                {fullnameHasError && (
                  <ErrorSvg message={"Fullname is invalid"} />
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-bold "
                >
                  Email
                </label>
                <input
                  value={emailValue}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  type="email"
                  className="bg-gray-50 focus:outline-none  border  focus:border-lightpurple border-gray text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="example@xyz.com"
                  required
                />
                {emailHasError && <ErrorSvg message={"Email is invalid"} />}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Phone"
                  className="block mb-2 text-sm font-bold "
                >
                  Phone
                </label>
                <input
                  value={phoneValue}
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
                  type="tel"
                  className="bg-gray-50 border border-gray focus:border-lightpurple focus:outline-none text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="+234 6473236667"
                  required
                />
              </div>
              {phoneHasError && <ErrorSvg message={"Phone Field is invalid"} />}
            </form>
          </div>

          <div className="md:w-1/2 w-full md:m-2 m-auto ">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-bold"
                >
                  Note
                </label>
                <textarea
                  value={noteValue}
                  onChange={noteChangeHandler}
                  onBlur={noteBlurHandler}
                  required
                  rows="4"
                  className="block p-2.5 w-full text-sm focus:border-lightpurple focus:outline-none bg-gray bg-opacity-30   border border-gray"
                  placeholder="Your message..."
                ></textarea>
              </div>
            </form>
            {noteHasError && <ErrorSvg message={"Note is invalid"} />}
          </div>
        </div>
        <div className=" flex justify-center items-center  p-2 ">
          <button
            disabled={!formIsValid}
            onClick={formSubmitHandler}
            className={` ${
              !formIsValid
                ? "bg-gray cursor-not-allowed text-darkgrey"
                : "bg-lightgreen bg-opacity-40 hover:scale-110 duration-300 text-green"
            }  flex justify-center items-center  rounded-lg text-sm py-1 px-8 font-bold `}
          >
            Send Message
            <span>
              {loading && <Spinnersvg />}
              {/* <Spinnersvg/> */}
            </span>
          </button>
        </div>
      </div>
      <div className="block p-6 md:w-1/4 w-full  bg-white border border-r-0 border-y-0 border-gray  m-2  "></div>
    </div>
  );
};

export default Support;
