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
			className={(icon ? "rounded-full" : "") + " p-2 mx-1 " + className}>
			{children}
		</button>
	);
};

export default Button;
