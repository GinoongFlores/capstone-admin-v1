import { Box, Container } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: "85vh" }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
