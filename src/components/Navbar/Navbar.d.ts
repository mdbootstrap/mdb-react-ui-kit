import * as React from "react";

declare class MDBNavbar extends React.Component<{
  className?: string;
  color?: string;
  light?: boolean;
  dark?: boolean;
  double?: boolean;
  expand?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  fixed?: "top" | "bottom";
  sticky?: string;
  scrolling?: boolean;
  scrollingNavbarOffset?: number;
  transparent?: boolean;
  tag?: string;
  [rest: string]: any;
}, any> {}

export default MDBNavbar;