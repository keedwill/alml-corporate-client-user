import React from "react";

const NotFound = () => {
  return (
    <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-alml to-lightpurple">
      <div className=" bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md  max-w-md flex flex-col justify-center items-center">
        <p className="">There's nothing here: 404!</p>
        <button className="mt-4  p-2 cursor-pointer rounded-lg bg-lightorange">Home</button>
      </div>
    </div>
  );
};

export default NotFound;
