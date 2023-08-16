"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumnMenu, GridToolbar } from "@mui/x-data-grid";
import { ThemeProviderContext } from "../../context/ThemeProvider";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const UsersTable = () => {
  const { theme } = useContext(ThemeProviderContext);

  const darkTheme = theme === "dark";
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
      />
    </Box>
  );
};

export default UsersTable;
