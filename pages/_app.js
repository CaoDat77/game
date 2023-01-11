import "../styles/globals.css";
import Layout from "../componnet/Layout";
import { Provider } from "react-redux";
import store, { persistor } from "../store/index";
import React from "react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Cuthbert Store</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
