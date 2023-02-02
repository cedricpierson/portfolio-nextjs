import React, { Suspense } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit={{ opacity: 0 }}
          variants={{
            pageInitial: {
              opacity: 0,
              transition: { type: "spring" },
            },
            pageAnimate: {
              opacity: 1,
              transition: { type: "spring", stiffness: 100, delay: 0.5 },
            },
          }}
        >
          <Suspense
            fallback={
              <Image
                src="/assets/navLogo.png"
                width={125}
                height={50}
                alt="logo"
              />
            }
          >
            <Navbar />
            <Component {...pageProps} />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
