import * as React from "react";

declare class MDBCollapse extends React.Component<
  {
    className?: string;
    children?: React.ReactNode;
    delay?: { show: number, hide: number };
    isOpen?: boolean | string;
    id?: string;
    navbar?: boolean;
    onClosed?: () => void;
    onOpened?: () => void;
    [rest: string]: any;
  },
  any
> {}

export default MDBCollapse;
