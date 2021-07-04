import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Head>
        <title>Aleph</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
