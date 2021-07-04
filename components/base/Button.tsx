import React, { FC } from "react";
import { ButtonProps } from "../../types";

const Button: FC<ButtonProps> = ({
	children,
	className,
	onClick,
	icon = false,
}) => {
	return (
		<button
			onClick={onClick}
			className={
				(icon ? "rounded-full" : "px-3") +
				" focus:outline-none p-2 mx-1 flex flex-row " +
				className
			}>
			{children}
		</button>
	);
};

export default Button;
