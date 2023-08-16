import { Box, Skeleton } from "@mui/material";
import React from "react";
import { PlasticBody, PlasticHeader } from "../../../../components";
export const metadata = {
  title: "Plastics",
};
const page = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <PlasticHeader />
      <PlasticBody />
    </Box>
  );
};

export default page;
