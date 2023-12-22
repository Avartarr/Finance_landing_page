import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    { id: 1, path: "/", text: "Company" },
    { id: 2, path: "/about", text: "About" },
    { id: 3, path: "/product", text: "Services" },
    { id: 4, path: "/contact", text: "Contact Us" },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-7xl mx-auto px-6 lg:px-28 text-white bg-[#1e453e] lg:max-w-full ">
      <h1 className="text-3xl font-bold text-[white] lg:mx-2 md:mx-10">SOUNDGA.</h1>
      <div className="flex items-center">
      <ul className="hidden md:flex items-center space-x-10 ">       
           {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => {
                    return { color: isActive ? "#98fb98" : "white" };
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
  </ul>
</div>
        <button className=" hidden md:flex rounded-full  font-bold py-2 px-6 ml-12 hover:bg-[#4DBB63] transition duration-300">
        <NavLink
            to="/login">
            Login
          </NavLink>
        </button>
    
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
          {links.map((link) => (
            <li key={link.id} className="p-4 border-b border-gray-600">
              <NavLink
                to={link.path}
                style={({ isActive }) => {
                  return { color: isActive ? "#98fb98" : "white" };
                }}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          <button className="rounded-full font-bold py-2 px-4 hover:bg-[#4DBB63] transition duration-300">
            <NavLink to="/login">Login</NavLink>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;