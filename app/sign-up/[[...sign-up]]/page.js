"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import { SignIn, SignUp } from "@clerk/nextjs";
import { Box } from "@mui/material";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function SignUpPage(){
  const router = useRouter();
  const { redirect } = router.query; // fetch the previous URL from query parameter

  const handleSignUpComplete = () => {
    if (redirect) {
      router.push(redirect); // redirect to the previous page
    } else {
      router.push('/'); // default redirect destination
    }
  };

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
            <SignUp onSignUpComplete={handleSignUpComplete} />
        </Box>
        </>
    )
}
