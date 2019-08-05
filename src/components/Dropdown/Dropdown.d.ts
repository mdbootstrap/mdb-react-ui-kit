import * as React from "react";

declare class MDBDropdown extends React.Component<{
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  group?: boolean;
  size?: "sm" | "lg";
  tag?: string;
  toggle?: () => void;
  [rest: string]: any;
}, any> {}

export default MDBDropdown;