import React, { FC } from "react";
import { IconProps } from "../types";

const ChevronBack: FC<IconProps> = ({ className, fill = "black" }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			viewBox='0 0 512 512'>
			<polyline
				points='328 112 184 256 328 400'
				fill='none'
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='48px'
			/>
		</svg>
	);
};

const ChevronForward: FC<IconProps> = ({ className, fill = "black" }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			viewBox='0 0 512 512'>
			<polyline
				points='184 112 328 256 184 400'
				fill='none'
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='48px'
			/>
		</svg>
	);
};

export { ChevronBack, ChevronForward };
