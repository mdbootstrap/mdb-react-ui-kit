import * as React from "react";

declare const MDBInputGroup: React.FunctionComponent<{
  append?: React.ReactNode | string;
  appendClassNames?: string;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  containerClassName?: string;
  containerId?: string;
  hint?: string;
  id?: string;
  inputs?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  material?: boolean;
  prepend?: React.ReactNode | string;
  prependClassNames?: string;
  size?: "sm" | "lg";
  tag?: string;
  textClassName?: string;
  type?: string;
  value?: string;
  valueDefault?: string;
  [rest: string]: any;
}>;

export default MDBInputGroup;
