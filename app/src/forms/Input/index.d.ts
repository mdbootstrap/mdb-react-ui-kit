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
  wrapperStyle?: Record<string, unknown>;
  labelStyle?: React.CSSProperties;
  disabled?: boolean;
  size?: string;
  readonly?: boolean;
  contrast?: boolean;
  value?: string;
  defaultValue?: string;
  name?: string;
  validation?: string;
  invalid?: boolean;
  validationTooltip?: boolean;
  labelRef?: React.RefObject<HTMLLabelElement>;
  textarea?: boolean;
  [rest: string]: any;
}>;

export default MDBInput;
