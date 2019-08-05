import * as React from "react";

declare const MDBPagination: React.FunctionComponent<{
  children?: React.ReactNode;
  className?: string;
  circle?: boolean;
  color?:  "blue"| "red"| "teal"| "dark-grey"| "dark" | "blue-grey"| "amber"| "purple";
  size?: "sm" | "lg";
  tag?: string;
  [rest: string]: any;
}>;

export default MDBPagination;
