import React, { FC } from "react";
import { TextSubtextProps } from "../../types";

const TextSubtext: FC<TextSubtextProps> = ({
	className,
	text,
	subtext,
	textClassName,
	subtextClassName,
}) => {
	return (
		<div className={className}>
			<div className={textClassName}>{text}</div>
			<div className={subtextClassName}>{subtext}</div>
		</div>
	);
};

export default TextSubtext;
