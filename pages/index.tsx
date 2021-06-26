import React, { FC } from "react";
import Layout from "../components/base/Layout/Layout";

const Home: FC<any> = (props) => {
  return (
    <Layout pageProps={props}>
      <p> Index.js </p>
    </Layout>
  );
};

export default Home;
