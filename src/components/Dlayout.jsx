import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dlayout = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-50">
          <Sidebar />
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dlayout;
