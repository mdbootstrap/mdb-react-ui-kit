import React from 'react';

type InputELement = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue'>;

type InputProps = InputELement & {
  contrast?: boolean;
  defaultValue?: string;
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  labelClass?: string;
  labelRef?: React.MutableRefObject<any>;
  inputRef?: React.MutableRefObject<any>;
  readonly?: boolean;
  size?: string;
  value?: string;
  wrapperTag?: React.ComponentProps<any>;
  wrapperClass?: string;
  wrapperStyle?: Record<string, unknown>;
};

export { InputProps };
