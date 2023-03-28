import React, { useEffect } from "react";
import Plussvg from "../svg/PlusSvg";
import Viewsvg from "../svg/ViewSvg";
import { useDispatch, useSelector } from "react-redux";
import getProformas from "../redux/actions/getProformas";
import Spinnersvg from "../svg/SpinnerSvg";
import moment from "moment";
import truncate from "../util/truncate";
import Pagination from "./Pagination";
import { setCurrentPage } from "../redux/features/proformaSlice";
import { NavLink } from "react-router-dom";


const Proformas = () => {
  const dispatch = useDispatch();
  const { proformas, loading, error, currentPage, noOfPages } = useSelector(
    (state) => state.proforma
  );

  useEffect(() => {
    dispatch(getProformas(currentPage));
  }, [dispatch, currentPage]);

 

  return (
    <div className="mx-10 rounded mt-8 p-2 flex md:flex-nowrap  flex-wrap bg-white">
      <div className="flex flex-col w-full">
        <div className="mb-4  p-2">
          <button className="float-right flex justify-center items-center bg-lightgreen bg-opacity-40 rounded-lg text-sm p-2 font-bold text-green">
            <Plussvg stroke={"stroke-green"} />
            Generate Proforma
          </button>
        </div>
        <div className="p-5 bg-gray-100">
          <h1 className="text-xl mb-2 text-alml font-bold">Manage Proforma</h1>
          {loading && (
            <div className=" h-32 w-full flex justify-center items-center">
              <Spinnersvg h={"h-20"} w={"w-10"} text={"text-gray"} />
            </div>
          )}

          {proformas.length > 1 && !loading && (
            <div className="   hidden md:block ">
              <table className="w-full ">
                <thead className="bg-gray-50 border-b-1 border-gray">
                  <tr>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                      ID
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Booking Email
                    </th>
                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                      Total Price
                    </th>
                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                      Status
                    </th>
                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray ">
                  {proformas.map((proforma) => (
                    <tr key={proforma.id} className="bg-white">
                      <td className="p-3 text-sm text-darkgrey whitespace-nowrap">
                        {}
                        {truncate(proforma.id, 10)}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {proforma.bookingEmail}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        ₦{proforma.totalAmount}
                      </td>
                      <td className="p-3 text-sm whitespace-nowrap ">
                        <span className="p-1.5  text-xs font-medium uppercase tracking-wider text-green bg-green  bg-opacity-30">
                          {proforma.status}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {moment(proforma.updatedAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td className="p-3  text-sm text-gray-700 whitespace-nowrap">
                        <NavLink
                          to={`/proformas/${proforma.id}`}
                          
                          // onClick={showSingleProformaHandler.bind(
                          //   null,
                          //   proforma.id
                          // )}
                          className="flex justify-center items-center cursor-pointer hover:text-alml hover:font-bold"
                        >
                          <Viewsvg />
                          <h6>View</h6>
                        </NavLink>
                      </td>
                    </tr>
                  ))}

                  {/* <tr className="bg-gray-50">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <a
                      href="/"
                      className="font-bold text-darkgrey hover:underline"
                    >
                      10002
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Kring New Fit office chair, mesh + PU, black
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦200.00
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-gold bg-gold  bg-opacity-20">
                      PENDING
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    16/10/2021
                  </td>
                  <td className="p-3  text-sm text-gray-700 whitespace-nowrap">
                    <span className="flex justify-center items-center cursor-pointer">
                      <Viewsvg />
                      <h6>View</h6>
                    </span>
                  </td>
                </tr> */}

                  {/* <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <a
                      href="/"
                      className="font-bold text-darkgrey hover:underline"
                    >
                      10002
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Kring New Fit office chair, mesh + PU, black
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ₦200.00
                  </td>
                  <td className="p-3 text-sm  whitespace-nowrap">
                    <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-red bg-red  bg-opacity-30">
                      CANCELED
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    16/10/2021
                  </td>
                  <td className="p-3  text-sm text-gray-700 whitespace-nowrap">
                    <span className="flex justify-center items-center cursor-pointer">
                      <Viewsvg />
                      <h6>View</h6>
                    </span>
                  </td>
                </tr> */}
                </tbody>
              </table>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="/"
                    className="text-darkgrey font-bold hover:underline"
                  >
                    #1000
                  </a>
                </div>
                <div className="text-gray-500">10/10/2021</div>
                <div>
                  <span className="p-1.5  text-xs font-medium uppercase tracking-wider text-green bg-green  bg-opacity-30">
                    PAID
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div className="text-sm font-medium text-black">₦200.00</div>
              <div className="p-3  text-sm text-gray-700 whitespace-nowrap">
                <span className="flex justify-center items-center cursor-pointer">
                  <Viewsvg />
                  <h6>View</h6>
                </span>
              </div>
            </div>
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="/"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    #1001
                  </a>
                </div>
                <div className="text-gray-500">10/10/2021</div>

                <div>
                  <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-gold bg-gold  bg-opacity-20">
                    PENDING
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div className="text-sm font-medium text-black">₦200.00</div>
              <div className="p-3  text-sm text-gray-700 whitespace-nowrap">
                <span className="flex justify-center items-center cursor-pointer">
                  <Viewsvg />
                  <h6>View</h6>
                </span>
              </div>
            </div>
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="/"
                    className="text-darkgrey font-bold hover:underline"
                  >
                    #1002
                  </a>
                </div>
                <div className="text-gray-500">10/10/2021</div>

                <div>
                  <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-red bg-red  bg-opacity-30">
                    CANCELED
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div className="text-sm font-medium text-black">₦200.00</div>
              <div className="p-3  text-sm text-gray-700 whitespace-nowrap">
                <span className="flex justify-center items-center cursor-pointer">
                  <Viewsvg />
                  <h6>View</h6>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* indicators */}
        {proformas.length > 0 && (
          // <div className=" text-sm p-2 flex self-center  items-center justify-between w-1/6">
          //   <span className="font-bold cursor-pointer">1</span>
          //   <span className="text-gray cursor-pointer">2</span>
          //   <span className="text-gray cursor-pointer">3</span>
          //   <span className="text-gray cursor-pointer">4</span>
          // </div>
          <Pagination
            setCurrentPage={setCurrentPage}
            noOfPages={noOfPages}
            currentPage={currentPage}
            dispatch={dispatch}
          />
        )}

        <hr className="border border-gray  my-4" />
        {/* due proforma */}
        <div className="p-5 ">
          <h1 className="text-xl mb-2 text-alml font-bold">Due Proforma</h1>
          <h6 className="text-xs text-darkgrey font-bold my-2">
            Orders That Are Due
          </h6>
          <div className="flex  flex-wrap ">
            <div className="block p-6 md:max-w-xs  bg-white border border-gray shadow-md m-2  ">
              <h6 className="text-darkgrey text-xs">#ygukdkpdflk</h6>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Lounge
              </h5>
              <h6 className="text-xs text-darkgrey my-2">10/10/2021</h6>
              <div className="flex ">
                <h2 className="mr-4">DUE</h2>
                <h2>₦200.00</h2>
              </div>
            </div>
            <div className="block p-6 md:max-w-xs  bg-white border border-gray shadow-md m-2  ">
              <h6 className="text-darkgrey text-xs">#ygukdkpdflk</h6>

              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Lounge
              </h5>
              <h6 className="text-xs text-darkgrey my-2">10/10/2021</h6>

              <div className="flex">
                <h2 className="mr-4">DUE</h2>
                <h2>₦200.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block p-6 md:w-1/6 w-full  bg-white border border-r-0 border-y-0 border-gray  m-2  "></div>
    </div>
  );
};

export default Proformas;
