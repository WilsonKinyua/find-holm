import "../styles/styles.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>
          FindHolm - Browse popular properties around the world or Find
          Properties In Your City
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="WilsonKinyua" />
        <link
          rel="shortcut icon"
          href="https://flowbite.com/docs/apple-icon-144x144.png"
          type="image/x-icon"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
