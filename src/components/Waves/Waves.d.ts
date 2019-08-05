import * as React from "react";

declare class MDBWaves extends React.Component<
  {
    outline?: boolean;
    flat?: boolean;
    dark?: boolean;
    animate?: boolean;
    cursorPos?: { top: number, left: number; time: Date };
    children?: React.ReactNode;
    [rest: string]: any;
  },
  any
> {}

export default MDBWaves;
