// "use client";;
import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ThemeProviderContext } from "../../context/ThemeProvider";

const PlasticHeader = () => {
  const { theme } = useContext(ThemeProviderContext);
  const darkTheme = theme === "dark";
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box sx={{ flex: 1 }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 5,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              width: "95%",
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
                Total Plastic Types
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
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 3,
            pr: 3,
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "600" }}>
            Plastic Type
          </Typography>{" "}
          <Button
            href="/dashboard/plastic"
            variant="contained"
            sx={{
              textTransform: "none",
              background: darkTheme ? "white" : "black",
              color: darkTheme ? "black" : "white",
              fontWeight: "500",
              p: "6px 10px",

              "&:hover": {
                background: darkTheme ? "black" : "white",
                border: `1px solid ${darkTheme ? "white" : "black"}`,
                color: darkTheme ? "white" : "black",
              },
            }}
          >
            Add Plastic Type
          </Button>
        </Box>
      </Box>{" "}
      <Box sx={{ flex: 1 }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 5,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              width: "95%",
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
                Total Brandname
              </Typography>

              <Typography
                sx={{
                  color: darkTheme ? "white" : "black",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                5
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 3,
            pr: 3,
            pb: 2,
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "600" }}>
            Brandname
          </Typography>
          <Button
            href="/dashboard/plastic"
            variant="contained"
            sx={{
              textTransform: "none",
              background: darkTheme ? "white" : "black",
              color: darkTheme ? "black" : "white",
              fontWeight: "500",
              p: "6px 10px",

              "&:hover": {
                background: darkTheme ? "black" : "white",
                border: `1px solid ${darkTheme ? "white" : "black"}`,
                color: darkTheme ? "white" : "black",
              },
            }}
          >
            Add Brandname
          </Button>
        </Box>
      </Box>{" "}
      <Box sx={{ flex: 1 }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 5,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              width: "95%",
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
                Total User Type
              </Typography>

              <Typography
                sx={{
                  color: darkTheme ? "white" : "black",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                5
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 3,
            pr: 3,
            pb: 2,
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "600" }}>
            Brandname
          </Typography>
          <Button
            href="/dashboard/plastic"
            variant="contained"
            sx={{
              textTransform: "none",
              background: darkTheme ? "white" : "black",
              color: darkTheme ? "black" : "white",

              p: "6px 10px",
              "&:hover": {
                background: darkTheme ? "black" : "white",
                border: `1px solid ${darkTheme ? "white" : "black"}`,
                color: darkTheme ? "white" : "black",
              },
            }}
          >
            Add User Type
          </Button>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default PlasticHeader;
