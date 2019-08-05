import * as React from "react";

declare const MDBTableHead: React.FunctionComponent<{
  children?: React.ReactNode;
  color?: string;
  columns?: {
    label?: string;
    field?: string;
    minimal?: "sm" | "lg";
    [rest: string]: any;
  }[];
  textWhite?: boolean;
  [rest: string]: any;
}>;

export default MDBTableHead;