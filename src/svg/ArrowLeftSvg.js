import React from "react";

const Arrowleftsvg = ({ goBack }) => {
  const gobackHandler = () => {
    goBack();
  };

  return (
    <svg
      onClick={gobackHandler}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export default Arrowleftsvg;
