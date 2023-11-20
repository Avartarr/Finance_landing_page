import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
// import Footer from "./Footer";

const Sharedlayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </>
    )
  }
  
  export default Sharedlayout