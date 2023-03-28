import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getSingleProforma from "../redux/actions/getSingleProforma";
import Arrowleftsvg from "../svg/ArrowLeftSvg";
import Downloadsvg from "../svg/DownloadSvg";
import Plussvg from "../svg/PlusSvg";
import Printsvg from "../svg/PrintSvg";
import corporate from "./../assets/images/corporate.png";
import moment from "moment";
import formatMoney from "../util/formatMoney";
import { useNavigate } from "react-router-dom";
import Spinnersvg from "../svg/SpinnerSvg";

const Singleproforma = () => {
  const { proforma, error, loading } = useSelector((state) => state.proforma);

  const { id } = useParams();

  let navigate = useNavigate();

  const dispatch = useDispatch();

  // const vat = (7.5 / 100) * result.totalAmount;

  useEffect(() => {
    dispatch(getSingleProforma(id));
  }, [dispatch, id]);

  const goback = () => {
    navigate(-1);
  };

  return (
    <>
      {loading && (
        <div className="mt-4  flex justify-center items-center">
          <Spinnersvg w={"w-10"} h={"h-10"} text={"text-white"} />
        </div>
      )}
      {Object.keys(proforma).length !== 0 && !loading && (
        <div className="mx-10 rounded mt-8 p-2 flex md:flex-nowrap  flex-wrap  bg-white ">
          <div className=" w-full">
            <div className="flex  w-full justify-between mb-2">
              <Arrowleftsvg goBack={goback} />
              {/* <Arrowleftsvg /> */}
              <div className="flex  md:w-1/4 w-1/2  justify-between ">
                <span className="flex items-center justify-center mx-2  cursor-pointer">
                  <Downloadsvg />
                  <h6 className="text-lightpurple">Download</h6>
                </span>
                <span className="flex justify-center items-center mx-2 cursor-pointer ">
                  <Printsvg stroke={"stroke-blue"} />
                  <h6>Print</h6>
                </span>
              </div>
            </div>

            {/* proforma */}

            <div>
              <div className="bg-gray flex md:flex-nowrap flex-wrap justify-between p-2   bg-opacity-30">
                <div className=" md:w-1/2 w-full p-2">
                  <img src={corporate} className="h-10 " alt="corporate" />
                </div>
                <div className=" w-full md:w-1/2 p-2">
                  <h1 className="text-xl mb-2 text-alml font-bold">
                    Service Proforma
                  </h1>
                  <h1 className=" mb-2  font-bold">Invoice Number</h1>
                  <p className="text-darkgrey text-xs mb-4">{proforma.id}</p>
                  <h1>Date: </h1>
                  <h1 className="text-darkgrey text-xs">
                    {moment(proforma.updatedAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </h1>
                </div>
              </div>

              <div className=" flex md:flex-nowrap flex-wrap justify-between p-2  ">
                <div className=" md:w-1/2 w-full p-2">
                  <h1 className="font-bold">Bill To:</h1>
                  <h1 className="text-darkgrey capitalize">
                    {proforma.User.name}
                  </h1>
                  <h1 className="text-darkgrey ">{proforma.User.email}</h1>
                  <h1 className="text-darkgrey mb-4">
                    {proforma.User.address}
                  </h1>
                  {/* <h1 className="text-darkgrey">Ikeja GRA</h1>
                <h1 className="text-darkgrey">lagos</h1>
                <h1 className="text-darkgrey mb-4">Nigeria</h1> */}

                  <h1 className="font-bold">Booking Email:</h1>
                  <h1 className="text-darkgrey ">{proforma.bookingEmail}</h1>
                </div>
                <div className=" w-full md:w-1/2 p-2">
                  <h1 className="font-bold">Bill From:</h1>
                  <h1 className="text-darkgrey">ALML GROUP</h1>
                  <h1 className="text-darkgrey">63 Adekunle Fajuyi Way</h1>
                  <h1 className="text-darkgrey">Ikeja GRA</h1>
                  <h1 className="text-darkgrey">lagos</h1>
                  <h1 className="text-darkgrey mb-4">Nigeria</h1>

                  <h1 className="font-bold"> Email:</h1>
                  <h1 className="text-darkgrey ">info@gmail.com</h1>
                </div>
              </div>

              {/* table */}

              <div className="relative overflow-x-auto  mb-2 ">
                <table className="w-full text-sm text-left ">
                  <thead className="text-xs  uppercase bg-gray bg-opacity-30 ">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-bold">
                        ITEM
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Initial Fee
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        QTY
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold">
                        Agreed Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {proforma.Services.map((service) => (
                      <tr key={service.id} className="bg-white border-b ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-darkgrey flex  whitespace-nowrap"
                        >
                          <h1 className="font-bold text-black mr-2">
                            {service.name}
                          </h1>{" "}
                          ({service.description} )
                        </th>
                        <td className="px-6 py-4">
                          {" "}
                          ₦{formatMoney(service.fee)}
                        </td>
                        <td className="px-6 py-4">
                          {service.Proforma_Service.quantity}
                        </td>
                        <td className="px-6 py-4">
                          ₦{formatMoney(service.Proforma_Service.agreedFee)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className=" flex md:flex-nowrap flex-wrap justify-between p-2   bg-opacity-30">
                <div className=" w-full md:w-1/2 p-2 ">
                  <span className="flex  justify-between text-darkgrey mb-2">
                    <h6>Subtotal</h6>
                    <h6>₦{formatMoney(proforma.totalAmount)}</h6>
                  </span>
                  <span className="flex  justify-between text-darkgrey">
                    <h6>VAT</h6>
                    <h6>
                      + ₦{formatMoney((7.5 / 100) * proforma.totalAmount)}
                    </h6>
                  </span>
                  <span className="flex  justify-between text-darkgrey mb-4">
                    <h6>Discount (Black Friday)</h6>
                    <h6>-₦0</h6>
                  </span>

                  <span className="flex  justify-between text-black font-bold border border-t-1 border-x-0 border-b-0">
                    <h6>Amount Due:</h6>

                    <h6>
                      ₦
                      {formatMoney(
                        proforma.totalAmount +
                          (7.5 / 100) * proforma.totalAmount
                      )}
                    </h6>
                  </span>
                </div>
                <div className=" md:w-1/2 w-full p-2  relative">
                  <button className="md:absolute relative bottom-0 right-0 flex justify-center items-center bg-lightgreen bg-opacity-40 rounded-lg text-sm p-2 font-bold text-green">
                    <Plussvg stroke={"stroke-green"} />
                    Pay By Flutterwave
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block p-6 md:w-1/4 w-full  bg-white border border-r-0 border-y-0 border-gray  m-2  "></div>
        </div>
      )}
    </>
  );
};

export default Singleproforma;
