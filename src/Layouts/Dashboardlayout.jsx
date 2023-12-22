import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
