/* eslint-disable react-hooks/rules-of-hooks */
// // "use client";;
import { Box, Skeleton } from "@mui/material";
import React from "react";
import { PlasticBody, PlasticHeader } from "../../../../components";
import CollectorsTable from "../../../../components/Collectors/CollectorsTable";
import CollectorsHeader from "../../../../components/Collectors/CollectorsHeader";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase-config";

// export const metadata = {
//   title: "Collectors",
// };
const page = () => {
  const [rows, setrows] = React.useState([]);

  React.useEffect(() => {
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
    <Box sx={{ pt: 10 }}>
      <CollectorsHeader total={rows?.length} />
      <CollectorsTable rows={rows} />
    </Box>
  );
};

export default page;
