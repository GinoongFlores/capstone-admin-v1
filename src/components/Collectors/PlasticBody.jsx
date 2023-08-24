"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import OverviewRecent from "../Overview/OverviewRecent";
import { ThemeProviderContext } from "../../context/ThemeProvider";

const PlasticBody = () => {
  const { theme } = useContext(ThemeProviderContext);
  const darkTheme = theme === "dark";
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              width: "100%",
              height: 500,
              boxShadow: " 1px 5px 6px 1px rgba(0,0,0,0.24)",
              p: 3,
              backgroundColor: darkTheme ? "black" : "white",
              border: `1px solid ${darkTheme ? "#333" : "#eaeaea"}`,
              color: darkTheme ? "white" : "black",
            }}
          >
            <OverviewRecent />
          </Paper>{" "}
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              width: "100%",
              height: 500,
              boxShadow: " 1px 5px 6px 1px rgba(0,0,0,0.24)",
              p: 3,
              backgroundColor: darkTheme ? "black" : "white",
              border: `1px solid ${darkTheme ? "#333" : "#eaeaea"}`,
              color: darkTheme ? "white" : "black",
            }}
          >
            <OverviewRecent />
          </Paper>{" "}
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              width: "100%",
              height: 500,
              boxShadow: " 1px 5px 6px 1px rgba(0,0,0,0.24)",
              p: 3,
              backgroundColor: darkTheme ? "black" : "white",
              border: `1px solid ${darkTheme ? "#333" : "#eaeaea"}`,
              color: darkTheme ? "white" : "black",
            }}
          >
            <OverviewRecent />
          </Paper>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default PlasticBody;
