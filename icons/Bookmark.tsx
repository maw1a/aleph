import React, { FC } from "react";
import { IconProps } from "../types";

const Bookmark: FC<IconProps> = ({ className, fill = "black" }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
			className={className}>
			<path
				d='M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z'
				fill='none'
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='32px'
			/>
		</svg>
	);
};

export default Bookmark;
