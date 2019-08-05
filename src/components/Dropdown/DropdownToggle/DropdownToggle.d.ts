import * as React from "react";

declare class MDBDropdownToggle extends React.Component<
  {
    caret?: boolean;
    className?: string;
    color?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    nav?: boolean;
    tag?: string;
    onClick?: (e: React.SyntheticEvent<MouseEvent>) => void;
    [rest: string]: any;
  },
  any
> {}

export default MDBDropdownToggle;
