import * as React from "react";

declare class MDBDropdownMenu extends React.Component<
  {
    isOpen?: boolean;
    className?: string;
    color?: "primary" | "default" | "secondary" | "success" | "dark" | "danger" | "info" | "warning" | "ins" | "indigo" | "special";
    children: React.ReactNode;
    flip?: boolean;
    right?: boolean;
    tag?: string;
    [rest: string]: any;
  },
  any
> {}

export default MDBDropdownMenu;
