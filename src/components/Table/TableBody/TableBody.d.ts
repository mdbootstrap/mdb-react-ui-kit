import * as React from "react";

declare const MDBTableBody: React.FunctionComponent<{
  children?: React.ReactNode;
  color?: string;
  rows?: {
    clickEvent?: () => void;
    colspan?: number;
    [rest: string]: any;
  }[];
  textWhite?: boolean;
  [rest: string]: any;
}>;

export default MDBTableBody;
