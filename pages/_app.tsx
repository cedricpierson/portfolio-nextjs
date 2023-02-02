import React, { Suspense } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Suspense
        fallback={
          <Image src="/assets/navLogo.png" width={125} height={50} alt="logo" />
        }
      >
        <Navbar />
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
