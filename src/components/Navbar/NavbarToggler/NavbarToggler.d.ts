import * as React from "react";

declare const MDBNavbarToggler: React.FunctionComponent<{
  className?: string;
  children?: React.ReactNode;
  left?: boolean;
  image?: string;
  right?: boolean;
  tag?: string;
  type?: string;
  onClick: (e: React.SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}>;

export default MDBNavbarToggler;
