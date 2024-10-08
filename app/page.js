"use client";
import getStripe from "@/utils/get-stripe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
// import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

// please check the container to be 100%
// export default function Home({Component, pageProps}) {
export default function Home() {
  const handleSubmit = async (amount) => {
    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
        origin: "http://localhost:3000",
      },
      body: JSON.stringify({ amount }),
    });

    console.log(checkoutSession);
    const checkoutSessionJson = await checkoutSession.json();

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="100vw">
        <Head>
          <title>TechAceFlash</title>
          <meta
            name="description"
            content="AI-Powered Prep for Your Tech Interview Success"
          ></meta>
        </Head>
        <Box
          sx={{
            textAlign: "center",
            my: 10,
          }}
        >
          <h1 className="my-4 text-5xl font-bold tracking-tight text-neutral-600 dark:text-white">
            Master Tech Interviews,
          </h1>

          <h1 className="my-4 text-5xl font-bold tracking-tight text-neutral-600 dark:text-white">
            One Flashcard at a Time
          </h1>

          <p className="my-4 text-2xl tracking-tight text-neutral-600 dark:text-white">
            AI-Powered Prep for Your Tech Interview Success
          </p>

          <button
            className="p-[3px] mt-5 relative"
            sx={{ mt: 2 }}
            onClick={() => (window.location.href = "/generate")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </Box>
        <Box sx={{ my: 10, textAlign: "center" }}>
          <h4 className="text-4xl text-neutral-600">Features</h4>
          <Box
            sx={{
              display: "flex",
              gap: "14px",
              textAlign: "center",
              justifyContent: "center",
              mt: "30px",
            }}
          >
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Easy Text Input
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Simply input your text and let our software do the rest.
                Creating flashcards has never been easier.
              </p>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Smart Flashcards
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Our AI intelligently breaks down your text into concise
                flashcards, perfect for studying.
              </p>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Accessible Anywhere
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Access your flashcards from any device, at any time. Study on
                the
              </p>
            </a>
          </Box>
        </Box>
        <Box sx={{ my: 6, textAlign: "center" }}>
        <h4 className="text-4xl text-neutral-600">Pricing</h4>
          <Box
            sx={{
              display: "flex",
              gap: "14px",
              textAlign: "center",
              justifyContent: "center",
              mt: "30px",
            }}
          >
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Basic
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                $5 / Month
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Access to basic flashcard features and limited storage.
              </p>
              <div className="flex justify-between items-center mt-20">
                <p className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  Try now →
                </p>
                <button
                  className="p-[3px] relative"
                  translatez={20}
                  translatex={40}
                  onClick={() => handleSubmit(5)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Choose Basic
                  </div>
                </button>
              </div>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pro
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                $10 / Month
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Unlimited flashcards and storage, with priority support.
              </p>
              <div className="flex justify-between items-center mt-20">
                <p className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  Try now →
                </p>
                <button
                  className="p-[3px] relative"
                  translatez={20}
                  translatex={40}
                  onClick={() => handleSubmit(10)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Choose Pro
                  </div>
                </button>
              </div>
            </a>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
