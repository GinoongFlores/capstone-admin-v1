"use client";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/joy/Avatar";
import { ThemeProviderContext } from "../../context/ThemeProvider";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { AuthProviderContext } from "../../context/AuthProvider";

const OverviewHeader = () => {
  const { theme } = useContext(ThemeProviderContext);
  const [user, setUser] = useState([]);
  const { currentUser } = useContext(AuthProviderContext);

  const val = theme === "dark";

  const fetchUser = async (id) => {
    const docRef = doc(db, "Users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchUser(currentUser?.uid);
    }
  }, [currentUser]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "flex-start",
        }}
      >
        <Avatar
          alt={user?.name}
          src=""
          variant="solid"
          sx={{
            color: "white",
            width: 100,
            height: 100,
            fontSize: 50,
            backgroundColor: "#7ce18c",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "2.5rem", fontWeight: "600" }}>
              {user?.name}
            </Typography>
            <Divider
              sx={{
                background: theme === "dark" ? "#333" : "#eaeaea",
              }}
            />{" "}
          </Box>

          <Box>
            <Chip
              label="ADMIN"
              variant="outlined"
              sx={{
                color: theme === "dark" ? "white" : "black",
                fontSize: 12,
                height: "20px",
                fontWeight: "600",
                background: theme === "dark" ? "black" : "white",
                border: "1px solid #333",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            cursor: "pointer",
            borderRadius: 1,
            p: 1.2,
            textTransform: "none",
            background: val ? "white" : "black",
            color: val ? "black" : "white",
            fontWeight: "500",
            fontSize: 14,
            "&:hover": {
              background: val ? "black" : "white",
              border: `1px solid ${val ? "white" : "black"}`,
              color: val ? "white" : "black",
            },
          }}
        >
          <Link href="/dashboard/plastic">Add Plastic</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default OverviewHeader;
