import * as React from "react";

declare const MDBListGroupItem: React.FunctionComponent<{
  active?: boolean;
  danger?: boolean;
  disabled?: boolean;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  href?: string;
  info?: boolean;
  success?: boolean;
  tag?: string;
  warning?: boolean;
  [rest: string]: any;
}>;

export default MDBListGroupItem;
