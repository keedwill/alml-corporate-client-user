import React from "react";

const Dashboard = () => {
  return (
    <div className="mx-10 border mt-8 p-2 flex">
      <div className="border border-red w-3/5 bg-white rounded ">
        <div className="border border-alml">
          <h1 className="text-alml font-bold md:text-3xl">Generate Proforma</h1>
          <h6 className="text-xs  text-darkgrey font-bold">Select Services</h6>
        </div>
        <div className="border border-alml">
          <h1 className="text-alml font-bold md:text-3xl">Daily Orders</h1>
        </div>
      </div>
      <div className="border border-green w-1/4">second div</div>
    </div>
  );
};

export default Dashboard;
