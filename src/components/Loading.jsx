import { MagicSpinner } from "react-spinners-kit";
import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{ background: "black", height: "100vh", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <MagicSpinner size={100} color="#fff" loading={true} />;
      </Box>
    </Box>
  );
};

export default Loading;
