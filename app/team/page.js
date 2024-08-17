'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  Box,
  Typography,
} from "@mui/material";

export default function Team() {
  return (
    <>
    <Navbar />
    <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 6,
        }}>
    <Typography variant="h4" gutterBottom className="text-neutral-600">Coming Soon...!</Typography>
      </Box>
    </>
  )
}
