import React, { useEffect, useState } from "react";
import Ticksvg from "../../svg/tickSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import ErrorSvg from "../../svg/ErrorSvg";
import Spinnersvg from "../../svg/SpinnerSvg";
import Loginsvg from "../../svg/LoginSvg";
import { toast } from "react-toastify";
import login from "../../redux/actions/auth/login";
import { Envelope, Eye, EyeSlash, Lock } from "../../assets/svg";

const isPassword = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.trim() !== "";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    dispatch(login({ emailValue, passwordValue, navigate, toast }));

    resetEmail();
    resetPassword();
  };
  return (
    <div className=" h-screen   ">
      <div className="bg-white h-[10%] flex gap-2 p-3 justify-center items-center ">
        <img
          className="w-[20%] md:w-[10%] "
          src="https://i.imgur.com/Fpnlaz0.png"
          alt="almlgroup logo"
        />
        <h1 className="text-alml  font-bold">CORPORATE PORTAL</h1>
      </div>

      <div className=" bg-[url('https://i.imgur.com/jQI8nHT.jpg')] h-[90%]  bg-cover bg-center   flex flex-col justify-around">
        <div className=" w-full   p-2 text-white flex flex-col  md:flex-row ">
          <div className=" w-full px-10 py-2  flex flex-col md:items-stretch items-center ">
            <div className=" w-full">
              <h1 className="md:text-[24px] text-[20px] ">
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
          </div>
          <div className="px-10 w-full py-2  ">
            <div className=" ">
              <form onSubmit={formSubmitHandler}>
                <div className="flex flex-col mb-6 md:w-[70%] w-full">
                  <label className="mb-1 md:text-[24px] text-[20px] ">
                    E-Mail Address:
                  </label>
                  <div className="relative">
                    {/* <Emailsvg /> */}

                    <img src={Envelope} alt="" className="w-6 m-2 absolute " />

                    <input
                      onChange={emailChangeHandler}
                      id="email"
                      type="email"
                      name="email"
                      onBlur={emailBlurHandler}
                      value={emailValue}
                      className={
                        "text-sm sm:text-base  pl-10 pr-4 focus:outline-none text-black    w-full  py-2"
                      }
                      placeholder="E-Mail Address"
                    />
                  </div>
                  {emailHasError && <ErrorSvg message={"Email is invalid"} />}
                </div>
                <div className="flex flex-col mb-6 md:w-[70%] w-full">
                  <label className="mb-1 md:text-[24px] text-[20px] ">
                    Password:
                  </label>
                  <div className="relative">
                    <img src={Lock} alt="" className="w-6 m-2 absolute " />

                    <input
                      id="password"
                      onChange={passwordChangeHandler}
                      value={passwordValue}
                      onBlur={passwordBlurHandler}
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      className="text-sm sm:text-base  pl-10 pr-10 text-black w-full    py-2 focus:outline-none"
                      placeholder="Password"
                    />
                    {showPassword && (
                      <img
                        onClick={showPasswordHandler}
                        src={EyeSlash}
                        alt=""
                        className="w-6 m-2 absolute right-0 top-0 cursor-pointer color-gold"
                      />
                    )}
                    {!showPassword && (
                      <img
                        onClick={showPasswordHandler}
                        src={Eye}
                        alt=""
                        className="w-6 m-2 absolute right-0 top-0 cursor-pointer color-gold"
                        style={{
                          color:"yellow"
                        }}
                      />
                    )}
                  </div>
                  {passwordHasError && (
                    <ErrorSvg message={"Password is invalid"} />
                  )}
                </div>

                <div className="flex items-center mb-6 -mt-4  md:w-[70%] w-full">
                  <div className="flex ml-auto">
                    <a
                      href="/"
                      className="inline-flex text-sm sm:text-sm text-blue-500 hover:text-lightpurple hover:bg-white"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div>

                <div className="flex w-full   ">
                  <button
                    disabled={!formIsValid}
                    type="submit"
                    className={`${
                      !formIsValid
                        ? "bg-gray cursor-not-allowed"
                        : "bg-gradient-to-r from-alml to-lightpurple"
                    } flex items-center justify-center focus:outline-none text-white text-sm sm:text-base    py-2 md:w-1/4 w-full transition duration-150 ease-in`}
                  >
                    <span className="mr-2 uppercase">Login</span>
                    <span>
                      {loading && <Spinnersvg text={"text-white"} />}
                      {!loading && <Loginsvg />}
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
            @ {new Date().getFullYear()} All rights reserved.
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
