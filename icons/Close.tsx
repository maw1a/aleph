import React, { FC } from "react";
import { IconProps } from "../types";

const Close: FC<IconProps> = ({ className, fill = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <line
        x1="368"
        y1="368"
        x2="144"
        y2="144"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <line
        x1="368"
        y1="144"
        x2="144"
        y2="368"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};

export default Close;
