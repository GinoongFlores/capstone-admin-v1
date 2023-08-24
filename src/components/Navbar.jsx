"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

import { ThemeProviderContext } from "../context/ThemeProvider";
import { AuthProviderContext } from "../context/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useRouter } from "next/navigation";

const pages = [
  "Overview",
  "Statistics",
  "Users",
  "Pending",
  "Completed",
  "Collectors",
  "Consolidator",
  "Recycle",
];

function Navbar() {
  const router = useRouter();
  const { theme, changeTheme } = React.useContext(ThemeProviderContext);
  const { currentUser } = React.useContext(AuthProviderContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active, setActive] = React.useState("");

  const pathname = usePathname();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    if (pathname === "/dashboard/overview") {
      setActive("Overview");
    } else if (pathname === "/dashboard/pending") {
      setActive("Pending1");
    } else if (pathname === "/dashboard/statistics") {
      setActive("Statistics");
    } else if (pathname === "/dashboard/users") {
      setActive("Users");
    } else if (pathname === "/dashboard/completed") {
      setActive("Completed");
    } else if (pathname === "/dashboard/recycle") {
      setActive("Recycle");
    } else if (pathname === "/dashboard/consolidator") {
      setActive("Consolidator");
    } else if (pathname === "/dashboard/Collectors") {
      setActive("Collectors");
    }
  }, [pathname]);

  const darkTheme = theme === "dark";

  return (
    <AppBar
      position="static"
      sx={{
        transition: "0.3s ease-in-out",
        backgroundColor: darkTheme ? "black" : "white",
        boxShadow: `inset 0 -1px ${darkTheme ? "#333" : "#eaeaea"}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex " } }}>
            <Typography
              sx={{
                fontWeight: "600",
                color: darkTheme ? "white" : "#0A9351",
              }}
            >
              Oro-kalimpyo Dashboard
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button onClick={changeTheme}>
              {theme === "dark" ? (
                <IoSunnySharp color="#888" size={17} />
              ) : (
                <IoMoonSharp color="#888" size={17} />
              )}
            </Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{
                    width: 25,
                    height: 25,
                  }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{
                mt: "35px",

                "& .MuiMenu-paper": {
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                },
                "& .MuiMenu-list": {
                  paddingBottom: "0px",
                  paddingTop: "0px",
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box
                sx={{
                  width: "auto",
                  height: "auto",
                  padding: 2,
                  background: "black",
                  border: "1px solid #333",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "500",
                    padding: "10px 0px 10px 0px",
                    borderBottom: "1px solid #333 ",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  User Settings
                </Typography>{" "}
                <>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "500",
                      padding: "10px 0px 10px 0px",
                      fontSize: 14,
                      fontWeight: "700",
                    }}
                  >
                    {currentUser?.email}
                  </Typography>{" "}
                  <Typography
                    sx={{
                      cursor: "pointer",
                      color: "white",
                      padding: "10px 0px 10px 0px",

                      color: "#888",
                      fontSize: 15,

                      "&:hover": {
                        color: "white",
                      },
                    }}
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          // Sign-out successful.
                          router.push("/auth/signin");
                        })
                        .catch((error) => {
                          // An error happened.
                        });
                    }}
                  >
                    Signout
                  </Typography>
                </>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
        {currentUser !== null && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {pages.map((item) => (
              <Link key={item} href={`/dashboard/${item.toLowerCase()}`}>
                <Typography
                  onClick={() => setActive(item)}
                  sx={{
                    cursor: "pointer",
                    fontSize: 14,
                    paddingBottom: 1,
                    fontWeight: "500",
                    color:
                      active === item
                        ? darkTheme
                          ? "white"
                          : "black"
                        : "#888",
                    borderBottom:
                      active === item &&
                      `2px solid ${darkTheme ? "white" : "#0A9351"}`,
                    transition: "0.3s ease-in",
                    "&:hover": {
                      color: darkTheme ? "white" : "black",
                    },
                  }}
                >
                  {item}
                </Typography>
              </Link>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
export default Navbar;
