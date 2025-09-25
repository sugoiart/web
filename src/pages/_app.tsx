import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title key="title">sugoiart</title>
				<link
					key="favicon"
					rel="icon"
					type="image/png"
					href="https://avatars.githubusercontent.com/u/104050203"
				/>
			</Head>
			<div>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
