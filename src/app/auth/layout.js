import { Box, Container } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AuthLayout({ children }) {
    return (
        <Box >
            <Container maxWidth="lg" sx={{ minHeight: "95vh" }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
}
