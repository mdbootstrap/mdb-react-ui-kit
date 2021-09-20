import React from 'react';

type CheckboxProps = {
  className?: string;
  wrapperTag?: React.ComponentProps<any>;
  wrapperClass?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  disabled?: boolean;
  value?: string | boolean;
  name?: string;
  inline?: boolean;
  validation?: string;
  invalid?: boolean;
  checked?: boolean;
  btn?: boolean;
  btnColor?: string;
  disableWrapper?: boolean;
  [rest: string]: any;
};

export { CheckboxProps };
