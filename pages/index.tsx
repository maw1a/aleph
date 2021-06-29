import React, { FC } from "react";
import Layout from "../components/base/Layout/Layout";

import Home from "../components/pages/Home";

const HomePage: FC<any> = (props) => {
  return (
    <Layout pageProps={props}>
      <Home />
    </Layout>
  );
};

export default HomePage;
