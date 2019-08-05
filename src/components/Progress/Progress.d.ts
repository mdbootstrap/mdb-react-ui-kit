import * as React from "react";

declare const MDBProgress: React.FunctionComponent<{
  animated?: boolean;
  barClassName?: string;
  children?: React.ReactNode;
  color?: string;
  heigth?: string;
  material?: boolean;
  max?: number;
  min?: number;
  preloader?: boolean;
  striped?: boolean;
  id?: string;
  wrappedStyle?: {};
  value?: number;
  [rest: string]: any;
}>;

export default MDBProgress;
