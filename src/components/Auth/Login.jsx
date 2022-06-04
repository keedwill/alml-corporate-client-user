import React from "react";
import Ticksvg from "../../svg/tickSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  let formIsValid = true;
  return (
    <div className="bg-[url('https://i.imgur.com/jQI8nHT.jpg')] bg-cover bg-center h-screen  overflow-auto">
      <div className="bg-white flex p-3 justify-center items-center ">
        <img
          className="w-20 mr-1"
          src="https://i.imgur.com/Fpnlaz0.png"
          alt="almlgroup logo"
        />
        <h1 className="text-alml  font-bold">CORPORATE PORTAL</h1>
      </div>

      <div className="  min-h-screen max-h-screen   flex flex-col justify-around">
        <div className=" w-full   p-2 text-white flex flex-col md:flex-row ">
          <div className=" w-full px-10 py-2 ">
            <h1 className="md:text-3xl ">
              Book, Pay & Manage Your ALML Services
            </h1>
            <ul className="mt-4">
              <li className="flex">
                {" "}
                <Ticksvg /> Oasis Lounge
              </li>
              <li className="flex">
                {" "}
                <Ticksvg /> Airport Transfers
              </li>
              <li className="flex">
                {" "}
                <Ticksvg /> Meet and Greet
              </li>
              <li className="flex">
                {" "}
                <Ticksvg /> And more ....
              </li>
            </ul>
          </div>
          <div className=" w-full p-4 ">
            <div className="px-20">
              <form>
                <div className="flex flex-col mb-6">
                  <label className="mb-1 md:text-2xl">E-Mail Address:</label>
                  <div className="relative">
                    {/* <Emailsvg /> */}

                    <input
                      //   onChange={emailChangeHandler}
                      id="email"
                      type="email"
                      name="email"
                      //   onBlur={emailBlurHandler}
                      //   value={emailValue}
                      className={
                        "text-sm sm:text-base  pl-10 pr-4 focus:outline-none text-black    w-full  py-2"
                      }
                      placeholder="E-Mail Address"
                    />
                  </div>
                  {/* {emailHasError && <ErrorSvg message={"Email is invalid"} />} */}
                </div>
                <div className="flex flex-col mb-6">
                  <label className="mb-1 md:text-2xl">Password:</label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <span>{/* <Passwordsvg /> */}</span>
                    </div>

                    <input
                      id="password"
                      //   onChange={passwordChangeHandler}
                      //   value={passwordValue}
                      //   onBlur={passwordBlurHandler}
                      type="password"
                      name="password"
                      className="text-sm sm:text-base  pl-10 pr-4 text-black    w-full py-2 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                  {/* {passwordHasError && (
                    <ErrorSvg message={"Password is invalid"} />
                  )} */}
                </div>

                <div className="flex items-center mb-6 -mt-4">
                  <div className="flex ml-auto">
                    <a
                      href="/"
                      className="inline-flex text-sm sm:text-sm text-blue-500 hover:text-lightpurple"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center">
                  <button
                    disabled={!formIsValid}
                    type="submit"
                    className={`${
                      !formIsValid
                        ? "bg-gray cursor-not-allowed"
                        : "bg-gradient-to-r from-alml to-lightpurple"
                    } flex items-center justify-center focus:outline-none text-white text-sm sm:text-base   rounded py-2 w-1/2 transition duration-150 ease-in`}
                  >
                    <span className="mr-2 uppercase">Login</span>
                    <span>
                      {/* {loading && <SpinnerSvg />}
                      {!loading && <Loginsvg />} */}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex flex-col p-3 justify-center items-center ">
          <ul className="flex flex-row p-2 ">
            <button className="hover:bg-white text-gold hover:text-black p-3 border rounded-lg border-white  m-2">
              <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
            </button>

            <button className="hover:bg-white text-gold hover:text-black p-3 border rounded-lg border-white  m-2">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </button>
            <button className="hover:bg-white text-gold hover:text-black p-3 border rounded-lg border-white  m-2">
              <FontAwesomeIcon icon={faInstagramSquare} className="h-6 w-6" />
            </button>
            <button className="hover:bg-white text-gold hover:text-black p-3 border rounded-lg border-white  m-2 ">
              <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
            </button>
          </ul>

          <div class="text-center text-white p-3 bg-transparentBlack">
            © 2022 Copyright:
            <a
              className="uppercase text-gold font-bold ml-2"
              href="https://almlgroup.com/"
            >
              Almlgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
