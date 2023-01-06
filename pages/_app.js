import "../styles/globals.css";
import Layout from "../componnet/Layout";
import { Provider } from "react-redux";
import store, { persistor } from "../store/index";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
