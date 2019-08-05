import * as React from "react";

declare const MDBNav: React.FunctionComponent<{
  tag?: string;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  classicTabs?: boolean;
  pills?: boolean;
  tabs?: boolean;
  header?: boolean;
  [rest: string]: any;
}>;

export default MDBNav;