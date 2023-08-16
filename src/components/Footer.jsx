"use client";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { ThemeProviderContext } from "../context/ThemeProvider";

const Footer = () => {
  const { theme } = React.useContext(ThemeProviderContext);

  const val = theme === "dark";
  return (
    <Box
      sx={{
        transition: "0.3s ease-in-out",
        borderTop: `1px solid ${val ? "#333 " : "#eaeaea"}`,
        backgroundColor: val ? "black" : "white",
        paddingTop: 2,
      }}
    >
      <Container fixed>
        <Box
          sx={{
            paddingBottom: 2,
            display: "flex",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Typography sx={{ fontSize: 12 }}>
            Copyright &copy; {new Date().getFullYear()}. Project-Shdw
          </Typography>
          <Typography sx={{ fontSize: 12 }}>Made by nito 🦉</Typography>{" "}
          <Typography sx={{ fontSize: 12 }}>Built by Next.js 13 </Typography>{" "}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
