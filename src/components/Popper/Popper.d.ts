import * as React from "react";

declare const MDBPopper: React.FunctionComponent<{
  children?: React.ReactNode;
  clickable?: boolean;
  domElement?: boolean;
  email?: boolean;
  material?: boolean;
  modifiers?: {};
  id?: string;
  isVisible?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  popover?: boolean;
  sm?: boolean;
  style?: {};
  tag?: string;
  onChange?: () => void;
  [rest: string]: any;
}>;

export default MDBPopper;
