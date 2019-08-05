import * as React from "react";

declare const MDBPageItem: React.FunctionComponent<{
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

export default MDBPageItem;
