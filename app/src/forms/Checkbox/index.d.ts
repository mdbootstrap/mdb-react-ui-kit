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
  btn?: boolean;
  btnColor?: string;
  [rest: string]: any;
}>;

export default MDBCheckbox;
