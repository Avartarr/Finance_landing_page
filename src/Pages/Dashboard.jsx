import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

const Dashboard = ({ user }) => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (

    <div className="w-full" style={{ background: theme.ui, color: theme.syntax }}>
      
      <div >
        <h1 className="text-5xl pb-5">Dashboard</h1>
        <ThemeToggle />
        </div>
        <h2>Hello, {user?.username}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos, accusamus at impedit nulla autem ipsam dolorum doloremque, numquam vel doloribus deserunt veritatis sit vitae enim maiores laudantium? Facilis, dolores?</p>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde deserunt quaerat hic! Veniam dolore dolorum eveniet velit aperiam quas explicabo, odio, autem possimus harum voluptate ea, itaque culpa consequatur earum?</p>

    </div>
  );
};

export default Dashboard;
