import * as React from "react";

declare const MDBNavLink: React.FunctionComponent<{
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  to?: string;
  [rest: string]: any;
}>;

export default MDBNavLink;
