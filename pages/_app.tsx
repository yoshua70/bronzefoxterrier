import "../styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
