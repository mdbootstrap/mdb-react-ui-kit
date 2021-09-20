import React from 'react';

type TableProps = {
  align?: string;
  borderColor?: string;
  bordered?: boolean;
  borderless?: boolean;
  small?: boolean;
  hover?: boolean;
  className?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { TableProps };
