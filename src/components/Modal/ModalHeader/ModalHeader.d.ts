import * as React from "react";

declare const MDBModalHeader: React.FunctionComponent<{
  className?: string;
  closeAriaLabel?: string;
  children?: React.ReactNode;
  tag?: string;
  titleClass?: string;
  toggle?: () => void;
  [rest: string]: any;
}>;

export default MDBModalHeader;
