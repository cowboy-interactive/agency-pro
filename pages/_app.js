import "../styles/globals.css";
import Head from "next/head";
import AppProvider from "../utils/provider";
import Script from "next/script";
import { Navbar } from "../components/Navbar/Navbar";
import { Container } from "../components/Container/Container";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Navbar xl={"padding: 0 10%"} md={"padding: 0 5%"} />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
