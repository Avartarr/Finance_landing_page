import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-3 text-white bg-[#1e453e] lg:max-w-full ">
      <h1 className="w-full text-3xl font-bold text-[white] lg:mx-20 md:mx-10">SOUNDGA.</h1>
      <ul className="hidden md:flex lg:mr-20 md:mr-10">
        <li className="p-4">
          <Link to="/">Company</Link>
        </li>
        <li className="p-4">
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { color: isActive ? "#98fb98" : "white" };
            }}
          >
            About
          </NavLink>
        </li>
        <li className="p-4">
        <NavLink
            to="/product"
            style={({ isActive }) => {
              return { color: isActive ? "#98fb98" : "white" };
            }}
          >
            Services
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "#98fb98" : "white" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <button className="rounded-full bg-[#98fb98] text-black font-bold py-0 px-4 ml-12 hover:bg-[#4DBB63] transition duration-300">
        <NavLink
            to="/login">
            Login
          </NavLink>
        </button>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#1e453e] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[white] m-4 p-4">
          SOUNDGA.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Company</Link>
           </li>
          <li className="p-4 border-b border-gray-600">
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { color: isActive ? "#98fb98" : "white" };
            }}
          >
            About
          </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
          <NavLink
            to="/product"
            style={({ isActive }) => {
              return { color: isActive ? "#98fb98" : "white" };
            }}
          >
            Services
          </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "#98fb98" : "white" };
            }}
          >
            Contact Us
          </NavLink>
          </li>
          <button className="rounded-full bg-[#98fb98] text-black font-bold py-2 px-4 hover:bg-[#4DBB63] transition duration-300">
          <NavLink
            to="/login">
            Login
          </NavLink>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
