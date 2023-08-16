"use client";

import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { ThemeProviderContext } from "../../context/ThemeProvider";
import AddUsersModal from "./AddUsersModal";
const UsersTableHeader = () => {
  const { theme } = React.useContext(ThemeProviderContext);

  const darkTheme = theme === "dark";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 2,
        alignItems: "center",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: 300,
          height: 90,
          boxShadow: " 1px 5px 6px 1px rgba(0,0,0,0.24)",
          backgroundColor: darkTheme ? "black" : "white",
          border: `1px solid ${darkTheme ? "#333" : "#eaeaea"}`,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              color: darkTheme ? "white" : "black",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Total of users
          </Typography>

          <Typography
            sx={{
              color: darkTheme ? "white" : "black",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            25
          </Typography>
        </Box>
      </Paper>

      <AddUsersModal />
    </Box>
  );
};

export default UsersTableHeader;
