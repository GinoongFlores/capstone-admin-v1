// "use client";;
import { Box } from "@mui/joy";
import { Badge, Chip, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ThemeProviderContext } from "../../context/ThemeProvider";
import { IoPeopleOutline, IoPersonOutline } from "react-icons/io5";
import { BsBox2Heart } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import OverviewRecent from "./OverviewRecent";
import Link from "next/link";
const OverviewBody = () => {
  const { theme } = useContext(ThemeProviderContext);

  const darkTheme = theme === "dark";
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          flex: 1,
          mt: 5,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            width: "65%",
            height: 120,
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
            }}
          >
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Users
            </Typography>
            <Typography
              sx={{
                color: "#3291ff",
                fontSize: 13,
                fontWeight: "600",
                cursor: "pointer",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link href="/dashboard/users">View All Users</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <IoPeopleOutline color={darkTheme ? "white" : "black"} size={35} />
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              130
            </Typography>
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            width: "65%",
            height: 120,
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
            }}
          >
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Active Users
            </Typography>{" "}
            <Typography
              sx={{
                color: "#3291ff",
                fontSize: 13,
                fontWeight: "600",
                cursor: "pointer",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link href="/dashboard/users">View All Users</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  color: "green",
                  backgroundColor: "green",
                },
              }}
              badgeContent=" "
              variant="dot"
            >
              <IoPersonOutline
                color={darkTheme ? "white" : "black"}
                size={30}
              />
            </Badge>
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              20
            </Typography>
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            width: "65%",
            height: 120,
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
            }}
          >
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Total Collected
            </Typography>{" "}
            <Typography
              sx={{
                color: "#3291ff",
                fontSize: 13,
                fontWeight: "600",
                cursor: "pointer",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link href="/dashboard/completed">View Completed</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <BsBox2Heart color={darkTheme ? "white" : "black"} size={27} />
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              130
            </Typography>
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            width: "65%",
            height: 120,
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
            }}
          >
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Pending
            </Typography>{" "}
            <Typography
              sx={{
                color: "#3291ff",
                fontSize: 13,
                fontWeight: "600",
                cursor: "pointer",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link href="/dashboard/pending">View Pending </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <AiOutlineFieldTime
              color={darkTheme ? "white" : "black"}
              size={35}
            />
            <Typography
              sx={{
                color: darkTheme ? "white" : "black",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              130
            </Typography>
          </Box>
        </Paper>
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          flex: 1,
          mt: 3,
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: "600", p: 1 }}>
          Recent Activity
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            width: "100%",
            height: 470,
            boxShadow: " 1px 5px 6px 1px rgba(0,0,0,0.24)",
            p: 3,
            backgroundColor: darkTheme ? "black" : "white",
            border: `1px solid ${darkTheme ? "#333" : "#eaeaea"}`,
            color: darkTheme ? "white" : "black",
          }}
        >
          <OverviewRecent />
        </Paper>{" "}
        <Typography
          sx={{
            color: "#3291ff",
            fontSize: 14,
            fontWeight: "600",
            cursor: "pointer",
            pt: 3,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Link href="/dashboard/activity">View All Activity </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default OverviewBody;
