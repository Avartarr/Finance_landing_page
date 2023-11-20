import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
  AiFillCodeSandboxCircle,
  AiFillMacCommand,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Home",
          icon:<AiOutlineHome size={30}/>
      },
      {
          path:"/about",
          name:"About",
          icon:<AiFillCodeSandboxCircle size={30}/>
      },
      {
          path:"/product",
          name:"Services",
          icon:<AiFillMacCommand  size={30}/>
      },
      {
          path:"/contact",
          name:"Contact Us",
          icon:<AiFillMacCommand  size={30}/>
      },
      {
          path:"/product",
          name:"Product",
          icon:<AiFillMacCommand  size={30}/>
      },
      {
          path:"/productList",
          name:"Product List",
          icon:<AiFillMacCommand  size={30}/>
      },
      
  ]
  return (
    //   <div className="container">
         <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
             <div className="top_section">
                 <h1 style={{display: isOpen ? "block" : "none"}} className="logo">SOUNDGA</h1>
                 <div style={{marginLeft: isOpen ? "10px" : "0px"}} className="bars">
                     <AiOutlineUser onClick={toggle}/>
                 </div>
             </div>
             {
                 menuItem.map((item, index)=>(
                     <NavLink to={item.path} key={index} className="linke" activeclassName="activee">
                         <div className="icon">{item.icon}</div>
                         <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                     </NavLink>
                 ))
             }
         {/* </div> */}
         <main>{children}</main>
      </div>
  );
};

export default Sidebar;