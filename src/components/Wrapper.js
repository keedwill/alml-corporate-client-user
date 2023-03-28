import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className=" bg-black bg-opacity-80 flex  absolute w-screen h-screen  flex-col items-center    justify-center z-10 ">
      {children}
    </div>
  );
};

export default Wrapper;
