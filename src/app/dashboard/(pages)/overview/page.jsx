import { Box, Container } from "@mui/material";
import React from "react";
import { OverviewHeader, OverviewBody } from "../../../../components/index";

export const metadata = {
  title: "Overview",
};
const page = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <OverviewHeader />
      <OverviewBody />
    </Box>
  );
};

export default page;
