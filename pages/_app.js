import "../styles/main.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WEA</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
