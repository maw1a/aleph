import React from "react";

export interface LayoutProps {
  pageProps?: any;
}

export interface ButtonProps {
  className?: string;
  icon?: true | false;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: true;
}

export interface IconProps {
  className?: string;
  fill?: string;
}

export interface TextSubtextProps {
  className?: string;
  text?: string;
  textClassName?: string;
  subtext?: string;
  subtextClassName?: string;
}

export interface ModalBaseProps {
  onClose: Function;
  open: boolean;
  onSuccess?: Function;
  modalClassName?: string;
  title?: string;
}

export interface DropdownProps {
  open: boolean;
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  className?: string;
  anchor: React.ReactNode;
}
