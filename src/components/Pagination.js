import React from "react";

const Pagination = ({ setCurrentPage, currentPage, noOfPages, dispatch }) => {
  const renderPagination = () => {
    if (currentPage === noOfPages && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <nav className=" flex justify-center items-center">
          <ul className="inline-flex -space-x-px">
            <li className="py-2 px-3 leading-tight bg-white ">{currentPage}</li>
            <li
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
              className="py-2 px-3 leading-tight text-darkgrey bg-white duration-300 rounded-r-lg border  hover:bg-lightpurple hover:text-white cursor-pointer  "
            >
              Next
            </li>
          </ul>
        </nav>
      );
    } else if (currentPage !== noOfPages) {
      return (
        <nav className=" flex justify-center items-center">
          <ul className="inline-flex -space-x-px ">
            <li
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
              className="py-2 px-3 ml-0 mr-1 leading-tight  hover:bg-lightpurple duration-300 cursor-pointer hover:text-white  bg-white rounded-l-lg border border-gray "
            >
              Previous
            </li>
            <li className="py-2 px-3 leading-tight text-gray-500 bg-white   ">
              {currentPage}
            </li>

            <li
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
              className="py-2 px-3 leading-tight  bg-white hover:bg-lightpurple duration-300 hover:text-white cursor-pointer rounded-r-lg border border-gray"
            >
              Next
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul className="inline-flex -space-x-px">
            <li
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
              className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:text-white border  "
            >
              Previous
            </li>
            <li className="py-2 px-3 leading-tight  bg-white border border-gray">
              {currentPage}
            </li>
          </ul>
        </nav>
      );
    }
  };
  return <div>{renderPagination()}</div>;
};

export default Pagination;
