/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { VisibilityOff, Visibility, AccountCircle } from "@mui/icons-material";

import {
  IoMailOutline,
  IoKeyOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AuthProviderContext } from "../../../../context/AuthProvider";

const page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const { currentUser, loggedIn } = React.useContext(AuthProviderContext);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/dashboard/overview");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage) {
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };
  return (
    <Box sx={{ paddingTop: 16 }}>
      <Box sx={{ display: "flex", height: 700, borderRadius: "100%" }}>
        <Box
          sx={{
            flex: 1,
            background: "black",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        >
          {" "}
        </Box>{" "}
        <Box
          sx={{
            flex: 1,
            background: "white",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontSize: 23,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hello, Admin👋
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: 14,

                  textAlign: "center",
                }}
              >
                Welcome back, you've been missed
              </Typography>
            </Box>
            <Box>
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    <IoMailOutline size={23} color="black" />
                    <TextField
                      id="input-with-sx"
                      label="Email"
                      variant="standard"
                      InputLabelProps={{
                        style: { fontSize: 12, color: "gray" },
                      }}
                      fullWidth
                      type="email"
                      required
                      InputProps={{
                        style: {
                          ".MuiInput-underline:after": {
                            borderBottom: "1px solid red !important",
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    <IoKeyOutline size={23} color="black" />
                    <TextField
                      id="input-with-sx"
                      label="Password"
                      variant="standard"
                      InputLabelProps={{
                        style: {
                          fontSize: 12,
                          color: "gray",
                        },
                      }}
                      type={showPassword ? "text" : "password"}
                      required
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <IoEyeOffOutline size={23} color="black" />
                              ) : (
                                <IoEyeOutline size={23} color="black" />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: 12,
                      textAlign: "right",
                      width: "100%",
                      cursor: "pointer",
                      "&:hover": {
                        color: "black",
                        transition: "0.3s ease-in",
                      },
                    }}
                  >
                    Forgot password
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      mt: 3,
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </form>

              <Typography
                sx={{
                  color: "gray",
                  mt: 10,
                  fontSize: 12,
                  textAlign: "center",
                  cursor: "pointer",

                  "&:hover": {
                    color: "black",
                    transition: "0.3s ease-in",
                  },
                }}
              >
                <Link href={"/auth/signup"}>Don't have an account yet?</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
