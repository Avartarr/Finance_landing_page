import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
 

const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const themes = {
      light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
      dark: { syntax: '#fff', ui: '#222', bg: '#1a1a1b' },
    };
  
    const toggleTheme = () => {
      setIsLightTheme((prevTheme) => !prevTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ isLightTheme, ...themes, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

export default ThemeContextProvider;