import Head from "next/head";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

import "antd/dist/antd.css";

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Beer App all rights reserved 2021</Footer>
      </Layout>
    </>
  );
}
