import Head from "next/head";
import { Layout } from "antd";

import Header from "./Header";

const { Footer, Content } = Layout;

import "antd/dist/antd.css";

export default function LayoutComponent({ children }) {
  return (
    <>
      <Head>
        <title>Patagonia Beer App</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Header />
        <Content>{children}</Content>
        <Footer>Beer App all rights reserved 2021</Footer>
      </Layout>
    </>
  );
}
