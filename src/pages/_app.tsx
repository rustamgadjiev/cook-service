import Layout from "@/components/Layout";
import { store } from "@/store/store";
import "@/fonts/fonts.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";

const Noop: React.FC = ({ children }: any) => <>{children}</>;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cook-Service</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
