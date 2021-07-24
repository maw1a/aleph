import React, { FC } from "react";
import Carousel from "./Carousel";
// mock data
import { items } from "../../data/items.json";

const Home: FC<any> = (props) => {
  return (
    <React.Fragment>
      <Carousel items={items} />
    </React.Fragment>
  );
};

export default Home;
