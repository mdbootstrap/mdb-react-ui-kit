import * as React from "react";

declare class MDBDropdownItem extends React.Component<{
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
  toggle?: boolean;
  tag?: string;
  onClick?: (e: React.SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}, any> {}

export default MDBDropdownItem;