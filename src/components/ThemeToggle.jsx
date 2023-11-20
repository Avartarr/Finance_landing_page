import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BsToggleOn } from "react-icons/bs";

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <BsToggleOn onClick={toggleTheme} />
    </div>
  );
}




export default ThemeToggle;
