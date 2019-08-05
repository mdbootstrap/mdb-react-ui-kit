import * as React from "react";

declare const MDBTreeview: React.FunctionComponent<{
  className?: string;
  header?: string;
  listClassName?: string;
  tag?: string;
  theme?: string;
  getValue?: (value: {
    item: HTMLLIElement | null;
    value: string | null;
  }) => void;
  [rest: string]: any;
}>;

export default MDBTreeview;
