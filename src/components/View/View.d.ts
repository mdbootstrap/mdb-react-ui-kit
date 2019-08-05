import * as React from "react";

declare const MDBView: React.FunctionComponent<{
  cascade?: boolean;
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  rounded?: boolean;
  src?: string;
  tag?: string;
  waves?: boolean;
  zoom?: boolean;
  [rest: string]: any;
}>

export default MDBView;
