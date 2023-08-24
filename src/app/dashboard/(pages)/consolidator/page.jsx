import React from "react";
import ConsolidatorTable from "../../../../components/Consolidator/ConsolidatorTable";
import { Box } from "@mui/material";

export const metadata = {
  title: "Activity",
};
const page = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <ConsolidatorTable />
    </Box>
  );
};

export default page;
