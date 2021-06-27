import React, { FC, useState, useEffect } from "react";
import Header from "./Header";
import { LayoutProps as Props } from "../../../types";

const Layout: FC<Props> = (props) => {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
