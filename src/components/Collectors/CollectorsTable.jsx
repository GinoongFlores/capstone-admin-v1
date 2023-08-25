// "use client";;
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumnMenu, GridToolbar } from "@mui/x-data-grid";
import { ThemeProviderContext } from "../../context/ThemeProvider";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

const columns = [
  {
    field: "contact_person",
    headerName: "Contact Person",
    width: 150,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "collector_type",
    headerName: "Collector Type",
    width: 150,
    editable: true,
  },
  {
    field: "user_type",
    headerName: "User Type",
    width: 150,
    editable: true,
  },
  {
    field: "date_create",
    headerName: "Date Created",
    width: 150,
    editable: true,
  },
  {
    field: "number",
    headerName: "Number",
    type: "number",
    width: 110,
    editable: true,
  },
];

const CollectorsTable = () => {
  const { theme } = useContext(ThemeProviderContext);
  const darkTheme = theme === "dark";
  const [rows, setrows] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(db, "Waste Collector"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      setrows(cities);
    });
  };

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        "& .super-app-theme--header": {
          background: darkTheme ? "black" : "white",
        },
        ".MuiDataGrid-columnHeaders.MuiDataGrid-withBorderColor.css-1iyq7zh-MuiDataGrid-columnHeaders":
          {
            background: darkTheme ? "black" : "white",
          },
        ".MuiDataGrid-virtualScrollerRenderZone.css-s1v7zr-MuiDataGrid-virtualScrollerRenderZone":
          {
            background: darkTheme ? "black" : "white",
          },
        boxShadow: " 1px 5px 6px 1px rgba(0,0,0,0.24)",
      }}
    >
      <DataGrid
        sx={{
          color: darkTheme ? "white" : "black",
          border: `1px solid ${darkTheme ? "#333" : "#eaeaea"}`,

          "& .MuiDataGrid-cell": {
            border: `1px solid ${darkTheme ? "#333" : "#eaeaea"}`,
            // add more css for customization
          },
          "span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiDataGrid-checkboxInput.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root":
            {
              color: darkTheme ? "white" : "black",
            },
          ".MuiDataGrid-footerContainer.MuiDataGrid-withBorderColor.css-wop1k0-MuiDataGrid-footerContainer":
            {
              background: darkTheme ? "black" : "white",
            },
          "p.MuiTablePagination-displayedRows.css-levciy-MuiTablePagination-displayedRows":
            {
              color: darkTheme ? "white" : "black",
            },
          "button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorInherit.MuiIconButton-sizeMedium.css-zylse7-MuiButtonBase-root-MuiIconButton-root":
            {
              color: darkTheme ? "white" : "black",
            },
          ".MuiDataGrid-toolbarContainer.css-128fb87-MuiDataGrid-toolbarContainer":
            {
              background: darkTheme ? "black" : "white",
            },
          "svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-ptiqhd-MuiSvgIcon-root":
            {
              color: darkTheme ? "white" : "black",
            },
        }}
        addShow
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        getRowId={(row) => row["user_id"]}
      />
    </Box>
  );
};

export default CollectorsTable;
