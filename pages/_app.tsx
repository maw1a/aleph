import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Aleph | Knowledge without barriers</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <footer className="footer">Aleph 2021 | All Rights Reserved.</footer>
    </div>
  );
}

export default MyApp;
