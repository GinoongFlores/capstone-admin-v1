// "use client";;
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, createTheme } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

export const ThemeProviderContext = createContext();

const ThemeModeProvider = ({ children }) => {
  const themeMUI = createTheme({});
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "dark";
  });
  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }
  React.useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);
  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeProviderContext.Provider value={{ changeTheme, theme }}>
      {" "}
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: theme === "dark" ? "#111" : "#fafafa",
          transition: "0.3s ease-in-out",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        {children}
      </Box>
    </ThemeProviderContext.Provider>
  );
};

export default ThemeModeProvider;
