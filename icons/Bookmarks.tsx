import React, { FC } from "react";
import { IconProps } from "../types";

const Bookmarks: FC<IconProps> = ({ className, fill = "black" }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
			className={className}>
			<path
				d='M128,80V64a48.14,48.14,0,0,1,48-48H400a48.14,48.14,0,0,1,48,48V432l-80-64'
				fill='none'
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='32px'
			/>
			<path
				d='M320,96H112a48.14,48.14,0,0,0-48,48V496L216,368,368,496V144A48.14,48.14,0,0,0,320,96Z'
				fill='none'
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='32px'
			/>
		</svg>
	);
};

export default Bookmarks;