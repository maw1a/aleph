import React, { FC, useState, useEffect } from "react";
import { LayoutProps as Props } from "../../../types";

const Layout: FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
