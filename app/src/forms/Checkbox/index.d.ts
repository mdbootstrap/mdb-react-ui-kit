import * as React from 'react';

declare const MDBCheckbox: React.FunctionComponent<{
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
  checked?: boolean;
  validation?: string;
  invalid?: boolean;
  btn?: boolean;
  btnColor?: string;
  disableWrapper?: boolean;
  [rest: string]: any;
}>;

export default MDBCheckbox;
