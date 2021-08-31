import * as React from 'react';

declare const MDBInput: React.FunctionComponent<{
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
  labelRef?: React.RefObject<HTMLLabelElement>;
  [rest: string]: any;
}>;

export default MDBInput;
