'use client'
import Navbar from '../../components/Navbar'
import {
  Box,
  Typography,
} from "@mui/material";
import novaCopyImg from "../assets/image/novacopy_ai.png"
import Image from 'next/image'; // prevent slower LCP and higher bandwidth

export default function Works() {
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
    <Typography variant="h4" gutterBottom className="text-neutral-600">NovaCopy AI</Typography>
    <Image
        src={novaCopyImg}
        alt="nova-copy-ai"
        width={300}
        height={200}
        style={{ borderRadius: '12px' }}
      />
      </Box>
    </>
  )
}
