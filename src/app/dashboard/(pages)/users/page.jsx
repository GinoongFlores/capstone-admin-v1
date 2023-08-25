"use client";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { UsersTable } from "../../../../components";
import React from "react";
import styled from "@emotion/styled";
import { ThemeProviderContext } from "../../../../context/ThemeProvider";
import UsersTableHeader from "../../../../components/Users/UsersTableHeader";
export const metadata = {
  title: "Users",
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Page = () => {
  const { theme } = useContext(ThemeProviderContext);
  const darkTheme = theme === "dark";
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: darkTheme ? "white" : "black",
    },
  });

  return (
    <Box sx={{ pt: 2 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: darkTheme ? "#333" : "#eaeaea",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: darkTheme ? "white" : "#0A9351",
            },
          }}
        >
          <StyledTab
            label="Users"
            {...a11yProps(0)}
            sx={{
              color: "#888",
              textTransform: "capitalize",
            }}
          />
          <StyledTab
            label="Barangay admin"
            {...a11yProps(1)}
            sx={{ color: "#888", textTransform: "capitalize" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <UsersTableHeader />
        <UsersTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UsersTableHeader />
        <UsersTable />
      </CustomTabPanel>
    </Box>
  );
};

export default Page;
