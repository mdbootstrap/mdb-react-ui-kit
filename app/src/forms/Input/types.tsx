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
  wrapperStyle?: Record<string, unknown>;
  labelStyle?: React.CSSProperties;
  disabled?: boolean;
  size?: string;
  readonly?: boolean;
  contrast?: boolean;
  value?: string;
  name?: string;
  labelRef?: React.RefObject<HTMLLabelElement>;
  textarea?: boolean;
  [rest: string]: any;
};

export { InputProps };
