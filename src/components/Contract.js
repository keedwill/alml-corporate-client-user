import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSingleContract from "../redux/actions/getSingleContract";
import Arrowleftsvg from "../svg/ArrowLeftSvg";
import formatMoney from "../util/formatMoney";
import Printsvg from "../svg/PrintSvg";
import { useNavigate } from "react-router-dom";
import Spinnersvg from "../svg/SpinnerSvg";

const Contract = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contract, loading, error } = useSelector((state) => state.contract);

  useEffect(() => {
    dispatch(getSingleContract());
    return () => {};
  }, [dispatch]);
  const result = contract[0];

  const goback = () => {
    navigate(-1);
  };
  

  return (
    <>
      {loading && (
        <div className="mx-10 rounded mt-8 p-2 flex md:flex-nowrap  flex-wrap  bg-white ">
          <div className=" h-32 w-full flex justify-center items-center ">
            <Spinnersvg h={"h-20"} w={"w-10"} text={"text-gray"} />
          </div>
          <div className="block p-6 md:w-1/4 w-full  bg-white border border-r-0 border-y-0 border-gray  m-2  "></div>
        </div>
      )}
      {result && !loading && (
        <div className="mx-10 rounded mt-8 p-2 flex md:flex-nowrap  flex-wrap  bg-white ">
          <div className=" w-full">
            <div className="flex  w-full justify-between mb-2">
              <Arrowleftsvg goBack={goback} />

              <span className="flex  mx-2 cursor-pointer mr-0    ">
                <Printsvg stroke={"stroke-blue"} />
                <h6 className="md:text-lg text-sm">Print</h6>
              </span>
            </div>
            <div className=" flex  justify-between p-2  bg-gray bg-opacity-30  ">
              <div className=" md:w-1/2 w-full md:text-sm text-xs p-2 ">
                <h1 className="font-bold capitalize">{result.user.name}</h1>
                <h1 className="text-darkgrey">{result.user.address}</h1>
                {/* <h1 className="text-darkgrey">Ikeja GRA</h1> */}
                <h1 className="text-darkgrey">lagos</h1>
                <h1 className="text-darkgrey mb-4">Nigeria</h1>

                <h1 className="text-darkgrey ">{result.user.email}</h1>
              </div>
              <div className=" w-full md:w-1/2 p-2  md:text-sm text-xs  ">
                <h1 className="font-bold flex justify-end">ALML GROUP</h1>
                <h1 className="text-darkgrey flex justify-end">
                  63 Adekunle Fajuyi Way
                </h1>
                <h1 className="text-darkgrey flex justify-end">Ikeja GRA</h1>
                <h1 className="text-darkgrey flex justify-end">lagos</h1>
                <h1 className="text-darkgrey mb-4 flex justify-end">Nigeria</h1>

                <h1 className="text-darkgrey flex justify-end ">
                  info@gmail.com
                </h1>
              </div>
            </div>

            {/* contract agreement */}
            <div className=" mt-4">
              <h1 className="text-alml md:text-lg text-sm text-center font-extrabold">
                Contract Agreement
              </h1>
              <div className="relative overflow-x-auto  mb-2 ">
                <table className="w-full text-sm text-left ">
                  <thead className="text-xs  uppercase bg-gray bg-opacity-30 ">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Service
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Service Category
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Service Fee
                      </th>

                      <th scope="col" className="px-6 py-3 font-bold">
                        Agreed Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.services.map((service) => (
                      <tr key={service.id} className="bg-white border-b ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-darkgrey flex  whitespace-nowrap"
                        >
                          <h1 className="font-bold text-black mr-2 capitalize">
                            {service.name}
                          </h1>
                        </th>
                        <td className="px-6 py-4 text-darkgrey">
                          ({service.description} )
                        </td>

                        <td className="px-6 py-4 text-darkgrey">
                          {service.category.name}
                        </td>
                        <td className="px-6 py-4">
                          ₦{formatMoney(service.initialFee)}
                        </td>

                        <td className="px-6 py-4">
                          ₦{formatMoney(service.agreedFee)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="block mb-2 md:text-lg text-sm font-bold"
              >
                Note
              </label>
              <textarea
                disabled
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray"
                // placeholder="Your message..."
              ></textarea>
            </div>
          </div>
          <div className="block p-6 md:w-1/4 w-full  bg-white border border-r-0 border-y-0 border-gray  m-2  "></div>
        </div>
      )}
    </>
  );
};

export default Contract;
