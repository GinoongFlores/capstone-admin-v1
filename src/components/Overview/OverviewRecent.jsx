"use client";
import React, { useContext } from "react";
import { ThemeProviderContext } from "../../context/ThemeProvider";
import { Box, Divider, Typography } from "@mui/material";

const OverviewRecent = () => {
  const { theme } = useContext(ThemeProviderContext);

  const darkTheme = theme === "dark";

  const Activities = [
    {
      title: "Created new user",
      date: "4m",
    },
    {
      title: "Added new barangay admin",
      date: "5m",
    },
    {
      title: "Added new plastic",
      date: "2d",
    },
    {
      title: "Created new user",
      date: "10d",
    },
    {
      title: "Created new user",
      date: "10d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
    {
      title: "Created new user",
      date: "30d",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          height: 450,
          overflow: "auto",

          "&::-webkit-scrollbar": {
            width: "1px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#666",
            outline: "1px solid #666",
          },
        }}
      >
        {Activities.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                m: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "400",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: darkTheme ? "#666" : "#888",
                  fontSize: 14,
                }}
              >
                {item.date}
              </Typography>
            </Box>{" "}
            <Divider
              sx={{
                background: darkTheme ? "#333" : "#eaeaea",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OverviewRecent;
