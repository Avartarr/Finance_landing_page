import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";

const Sharedlayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
      </>
    )
  }
  
  export default Sharedlayout