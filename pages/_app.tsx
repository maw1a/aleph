import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='h-full'>
			<Head>
				<title>Aleph</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
