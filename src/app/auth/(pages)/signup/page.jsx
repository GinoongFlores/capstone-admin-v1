/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { VisibilityOff, Visibility, AccountCircle } from "@mui/icons-material";

import {
  IoPersonOutline,
  IoKeyOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoMailOutline,
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const addSuperAdmin = async (id, name, email, password) => {
    await setDoc(doc(db, "Users", id), {
      name,
      email,
      password,
      id,
      role: "superadmin",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        addSuperAdmin(user?.uid, name, email, password);

        toast.success("Account Created", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          router.push("/dashboard/overview");
        }, 1000);
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
        // ..
      });
  };
  return (
    <Box sx={{ paddingTop: 16 }}>
      <Box sx={{ display: "flex", height: 700, borderRadius: "100%" }}>
        <Box
          sx={{
            flex: 1,
            background: "white",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
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
                Create new account 📃
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
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    <IoPersonOutline size={23} color="black" />
                    <TextField
                      id="input-with-sx"
                      label="Admin name"
                      variant="standard"
                      InputLabelProps={{
                        style: { fontSize: 14, color: "gray" },
                      }}
                      fullWidth
                      type="text"
                      required
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
                    <IoMailOutline size={23} color="black" />
                    <TextField
                      id="input-with-sx"
                      label="Email"
                      variant="standard"
                      InputLabelProps={{
                        style: { fontSize: 14, color: "gray" },
                      }}
                      fullWidth
                      type="email"
                      required
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
                          fontSize: 14,
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
                    Create account
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
                <Link href={"/auth/signin"}>Already have an account?</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            background: "black",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          {" "}
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default page;
