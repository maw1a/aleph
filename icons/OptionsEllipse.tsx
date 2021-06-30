import React, { FC } from "react";
import { IconProps } from "../types";

const OptionEllipse: FC<IconProps> = ({ className, fill = "black" }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			viewBox='0 0 512 512'>
			<circle cx='256' cy='256' r='48' fill={fill} />
			<circle cx='416' cy='256' r='48' fill={fill} />
			<circle cx='96' cy='256' r='48' fill={fill} />
		</svg>
	);
};

export default OptionEllipse;
