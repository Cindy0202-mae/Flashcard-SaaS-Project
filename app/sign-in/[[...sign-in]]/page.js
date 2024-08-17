"use client";
import React from "react";
import { SignIn } from "@clerk/nextjs";
import { Box } from "@mui/material";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: 4 }}
      >
        <SignIn />
      </Box>
    </>
  );
}
