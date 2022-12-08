import "../styles/globals.css";
import Head from "next/head";
import AppProvider from "../utils/provider";
import Script from "next/script";
import { Navbar } from "../components/Navbar/Navbar";
import { Container } from "../components/Container/Container";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
        <Navbar xl={"padding: 0 10%"} md={"padding: 0 5%"}/>
        <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;