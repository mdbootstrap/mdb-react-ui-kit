import React from 'react';

type InputProps = {
  className?: string;
  tag?: React.ComponentProps<any>;
  wrapperTag?: React.ComponentProps<any>;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  wrapperClass?: string;
  disabled?: boolean;
  size?: string;
  readonly?: boolean;
  contrast?: boolean;
  value?: string;
  name?: string;
  [rest: string]: any;
};

export { InputProps };
