import React, { FC } from "react";
import { IconProps } from "../types";

const Search: FC<IconProps> = ({ className, fill = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
        fill="none"
        stroke={fill}
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <line
        x1="338.29"
        y1="338.29"
        x2="448"
        y2="448"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
    </svg>
  );
};

export default Search;
