"use client";
import { React, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { SignIn, SignUp } from "@clerk/nextjs";
import { Box } from "@mui/material";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function SignUpPage(){
  const router = useRouter();
  const [redirect, setRedirect] = useState('/');
  // const { redirect = '/' } = router.query;


  // checks if router is ready
  useEffect(() => {
    if (router.isReady) {
      const { redirect } = router.query;
      setRedirect(redirect || '/');
    }
  }, [router.isReady, router.query]);

  const handleSignUpComplete = () => {
    router.push(redirect);
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
