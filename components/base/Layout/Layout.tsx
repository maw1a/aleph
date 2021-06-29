import React, { FC, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps as Props } from "../../../types";

const Layout: FC<Props> = (props) => {
	return (
		<div className='w-full h-full'>
			<Header />
			<div className='container mx-auto'>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
