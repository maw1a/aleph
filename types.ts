import React from 'react';

export interface LayoutProps {
  pageProps?: any;
};

export interface ButtonProps {
  className?: string;
  icon?: true | false;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export interface IconProps {
  className?: string;
  fill?: string;
};