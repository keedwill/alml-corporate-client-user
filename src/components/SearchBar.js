import React from "react";
import Search from "../svg/Search";

const Searchbar = (props) => {
  return (
    <div className="input-group bg-white p-1 -ml-8 rounded flex  items-center  w-full  justify-center ">
      <input
        value={props.value}
        onChange={props.onChange}
        type="search"
        className="form-control mr-2    flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal  bg-white bg-clip-padding border border-none rounded transition ease-in-out m-0   focus:outline-none"
        placeholder="Search...."
      />
      <Search />
    </div>
  );
};

export default Searchbar;
