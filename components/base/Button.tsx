import React, { FC } from "react";
import { ButtonProps } from "../../types";

const Button: FC<ButtonProps> = (props) => {
  return <button onClick={props.onCLick} className="">{props.children}</button>;
};

export default Button;
