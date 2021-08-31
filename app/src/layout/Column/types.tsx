import React from 'react';

type ColumnProps = {
  center?: string | boolean;
  className?: string;
  end?: string | boolean;
  lg?: string;
  md?: string;
  offsetSm?: string | number;
  offsetMd?: string | number;
  offsetLg?: string | number;
  order?: string | number;
  size?: string;
  sm?: string;
  start?: string | boolean;
  tag?: React.ComponentProps<any>;
  xl?: string;
  xs?: string;
  [rest: string]: any;
};

export { ColumnProps };
