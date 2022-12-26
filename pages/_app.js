import "../styles/globals.css";
import Layout from "../componnet/Layout";
import { Provider } from "react-redux";
import store from "../store/index";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
